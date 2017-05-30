mainObj.config(['$routeProvider', function ($routeProvider) {
    //alert("inside route");
    $routeProvider.when('/home', {
            templateUrl: '/Templates/productDisplay.html', controller: 'mainCtrl'
        })
        .when('/cart', {
            templateUrl: '/Templates/cart.html', controller: 'cartCtrl'
        })

        .otherwise({
            redirectTo: 'home'
        });

}]);

//routeObj.controller('cartCtrl', function ($scope) {
//    $scope.message = 'This is cart. ctrlfile';
//});