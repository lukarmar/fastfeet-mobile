import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { lineTop } from '../../util/styleLineTop';

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
  LineTime,
  Elipse,
  OrderTime,
  ContainerTime,
  BoxTime,
  BoxTextTime,
  TextTime,
  OrderFooter,
  BoxFooter,
  TextLabel,
  TextDate,
  TestLinkFooter,
} from './styles';

const style = StyleSheet.create({ lineTop });

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
          <LineTime style={style.lineTop} />
          <ContainerTime>
            <BoxTime>
              <Elipse />
              <BoxTextTime>
                <TextTime>Aguardando</TextTime>
                <TextTime>Retirada</TextTime>
              </BoxTextTime>
            </BoxTime>
            <BoxTime>
              <Elipse />
              <BoxTextTime>
                <TextTime>Retirada</TextTime>
              </BoxTextTime>
            </BoxTime>
            <BoxTime>
              <Elipse />
              <BoxTextTime>
                <TextTime>Entregue</TextTime>
              </BoxTextTime>
            </BoxTime>
          </ContainerTime>
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
      {/* SEGUNDA PARTE DAQUI */}
      <ListOrder>
        <OrderHeader>
          <Icon name="local-shipping" size={24} color="#7D40E7" />
          <TextHeader>Encomenda 01</TextHeader>
        </OrderHeader>
        <OrderTime>
          <LineTime style={style.lineTop} />
          <ContainerTime>
            <BoxTime>
              <Elipse />
              <BoxTextTime>
                <TextTime>Aguardando</TextTime>
                <TextTime>Retirada</TextTime>
              </BoxTextTime>
            </BoxTime>
            <BoxTime>
              <Elipse />
              <BoxTextTime>
                <TextTime>Retirada</TextTime>
              </BoxTextTime>
            </BoxTime>
            <BoxTime>
              <Elipse />
              <BoxTextTime>
                <TextTime>Entregue</TextTime>
              </BoxTextTime>
            </BoxTime>
          </ContainerTime>
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
