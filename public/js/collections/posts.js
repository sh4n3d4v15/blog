define(['backbone','models/post'], function(Backbone , PostModel) {
   
    var PostsCollection = Backbone.Collection.extend({

    	model : PostModel,

    	url : '/posts',

    	getByCid: function(cid) {
      	return cid && this._byCid[cid.cid || cid];
    	},

    	initialize: function(){
    		console.log('new PostsCollection initialized')
    	}
  }) 
    return PostsCollection; 
});