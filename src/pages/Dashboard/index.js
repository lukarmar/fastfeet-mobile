import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import OrderList from '../../components/DelyveryList';

import {
  Header,
  Container,
  ImageProfile,
  BoxInformation,
  Informations,
  TextName,
  TextWelcome,
} from './styles';

StatusBar.setBackgroundColor('#ffffff');
StatusBar.setBarStyle('dark-content');

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <BoxInformation>
          <ImageProfile
            source={{
              uri: 'https://api.adorable.io/avatars/79/abott@adorable.png',
            }}
          />
          <Informations>
            <TextWelcome>Bem vindo de volta,</TextWelcome>
            <TextName>Luka Rocha</TextName>
          </Informations>
        </BoxInformation>
        <Icon name="exit-to-app" size={24} color="#E74040" />
      </Header>
      {/* <OrderList /> */}
    </Container>
  );
}
