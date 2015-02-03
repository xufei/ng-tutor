angular.module("tutor").controller("RootCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
    $scope.log = "";

    $rootScope.$watch("rootA", function(newVal) {
        if (newVal) {
            $scope.log += newVal + "\n";
        }
    });
}]);