define(['backbone','text!templates/section.html','views/main','views/latest','views/catergories'], function(Backbone , sectionTemplate , MainView , LatestView, CatergoryView) {
   
    var HomeView = Backbone.View.extend({
    	el : $('#main'),

    	template : _.template( sectionTemplate ),

    	initialize : function(){
    		this.render();
    	},

    	render: function(){
            var elem = this.el;
            this.mainView = new MainView() 
            this.latest = new LatestView();
            this.cat = new CatergoryView();
            elem.html( this.template() );
            $('#170' , this.el).html( this.latest.el );
            $('#catergories' , this.el).html( this.cat.el );
            $('#postList' , this.el).addClass('ui-list').html( this.mainView.el );
            $('#headLatest' , this.el).html("Latest Posts");
    		return this;
    	}
    })
   
    return HomeView; 
});