/**
* Feed.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		title: 'string',
	    description: 'string',
	    url: {
	      type: 'string'
	    },
	    content: 'text',
	    source:{
	           model:'source'
	    },
      owner: {
             model: 'user'
      },
	    thumbBucket: 'string',
      thumb: 'string',
      likes: 'integer',
      shares: 'integer',
      pins: 'integer',
      comments: 'integer',
      points: 'integer', // = sum(likes, shares, pins, comments)
      tags: {
      		collection:'tag'
    	},
      status: 'integer',//1 active, 0 inactive
      videoId: 'string',
      photoId: 'string',
      articleId: 'string',


  }
};

