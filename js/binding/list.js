angular.module("tutor").controller("ListCtrl", ["$scope", function($scope) {
    $scope.items = [];

    for (var i=0; i<10; i++) {
        $scope.items.push({
            title:i
        });
    }

    $scope.selectedItem = $scope.items[0];

    $scope.select = function(item) {
        $scope.selectedItem = item;
    };
}]);