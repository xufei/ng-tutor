angular.module("tutor").controller("WatchCtrl", ["$scope", function ($scope) {
    $scope.a = 1;

    $scope.$watch("a", function(newValue) {
        alert(newValue);
    });

    $scope.changeA = function() {
        $scope.a = 2;
    };

    $scope.arr = [0];

    $scope.$watch("arr", function(newValue) {
        alert("change:" + newValue.join(","));
    });

    $scope.changeArr = function() {
        $scope.arr = [7, 8];
    };

    $scope.$watch("arr", function(newValue) {
        alert("deep:" + newValue.join(","));
    }, true);

    $scope.addItem = function() {
        $scope.arr.push($scope.arr.length);
    };
}]);