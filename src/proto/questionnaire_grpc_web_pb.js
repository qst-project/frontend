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
proto.api.QuestionnaireServiceClient =
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
proto.api.QuestionnaireServicePromiseClient =
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
 *   !proto.api.CreateQuestionnaireRequest,
 *   !proto.api.CreateQuestionnaireResponse>}
 */
const methodDescriptor_QuestionnaireService_CreateQuestionnaire = new grpc.web.MethodDescriptor(
  '/api.QuestionnaireService/CreateQuestionnaire',
  grpc.web.MethodType.UNARY,
  proto.api.CreateQuestionnaireRequest,
  proto.api.CreateQuestionnaireResponse,
  /**
   * @param {!proto.api.CreateQuestionnaireRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.CreateQuestionnaireResponse.deserializeBinary
);


/**
 * @param {!proto.api.CreateQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.CreateQuestionnaireResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.CreateQuestionnaireResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.QuestionnaireServiceClient.prototype.createQuestionnaire =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.QuestionnaireService/CreateQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_CreateQuestionnaire,
      callback);
};


/**
 * @param {!proto.api.CreateQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.CreateQuestionnaireResponse>}
 *     Promise that resolves to the response
 */
proto.api.QuestionnaireServicePromiseClient.prototype.createQuestionnaire =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.QuestionnaireService/CreateQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_CreateQuestionnaire);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.GetQuestionnaireRequest,
 *   !proto.api.GetQuestionnaireResponse>}
 */
const methodDescriptor_QuestionnaireService_GetQuestionnaire = new grpc.web.MethodDescriptor(
  '/api.QuestionnaireService/GetQuestionnaire',
  grpc.web.MethodType.UNARY,
  proto.api.GetQuestionnaireRequest,
  proto.api.GetQuestionnaireResponse,
  /**
   * @param {!proto.api.GetQuestionnaireRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.GetQuestionnaireResponse.deserializeBinary
);


/**
 * @param {!proto.api.GetQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.GetQuestionnaireResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.GetQuestionnaireResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.QuestionnaireServiceClient.prototype.getQuestionnaire =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.QuestionnaireService/GetQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_GetQuestionnaire,
      callback);
};


/**
 * @param {!proto.api.GetQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.GetQuestionnaireResponse>}
 *     Promise that resolves to the response
 */
proto.api.QuestionnaireServicePromiseClient.prototype.getQuestionnaire =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.QuestionnaireService/GetQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_GetQuestionnaire);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.UpdateQuestionnaireRequest,
 *   !proto.api.UpdateQuestionnaireResponse>}
 */
const methodDescriptor_QuestionnaireService_UpdateQuestionnaire = new grpc.web.MethodDescriptor(
  '/api.QuestionnaireService/UpdateQuestionnaire',
  grpc.web.MethodType.UNARY,
  proto.api.UpdateQuestionnaireRequest,
  proto.api.UpdateQuestionnaireResponse,
  /**
   * @param {!proto.api.UpdateQuestionnaireRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.UpdateQuestionnaireResponse.deserializeBinary
);


/**
 * @param {!proto.api.UpdateQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.api.UpdateQuestionnaireResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.UpdateQuestionnaireResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.QuestionnaireServiceClient.prototype.updateQuestionnaire =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.QuestionnaireService/UpdateQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_UpdateQuestionnaire,
      callback);
};


/**
 * @param {!proto.api.UpdateQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.UpdateQuestionnaireResponse>}
 *     Promise that resolves to the response
 */
proto.api.QuestionnaireServicePromiseClient.prototype.updateQuestionnaire =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.QuestionnaireService/UpdateQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_UpdateQuestionnaire);
};


module.exports = proto.api;

