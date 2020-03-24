import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

// local-shipping

import {
  Container,
  OrderInformation,
  Textinformation,
  StatusLisk,
  ListOrder,
  OrderHeader,
  TestLink,
  TextHeader,
  OrderTime,
  Boxtime,
  TextTime,
  OrderFooter,
  BoxFooter,
  TextLabel,
  TextDate,
  TestLinkFooter,
} from './styles';

export default function DelyveryList() {
  return (
    <Container>
      <OrderInformation>
        <Textinformation>Entregas</Textinformation>
        <StatusLisk>
          <TestLink>Pendente</TestLink>
          <TestLink>Entregues</TestLink>
        </StatusLisk>
      </OrderInformation>
      <ListOrder>
        <OrderHeader>
          <Icon name="local-shipping" size={24} color="#7D40E7" />
          <TextHeader>Encomenda 01</TextHeader>
        </OrderHeader>
        <OrderTime>
          <Boxtime>
            <TextTime>Aguardando Retirada</TextTime>
          </Boxtime>
          <Boxtime>
            <TextTime>Retirada</TextTime>
          </Boxtime>
          <Boxtime>
            <TextTime>Entregue</TextTime>
          </Boxtime>
        </OrderTime>
        <OrderFooter>
          <BoxFooter>
            <TextLabel>Data</TextLabel>
            <TextDate>14/01/2020</TextDate>
          </BoxFooter>
          <BoxFooter>
            <TextLabel>Cidade</TextLabel>
            <TextDate>Rio de janeiro</TextDate>
          </BoxFooter>
          <TestLinkFooter>Pendente</TestLinkFooter>
        </OrderFooter>
      </ListOrder>
    </Container>
  );
}
