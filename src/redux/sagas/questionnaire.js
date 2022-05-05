import { call, put, take, takeLatest } from 'redux-saga/effects';
import { questionnaireAPI } from '@api/http/questionnaire';
import { getQuestionnaireSucceededAC, getQuestionnaireFailedAC, getQuestionnaireAC } from '@actions/questionnaire'

function* getQuestionnaire(action) {
   try {
      const questionnaire = yield call(questionnaireAPI.get_questionnaire(action.payload.ref));
      console.log(questionnaire)
      yield put(getQuestionnaireSucceededAC(questionnaire));
   } catch (e) {
      yield put(getQuestionnaireFailedAC(e));
   }
}

export function* questionnaireSaga() {
   yield takeLatest(getQuestionnaireAC, getQuestionnaire);
}