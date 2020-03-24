import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #ffffff;
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  margin-top: 25px;
  height: 68px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 323px;
`;

export const Informations = styled.View`
  margin-left: 12px;
`;

export const ImageProfile = styled.Image`
  height: 68px;
  width: 68px;
  border-radius: 34px;
`;

export const BoxInformation = styled.View`
  flex-direction: row;
`;
export const TextWelcome = styled.Text`
  font-size: 12px;
  color: #666666;
`;
export const TextName = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;
