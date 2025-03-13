import { Avatar, Tooltip } from '@mantine/core';
import { PROVIDERS } from '../../../constants';

const ProviderAvatars = ({ providerIds, spacing = 'sm', size = '2.2rem' }) => (
  <Tooltip.Group openDelay={100} closeDelay={100}>
    <Avatar.Group spacing={spacing}>
      {providerIds?.map(id => (
        <a
          key={PROVIDERS[id].provider_name}
          href={PROVIDERS[id].url}  // URL 추가
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip
            label={PROVIDERS[id].provider_name}
            color="gray"
            withArrow
            transitionProps={{ transition: 'fade', duration: 300 }}
          >
            <Avatar src={PROVIDERS[id].providerImgPath} radius="xl" size={size} alt="logo of service provider" />
          </Tooltip>
        </a>
      ))}
    </Avatar.Group>
  </Tooltip.Group>
);

export default ProviderAvatars;
