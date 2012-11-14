define(['backbone','text!templates/resources.html', 'collections/resources','views/resource'], function(Backbone , ResourceTemplate , ResourceCollection, ResourceView) {
   
    var HomeView = Backbone.View.extend({
    	el : $('#main'),

    	initialize : function(){
            this.resources = new ResourceCollection();
            this.resources.fetch();
            this.resources.bind('all' , this.render , this);
    		console.log('resource section view');
    	},

    	render: function(){
            var elem = this.el;
            elem.html( ResourceTemplate )
            this.resources.each(function(model){
                var reso = new ResourceView({model : model})
                $("#loadResources" , elem).prepend( reso.render().el )
            })

    		return this;
    	}
    })
   
    return HomeView; 
});