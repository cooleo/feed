/**
* Game.js
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
    thumbBucket: 'string',
    thumb: 'string', // thumb name, and we can easy scale by size : -origin, -small, -medium : ex: 1939340339303u3.jpg should be thumb=1939340339303u3, 
    type: 'integer', // movies, music mv, clip, funny clip...
    extention: 'string'
  }
};

