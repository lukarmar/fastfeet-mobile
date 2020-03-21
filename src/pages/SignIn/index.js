import React, { useRef } from 'react';
import { Form } from '@unform/mobile';
import { useDispatch } from 'react-redux';

import logo from '../../assets/image/logos/logo01.png';

import { signRequest } from '../../store/modules/auth/action';
import { Container, Logo, InputSign, BottonSign } from './styles';

export default function SignIn() {
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {
    console.tron.log(data);
    reset();
  }
  return (
    <Container>
      <Logo source={logo} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <InputSign
          name="id"
          keyboardType="numeric"
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={handleSubmit}
          placeholder="Informe seu ID de cadastro"
        />
        <BottonSign onPress={() => formRef.current.submitForm()}>
          Entrar no sistema
        </BottonSign>
      </Form>
    </Container>
  );
}
