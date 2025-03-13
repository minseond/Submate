import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { Title, Text, Accordion, Button, Group } from '@mantine/core';
import { PROVIDERS } from '../../../constants';
import ProvidersInfo from './ProvidersInfo';
import Editor from './Editor';
import calculateLowestFee from '../../../utils/calculateLowestFee';

const PresentSubscriptionFee = styled(Accordion)`
  width: 100%;
  .mantine-Accordion-item {
    border-bottom: none;
  }
  .mantine-Accordion-label {
    padding: 0;
  }
  .mantine-Accordion-control {
    padding: 0;
    :active {
      background-color: inherit;
    }
  }
`;

const Fee = ({ subscribeList = [] }) => {
  const [editMode, setEditMode] = useState(false);

  // 각 제공자별 선택한 요금제 상태 저장
  const [selectedPlans, setSelectedPlans] = useState(
    subscribeList.reduce((acc, { id }) => {
      acc[id] = 'basic'; // 기본적으로 모든 제공자의 요금제를 'basic'으로 설정
      return acc;
    }, {})
  );

  // 선택한 요금제 변경 핸들러
  const handlePlanChange = (providerId, plan) => {
    setSelectedPlans(prev => ({
      ...prev,
      [providerId]: plan,
    }));
  };

  const providers = subscribeList.map(({ id }) => id);

  // 사용자가 선택한 요금제에 따라 totalFees 계산
  const currentFee = useMemo(() => {
    return providers.reduce((acc, providerId) => {
      const selectedPlan = selectedPlans[providerId];
      const providerFee = PROVIDERS[providerId]?.fee[selectedPlan] || 0;
      return acc + providerFee;
    }, 0);
  }, [providers, selectedPlans]);

  return (
    <PresentSubscriptionFee>
      <Accordion.Item value={`₩${currentFee}`}>
        <Accordion.Control
          onClick={() => {
            setEditMode(false);
          }}
        >
          <Title order={3} size={18}>
            다음달 결제 예상 금액
          </Title>
          <Text size={32}>₩{currentFee.toLocaleString()}</Text>
        </Accordion.Control>
        <Accordion.Panel>
          {editMode ? (
            <Editor
              providers={providers}
              toggleEditMode={() => {
                setEditMode(false);
              }}
            />
          ) : (
            <ProvidersInfo
              providers={providers}
              toggleEditMode={() => {
                setEditMode(true);
              }}
            />
          )}
        </Accordion.Panel>
      </Accordion.Item>
      {/* 각 제공자의 요금제 선택 버튼 추가 */}
      <div style={{ marginTop: '20px' }}>
        {providers.map(providerId => (
          <div key={providerId} style={{ marginBottom: '20px' }}>
            <Title order={4}>{PROVIDERS[providerId].provider_name}</Title>
            <Group>
              <Button
                variant={selectedPlans[providerId] === 'basic' ? 'filled' : 'outline'}
                onClick={() => handlePlanChange(providerId, 'basic')}
                color={selectedPlans[providerId] === 'basic' ? 'violet' : 'gray'}
              >
                Basic
              </Button>
              <Button
                variant={selectedPlans[providerId] === 'standard' ? 'filled' : 'outline'}
                onClick={() => handlePlanChange(providerId, 'standard')}
                color={selectedPlans[providerId] === 'standard' ? 'violet' : 'gray'}
              >
                Standard
              </Button>
              <Button
                variant={selectedPlans[providerId] === 'premium' ? 'filled' : 'outline'}
                onClick={() => handlePlanChange(providerId, 'premium')}
                color={selectedPlans[providerId] === 'premium' ? 'violet' : 'gray'}
              >
                Premium
              </Button>
            </Group>
          </div>
        ))}
      </div>
    </PresentSubscriptionFee>
  );
};

export default React.memo(Fee);
