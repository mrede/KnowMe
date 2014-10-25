angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.service('PrivateAddressService', function($http, $q) {
  
  return({
                    authorise: authorise,
                    data: data
                    
  });

  var the_data;
  function data() {
    return the_data;
  }

  function authorise(barcode) {
    console.log("AUTHORISING barcode:", barcode)
    var deferred = $q.defer();

    var request = $http.get('http://192.168.51.204:8080/AddressRequest?CustomerId='+barcode)
        .success(function(data) {
          console.log("Authorised?:", data)
            
          the_data = data;
          deferred.resolve( data);
            
        })
        .error(function(data, status, headers, config) {
          console.log("FAIL",data, status, headers, config)
          deferred.reject("not authorised")
        });
        return deferred.promise;
    };
    
});
