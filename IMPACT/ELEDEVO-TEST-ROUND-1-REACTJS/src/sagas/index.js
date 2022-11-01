import { all } from 'redux-saga/effects';
import ItemSagas from './ItemSagas';
export default function* rootSaga() {
  yield all([
    ...ItemSagas
  ]);
}