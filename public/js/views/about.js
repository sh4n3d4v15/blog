define(['backbone','text!templates/about.html'], function(Backbone , AboutTemplate) {
   
    var HomeView = Backbone.View.extend({
    	el : $('#main'),

    	initialize : function(){
    		this.render();
    		console.log('about section view');
    	},

    	render: function(){
            var elem = this.el;
            elem.html( AboutTemplate )

    		return this;
    	}
    })
   
    return HomeView; 
});