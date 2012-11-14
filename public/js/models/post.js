define(['backbone'], function(Backbone) {	
   
    var PostModel = Backbone.Model.extend({
    	defaults : function() {
            return {
        		title : 'Default Post title',
        		date : '22 October 2012',
        		content : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa.',
                category : 'coding',
                disqus:     'gen'
            }
    	},
    	url : '/post',

        change : function(){
            console.log('change event!')
        },

    	initialize : function(){
    		console.log('post model created')
    	},
    	shortText: function(){
    		this.short = this.content.substring(0,50)
    	}
    })
   
    return PostModel; 
});