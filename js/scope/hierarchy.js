angular.module("tutor")
    .controller("Level1Ctrl", ["$scope", "$timeout", function($scope, $timeout) {
        $scope.state = "normal";

        $scope.$on("emit1-0", function(e) {
            $scope.state = "emit";

            $timeout(function() {
                $scope.$broadcast("broadcast0-1", 1);
            }, 3000);
        });
    }])
    .controller("Level2Ctrl", ["$scope", "$timeout", function($scope, $timeout) {
        $scope.state = "normal";

        $scope.$on("broadcast0-1", function(e) {
            e.preventDefault();

            $scope.state = "broadcast";

            $timeout(function() {
                $scope.$broadcast("broadcast1-2", 1);
            }, 3000);
        });

        $scope.$on("emit2-1", function(e) {
            e.stopPropagation();

            $scope.state = "emit";

            $timeout(function() {
                $scope.$emit("emit1-0", 1);
            }, 3000);

        });
    }])

    .controller("Level3Ctrl", ["$scope", "$timeout", function($scope, $timeout) {
        $scope.state = "normal";

        $scope.test = function() {
            $scope.state = "emit";

            $timeout(function() {
                $scope.$emit("emit2-1", 1);
            }, 3000);
        };

        $scope.$on("broadcast0-1", function(e) {
            if (e.defaultPrevented) {
                console.log("hehe");
            }
        });

        $scope.$on("broadcast1-2", function(e) {
            $scope.state = "broadcast";
        });
    }]);