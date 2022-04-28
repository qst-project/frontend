import {GetQuestionnaireRequest} from '@proto/questionnaire_pb';

import client from "./client";

export function apiGetQuestionnaire(ref){
    console.log(ref)
    const request = new GetQuestionnaireRequest();
    request.setRef(ref);
    return client.getQuestionnaire(request, null, (err, response) => {
        if(err){
            console.log(err)
        }
        console.log(response)
    })
}