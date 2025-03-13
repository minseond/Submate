import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { Group, ThemeIcon, Tooltip } from '@mantine/core';
import { IconHistory, IconMovie, IconThumbUp } from '@tabler/icons-react';
import { userState } from '../../../recoil/atom';
import { useUserQuery } from '../../../hooks/queries';
import { useAddUserContentMutation, useDeleteUserContentMutation } from '../../../hooks/mutations';
import { handleWatchIconClick } from '../../../api/tmdb.js'; // handleWatchIconClick 가져오기

const CategoryIcon = styled(ThemeIcon)`
  cursor: pointer;
`;

const getUserInfo = userInfo => ({
  watchlist: userInfo.watch_list,
  likelist: userInfo.like_list,
  historylist: userInfo.history_list,
});

const isItemInList = (list, id, type) => list.some(item => item.id === id && item.type === type);

const ActionIcons = ({ size, id, type, genreIds, category = '' }) => { // genreIds 추가
  const email = useRecoilValue(userState);
  const { userInfo } = useUserQuery({ select: getUserInfo, enabled: !!email });
  const { mutate: addUserContent } = useAddUserContentMutation();
  const { mutate: deleteUserContent } = useDeleteUserContentMutation();

  const handleAction = (list, listName) => {
    const now = new Date();
    const contentData = { id, type, modified_at: now.toISOString() };

    if (isItemInList(list, id, type)) {
      deleteUserContent({ email, list: listName, id });
    } else {
      addUserContent({ email, list: listName, value: contentData });

      // Watch 리스트에 추가되는 경우 handleWatchIconClick 호출
      if (listName === 'watch_list' && genreIds) {
        handleWatchIconClick(genreIds); // 선호 장르로 저장
      }
    }
  };

  const getIconVariant = (list, color) =>
    list && isItemInList(list, id, type) ? { variant: 'filled', color } : { variant: 'outline', color };

  const renderCategoryIcon = (list, label, color, iconComponent, listName) => (
    <Tooltip label={label} withArrow>
      <CategoryIcon
        role="button"
        aria-label={list}
        {...getIconVariant(list, color)}
        onClick={email ? () => handleAction(list, listName) : undefined}>
        {iconComponent}
      </CategoryIcon>
    </Tooltip>
  );

  return (
    <Group spacing={8}>
      {category !== 'watch' &&
        renderCategoryIcon(
          email ? userInfo.watchlist : undefined,
          'Watch',
          'yellow',
          <IconMovie size={size} />,
          'watch_list'
        )}
      {category !== 'like' &&
        renderCategoryIcon(
          email ? userInfo.likelist : undefined,
          'Like',
          'red',
          <IconThumbUp size={size} />,
          'like_list'
        )}
      {category !== 'history' &&
        renderCategoryIcon(
          email ? userInfo.historylist : undefined,
          'History',
          'blue',
          <IconHistory size={size} />,
          'history_list'
        )}
    </Group>
  );
};

export default ActionIcons;
