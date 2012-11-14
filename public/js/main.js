require.config({
	paths : {
		jquery 			: 'libs/jquery/jquery',
		bootstrap 	: 'libs/bootstrap/bootstrap',
		underscore 	: 'libs/underscore/underscore-min',
		backbone 		: 'libs/backbone/backbone-min',
		text 				: 'libs/require/text',
		mainConfigFile: "public/js/main"
	},

	shim: {
		backbone : {
			'deps': ['jquery','underscore'],
			'exports': 'Backbone'
		}
	}
})

require(['views/main','views/fullPost','backbone','collections/posts','views/home','views/about','views/contact','views/all','views/resources'] , function(MainView , FullPost ,  Backbone ,PostCollection, HomeView , AboutView , ContactView , AllView , ResourcesView){

		var AppRouter = Backbone.Router.extend({

			// initialize: function(){
			// 	window.col = new PostCollection()
			// 	window.col.fetch()
			// 	console.log('MainView')
			// },

		routes: {
			"" 					: 'index',
			"post/:id" 	: 'viewPost',
			"contact"		: 'contact',
			"about"			: 'showAbout',
			"all" 			: 'showAll',
			"resources" : 'showResources',
			"cat/:id"	: 'showACatergory'
		},

		index : function(){
				window.col = new PostCollection()
				window.col.fetch()
				window.mainView = new HomeView();			
			$('#main').removeClass('row');								
		},

		showAbout : function(){
			window.about = new AboutView();
		},
		showAll : function(){
			window.all = new AllView();
		},
		showACatergory :function(id){
			window.all = new AllView(id);
		},

		viewPost : function(id){
		if(window.col.length < 1){
			window.col.fetch({success : function(){
				$("html, body").animate({ scrollTop: 0 },300 , 'linear');
				var pModel = '';
				window.col.each(function( model ){
					if(model.get('_id')===id){
						pModel =  model;
					}
				})
				var fullPost = new FullPost({model : pModel });
			}});
		}else{
		// how do i render this model without coming from the home page?
			$("html, body").animate({ scrollTop: 0 },300 , 'linear');
				var pModel = '';
				window.col.each(function( model ){
					if(model.get('_id')===id){
						pModel =  model;
					}
				})
				var fullPost = new FullPost({model : pModel });		
			}	
			return false;
		},

		contact : function(){
			window.contact = new ContactView();
		},
		showResources : function(){
			var resourceView = new ResourcesView
		}

	});

	$(function(){
		var appRouter = new AppRouter();
		Backbone.history.start();
	})
})


