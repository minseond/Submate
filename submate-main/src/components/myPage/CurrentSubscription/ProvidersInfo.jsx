import { useState } from 'react';
import { Container, Title, Flex, ActionIcon, Modal, Text, Button } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import ProviderBadges from './ProviderBadges';

const ProvidersInfo = ({ providers, toggleEditMode }) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleEditClick = () => {
    setShowWarning(true);
  };

  const handleCancel = () => {
    setShowWarning(false);
  };

  const handleConfirm = () => {
    setShowWarning(false);
    toggleEditMode();
  };

  return (
    <Container mt={10} p={0}>
      <Flex justify="space-between" align="center" mb={10}>
        <Title order={5} fw={400} fz={16}>
          {providers.length !== 0 ? '현재 구독하고 있어요.' : '현재 구독중인 서비스가 없습니다.'}
        </Title>
        <ActionIcon variant="transparent" align="center" onClick={handleEditClick} size="sm">
          <IconEdit />
        </ActionIcon>
      </Flex>
      <ProviderBadges providerIds={providers} />
      
      <Modal
        opened={showWarning}
        onClose={handleCancel}
        title="Submate"
        centered
      >
        <Text color="black" weight={700}>
         정말 변경하시겠습니까?
        </Text>
        <Text color="black" weight={400} size="sm" mt={5}>
          구독 OTT 해제 시 다음 달 구독료가 변경됩니다.
        </Text>
        <Flex mt={20} justify="flex-end" gap={10}>
          <Button onClick={handleCancel}>취소</Button>
          <Button color="red" onClick={handleConfirm}>확인</Button>
        </Flex>
      </Modal>
    </Container>
  );
};

export default ProvidersInfo;
