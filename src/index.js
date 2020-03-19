import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';

import './config/ReactotronConfig';

import SigIn from './pages/SigIn';

// import { Container } from './styles';

export default function App() {
  return (
    <View>
      <SigIn />
    </View>
  );
}
