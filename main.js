var chefApp = angular.module('chefApp', ['$scope','firebase', 'ngTouch']);


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


$scope.recipes = [{
        "name": "Chicken Tacos",
        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash3\/t5\/174266_842841_1023237973_q.jpg",
        "current_location": {
            "city": "New York",
            "state": "New York",
            "country": "United States",
            "zip": "",
            "latitude": "40.7167",
            "longitude": "-74",
            "id": "108424279189115",
            "name": "New York, New York"
        },

        {
        "name": "Bacon Wrapped Steak",
        "pic_square": "https:\/\/fbcdn-profile-a.akamaihd.net\/hprofile-ak-ash2\/t5\/1117694_1614542_108355616_q.jpg",
        "current_location": {
            "city": "Houston",
            "state": "Texas",
            "country": "United States",
            "zip": "",
            "latitude": "29.7629",
            "longitude": "-95.3832",
            "id": "115963528414384",
            "name": "Houston, Texas"
        },
  

}]);