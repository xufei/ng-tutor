angular.module("tutor").controller("SwitchCtrl", ["$scope", function ($scope) {
    $scope.condition = "";

    $scope.a = function() {
        $scope.condition = "A";
    };

    $scope.b = function() {
        $scope.condition = "B";
    };

    $scope.c = function() {
        $scope.condition = "C";
    };
}]);