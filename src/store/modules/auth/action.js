export function signRequest(id) {
  return {
    type: '@auth/SIGN_REQUEST',
    payload: { id },
  };
}

export function signSuccess(deliveryman) {
  return {
    type: '@auth/SIGN_SUCCESS',
    payload: { deliveryman },
  };
}

export function signFalure() {
  return {
    type: '@auth/SIGN_FALURE',
  };
}
