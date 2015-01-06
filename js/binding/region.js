angular.module("tutor").controller("RegionCtrl", ["$scope", function($scope) {
    $scope.provinceArr = ["江苏", "云南"];
    $scope.cityArr = [];

    $scope.$watch("selectedProvince", function(province) {
        // 真正有用的代码在这里，实际场景中这里可以是调用后端服务查询的关联数据
        switch (province) {
            case "江苏": {
                $scope.cityArr = ["南京", "苏州"];
                break;
            }
            case "云南": {
                $scope.cityArr = ["昆明", "丽江"];
                break;
            }
        }
    });

    $scope.selectProvince = function(province) {
        $scope.selectedProvince = province;
    };

    $scope.selectCity = function(city) {
        $scope.selectedCity = city;
    };
}]);