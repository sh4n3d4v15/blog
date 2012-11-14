define(['backbone','models/resource'], function(Backbone , ResourceModel) {
   
    var ResourceCollection = Backbone.Collection.extend({

    	model : ResourceModel,

    	url : '/resources',

    	initialize: function(){
    		console.log('new ResourceCollection initialized')
    	}
  }) 
    return ResourceCollection; 
});