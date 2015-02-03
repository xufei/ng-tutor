angular.module("tutor")
    .controller("AliasCtrl", function($scope, $timeout) {
        this.a = 1;
        this.foo = function() {
            alert(this.a);
        };
    });