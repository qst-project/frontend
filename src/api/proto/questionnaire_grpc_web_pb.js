/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = require('./questionnaire_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.QuestionnaireServiceClient =
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
proto.proto.QuestionnaireServicePromiseClient =
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
 *   !proto.proto.CreateQuestionnaireRequest,
 *   !proto.proto.CreateQuestionnaireResponse>}
 */
const methodDescriptor_QuestionnaireService_CreateQuestionnaire = new grpc.web.MethodDescriptor(
  '/proto.QuestionnaireService/CreateQuestionnaire',
  grpc.web.MethodType.UNARY,
  proto.proto.CreateQuestionnaireRequest,
  proto.proto.CreateQuestionnaireResponse,
  /**
   * @param {!proto.proto.CreateQuestionnaireRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.CreateQuestionnaireResponse.deserializeBinary
);


/**
 * @param {!proto.proto.CreateQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.CreateQuestionnaireResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.CreateQuestionnaireResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.QuestionnaireServiceClient.prototype.createQuestionnaire =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.QuestionnaireService/CreateQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_CreateQuestionnaire,
      callback);
};


/**
 * @param {!proto.proto.CreateQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.CreateQuestionnaireResponse>}
 *     Promise that resolves to the response
 */
proto.proto.QuestionnaireServicePromiseClient.prototype.createQuestionnaire =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.QuestionnaireService/CreateQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_CreateQuestionnaire);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.GetQuestionnaireRequest,
 *   !proto.proto.GetQuestionnaireResponse>}
 */
const methodDescriptor_QuestionnaireService_GetQuestionnaire = new grpc.web.MethodDescriptor(
  '/proto.QuestionnaireService/GetQuestionnaire',
  grpc.web.MethodType.UNARY,
  proto.proto.GetQuestionnaireRequest,
  proto.proto.GetQuestionnaireResponse,
  /**
   * @param {!proto.proto.GetQuestionnaireRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.GetQuestionnaireResponse.deserializeBinary
);


/**
 * @param {!proto.proto.GetQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.GetQuestionnaireResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.GetQuestionnaireResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.QuestionnaireServiceClient.prototype.getQuestionnaire =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.QuestionnaireService/GetQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_GetQuestionnaire,
      callback);
};


/**
 * @param {!proto.proto.GetQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.GetQuestionnaireResponse>}
 *     Promise that resolves to the response
 */
proto.proto.QuestionnaireServicePromiseClient.prototype.getQuestionnaire =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.QuestionnaireService/GetQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_GetQuestionnaire);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.UpdateQuestionnaireRequest,
 *   !proto.proto.UpdateQuestionnaireResponse>}
 */
const methodDescriptor_QuestionnaireService_UpdateQuestionnaire = new grpc.web.MethodDescriptor(
  '/proto.QuestionnaireService/UpdateQuestionnaire',
  grpc.web.MethodType.UNARY,
  proto.proto.UpdateQuestionnaireRequest,
  proto.proto.UpdateQuestionnaireResponse,
  /**
   * @param {!proto.proto.UpdateQuestionnaireRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.UpdateQuestionnaireResponse.deserializeBinary
);


/**
 * @param {!proto.proto.UpdateQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.proto.UpdateQuestionnaireResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.proto.UpdateQuestionnaireResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.proto.QuestionnaireServiceClient.prototype.updateQuestionnaire =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/proto.QuestionnaireService/UpdateQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_UpdateQuestionnaire,
      callback);
};


/**
 * @param {!proto.proto.UpdateQuestionnaireRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.proto.UpdateQuestionnaireResponse>}
 *     Promise that resolves to the response
 */
proto.proto.QuestionnaireServicePromiseClient.prototype.updateQuestionnaire =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/proto.QuestionnaireService/UpdateQuestionnaire',
      request,
      metadata || {},
      methodDescriptor_QuestionnaireService_UpdateQuestionnaire);
};


module.exports = proto.proto;

