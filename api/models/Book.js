/**
* Book.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	slug: 'string',
    title: 'string',
    description: 'string',
    writer: 'string',
    publicser: 'string',
    price: 'double',
    year: 'integer',
    language: 'string',
    url: 'string',
    content: 'text',
    thumb: {
      model: 'photo'
    },
    country: {
      model: 'country'
    }
    
  }
}

