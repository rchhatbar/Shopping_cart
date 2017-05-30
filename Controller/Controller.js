mainObj.controller("mainCtrl", function ($scope, $http, cartService) {
    var url = "Services/json.json";
    //Display data from json file
    $http.get(url).success(function (response) {
        $scope.productList = response.productList;
    });

    $scope.aFlag = true;
    var cartItems = [];

    $scope.createCartItems = function (id, qty, price, name, aVar) {
        $scope.cartItems = cartService.addItem(id, name, qty, price);
        aVar.aFlag = false;
    };

    $scope.removeCartItem = function (index, aVar) {
        $scope.cartItems = cartService.deleteItem(index);
        aVar.aFlag = true;
    };

});

mainObj.controller("cartCtrl", function ($scope, cartService) {
    var cartItems = [];
    $scope.cartItems = cartService.getCart();
    $scope.removeItem = function (index, aVar) {
        $scope.cartItems = cartService.deleteItem(index);
        //aVar.aFlag = true;
        $scope.cartItems = cartService.getCart();
    };
});