import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Keyboard, Pressable } from 'react-native';

import { PrimaryButton } from 'components';
import { register } from 'store/user/slice';
import { setShowModal } from 'store/app/slice';

import config from 'constants/config';
import en from '../../locales/en';
import { CheckIcon, EyeIcon } from '../../images';

import {
  Input,
  AgreeText,
  Container,
  InputLabel,
  InputWrapper,
  AgreeWrapper,
  CheckWrapper,
  InputContainer,
} from './Form.styled';

export default () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [validPassword, setValidPassword] = useState<boolean>(true);
  const [securePassword, setSecurePassword] = useState<boolean>(true);

  const inputs = [
    {
      value: email,
      autoFocus: true,
      label: en.yourEmail,
      placeholder: en.yourEmail,
      valid: validEmail,
      secureTextEntry: false,
      setValid: setValidEmail,
      setValue: setEmail,
    },
    {
      value: password,
      label: en.password,
      placeholder: en.password,
      valid: validPassword,
      secureTextEntry: securePassword,
      setValid: setValidPassword,
      setValue: setPassword,
      setSecure: () => setSecurePassword(!securePassword),
      Icon: EyeIcon,
    },
  ];

  const dispatch = useDispatch();

  const onPress = () => {
    Keyboard.dismiss();

    let formValid = true;

    if (!email.trim().length) {
      formValid = false;
      setValidEmail(false);
    }

    if (!password.trim().length) {
      formValid = false;
      setValidPassword(false);
    }

    if (!formValid) return;

    setTimeout(() => dispatch(register()), 50);
    setTimeout(() => dispatch(setShowModal(true)), config.IS_ANDROID ? 200 : 100);
  };

  return (
    <Container>
      {inputs.map(({
        label,
        value,
        valid,
        autoFocus,
        placeholder,
        secureTextEntry,
        Icon,
        setValue,
        setValid,
        setSecure,
      }) => (
        <InputContainer key={label}>
          <InputLabel>{label}</InputLabel>
          <InputWrapper valid={valid}>
            <Input
              valid={valid}
              existIcon={!!Icon}
              autoFocus={autoFocus}
              autoCapitalize="none"
              placeholder={placeholder}
              value={valid ? value : en.required}
              secureTextEntry={valid ? secureTextEntry : false}
              onFocus={() => setValid(true)}
              onChangeText={(text: string) => {
                setValue(text);
                if (!valid) setValid(true);
              }}
            />
            {Icon && (
              <Pressable onPress={setSecure}>
                <Icon />
              </Pressable>
            )}
          </InputWrapper>
        </InputContainer>
      ))}
      <AgreeWrapper onPress={() => setIsActive(!isActive)}>
        <CheckWrapper isActive={isActive}>
          <CheckIcon />
        </CheckWrapper>
        <AgreeText>{en.agree}</AgreeText>
      </AgreeWrapper>
      <PrimaryButton onPress={onPress} disabled={!isActive}>
        {en.createAccount}
      </PrimaryButton>
    </Container>
  );
};
