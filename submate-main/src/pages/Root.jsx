import React, { useEffect } from 'react';
import { GlobalShell } from '../components/common';
import { Banner, Board, TopButton } from '../components/rootPage';
import { useAuthenticationQuery } from '../hooks/queries';
import { BUTTON_START_Y } from '../constants';
import { fetchWithPreferredGenres } from '../api/tmdb';  // 장르 기반 콘텐츠 가져오기 함수
import genres from '../constants/genres'; // 장르 데이터 가져오기

// watch 버튼 클릭 이벤트 처리
const handleWatchButtonClick = async (mediaType, contentId) => {
  const similarContent = await fetchSimilarContent(mediaType, contentId);
  updateMainPageWithSimilarContent(similarContent);
};

// 메인 페이지를 유사한 콘텐츠들로 업데이트
const updateMainPageWithSimilarContent = (similarContent) => {
  const mainPageContainer = document.getElementById('mainPageContent');
  mainPageContainer.innerHTML = ''; // 기존 콘텐츠를 비우기

  similarContent.forEach(content => {
    const contentElement = createContentElement(content);
    mainPageContainer.appendChild(contentElement);
  });
};

// 콘텐츠를 HTML 요소로 생성하는 함수
const createContentElement = (content) => {
  const div = document.createElement('div');
  div.className = 'content-item';
  div.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${content.poster_path}" alt="${content.title}">
    <p>${content.title}</p>
  `;
  return div;
};

const Root = () => {
  const { isLogin } = useAuthenticationQuery();

  useEffect(() => {
    // 페이지 로드 시 `watch-list`에서 콘텐츠 목록을 불러옴
    const watchedList = JSON.parse(localStorage.getItem('watch_list')) || [];

    if (watchedList.length > 0) {
      // `watch_list`의 콘텐츠에서 장르 ID를 추출
      const genreIds = getGenreIdsFromWatchList(watchedList);

      // 선호하는 장르 기반으로 콘텐츠 가져오기
      fetchWithPreferredGenres('movie', 1, genreIds)
        .then(updateMainPageWithSimilarContent)
        .catch(error => console.error('Error fetching content by genres:', error));
    }
  }, []);

  const getGenreIdsFromWatchList = (watchedList) => {
    // 콘텐츠 ID를 사용해 해당 콘텐츠의 장르 ID를 추출
    // 예시로, 첫 번째 콘텐츠의 genre_ids를 사용하는 것으로 가정
    return watchedList.map(content => content.genre_ids).flat();
  };

  return (
    <>
      <GlobalShell>
        {!isLogin && <Banner />}
        <Board />
        {/* 유사 콘텐츠가 렌더링될 위치 */}
        <div id="mainPageContent" className="content-container"></div>
      </GlobalShell>
      <TopButton boundary={BUTTON_START_Y} />
    </>
  );
};

export default Root;
