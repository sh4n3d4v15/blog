define(['backbone','text!templates/fullPost.html'], function(Backbone , fullPostTemplate) {
   
    var FullPostView = Backbone.View.extend({
    	el : $('#main'),

    	template : _.template( fullPostTemplate ),

    	initialize : function(){
    		this.render();
    		console.log('made full view');
    	},

    	render: function(){
    		var elem = this.el;
    		elem.html( this.template( this.options.model.toJSON() ));
    		return this;
    	}
    })
   
    return FullPostView; 
});