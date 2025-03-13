import { useQuery } from '@tanstack/react-query';
import { fetchSimilarContent } from '../../api/tmdb'; // fetchSimilarContent 함수의 경로 정확하게 기재

const staleTime = 1000 * 60 * 5; // 데이터가 5분 동안 신선하다고 간주

// 커스텀 훅: 유사 콘텐츠를 가져오는 쿼리
const useSimilarContentQuery = ({ mediaType, contentId }) => {
  // useQuery 훅을 사용하여 데이터 가져오기
  const query = useQuery({
    queryKey: [`@${mediaType}`, 'similarContent', contentId], // 쿼리 키
    queryFn: () => fetchSimilarContent(mediaType, contentId), // API 호출 함수
    staleTime, // 데이터가 신선하다고 간주되는 시간
    refetchOnWindowFocus: false, // 창 포커스 시 재요청 방지
    enabled: !!contentId, // contentId가 있을 때만 쿼리 활성화
    select: data => data, // 필요시 데이터 가공
  });

  return { ...query, similarContent: query.data }; // 유사 콘텐츠 데이터 반환
};

export default useSimilarContentQuery;
