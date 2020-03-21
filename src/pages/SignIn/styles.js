import styled from 'styled-components/native';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView`
  background: #7d40e7;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Image)`
  height: 49px;
  width: 248px;
  margin-bottom: 38px;
`;

export const InputSign = styled(Input).attrs({
  placeholderTextColor: '#999999',
})`
  width: 325px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 16px;
  padding: 13px 0 13px 20px;
`;

export const BottonSign = styled(Button)`
  width: 325px;
  margin-top: 16px;
  height: 46px;
  border-radius: 4px;
  background: #82bf18;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
