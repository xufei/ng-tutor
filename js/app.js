angular.module("tutor", []);

angular.module("tutor").controller("NavCtrl", ["$scope", function($scope) {
    $scope.items = [{
        title: "Simple Binding",
        url: "partials/binding/simple.html"
    }, {
        title: "Array",
        url: "partials/binding/array.html"
    }, {
        title: "Watch",
        url: "partials/binding/watch.html"
    }, {
        title: "List",
        url: "partials/binding/list.html"
    }, {
        title: "Style",
        url: "partials/binding/style.html"
    }, {
        title: "If",
        url: "partials/binding/if.html"
    }, {
        title: "Switch",
        url: "partials/binding/switch.html"
    }, {
        title: "Region",
        url: "partials/binding/region.html"
    }, {
        title: "Employee",
        url: "partials/binding/employee.html"
    }, {
        title: "Wave",
        url: "partials/binding/wave.html"
    }, {
        title: "Sort",
        url: "partials/binding/sort.html"
    }];

    $scope.selectedItem = $scope.items[0];

    $scope.change = function(item) {
        $scope.selectedItem = item;
    };
}]);