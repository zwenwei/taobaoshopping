angular.module('app')
	.controller('registerController',['$scope','$timeout','$state','utils','API',function($scope,$timeout,$state,utils,API){
		$scope.data={
			phone:'',
			email:'',
			nickname:'',
			pwd:'',
			cpwd:''
		};
		$scope.register=function(){
			if(!validRegister()){
				return;
			}
			utils.tips.showLoadTips();
			API.fetchPost('/register',$scope.data)
			.then(function(data){
				utils.tips.hideLoadTips();
				showTips(data.data.msg);
				$timeout(function(){
					$scope.tips.close();
					$state.go('login');
				},1000);	
			})
			.catch(function(err){
				utils.tips.hideLoadTips();
				showTips(data.data.msg);
			})
		};
		function showTips(msg){
			utils.tips.showTips(msg,$scope);
		};
		function validRegister(){

			// 验证手机号码
			if(!utils.validForm.isNotEmpty($scope.data.phone)){
				showTips('手机号码不能为空');
				return false;
			}else if(!utils.validForm.isPhone($scope.data.phone)){
				showTips('手机号码格式不正确');
				return false;
			}
			// 验证邮箱
			if(!utils.validForm.isNotEmpty($scope.data.email)){
				showTips('邮箱不能为空');
				return false;
			}else if(!utils.validForm.isEmail($scope.data.email)){
				showTips('邮箱格式不正确');
				return false;
			}
			// 验证昵称
			if(!utils.validForm.isNotEmpty($scope.data.nickname)){
				var time = new Date().getTime().toString();
				$scope.data.nickname= time.slice(time.length-8);
				return false;
			}else {
				if(!utils.validForm.isLength($scope.data.nickname,3,8)){
					showTips('昵称长度3-8位');
					return false;
				}
				if(utils.validForm.isNotOnlyW($scope.data.nickname)){
					showTips('昵称只能是下划线数字字母组合');
					return false;
				}
			}
			// 验证密码
			if(!utils.validForm.isNotEmpty($scope.data.pwd)){
				showTips('密码不能为空');
				return false;
			}else if(!utils.validForm.isLength($scope.data.pwd,8,16)){
				showTips('密码长度为8-16');
				return false;
			}else if(utils.validForm.isNotOnlyW($scope.data.pwd)){
				showTips('密码只能是下划线数字字母组合');
				return false;
			}

			if(!utils.validForm.isEqual($scope.data.pwd,$scope.data.cpwd)){
				showTips('密码不一致,请重新输入');
				return false;
			}
			
			return true;
			// utils.tips.showTips('用户信息不正确');
		};
	}]);