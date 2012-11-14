define(['backbone'], function(Backbone) {	
   
    var ResourceModel = Backbone.Model.extend({
    	defaults : function() {
            return {
        		title : 'javaScript book',
        		date : '01 April 2012',
                author: '',
                img: '',
                catergory : 'Book',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam cursus. Morbi ut mi. Nullam enim leo, egestas id, condimentum at, laoreet mattis, massa.'
            }
    	},
    	url : '/resource',

    	
    	initialize : function(){
    		console.log('resource model created')
    	}
    })
   
    return ResourceModel; 
});