import React, { useState } from 'react';
import { Flex, Container } from '@mantine/core';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { SignupHeader, SignupForm, SignupOption } from '../components/auth';

const Background = styled.div`
  background-color: #02050d;
  position: fixed; /* 변경: fixed로 설정하여 항상 화면에 고정되도록 */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  min-height: 100vh; /* 변경: 최소 높이 설정 */
`;

const zoom = keyframes`
  0% {
    transform: scale(1, 1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100%{
    transform: scale(1.7, 1.7) rotate(7deg);
    opacity: 0;
  }
`;

const Star = styled.div`
  background-image: radial-gradient(2.2px 2.2px at 50px 200px, #eee, rgba(0, 0, 0, 0)),
    radial-gradient(3px 3px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(3px 4px at 120px 40px, #ddd, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  animation: ${zoom} 9s infinite;
  background-position: 10% 90%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-size: cover;

  :nth-of-type(1) {
    background-position: 10% 90%;
    animation-delay: 0s;
  }
  :nth-of-type(2) {
    background-position: 20% 50%;
    animation-delay: 1.5s;
  }
  :nth-of-type(3) {
    background-position: 40% -80%;
    animation-delay: 3s;
  }
  :nth-of-type(4) {
    background-position: -20% -30%;
    animation-delay: 5s;
  }
  :nth-of-type(5) {
    background-position: 50% 20%;
    animation-delay: 7s;
  }
`;

const BackImg = styled.img`
  opacity: 0.7;
  transform: translate(-21%, -25%);
  overflow: hidden !important;
  width: 185%;
  height: 200%;
`;

const FormContainer = styled(Container)`
  border: 1px solid var(--mantine-color-dark-4);
  border-radius: 6px;
  padding: 20px;
  background-color: var(--mantine-color-gray-1);
`;

const SignUp = () => {
  const [userInput, setUserInput] = useState(null);

  return (
    <>
      <Background>
        {[...Array(5)].map((_, i) => (
          <Star key={i} />
        ))}
        <BackImg src="https://github.githubassets.com/images/modules/site/home/hero-glow.svg" alt="Glowing universe" />
      </Background>
      <SignupHeader />
      <Flex
        direction="column"
        style={{ minHeight: '100vh', overflowY: 'auto' }} /* 변경: 최소 높이와 스크롤 가능하도록 설정 */
        justify="center"
        align="center"
        m="auto"
      >
        <FormContainer>
          {!userInput ? (
            <SignupForm setUserInput={setUserInput} />
          ) : (
            <SignupOption email={userInput} setUserInput={setUserInput} />
          )}
        </FormContainer>
      </Flex>
    </>
  );
};

export default SignUp;
