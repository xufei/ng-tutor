angular.module("tutor").controller("ArrayCtrl", ["$scope", function ($scope) {
    $scope.arr1 = [1, 2, 3];
    $scope.arr2 = [1, 1, 3];

    $scope.arr3 = [
        [11, 12, 13],
        [21, 22, 23],
        [31, 32, 33]
    ];

    $scope.arr4 = [{
        name: "Tom",
        age: 5
    }, {
        name: "Jerry",
        age: 2
    }];

    $scope.add = function () {
        $scope.arr1.push($scope.arr1.length + 1);
    };
}]);