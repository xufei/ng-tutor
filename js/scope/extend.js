angular.module("tutor").controller("OuterCtrl", ["$scope", function ($scope) {
    $scope.a = 1;

    $scope.data = {
        a: 1
    };
}]);

angular.module("tutor").controller("InnerCtrl", ["$scope", function ($scope) {
}]);