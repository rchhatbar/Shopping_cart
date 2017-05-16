mainObj.controller("mainCtrl", function ($scope, $http) {
    var url = "../Services/json.json";
    $http.get(url).success(function (response) {
        $scope.productList = response.productList;
    });
});