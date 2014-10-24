angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.service('PrivateAddressService', function($http, $q) {
  
  return({
                    authorise: authorise,
                    
  });

  function authorise(barcode) {
    console.log("AUTHORISING barcode:", barcode)
    var deferred = $q.defer();

    var request = $http.get('http://192.168.51.212/authorise_request.json.php?address_id='+barcode)
        .success(function(data) {
          console.log("Authorised:", data.authorised)
            
          if (data.authorised == true) {
              console.log("We are validated")
              //$location.path('/home.result');

          }
          deferred.resolve( data.authorised);
            
        })
        .error(function(data, status, headers, config) {
          console.log("FAIL",data, status, headers, config)
          deferred.reject("not authorised")
        });
        return deferred.promise;
    };
    
});
