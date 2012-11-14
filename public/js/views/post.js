define(['backbone','text!templates/post.html'], function(Backbone , postTemplate) {
   
    var PostView = Backbone.View.extend({

    	template : _.template( postTemplate ),
    	tagName : 'li',
        className: "media",

    	

    	initialize : function(){
    		this.render();
    	},

    	render: function(){
    		$(this.el).html( this.template( this.options.model.toJSON() ));
            return this;
    	}
    })
   
    return PostView; 
});