'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({

  committed:Number,
  des1:String,
  des2:String,
  dilution:Number,
  name:String
});

module.exports = mongoose.model('Thing', ThingSchema);