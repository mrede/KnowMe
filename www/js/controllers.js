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

	$scope.polling = false;

	$scope.checkBarcode = function(barcode) {
		PrivateAddressService.authorise(barcode).then(function(data) {

				if (data.status == "authorised") {
					$location.path('/home.result')
					clearInterval($scope.polling)
				} else {
					// We are not authorised. Is authorisation pending?
					if (data.status == "pending") {
						console.log("Data failed. Keep polling")
						if (!$scope.polling) {
							$scope.polling = setInterval(function() { $scope.checkBarcode(barcode)}, 2000)
						}
					} else {
						//Authorisation has been denied by user.
						$location.path('/home.denied')
					}
					
				}

      }, function(error) {
          console.log("ERRPR", error);
      });
	}

	$scope.scan = function() {
		console.log("TEST")
		if (typeof cordova != 'undefined') {
			$cordovaBarcodeScanner
		    .scan()
		    .then(function(imageData) {
		    	$location.path('/home.scanning');
		    	console.log("Scanned:", imageData)
		      if (!imageData.cancelled) {
		      	//Image scan OK
			      $scope.checkBarcode(imageData.text);
			    } else {
			    	//Image scan cancelled or failed
			    	$location.path('/');
			    }
		     	
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
.controller('ResultCtrl', function($scope, PrivateAddressService) {
	console.log("Result Screen", PrivateAddressService.data())
	var data = PrivateAddressService.data();
	var address = data.address.split(",")
	$scope.customer = {
		name: "Mr Ben Ede",
		address: address,
	}
})
.controller('DeniedCtrl', function($scope, $location) {
	console.log("Denied Screen")
	$scope.retry = function() {
		$location.path('/')
	}
});
