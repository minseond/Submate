import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Container, Flex } from '@mantine/core';
import styled from '@emotion/styled';
import { Typing, Logo } from '.';
import { showNotification } from '../../../utils';
import { updateSubscribeList } from '../../../api';

// Grid의 중앙 정렬 및 최소 높이 설정
const GridCol = styled(Grid.Col)`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 7.5rem;
`;

// 전체 페이지를 감싸는 컨테이너
const PageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  min-height: 100vh; /* 화면 전체 높이 설정 */
  overflow-y: auto; /* 스크롤을 활성화 */
  background: url('/path/to/your/background-image.jpg') no-repeat center center fixed;
  background-size: cover;
`;

// 콘텐츠를 감싸는 컨테이너
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px; /* Grid의 최대 너비를 줄임 */
  padding: 20px;
  margin: 0 auto; /* 가운데 정렬 */
  flex-grow: 1; /* 빈 공간을 채우기 위해 flex-grow 추가 */
`;

// 가격 정보를 표시하는 컴포넌트 스타일
const PriceWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8); /* 약간 투명한 배경 */
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px; /* 아래에 여백 추가 */
`;

const logos = [
  { name: 'appletvplus', id: 350 },
  { name: 'disneyplus', id: 337 },
  { name: 'netflix', id: 8 },
  { name: 'primevideo', id: 119 },
  { name: 'watcha', id: 97 },
  { name: 'wavve', id: 356 },
];

// OTT 가격 정보
const ottPrices = {
  netflix: {
    basic: "9,500원 (2명)",
    standard: "13,500원 (2명)",
    premium: "17,000원 (4명)"
  },
  watcha: {
    basic: "7,900원 (1대)",
    premium: "12,900원 (4대)"
  },
  disneyplus: {
    standard: "9,900원 (2대)",
    premium: "13,900원 (4대)"
  },
  wavve: {
    basic: "7,900원 (1명)",
    standard: "10,900원 (2명)",
    premium: "13,900원 (4명)"
  },
  primevideo: {
    basic: "5,500원 (1달)"
  },
  appletvplus: {
    basic: "6,500원 (1달)"
  }
};

const SignupOption = ({ email, setUserInput }) => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [subscribedOtt, setSubscribedOtt] = useState([]);

  const handlePriceSelection = (id, plan) => {
    setSubscribedOtt(prevState =>
      prevState.map(ott => (ott.id === id ? { ...ott, selectedPlan: plan } : ott))
    );
  };

  // OTT별 가격 정보를 한 줄에 하나씩 표시하는 레이아웃
  const getOttPrices = () => {
    return subscribedOtt.map((ott) => {
      if (!ott.prices) return null;

      return (
        <div key={ott.id} style={{ marginBottom: '20px', width: '100%' }}>
          <h3>{ott.name.toUpperCase()}</h3>
          <div style={{ display: 'block' }}> {/* 가격대를 블록 단위로 세로로 정렬 */}
            {Object.entries(ott.prices).map(([plan, price]) => (
              <Button
                key={plan}
                onClick={() => handlePriceSelection(ott.id, plan)}
                variant={ott.selectedPlan === plan ? "filled" : "outline"}
                style={{ width: '100%', marginBottom: '10px' }}               >
                {`${plan}: ${price}`}
              </Button>
            ))}
          </div>
        </div>
      );
    });
  };

  const submitOption = async () => {
    try {
      updateSubscribeList({ email, newList: subscribedOtt });

      localStorage.removeItem('user');
      setUserInput(null);
    } catch (e) {
      showNotification(false, '구독 서비스 선택');
    }
  };

  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <Typing str="Congratulation!🥳🎉" isLast={0} />
          <Typing str="What OTT Services are you subscribing to?" isLast={0} />
          <Typing
            str="이 콘텐츠는 Tving을 제공하지 않습니다."
            isLast={1}
            setAnimationCompleted={() => {
              setAnimationCompleted(true);
            }}
          />
          {animationCompleted && (
            <Grid columns={3} m={10} justify="center" style={{ gap: '20px' }}> {/* 여백 줄임 */}
              {logos.map((logo, idx) => (
                <GridCol span={1} key={idx}>
                  <Logo
                    logo={logo}
                    idx={idx}
                    subscribedOtt={subscribedOtt}
                    setSubscribedOtt={setSubscribedOtt}
                    ottPrices={ottPrices} // 가격 정보 전달
                  />
                </GridCol>
              ))}
            </Grid>
          )}
        </ContentWrapper>

        {/* 가격 정보를 옆에 배치 */}
        <PriceWrapper>
          {subscribedOtt.length > 0 && (
            <>
              <h2>선택한 OTT 서비스의 가격 정보</h2>
              {getOttPrices()}
              <Flex justify="flex-end" gap={5}>
                <Button
                  component={Link}
                  w={90}
                  to="/signin"
                  c="black"
                  fw={300}
                  variant="outline"
                  onClick={submitOption}
                >
                  Submit
                </Button>
              </Flex>
            </>
          )}
        </PriceWrapper>
      </PageContainer>
    </>
  );
};

export default SignupOption;
