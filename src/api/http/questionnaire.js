import * as axios from "axios";

//Настройка конфигурации экземпляра axios
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, x-access-token',
    }
});

export const questionnaireAPI = {
    create_questionnaire(ref) {
        return instance.post('questionnaire/create', {
            questionnaire: {
                id: undefined,
                title: "testfrom front",
                ref: undefined,
                questions: [
                    {
                        id: undefined,
                        statement: "как диплом?",
                        type: 1,
                        options: ["1", "2", "3"]
                    },
                    {
                        id: undefined,
                        statement: "как работа?",
                        type: 1,
                        options: ["cool", "bad", "good"]
                    },
                    
                ],
            }
        });
    },
    get_questionnaire(ref) {
        return instance.get('questionnaire/', {
            ref: "testRef"
        });
    },
}