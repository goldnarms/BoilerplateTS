/// <reference path="../_all.d.ts" />

module App.Home {
    "use strict";

    export interface IHomeController {
 
    }

    export class HomeController implements IHomeController {
        public static $inject = ["$scope"];

        constructor(private $scope: any) {
            this.init();
        }

        private init(): void {
            this.$scope.message = "Hello world from app";
        }
    }
}