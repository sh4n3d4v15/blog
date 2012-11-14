define(['backbone','text!templates/latest.html'], function(Backbone , LatestTemplate) {
   
    var LatestView = Backbone.View.extend({

    	template : _.template( LatestTemplate ),

    	initialize : function(){
            this.posts = window.col;
            this.posts.bind('all' , this.render , this);

    	},

    	render: function(){
            var first = this.posts.models[0];
           $(this.el).html( this.template( first.toJSON() ) );
            return this;
    	}
    })
   
    return LatestView; 
});