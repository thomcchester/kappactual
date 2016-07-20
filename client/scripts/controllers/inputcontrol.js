KApp.controller('InputController',  ['$scope', '$log', '$http', '$window', 'ClientService',function($scope, $log, $http, $window, ClientService) {
    var clientService = ClientService;


    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };

    // $scope.submitEmail(contactPackage);
    // $scope.submit.email = "";
    // $scope.fade = "";


$scope.inputData = {};

$scope.minMax = {};

$scope.getDefaults = function() {
  $http.get("/defaults").then(function(response){
      defaultVariables = response.data[0];
      $scope.minMax = defaultVariables;

      $scope.inputData.monthlyRentPersonal= defaultVariables.monthlyRentPersonalDef;


  });
};
$scope.getDefaults();
console.log("duplexBuy", $scope.inputData.duplexBuy)

var service = ClientService;

$scope.$watchCollection('inputData', function(newVal, oldVal){
    console.log(newVal, "newval");
    console.log("duplexBuy", $scope.inputData.duplexBuy);

});


    $scope.submitEmail = function() {
        data = {
            email: $scope.submit.email,
            maritalStatus: $scope.inputData.maritalStatus,
            zipCode: $scope.inputData.zipCode,
            income: $scope.inputData.income,
            targetPropertyPrice: $scope.inputData.targetPropertyPrice,
            followup: ""
        };
        clientService.submitEmail(data);
        $scope.submit.email = "";
    }


}]);
