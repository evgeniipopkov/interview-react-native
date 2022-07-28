import React from 'react';
import { Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import selectors from 'store/selectors';
import { PrimaryButton } from 'components';
import { setShowModal } from 'store/app/slice';

import en from '../../locales/en';
import { SuccessRegisterImage } from '../../images';

import {
  Header,
  Content,
  Description,
  ModalContainer,
} from './Modal.styled';

export default () => {
  const showModal = useSelector(selectors.app.showModal);

  const dispatch = useDispatch();

  const hideModal = () => dispatch(setShowModal(false));

  return (
    <Modal animationType="fade" visible={showModal} transparent>
      <ModalContainer onPress={hideModal}>
        <Content>
          <SuccessRegisterImage />
          <Header>{en.modal.header}</Header>
          <Description>{en.modal.description}</Description>
          <PrimaryButton onPress={hideModal}>{en.done}</PrimaryButton>
        </Content>
      </ModalContainer>
    </Modal>
  );
};
