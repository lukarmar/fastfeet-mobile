import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';

// import SignIn from './pages/SignIn';
import App from './app';

import { persistor, store } from './store';

export default function Index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
