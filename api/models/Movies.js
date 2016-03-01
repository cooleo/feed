/**
* Movies.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	slug: 'string',
    title: 'string',
    description: 'string',
    duaration: 'string',
    length:    'integer',
    imbd:'string',
    year: 'integer',
    actors: 'string',
    actist: 'string',
    url: 'string',
    content: 'text',
    thumbBucket: 'string',
    thumb: 'string',
    content:'string',
    country: {
      model: 'country'
    },
    videos: {
      collection: 'video'
    }
  }
};

