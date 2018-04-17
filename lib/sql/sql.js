class SQL {
	constructor(){}

	findOneForReg(field){
		return "SELECT `email` FROM `t_user` WHERE `email`='"+ field +"' ";
	}
	insertOneForReg(o){
		return "INSERT INTO `t_user` (`email`,`nickname`,`pwd`,`phone`) VALUES('" + o.email + "','" + o.nickname + "','" + o.pwd + "','" + o.phone + "')";
	}
	findOneForLogin(o){
		return "SELECT `email`,`nickname` FROM `t_user` WHERE `email`='" + o.email +"' AND `pwd`='"+ o.pwd +"'";
	}
	findAllForHome(){
		return "SELECT * FROM `t_product`";
	}

	findOneForDetails(o){
		return "SELECT * FROM `t_details` WHERE `pid`=" + o.id;
	}

	findOneForComment(o){
		return "SELECT * FROM `t_comment` WHERE `did`=" + o.id;
	}
	findAllForShopcart(o){
		return "SELECT * FROM `t_shopcart` WHERE `email`='"+ o.email + "'"
	}

	insertOneForShopcart(o){
		return "INSERT INTO `t_shopcart`(`imgUrl`,`pname`,`price`,`count`,`email`,`nickname`,`cartTime`,`pid`) VALUES('"+o.imgUrl+"','"+o.pname+"','"+o.price+"','"+o.count+"','"+o.email+"','"+o.nickname+"','"+o.cartTime+"','"+o.pid+"')"
	}
}
module.exports = new SQL();