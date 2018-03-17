angular.module('app')
	.controller('rootController',['$rootScope','$state',function($rootScope){
		$rootScope.goPage=function(stateName,params){
			$state.go(stateName,params);
		}
	}])