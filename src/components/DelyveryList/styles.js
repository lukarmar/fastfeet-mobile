import styled from 'styled-components/native';

export const Container = styled.View`
  width: 355px;
  flex: 1;
`;

export const OrderInformation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 23px 0 11px 0;
`;
export const Textinformation = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;
export const StatusLink = styled.View`
  flex-direction: row;
`;
export const TextLinkPending = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-right: 15px;
  color: ${props => (props.linkStyle01 ? '#7D40E7' : '#999999')};
  text-decoration: ${props => (props.linkStyle01 ? 'underline' : 'none')};
`;
export const TextLinkDelivered = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.linkStyle02 ? '#7D40E7' : '#999999')};
  text-decoration: ${props => (props.linkStyle02 ? 'underline' : 'none')};
`;

export const ListOrder = styled.View`
  height: auto;
  border-radius: 4px;
  border: 4px solid #f8f9fd;
`;
export const OrderHeader = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
  padding: 13px 0 0 15px;
`;
export const TextHeader = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;
export const OrderTime = styled.View`
  height: 44px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 22px 0 22px;
`;
export const Boxtime = styled.View`
  align-items: center;
`;
export const TextTime = styled.Text`
  font-size: 8px;
  color: #999999;
  text-align: center;
`;
export const OrderFooter = styled.View`
  height: 64px;
  flex-direction: row;
  background: #f8f9fd;
  padding: 15px 20px 15px 19px;
  justify-content: space-between;
`;
export const BoxFooter = styled.View``;
export const TextLabel = styled.Text`
  font-size: 8px;
  color: #999999;
`;
export const TextDate = styled.Text`
  font-size: 12px;
  color: #444444;
  font-weight: bold;
`;
export const TestLinkFooter = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
