/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.Group');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.GroupId');

goog.forwardDeclare('proto.GroupStatus');
goog.forwardDeclare('proto.GroupType');
goog.forwardDeclare('proto.GroupVisibility');

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
proto.Group = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Group, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Group.displayName = 'proto.Group';
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
proto.Group.prototype.toObject = function(opt_includeInstance) {
  return proto.Group.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Group} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Group.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupId: (f = msg.getGroupId()) && proto.GroupId.toObject(includeInstance, f),
    groupType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    visibility: jspb.Message.getFieldWithDefault(msg, 3, 0),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    createdDatetimeMs: jspb.Message.getFieldWithDefault(msg, 5, 0),
    modifiedDatetimeMs: jspb.Message.getFieldWithDefault(msg, 6, 0),
    displayName: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.Group}
 */
proto.Group.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Group;
  return proto.Group.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Group} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Group}
 */
proto.Group.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.GroupId;
      reader.readMessage(value,proto.GroupId.deserializeBinaryFromReader);
      msg.setGroupId(value);
      break;
    case 2:
      var value = /** @type {!proto.GroupType} */ (reader.readEnum());
      msg.setGroupType(value);
      break;
    case 3:
      var value = /** @type {!proto.GroupVisibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 4:
      var value = /** @type {!proto.GroupStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedDatetimeMs(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setModifiedDatetimeMs(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
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
proto.Group.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Group.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Group} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Group.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.GroupId.serializeBinaryToWriter
    );
  }
  f = message.getGroupType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getVisibility();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCreatedDatetimeMs();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getModifiedDatetimeMs();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional GroupId group_id = 1;
 * @return {?proto.GroupId}
 */
proto.Group.prototype.getGroupId = function() {
  return /** @type{?proto.GroupId} */ (
    jspb.Message.getWrapperField(this, proto.GroupId, 1));
};


/** @param {?proto.GroupId|undefined} value */
proto.Group.prototype.setGroupId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.Group.prototype.clearGroupId = function() {
  this.setGroupId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Group.prototype.hasGroupId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupType group_type = 2;
 * @return {!proto.GroupType}
 */
proto.Group.prototype.getGroupType = function() {
  return /** @type {!proto.GroupType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.GroupType} value */
proto.Group.prototype.setGroupType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional GroupVisibility visibility = 3;
 * @return {!proto.GroupVisibility}
 */
proto.Group.prototype.getVisibility = function() {
  return /** @type {!proto.GroupVisibility} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.GroupVisibility} value */
proto.Group.prototype.setVisibility = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional GroupStatus status = 4;
 * @return {!proto.GroupStatus}
 */
proto.Group.prototype.getStatus = function() {
  return /** @type {!proto.GroupStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.GroupStatus} value */
proto.Group.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 created_datetime_ms = 5;
 * @return {number}
 */
proto.Group.prototype.getCreatedDatetimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.Group.prototype.setCreatedDatetimeMs = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 modified_datetime_ms = 6;
 * @return {number}
 */
proto.Group.prototype.getModifiedDatetimeMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.Group.prototype.setModifiedDatetimeMs = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string display_name = 7;
 * @return {string}
 */
proto.Group.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.Group.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};

