const RoutesController = require(__basename+'/routesController/routesController.js');

module.exports = function(app){
	app.get('/',RoutesController.rootController);

	app.post('/register',RoutesController.registerController);

	app.post('/login',RoutesController.loginController);

	app.get('/main/home',RoutesController.homeController);

	app.get('/details/:id',RoutesController.detailsController);

	app.get('/comment/:id',RoutesController.commentController);

};