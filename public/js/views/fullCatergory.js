define(['backbone','text!templates/all.html','views/longPost'], function(Backbone , AllTemplate , LongPostView) {
   
    var AllView = Backbone.View.extend({
    	el : $('#main'),

        template : _.template( AllTemplate ),

    	initialize : function(){
        	this.posts = window.col;
            this.posts.bind('all' , this.render , this);
            this.render();
    	},

        render: function(){
            var elem = $(this.el);
            elem.addClass('row').html( this.template( AllTemplate ))
            this.posts.each(function( model ){
                console.log(model)
                var longPostView = new LongPostView({ model : model });
                elem.append( longPostView.render().el )
            })
            return this;
        }
    })
   
    return AllView; 
});