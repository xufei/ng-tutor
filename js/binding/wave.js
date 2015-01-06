angular.module("tutor").controller("WaveCtrl", ["$scope", "$timeout", function ($scope, $timeout) {
    $scope.staticItems = [];
    $scope.dynamicItems = [];

    for (var i = 0; i < 720; i++) {
        $scope.staticItems.push(Math.ceil(100 * (1 + Math.sin(i * Math.PI / 180))));
    }

    var counter = 0;

    function addItem() {
        var newItem = Math.ceil(100 * (1 + Math.sin((counter++) * Math.PI / 180)));

        if ($scope.dynamicItems.length > 500) {
            $scope.dynamicItems.splice(0, 1);
        }

        $scope.dynamicItems.push(newItem);

        $timeout(function () {
            addItem();
        }, 10);
    }

    addItem();
}]);