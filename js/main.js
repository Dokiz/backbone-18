$(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
		Router: {}
    };

    window.template = function(id) {
        return _.template( $('#' + id). html() );
    };

    App.Router = Backbone.Router.extend({
		routes: {
			''                 : 'index',
			'page/:id/sdgsdgs' : 'page'
		},
		index: function(){
			console.log('Всем привет');
		},
		page: function(id){
			console.log('Это роут page' + id + '!!!');
		}
});
new App.Router();
Backbone.history.start();

	});