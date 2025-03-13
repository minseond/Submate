/* React 애플리케이션에서 로그인 폼을 구현하는 구성요소  */
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom'; // 페이지간 이동 관리 
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from '@emotion/styled';
import { Title, Flex, Input, PasswordInput, Button, TextInput, Text } from '@mantine/core';
import { signInSchema } from '../../../schema/schema';
import userState from '../../../recoil/atom/userState';
import { showNotification } from '../../../utils';
import { signIn } from '../../../api';

const Form = styled.form`
  border: 1px solid ${({ theme }) => (theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[2])};
  border-radius: 0.375rem;
`;

// 입력 필드를 둘러싼 것들을 스타일링
const InputWrapper = styled(Input.Wrapper)`
  > label {
    font-weight: 300;
  }
`;

// 필요한 훅들을 가져옴 
const SigninForm = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signInSchema) }); 
  // useForm을 이용하여 React Hook Form을 초기화하고 유효성 검사를 위해 zodResolver를 사용
  
  // 로그인 요청을 보냄
  const submitForm = async data => {
    try {
      const user = await signIn(data);

      setUser(user);
      navigate('/');
    } catch (error) { // 에러 처리
      const message = error.response && error.response.status === 401 ? error.response.data : undefined;
      showNotification(false, '로그인', message);
    }
  };

  // 로그인 폼을 표시, 성공하면 전역 상태를 업데이트 
  return (
    <>
      <Title fz={24} fw={300} mb={20} align="center">
        Sign in to Submate
      </Title>
      <Form action="/" onSubmit={handleSubmit(submitForm)} method="post">
        <Flex p={25} justify="space-between" direction="column" gap={20}>
          <InputWrapper label="Email address">
            <TextInput {...register('email')} error={errors?.email?.message} autoComplete="off" />
          </InputWrapper>
          <InputWrapper label="Password" pos="relative">
            <Text span fz="xs" color="blue.6" pos="absolute" right={0} top={5} justify="center" underline align="right">
              Forgot password?
            </Text>
            <PasswordInput {...register('password')} error={errors?.password?.message} />
          </InputWrapper>
          <Button type="submit" fw={300}>
            Sign in
          </Button>
        </Flex>
      </Form>
    </>
  );
};

export default SigninForm;
