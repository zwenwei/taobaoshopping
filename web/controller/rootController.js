angular.module('app')
	.controller('rootController',['$rootScope','$state',function($rootScope,$state){
		$rootScope.user={
			uid:7,
			nickname:'123',
			email:'123@qq.com'
		};

		$rootScope.goPage=function(stateName,params){
			console.log('params==>',params);
			$state.go(stateName,params);
		};
		$rootScope.goBack=function(){
			history.go(-1);
		};
	}])