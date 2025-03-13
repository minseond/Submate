import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '@mantine/core';
import { PROVIDERS } from '../../../constants';

const logos = [
  { name: 'appletvplus', id: 350, logo: '/assets/badges/appletvplus.svg' },
  { name: 'disneyplus', id: 337, logo: '/assets/badges/disneyplus.svg' },
  { name: 'netflix', id: 8, logo: '/assets/badges/netflix.svg' },
  { name: 'primevideo', id: 119, logo: '/assets/badges/primevideo.svg' },
  { name: 'watcha', id: 97, logo: '/assets/badges/watcha.svg' },
  { name: 'wavve', id: 356, logo: '/assets/badges/wavve.svg' },
];

const BadgeContainer = styled(Flex)`
  gap: 8px;
  flex-wrap: wrap;
`;

const BadgeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ProviderLogo = styled.img`
  width: 70px; 
  height: 70px;
`;

const ProviderBadges = ({ providerIds }) => {
  const getLogoById = (id) => {
    const provider = logos.find(logo => logo.id === id);
    return provider ? provider.logo : null;
  };

  return (
    <BadgeContainer>
      {providerIds.map(id => (
        <BadgeItem key={id}>
          <ProviderLogo src={getLogoById(id)} alt={PROVIDERS[id].provider_name} />
        </BadgeItem>
      ))}
    </BadgeContainer>
  );
};

export default ProviderBadges;
