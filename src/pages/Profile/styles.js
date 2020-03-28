import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  background: #ffffff;
  flex: 1;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  width: 137px;
  height: 137px;
  border-radius: 68.5px;
  margin-top: 68px;
`;

export const BoxProfileInfo = styled.View`
  width: 305px;
  margin: 40px 0 30px 0;
`;
export const BoxText = styled.View`
  margin-top: 15px;
`;
export const TextLabel = styled.Text`
  font-size: 12px;
  color: #666666;
`;
export const TextInfo = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;
export const ButtonLogout = styled(Button)`
  width: 305px;
  background: #e74040;
`;
