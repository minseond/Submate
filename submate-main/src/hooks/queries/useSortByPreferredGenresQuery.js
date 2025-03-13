import { useQuery } from '@tanstack/react-query';
import { fetchWithPreferredGenres } from '../../api/tmdb';

const staleTime = 1000 * 60 * 5; // 5분

const useSortByPreferredGenresQuery = ({ mediaType, selectedIds = [] }) => {
  const strProviderId = selectedIds.sort((a, b) => a - b).join('|');

  const query = useQuery({
    queryKey: [`@${mediaType}`, 'sortByPreferredGenres', `providerIds:${strProviderId}`],
    queryFn: () => fetchWithPreferredGenres(mediaType, 1, strProviderId),
    staleTime,
    refetchOnWindowFocus: false,
    select: datas => datas.results,
  });

  return { ...query, content: query.data };
};

export default useSortByPreferredGenresQuery;
