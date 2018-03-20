angular.module('app')
	.controller('rootController',['$rootScope','$state',function($rootScope,$state){
		$rootScope.goPage=function(stateName,params){
			console.log('params==>',params);
			$state.go(stateName,params);
		}
	}])