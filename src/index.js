import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import './config/ReactotronConfig';

import SignIn from './pages/SignIn';

import { persistor, store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View>
          <SignIn />
        </View>
      </PersistGate>
    </Provider>
  );
}
