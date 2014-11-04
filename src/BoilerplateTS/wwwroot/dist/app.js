/*! boilerplateTS - v0.0.0 - 2014-11-04
* Copyright (c) 2014 ; Licensed  */
var App;
(function (App) {
    (function (Home) {
        "use strict";

        var HomeController = (function () {
            function HomeController($scope) {
                this.$scope = $scope;
                this.init();
            }
            HomeController.prototype.init = function () {
                this.$scope.message = "Hello world from app";
            };
            HomeController.$inject = ["$scope"];
            return HomeController;
        })();
        Home.HomeController = HomeController;
    })(App.Home || (App.Home = {}));
    var Home = App.Home;
})(App || (App = {}));
//# sourceMappingURL=homeController.js.map

//# sourceMappingURL=_localreferences.js.map

var App;
(function (App) {
    'use strict';
    var app = angular.module('app', []).controller("homeCtrl", App.Home.HomeController);
})(App || (App = {}));
//# sourceMappingURL=app.js.map
