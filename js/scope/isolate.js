angular.module("tutor").controller("IsolateCtrl", ["$scope", function ($scope) {
    $scope.log = "";

    var child = $scope.$new();
    child.a = 1;

    child.$watch("a", function(newValue) {
        $scope.log += newValue + "\n";
    });

    $scope.change = function() {
        child.a++;
    };
}]);