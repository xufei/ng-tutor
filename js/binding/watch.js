angular.module("tutor").controller("WatchCtrl", ["$scope", function ($scope) {
    $scope.log = "";

    $scope.a = 1;

    $scope.$watch("a", function(newValue) {
        $scope.log += (newValue) + "\n";
    });

    $scope.changeA = function() {
        $scope.a = 2;
    };

    $scope.arr = [0];

    $scope.$watch("arr", function(newValue) {
        $scope.log += ("change:" + newValue.join(",")) + "\n";
    });

    $scope.changeArr = function() {
        $scope.arr = [7, 8];
    };

    $scope.$watch("arr", function(newValue) {
        $scope.log += ("deep:" + newValue.join(","))+ "\n";
    }, true);

    $scope.addItem = function() {
        $scope.arr.push($scope.arr.length);
    };
}]);