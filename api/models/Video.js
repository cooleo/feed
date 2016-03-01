/**
* Video.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	title: 'string',
    description: 'string',
    bucket: 'string',
    filename: 'string',
    embed:'string',
    sourceId:'string',
    duaration: 'string',
    length:    'string',
    thumbBucket: 'string',
    thumb: 'string',
    type: 'integer', // 0: internal, 1: external
    source:{
        model:'source'
    },
    extention: 'string'
  }
};

