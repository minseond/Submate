import { PROVIDERS } from '../constants';

const calculateLowestFee = (movies) => {
  const domesticProviders = Object.keys(PROVIDERS).map(id => +id);
  const movieProviders = {};
  const selectedProviders = new Set();

  // movie.providers에서 유효한 providerId만 필터링
  const updatedMovies = movies.map(movie => ({
    ...movie,
    providers: movie.providers.filter(providerId => domesticProviders.includes(providerId)),
  }));

  // 각 제공자가 몇 번 사용되었는지 카운트
  updatedMovies.forEach(movie => {
    movie.providers.forEach(provider => {
      movieProviders[provider] = (movieProviders[provider] || 0) + 1;
    });
  });

  let remainingMovies = [...updatedMovies];

  // 제공자가 남은 영화들에서 몇 번 사용되는지 카운트
  const getNewCount = provider => remainingMovies.filter(movie => movie.providers.includes(Number(provider))).length;

  while (remainingMovies.length > 0) {
    let maxCount = 0;
    let selectedProvider = null;

    // 가장 많이 사용된 제공자를 찾음
    Object.keys(movieProviders).forEach(provider => {
      if (movieProviders[provider] > maxCount) {
        maxCount = movieProviders[provider];
        selectedProvider = provider;
      }
    });

    // 가장 많이 사용된 제공자를 선택
    selectedProviders.add(Number(selectedProvider));
    // 선택된 제공자를 포함하지 않는 영화들만 남김
    remainingMovies = remainingMovies.filter(movie => !movie.providers.includes(Number(selectedProvider)));

    // 선택된 제공자를 제외하고 나머지 제공자의 카운트를 업데이트
    Object.keys(movieProviders).forEach(provider => {
      if (provider === selectedProvider) {
        delete movieProviders[provider];
      } else {
        movieProviders[provider] = getNewCount(provider);
      }
    });
  }

  // 모든 요금제에 대해 총 요금을 계산
  const totalFees = {
    basic: 0,
    standard: 0,
    premium: 0,
  };

  // 모든 요금제의 총 가격 계산
  Array.from(selectedProviders).forEach(provider => {
    totalFees.basic += PROVIDERS[provider].fee.basic || 0;
    totalFees.standard += PROVIDERS[provider].fee.standard || 0;
    totalFees.premium += PROVIDERS[provider].fee.premium || 0;
  });

  return {
    totalFees, // 모든 요금제의 총 가격 반환
    cheapestCombo: Array.from(selectedProviders),
  };
};

export default calculateLowestFee;
