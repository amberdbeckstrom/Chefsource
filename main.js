var chefApp = angular.module('chefApp', ['firebase']);


// chefApp.controller('', ['$scope', function($scope){

//     $scope.exercise = '';
// 	$scope.sets = '';
// 	$scope.reps = '';

// }]);


chefApp.controller('MainCtrl', ['$scope', function($scope){
	var ref=new Firebase('https://chefsource.firebaseio.com/');
	var sync = $firebase(ref);
  	// download the data into a local object
  	var syncObject = sync.$asObject();
  	// synchronize the object with a three-way data binding
 	// click on `index.html` above to see it used in the DOM!
  	syncObject.$bindTo($scope, "data");

  	$scope.info="ambs data"
});