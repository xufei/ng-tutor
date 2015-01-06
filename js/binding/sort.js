angular.module("tutor").controller("SortCtrl", ["$scope", "$timeout", function ($scope, $timeout) {
    $scope.arr = [72, 14, 10, 63, 4, 25, 55, 2, 4, 43];

    $scope.sort = function () {
        if (!sort($scope.arr)) {
            $timeout(function() {
                $scope.sort();
            }, 500);
        }
    };

    function sort(array) {
        // 喵的，写到这个才发现yield是多么好啊
        for (var i = 0; i < array.length; i++) {
            for (var j = array.length; j > 0; j--) {
                if (array[j] < array[j - 1]) {
                    var temp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = temp;

                    return false;
                }
            }
        }

        return true;
    }
}]);