import produce from 'immer';

const INITIAL_STATE = {
  user: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_SUCCESS':
      return produce(state, draft => {
        draft.user = action.payload.deliveryman;
      });
    default:
      return state;
  }
}
