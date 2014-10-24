angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends ) {
  $scope.friends = Friends.all();

  

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('HomeCtrl', function($scope, $location, $http, $cordovaBarcodeScanner, PrivateAddressService) {

	console.log(typeof cordova == 'undefined') 

	$scope.checkBarcode = function(barcode) {
		PrivateAddressService.authorise(barcode).then(function(data) {

				if (data == true) {
					$location.path('/home.result')
				} else {
					console.log("Data failed. Keep polling")
				}

      }, function(error) {
          console.log("ERRPR", data);
      });
	}

	$scope.scan = function() {
		console.log("TEST")
		if (typeof cordova != 'undefined') {
			$cordovaBarcodeScanner
		    .scan()
		    .then(function(imageData) {
		    	console.log("YUP")
		    	// alert("We got a barcode\n" +
		     //            "Result: " + imageData.text + "\n" +
		     //            "Format: " + imageData.format + "\n" +
		     //            "Cancelled: " + imageData.cancelled);
		      // Success! Barcode data is here
		      $scope.checkBarcode(imageData.text);
		     	//Call JSON request
		     	
		    }, function(error) {
		    	console.log("FAIL")
		      // An error occurred
		      alert("ERROR");
		    });
		} else {
			console.log("changing location");
			$location.path('/home.scanning');
			
			$scope.checkBarcode('fakebarcode');
			
			
		}
	}

	
})

.controller('ScanningCtrl', function($scope) {
	console.log("SCANNER")
})
.controller('ResultCtrl', function($scope) {
	console.log("Result Screen")
});
