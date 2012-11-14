define(['backbone'], function(Backbone ) {
   		
    var CatView = Backbone.View.extend({

        tagName : 'ul',

    	initialize : function(){
    		this.posts = window.col;
    		this.posts.bind('all' , this.render , this);
    	},

    	render: function(){
            var allCat = this.posts.pluck('category');
            var cat = _.uniq(allCat)
            console.log(cat)
            count = {};
    		var elem = $(this.el);
            count = {};
            for(var i = 0; i < allCat.length; i++){
                count[allCat[i]] = (count[allCat[i]] || 0) + 1
            }
            console.log( count )
    		for (var i = 0; i < cat.length; i++) {
                elem.append("<li><a href=#cat/"+cat[i]+">"+cat[i]+"</a> <small class= gray-dark>"+count[cat[i]]+"</small></li>")
            };
            return this;
    	}
    })
   
    return CatView; 
});


   