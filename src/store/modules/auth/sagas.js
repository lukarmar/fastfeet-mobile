import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signSuccess, signFalure } from './action';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, 'login', { email, password });

    const { admin, token } = response.data;
    yield put(signSuccess(admin, token));

    // history.push('/delivery');
  } catch (error) {
    Alert.alert('✘ Senha ou E-mail errado');
    yield put(signFalure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_REQUEST', signIn),
]);
