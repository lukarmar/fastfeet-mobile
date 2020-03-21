import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persisteReducer = persistReducer(
    {
      key: 'fastfeet',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persisteReducer;
};
