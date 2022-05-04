import config from "./config";
import { QuestionnaireServiceClient } from '@proto/questionnaire_grpc_web_pb';

export default new QuestionnaireServiceClient(config.dockerEnvoyHost + config.dockerEnvoyPort, null, null);