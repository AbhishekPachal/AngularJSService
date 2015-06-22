var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'saveage.html',
				controller:'saveController'
          })
          .when('/displayage',{
                templateUrl: 'displayage.html',
				controller:'displayController'
          });
});

//Controllers
app.controller('saveController',function($scope,ageService){
	$scope.setAge=function(){
		ageService.saveAge($scope.inputage);
	};
	$scope.$on('ageAdded', function () {
        $scope.status="Age Saved";
    });
});
app.controller('displayController',function($scope,ageService){
	$scope.myage=ageService.getAge();
});

//Service
app.factory('ageService', function ($rootScope) {
    var ageObj = {
        age:0,
        saveAge: function (age) {
            this.age=age;
            $rootScope.$broadcast('ageAdded');
        },
		getAge: function(){
			return this.age;
		}
    };
 
    return ageObj;
});
