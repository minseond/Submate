import axios from 'axios';
import { TMDB_API_URL } from '../constants';

const { VITE_TMDB_API_KEY } = import.meta.env;
const language = 'ko-KR';

// 사용자 선호 장르를 저장하는 함수
const savePreferredGenres = (genres) => {
  const savedGenres = JSON.parse(localStorage.getItem('preferredGenres')) || [];
  genres.forEach((genre) => {
    if (!savedGenres.includes(genre)) {
      savedGenres.push(genre);
    }
  });
  localStorage.setItem('preferredGenres', JSON.stringify(savedGenres));
};

// 특정 콘텐츠의 장르를 저장하는 함수 (watch 아이콘 클릭 시 호출)
export const handleWatchIconClick = (genreIds) => {
  savePreferredGenres(genreIds);
};

// 선호 장르 기반으로 콘텐츠를 가져오는 함수
export const fetchWithPreferredGenres = async (mediaType, page, providerId = '8|119|337|356|97|350') => {
  const preferredGenres = JSON.parse(localStorage.getItem('preferredGenres')) || [];
  const genreFilter = preferredGenres.join(',');

  if (preferredGenres.length > 0) {
    // 선호 장르가 있는 경우 해당 장르로 필터링하여 인기순으로 정렬
    const res = await axios.get(`${TMDB_API_URL}discover/${mediaType}`, {
      params: {
        api_key: VITE_TMDB_API_KEY,
        language,
        sort_by: 'popularity.desc',
        page,
        watch_region: 'KR',
        with_genres: genreFilter, // 선호 장르 필터 추가
        with_watch_providers: providerId,
      },
    });
    return res.data;
  } else {
    // 선호 장르가 없는 경우 전체 콘텐츠를 출시일순으로 가져오기
    const res = await axios.get(`${TMDB_API_URL}discover/${mediaType}`, {
      params: {
        api_key: VITE_TMDB_API_KEY,
        language,
        sort_by: 'release_date.desc',
        page,
        watch_region: 'KR',
        with_watch_providers: providerId,
      },
    });
    return res.data;
  }
};

// 기존 함수들 유지
export const fetchSortByPopularity = async (mediaType, page, providerId = '8|119|337|356|97|350') => {
  const sortBy = 'popularity.desc'; // 인기순으로 정렬

  const res = await axios.get(`${TMDB_API_URL}discover/${mediaType}`, {
    params: {
      api_key: VITE_TMDB_API_KEY,
      language,
      sort_by: sortBy,
      page,
      watch_region: 'KR',
      with_watch_providers: providerId,
    },
  });

  return res.data;
};

export const fetchSortByReleaseDate = async (mediaType, page, providerId) => {
  const sortBy = 'release_date.desc'; // 출시일순으로 정렬

  const res = await axios.get(`${TMDB_API_URL}discover/${mediaType}`, {
    params: {
      api_key: VITE_TMDB_API_KEY,
      language,
      sort_by: sortBy,
      page,
      watch_region: 'KR',
      with_watch_providers: providerId,
    },
  });

  return res.data;
};

export const fetchWithGenre = async (mediaType, genreId, page, providerId) => {
  const sortBy = 'popularity.desc'; // 특정 장르 선택 시, 기본적으로 인기순으로 정렬

  const res = await axios.get(`${TMDB_API_URL}discover/${mediaType}`, {
    params: {
      api_key: VITE_TMDB_API_KEY,
      language,
      sort_by: sortBy,
      page,
      watch_region: 'KR',
      with_genres: genreId,
      with_watch_providers: providerId,
    },
  });
  return res.data;
};

// 미디어 콘텐츠의 세부 정보를 가져오는 함수
export const fetchMediaContentDetails = async (mediaType, contentId) => {
  const res = await axios.get(`${TMDB_API_URL + mediaType}/${contentId}`, {
    params: {
      api_key: VITE_TMDB_API_KEY,
      language,
    },
  });
  return res.data;
};

// 검색 결과를 가져오는 함수
export const fetchSearchResult = async (mediaType, query) => {
  const res = await axios.get(`${TMDB_API_URL}search/${mediaType}`, {
    params: {
      api_key: VITE_TMDB_API_KEY,
      language,
      query,
    },
  });
  return res.data;
};

// 특정 콘텐츠의 제공자를 가져오는 함수
export const fetchProvider = async (mediaType, id) => {
  const res = await axios.get(`${TMDB_API_URL + mediaType}/${id}/watch/providers`, {
    params: {
      api_key: VITE_TMDB_API_KEY,
    },
  });
  return res.data;
};

// 특정 콘텐츠의 세부 정보와 제공자를 동시에 가져오는 함수
export const fetchProviderAndDetail = async (mediaType, id) => {
  const providerRes = await axios.get(`${TMDB_API_URL + mediaType}/${id}/watch/providers`, {
    params: {
      api_key: VITE_TMDB_API_KEY,
    },
  });

  const DetailRes = await axios.get(`${TMDB_API_URL + mediaType}/${id}`, {
    params: {
      api_key: VITE_TMDB_API_KEY,
      language,
    },
  });

  return { ...providerRes.data, ...DetailRes.data };
};

// 새로운 함수 추가: 특정 콘텐츠와 유사한 콘텐츠를 가져오는 함수
export const fetchSimilarContent = async (mediaType, contentId) => {
  const res = await axios.get(`${TMDB_API_URL}${mediaType}/${contentId}/similar`, {
    params: {
      api_key: VITE_TMDB_API_KEY,
      language: 'ko-KR',
    },
  });
  return res.data.results;
};

// 새로운 함수 추가: watch 버튼 클릭 이벤트 처리
export const handleWatchButtonClick = async (mediaType, contentId) => {
  const similarContent = await fetchSimilarContent(mediaType, contentId);
  updateMainPageWithSimilarContent(similarContent);
};

// 새로운 함수 추가: 메인 페이지를 유사한 콘텐츠들로 업데이트
export const updateMainPageWithSimilarContent = (similarContent) => {
  const mainPageContainer = document.getElementById('mainPageContent');
  mainPageContainer.innerHTML = ''; // 기존 콘텐츠를 비우기

  similarContent.forEach(content => {
    const contentElement = createContentElement(content);
    mainPageContainer.appendChild(contentElement);
  });
};

// 새로운 함수 추가: 콘텐츠를 HTML 요소로 생성하는 함수
export const createContentElement = (content) => {
  const div = document.createElement('div');
  div.className = 'content-item';
  div.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${content.poster_path}" alt="${content.title}">
    <p>${content.title}</p>
  `;
  return div;
};
