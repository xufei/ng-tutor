angular.module("tutor")
    .controller("NewScopeCtrl", ["$scope", function($scope) {
        $scope.sum1 = 0;
        $scope.sum2 = 0;
        $scope.arr = [1, 2, 3];
    }]);