angular.module('app')
	.controller('detailsController',['$scope','$stateParams','API','utils',function($scope,$stateParams,API,utils){

		$scope.count =1 ;
		utils.tips.showLoadTips();
		API.fetchGet('/details/'+$stateParams.id,$stateParams)
			.then(function(data){
				$scope.data = data.data;
				utils.tips.hideLoadTips();
			})
			.catch(function(err){
				console.log(err);
				utils.tips.hideLoadTips();
			})
		$scope.addShopCart =function(){

		};
	}])