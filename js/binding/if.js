angular.module("tutor").controller("IfCtrl", ["$scope", function ($scope) {
    $scope.condition = 1;

    $scope.change = function() {
        $scope.condition = 2;
    };
}]);