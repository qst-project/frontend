import { all } from 'redux-saga/effects'
import { questionnaireSaga } from './questionnaire'

export default function* rootSaga() {
  yield all([
    questionnaireSaga()
  ])
}