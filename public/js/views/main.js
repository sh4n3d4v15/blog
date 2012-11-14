define(['backbone' , 'views/post'], function(Backbone , PostView ) {
   		
    var MainView = Backbone.View.extend({

        tagName : 'ul',


    	initialize : function(value){
            console.log(value)
    		this.posts = window.col;
    		this.posts.bind('all' , this.render , this);
    	},

    	render: function(){
    		var elem = $(this.el);
            var i = 0;
    		this.posts.each(function( model ){
                if(i++ < 3){
        			var postView = new PostView({ model : model });
        			elem.append( postView.el )
                }
    		})
            return this;
    	}
    })
   
    return MainView; 
});