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
