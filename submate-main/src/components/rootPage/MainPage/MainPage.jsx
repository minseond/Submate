import React, { useEffect } from 'react';
import { GlobalShell } from '../components/common';
import { Banner, Board, TopButton } from '../components/rootPage';
import { useAuthenticationQuery } from '../hooks/queries';
import { BUTTON_START_Y } from '../constants';
import { fetchWithPreferredGenres } from '../api/tmdb';  // 장르 기반 콘텐츠 가져오기 함수
import genres from '../constants/genres'; // 장르 데이터 가져오기

const Root = () => {
  const { isLogin } = useAuthenticationQuery();

  useEffect(() => {
    // 페이지 로드 시 `watch-list`에서 콘텐츠 목록을 불러옴
    const watchedList = JSON.parse(localStorage.getItem('watch_list')) || [];
    
    // 콘솔에 올바르게 로그 출력
    console.log('Loaded watch_list from localStorage:', watchedList);

    if (watchedList.length > 0) {
      // `watch_list`의 콘텐츠에서 장르 ID를 추출
      const genreIds = getGenreIdsFromWatchList(watchedList);
      console.log('Extracted genreIds:', genreIds); // 장르 ID 확인을 위한 로그

      // 선호하는 장르 기반으로 콘텐츠 가져오기
      fetchWithPreferredGenres('movie', 1, genreIds)
        .then((data) => {
          console.log('Fetched content based on genres:', data.results); // 가져온 콘텐츠 데이터 확인을 위한 로그
          updateMainPageWithSimilarContent(data.results); // data.results로 전달
        })
        .catch(error => console.error('Error fetching content by genres:', error));
    }
  }, []);

  const getGenreIdsFromWatchList = (watchedList) => {
    // 콘텐츠 ID를 사용해 해당 콘텐츠의 장르 ID를 추출
    return watchedList.map(content => content.genre_ids).flat();
  };

  const updateMainPageWithSimilarContent = (similarContent) => {
    const mainPageContainer = document.getElementById('mainPageContent');
    mainPageContainer.innerHTML = ''; // 기존 콘텐츠 삭제

    similarContent.forEach(content => {
      const contentElement = createContentElement(content);
      mainPageContainer.appendChild(contentElement);
    });
  };

  const createContentElement = (content) => {
    const div = document.createElement('div');
    div.className = 'content-item';
    div.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${content.poster_path}" alt="${content.title}">
      <p>${content.title}</p>
    `;
    return div;
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
