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
 *   !proto.api.SurveyRequest,
 *   !proto.api.SurveyResponse>}
 */
const methodDescriptor_Questionnaire_GetSurvey = new grpc.web.MethodDescriptor(
  '/api.Questionnaire/GetSurvey',
  grpc.web.MethodType.UNARY,
  proto.api.SurveyRequest,
  proto.api.SurveyResponse,
  /**
   * @param {!proto.api.SurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.SurveyResponse.deserializeBinary
);


/**
 * @param {!proto.api.SurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.SurveyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.SurveyResponse>|undefined}
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
 * @param {!proto.api.SurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.SurveyResponse>}
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


module.exports = proto.api;

