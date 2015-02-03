angular.module("tutor").factory("EventBus", function() {
    var eventMap = {};

    var EventBus = {
        on : function(eventType, handler) {
            //multiple event listener
            if (!eventMap[eventType]) {
                eventMap[eventType] = [];
            }
            eventMap[eventType].push(handler);
        },

        off : function(eventType, handler) {
            for (var i = 0; i < eventMap[eventType].length; i++) {
                if (eventMap[eventType][i] === handler) {
                    eventMap[eventType].splice(i, 1);
                    break;
                }
            }
        },

        fire : function(event) {
            var eventType = event.type;
            if (eventMap && eventMap[eventType]) {
                for (var i = 0; i < eventMap[eventType].length; i++) {
                    eventMap[eventType][i](event);
                }
            }
        }
    };
    return EventBus;
});

angular.module("tutor")
    .controller("Level3Ctrl1", ["$scope", "$timeout", "EventBus", function($scope, $timeout, EventBus) {
        $scope.state = "normal";

        $scope.test = function() {
            $scope.state = "event";

            $timeout(function() {
                EventBus.fire({type: "notice.from.Lv3ctrl1", data:{}});
            }, 3000);
        };
    }])
    .controller("Level3Ctrl2", ["$scope", "$timeout", "EventBus", function($scope, $timeout, EventBus) {
        $scope.state = "normal";

        EventBus.on("notice.from.Lv3ctrl1", function(evt) {
            $scope.state = "event";
        });
    }]);