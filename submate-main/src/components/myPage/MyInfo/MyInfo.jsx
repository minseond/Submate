import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { Box, SimpleGrid, Skeleton, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { sideNavState } from '../../../recoil/atom';
import { Statistics, CurrentSubscription, SuggestedSubscription } from '..';
import { SuggestedSubscriptionSkeleton } from '../../../loaders';

const MyInfo = () => {
  const largeScreen = useMediaQuery('(max-width: 75rem)');
  const middleScreen = useMediaQuery('(max-width: 60rem)');
  const isOpened = useRecoilValue(sideNavState);
  const navigate = useNavigate(); // useNavigate 훅 추가

  // 결제 버튼 클릭 핸들러
  const handlePaymentClick = () => {
    navigate('/payment');
  };

  return (
    <SimpleGrid
      cols={middleScreen || (largeScreen && isOpened) ? 1 : 2}
      mt={32}
      spacing="xl"
      breakpoints={[{ maxWidth: '60rem', cols: 1 }]}>
      <Box>
        <Suspense fallback={<SuggestedSubscriptionSkeleton />}>
          <SuggestedSubscription />
          {/* 결제 버튼 추가 */}
        <Button mt={10} mb={20} onClick={handlePaymentClick}>
          결제하기
        </Button>
        </Suspense>
        <Suspense fallback={<Skeleton w="100%" h={183} />}>
          <CurrentSubscription />
        </Suspense>
      </Box>
      <Statistics />
    </SimpleGrid>
  );
};

export default MyInfo;
