import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

// local-shipping

import {
  Container,
  OrderInformation,
  Textinformation,
  StatusLink,
  ListOrder,
  OrderHeader,
  TextLinkPending,
  TextLinkDelivered,
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
  const [linkStyle01, setLinkStyle01] = useState(true);
  const [linkStyle02, setLinkStyle02] = useState(false);

  function handleSetStyle(yourState, myState, yourSet, mySet) {
    if (yourState) {
      yourSet(false);
      mySet(!myState);
    }
  }
  return (
    <Container>
      <OrderInformation>
        <Textinformation>Entregas</Textinformation>
        <StatusLink>
          <TextLinkPending
            linkStyle01={linkStyle01}
            onPress={() =>
              handleSetStyle(
                linkStyle02,
                linkStyle01,
                setLinkStyle02,
                setLinkStyle01
              )
            }
          >
            Pendente
          </TextLinkPending>
          <TextLinkDelivered
            linkStyle02={linkStyle02}
            onPress={() =>
              handleSetStyle(
                linkStyle01,
                linkStyle02,
                setLinkStyle01,
                setLinkStyle02
              )
            }
          >
            Entregues
          </TextLinkDelivered>
        </StatusLink>
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
          <BoxFooter>
            <TextLabel style={{ color: '#f8f9fd' }}>detalhes</TextLabel>
            <TestLinkFooter>Ver detalhes</TestLinkFooter>
          </BoxFooter>
        </OrderFooter>
      </ListOrder>
    </Container>
  );
}
