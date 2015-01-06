angular.module("tutor").controller("SimpleCtrl", ["$scope", function ($scope) {
    $scope.tom = {
        name: "Tom",
        gender: 1
    };

    $scope.formatGender = function(gender) {
        if (gender == 0)
            return "女";

        if (gender == 1)
            return "男";
    };

    $scope.abs = function(number) {
        return Math.abs(number);
    };
}]);