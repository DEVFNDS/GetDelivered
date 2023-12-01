'use strict';

var mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  Schema = mongoose.Schema;


/**
 * product Schema
 **/

var productSchema = {
    productName: {
        type: String,
        trim: true,
        required: true
    },
    productDescription : {
        type: String,
        trim: true,
        required: true
    },
    // productImage : {
    //     type: String,
    //     trim: true,
    //     required: true
    // },
    category : {
        type: String,
        trim: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
};

module.exports = mongoose.model('product', productSchema);