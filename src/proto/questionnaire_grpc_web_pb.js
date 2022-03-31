/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.api = require('./questionnaire_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.QuestionnaireClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.api.QuestionnairePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.TestRequest,
 *   !proto.api.TestResponse>}
 */
const methodDescriptor_Questionnaire_Test = new grpc.web.MethodDescriptor(
  '/api.Questionnaire/Test',
  grpc.web.MethodType.UNARY,
  proto.api.TestRequest,
  proto.api.TestResponse,
  /**
   * @param {!proto.api.TestRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.TestResponse.deserializeBinary
);


/**
 * @param {!proto.api.TestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.TestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.TestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.QuestionnaireClient.prototype.test =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Questionnaire/Test',
      request,
      metadata || {},
      methodDescriptor_Questionnaire_Test,
      callback);
};


/**
 * @param {!proto.api.TestRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.TestResponse>}
 *     Promise that resolves to the response
 */
proto.api.QuestionnairePromiseClient.prototype.test =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Questionnaire/Test',
      request,
      metadata || {},
      methodDescriptor_Questionnaire_Test);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetSurveyRequest,
 *   !proto.api.GetSurveyResponse>}
 */
const methodDescriptor_Questionnaire_GetSurvey = new grpc.web.MethodDescriptor(
  '/api.Questionnaire/GetSurvey',
  grpc.web.MethodType.UNARY,
  proto.api.GetSurveyRequest,
  proto.api.GetSurveyResponse,
  /**
   * @param {!proto.api.GetSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetSurveyResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.GetSurveyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetSurveyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.QuestionnaireClient.prototype.getSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Questionnaire/GetSurvey',
      request,
      metadata || {},
      methodDescriptor_Questionnaire_GetSurvey,
      callback);
};


/**
 * @param {!proto.api.GetSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetSurveyResponse>}
 *     Promise that resolves to the response
 */
proto.api.QuestionnairePromiseClient.prototype.getSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Questionnaire/GetSurvey',
      request,
      metadata || {},
      methodDescriptor_Questionnaire_GetSurvey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.CreateSurveyRequest,
 *   !proto.api.CreateSurveyResponse>}
 */
const methodDescriptor_Questionnaire_CreateSurvey = new grpc.web.MethodDescriptor(
  '/api.Questionnaire/CreateSurvey',
  grpc.web.MethodType.UNARY,
  proto.api.CreateSurveyRequest,
  proto.api.CreateSurveyResponse,
  /**
   * @param {!proto.api.CreateSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CreateSurveyResponse.deserializeBinary
);


/**
 * @param {!proto.api.CreateSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.CreateSurveyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.CreateSurveyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.QuestionnaireClient.prototype.createSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Questionnaire/CreateSurvey',
      request,
      metadata || {},
      methodDescriptor_Questionnaire_CreateSurvey,
      callback);
};


/**
 * @param {!proto.api.CreateSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.CreateSurveyResponse>}
 *     Promise that resolves to the response
 */
proto.api.QuestionnairePromiseClient.prototype.createSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Questionnaire/CreateSurvey',
      request,
      metadata || {},
      methodDescriptor_Questionnaire_CreateSurvey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateSurveyRequest,
 *   !proto.api.UpdateSurveyResponse>}
 */
const methodDescriptor_Questionnaire_UpdateSurvey = new grpc.web.MethodDescriptor(
  '/api.Questionnaire/UpdateSurvey',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateSurveyRequest,
  proto.api.UpdateSurveyResponse,
  /**
   * @param {!proto.api.UpdateSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.UpdateSurveyResponse.deserializeBinary
);


/**
 * @param {!proto.api.UpdateSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.UpdateSurveyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.UpdateSurveyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.QuestionnaireClient.prototype.updateSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Questionnaire/UpdateSurvey',
      request,
      metadata || {},
      methodDescriptor_Questionnaire_UpdateSurvey,
      callback);
};


/**
 * @param {!proto.api.UpdateSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.UpdateSurveyResponse>}
 *     Promise that resolves to the response
 */
proto.api.QuestionnairePromiseClient.prototype.updateSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Questionnaire/UpdateSurvey',
      request,
      metadata || {},
      methodDescriptor_Questionnaire_UpdateSurvey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.DeleteSurveyRequest,
 *   !proto.api.DeleteSurveyResponse>}
 */
const methodDescriptor_Questionnaire_DeleteSurvey = new grpc.web.MethodDescriptor(
  '/api.Questionnaire/DeleteSurvey',
  grpc.web.MethodType.UNARY,
  proto.api.DeleteSurveyRequest,
  proto.api.DeleteSurveyResponse,
  /**
   * @param {!proto.api.DeleteSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.DeleteSurveyResponse.deserializeBinary
);


/**
 * @param {!proto.api.DeleteSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.DeleteSurveyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.DeleteSurveyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.QuestionnaireClient.prototype.deleteSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.Questionnaire/DeleteSurvey',
      request,
      metadata || {},
      methodDescriptor_Questionnaire_DeleteSurvey,
      callback);
};


/**
 * @param {!proto.api.DeleteSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.DeleteSurveyResponse>}
 *     Promise that resolves to the response
 */
proto.api.QuestionnairePromiseClient.prototype.deleteSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.Questionnaire/DeleteSurvey',
      request,
      metadata || {},
      methodDescriptor_Questionnaire_DeleteSurvey);
};


module.exports = proto.api;

