const service = require(__basename+'/service/service.js');

const SQL =require(__basename+'/lib/sql/sql.js');

const common = require(__basename+'/common/common.js');

const utils = require(__basename+'/lib/utils/utils.js');

class RoutesController{
	constructor(){}

	homeController(req,res){
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
}
module.exports = new RoutesController();