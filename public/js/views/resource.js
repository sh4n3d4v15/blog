define(['backbone','text!templates/resource.html'], function(Backbone , resourceTemplate) {
   
    var ResourceView = Backbone.View.extend({

    	template : _.template( resourceTemplate ),
    	tagName : 'article',
        className : "row work",

    	initialize : function(){
    		this.render();
    	},

    	render: function(){
    		$(this.el).html( this.template( this.options.model.toJSON() ));
            return this;
    	}
    })
   
    return ResourceView; 
});