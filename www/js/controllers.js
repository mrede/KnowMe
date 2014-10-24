angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends ) {
  $scope.friends = Friends.all();

  

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('HomeCtrl', function($scope, $location, $http, $cordovaBarcodeScanner) {

	console.log(typeof cordova == 'undefined') 


	$scope.scan = function() {
		console.log("TEST")
		if (typeof cordova != 'undefined') {
			$cordovaBarcodeScanner
		    .scan()
		    .then(function(imageData) {
		    	console.log("YUP")
		    	alert("We got a barcode\n" +
		                "Result: " + imageData.text + "\n" +
		                "Format: " + imageData.format + "\n" +
		                "Cancelled: " + imageData.cancelled);
		      // Success! Barcode data is here

		     	//Call JSON request
		     	
		    }, function(error) {
		    	console.log("FAIL")
		      // An error occurred
		      alert("ERROR");
		    });
		} else {
			console.log("changing location");
			$location.path('/home.scanning');
			
			$http.get('http://192.168.51.212/authorise_request.json.php?address_id=test').success(function(data) {
						console.log("DATA", data.authorised)
    				
    				if (data.authorised == true) {
    					console.log("We are validated")
    					$location.path('/home.result');
    				}
  				}).
  				error(function(data, status, headers, config) {
  					console.log("FAIL",data, status, headers, config)
    
  				});
			
			
		}
	}

	
})

.controller('ScanningCtrl', function($scope) {
	console.log("SCANNER")
})
.controller('ResultCtrl', function($scope) {
	console.log("Result Screen")
});
