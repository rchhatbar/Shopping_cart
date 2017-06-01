mainObj.controller("mainCtrl", function ($scope, $http, cartService) {
    var url = "http://162.17.231.114:1215/ShoppingCart.svc/GetProductList";
    //Display data from json file
    $http.get(url).success(function (response) {
        $scope.productList = response.GetProductListResult;
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

mainObj.controller("addProductCtrl", function ($scope, $http) {
    $scope.postdata = function (aPname, aPdescription, aPimage, aPprice) {
        var data = {
            user_id: "1",
            product_name: aPname,
            product_price: aPprice,
            product_description: aPdescription,
            product_image_path: aPimage
        };
        $http.post('http://162.17.231.114:1215/ShoppingCart.svc/CreateProduct', JSON.stringify(data)).then(function (response) {
            if (response.data)
                alert("Post Data Submitted Successfully!");
        }, function (response) {
            //alert("somethings wrong");
            $scope.msg = "Service not Exists";
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
        });
    };
});