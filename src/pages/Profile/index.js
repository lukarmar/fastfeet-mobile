import React from 'react';

import {
  Container,
  ImageProfile,
  BoxProfileInfo,
  BoxText,
  TextLabel,
  TextInfo,
  ButtonLogout,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <ImageProfile
        source={{
          uri: 'https://api.adorable.io/avatars/79/abott@adorable.png',
        }}
      />
      <BoxProfileInfo>
        <BoxText>
          <TextLabel>Nome completo</TextLabel>
          <TextInfo>Luka Rocha</TextInfo>
        </BoxText>
        <BoxText>
          <TextLabel>E-mail</TextLabel>
          <TextInfo>luka@fastfeet.com</TextInfo>
        </BoxText>
        <BoxText>
          <TextLabel>Data de cadastro</TextLabel>
          <TextInfo>10/01/2020</TextInfo>
        </BoxText>
      </BoxProfileInfo>
      <ButtonLogout>Logout</ButtonLogout>
    </Container>
  );
}
