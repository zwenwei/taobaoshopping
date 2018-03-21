const service = require(__basename+'/service/service.js');

const SQL =require(__basename+'/lib/sql/sql.js');

const common = require(__basename+'/common/common.js');

const utils = require(__basename+'/lib/utils/utils.js');

const moment = require('moment');

class RoutesController{
	constructor(){}

	rootController(req,res){
		res.render('index');
	}

	registerController(req,res){
		let sql = SQL.findOneForReg(req.body.email);

		service.query(sql)

		.then(function(result){
			if(Array.isArray(result) && result.length===0){

				utils.addCrypto(req.body,'pwd');
				
				let insertsql = SQL.insertOneForReg(req.body);

				service.query(insertsql)

				.then(function(result){
					res.send(
						common.register.success
						);
				})
				.catch(function(err){
					res.send(common.register.error
						);
				})

			}else{
				res.send(common.register.warning);
			}
		})
		.catch(function(err){
			res.send(common.register.error);
		})

	}

	loginController(req,res){

		utils.addCrypto(req.body,'pwd');

		var loginsql = SQL.findOneForLogin(req.body);
		

		service.query(loginsql)
			.then(function(result){
				if(Array.isArray(result) && result.length===1){
					res.send(common.login.success);
				}else{
					res.send(common.login.warning);
				}
			})
			.catch(function(err){	
				res.send(common.login.error);
			})
	}

	homeController(req,res){
		let homesql = SQL.findAllForHome();

		service.query(homesql)

			.then(function(result){
				res.send(result);
			})
			.catch(function(err){
				res.json({msg:'查询失败'});
			})
	}

	detailsController(req,res){
		let detailssql = SQL.findOneForDetails(req.query);
		service.query(detailssql)
		.then(function(result){
			res.send(result);
		})
		.catch(function(err){
			res.json({'msg':'查询失败'});
		})
	}

	commentController(req,res){
		let commentsql = SQL.findOneForComment(req.query);
		service.query(commentsql)
		.then(function(result){
			result.forEach(function(v){
				v.commentTime= moment(v.commentTime).format('YYYY-MM-DD-HH:mm:ss');
			});
			res.send(result);
		})
		.catch(function(err){
			res.json({'msg':'查询失败'});
		})
	}
}
module.exports = new RoutesController();