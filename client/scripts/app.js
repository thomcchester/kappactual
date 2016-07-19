var KApp = angular.module("KApp", ['ngMessages', 'ngRoute']);

KApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);

var KAppAdmin = angular.module("KAppAdmin", ['ngMessages', 'ngRoute']);

KAppAdmin.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    $routeProvider.
        when("/admin", {
            templateUrl: "/views/admin.html",
            controller: "AdminController"
        }).
        when("/emailList", {
            templateUrl: "/views/partials/emailList.html",
            controller: "EmailController"
        }).
        when("/setVariables", {
            templateUrl: "/views/partials/setVariables.html",
            controller: "SetVariablesController"
        }).
        otherwise({
            redirectTo: '/emailList'
        });
}]);

var KAppRegistration = angular.module("KAppRegistration", ['ngRoute']);

KAppRegistration.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);

var KAppLogin = angular.module("KAppLogin", ['ngRoute']);

KAppLogin.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);
