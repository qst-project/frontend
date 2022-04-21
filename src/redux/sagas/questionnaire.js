import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

function* getQuestionnaire(action) {
   try {
      const questionnaire = yield call(Api.getQuestionnaire, action.payload.questionnaire);
      yield put({type: "GET_QUESTIONAIRE_SUCCEEDED", questionnaire: questionnaire});
   } catch (e) {
      yield put({type: "GET_QUESTIONNAIRE_FAILED", message: e.message});
   }
}

function* questionnaireSaga() {
  yield takeEvery("QUESTIONNAIRE_GET_REQUESTED", getQuestionnaire);
}

export default questionnaireSaga;
