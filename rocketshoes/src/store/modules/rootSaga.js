import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  // all serve para listar todos os sagas.
  return yield all([cart]);
}
