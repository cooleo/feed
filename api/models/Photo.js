/**
* Photo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	title: 'string',
    width: 'integer',
    height: 'integer',
    bucket: 'string',
    filename: 'string',
    extention: 'string',
    type: 'integer',           //0 internal, 1 external
    source:{
        model:'source'
    }
  }
};

