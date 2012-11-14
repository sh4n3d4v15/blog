define(['backbone','text!templates/all.html','views/longPost'], function(Backbone , AllTemplate , LongPostView) {
   
    var AllView = Backbone.View.extend({
    	el : $('#main'),

        template : _.template( AllTemplate ),

    	initialize : function(id){
        	this.posts = window.col;
            this.posts.bind('all' , this.render , this);
            this.render(id);
    	},

        render: function(id){
            var elem = $(this.el);
            elem.addClass('row').html( this.template( AllTemplate ))
            this.posts.each(function( model ){
                if(!id){
                    var longPostView = new LongPostView({ model : model });
                    elem.append( longPostView.render().el )
                    $("html, body").animate({ scrollTop: 0 },300 , 'linear');

                }else{
                    if(model.get('category') == id){
                    console.log(id)
                    var longPostView = new LongPostView({ model : model });
                    elem.append( longPostView.render().el )
                    $("html, body").animate({ scrollTop: 0 },300 , 'linear'); 
                    }
                }
            })
            return this;
        }
    })
   
    return AllView; 
});



