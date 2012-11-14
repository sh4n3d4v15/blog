define(['backbone','text!templates/longPost.html'], function(Backbone , LongPostTemplate ) {
        
        
    var LongPostView = Backbone.View.extend({

        template : _.template( LongPostTemplate ),


        initialize : function(){
            this.render();
        },

        render: function(){
            $(this.el).html( this.template( this.options.model.toJSON() ));
            return this;
        }
    })
   
    return LongPostView; 
});