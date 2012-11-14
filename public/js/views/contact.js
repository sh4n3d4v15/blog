define(['backbone','text!templates/contact.html'], function(Backbone , ContactTemplate) {
   
    var ContactView = Backbone.View.extend({
    	el : $('#main'),

    	initialize : function(){
    		this.render();
    		console.log('about contact view');
    	},

    	render: function(){
            var elem = this.el;
            elem.html( ContactTemplate )

    		return this;
    	}
    })
   
    return ContactView; 
});