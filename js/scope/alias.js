angular.module("tutor")
    .controller("AliasCtrl", function() {
        this.a = 1;
        this.foo = function() {
            alert(this.a);
        };
    });