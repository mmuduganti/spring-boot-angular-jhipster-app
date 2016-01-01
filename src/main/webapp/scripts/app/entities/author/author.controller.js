'use strict';

angular.module('jhipsterApp')
    .controller('AuthorController', function ($scope, $state, $modal, Author, ParseLinks) {
      
        $scope.authors = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Author.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.authors = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.author = {
                name: null,
                id: null
            };
        };
    });
