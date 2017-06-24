(function() {
	'use strict';
	/**
	* MEAN Module
	*
	* Description
	*/
	angular.module('App', [
		'ngRoute',
		'oc.lazyLoad',
   ])
	.constant('serverRequestAddr', {
		devServerAdd : 'http://localhost:3000'
	})
	.config(['$routeProvider', '$locationProvider','serverRequestAddr', '$sceDelegateProvider','$httpProvider','$compileProvider', function($routeProvider, $locationProvider, serverRequestAddr, $sceDelegateProvider, $httpProvider, $compileProvider) {
		

		/*========================================
		=            $compileProvider            =
		========================================*/
		
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
		
		/*=====  End of $compileProvider  ======*/
		
		/*=================================
		=            Whitelist            =
		=================================*/
		
		$sceDelegateProvider.resourceUrlWhitelist([
			   // Allow same origin resource loads.
			   'self',
			   // Allow loading from our assets domain.  Notice the difference between * and **.
			    serverRequestAddr.devServerAdd+"/**"
			   ]);
		
		/*=====  End of Whitelist  ======*/

		$routeProvider
		        
        
        
        
        

        .when('/register', {
			templateUrl: serverRequestAddr.devServerAdd + '/register', // sends request to server for html page
			controller: 'registerCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/registerCtrl.js',
						]})
				}]
			}
        })

        .when('/task', {
			templateUrl: serverRequestAddr.devServerAdd + '/task', // sends request to server for html page
			controller: 'taskCtrl',
			resolve: {
				loadAsset: ['$ocLazyLoad', function($ocLazyLoad) {
					return $ocLazyLoad.load({
						files : [
						serverRequestAddr.devServerAdd + '/javascripts/controllers/taskCtrl.js',
						]})
				}]
			}
        })
		.otherwise('/');
   	$locationProvider.hashPrefix('');
 	}])
})();
