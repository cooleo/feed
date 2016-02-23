/**
* Music.js
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
    duaration: 'string',
    length:    'string',
    thumbBucket: 'string',
    thumb: 'string',
    artist: 'string',
    type: 'integer', // movies, music mv, clip, funny clip...
    extention: 'string'
  }
};

