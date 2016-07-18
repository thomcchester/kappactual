var KApp = angular.module("KApp", ['ngMaterial', 'ngMessages', 'ngRoute', 'googlechart']);

KApp.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);

var KAppAdmin = angular.module("KAppAdmin", ['ngMaterial', 'ngMessages', 'ngRoute', 'md.data.table']);

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

var KAppRegistration = angular.module("KAppRegistration", ['ngMaterial', 'ngRoute']);

KAppRegistration.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);

var KAppLogin = angular.module("KAppLogin", ['ngMaterial', 'ngRoute']);

KAppLogin.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

}]);
