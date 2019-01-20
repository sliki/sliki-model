/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.AuthRec');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.Auth');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AuthRec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AuthRec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.AuthRec.displayName = 'proto.AuthRec';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AuthRec.prototype.toObject = function(opt_includeInstance) {
  return proto.AuthRec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AuthRec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AuthRec.toObject = function(includeInstance, msg) {
  var f, obj = {
    extId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pwHash: msg.getPwHash_asB64(),
    pwSalt: msg.getPwSalt_asB64(),
    auth: (f = msg.getAuth()) && proto.Auth.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AuthRec}
 */
proto.AuthRec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AuthRec;
  return proto.AuthRec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AuthRec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AuthRec}
 */
proto.AuthRec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPwHash(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPwSalt(value);
      break;
    case 4:
      var value = new proto.Auth;
      reader.readMessage(value,proto.Auth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AuthRec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AuthRec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AuthRec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AuthRec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExtId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPwHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPwSalt_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.Auth.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ext_id = 1;
 * @return {string}
 */
proto.AuthRec.prototype.getExtId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.AuthRec.prototype.setExtId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes pw_hash = 2;
 * @return {string}
 */
proto.AuthRec.prototype.getPwHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes pw_hash = 2;
 * This is a type-conversion wrapper around `getPwHash()`
 * @return {string}
 */
proto.AuthRec.prototype.getPwHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPwHash()));
};


/**
 * optional bytes pw_hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPwHash()`
 * @return {!Uint8Array}
 */
proto.AuthRec.prototype.getPwHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPwHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.AuthRec.prototype.setPwHash = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bytes pw_salt = 3;
 * @return {string}
 */
proto.AuthRec.prototype.getPwSalt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes pw_salt = 3;
 * This is a type-conversion wrapper around `getPwSalt()`
 * @return {string}
 */
proto.AuthRec.prototype.getPwSalt_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPwSalt()));
};


/**
 * optional bytes pw_salt = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPwSalt()`
 * @return {!Uint8Array}
 */
proto.AuthRec.prototype.getPwSalt_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPwSalt()));
};


/** @param {!(string|Uint8Array)} value */
proto.AuthRec.prototype.setPwSalt = function(value) {
  jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional Auth auth = 4;
 * @return {?proto.Auth}
 */
proto.AuthRec.prototype.getAuth = function() {
  return /** @type{?proto.Auth} */ (
    jspb.Message.getWrapperField(this, proto.Auth, 4));
};


/** @param {?proto.Auth|undefined} value */
proto.AuthRec.prototype.setAuth = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.AuthRec.prototype.clearAuth = function() {
  this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.AuthRec.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 4) != null;
};


