'use strict';

angular.module('jhipsterApp')
    .controller('BookController', function ($scope, $state, $modal, Book, ParseLinks) {
      
        $scope.books = [];
        $scope.page = 0;
        $scope.loadAll = function() {
            Book.query({page: $scope.page, size: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.books = result;
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
            $scope.book = {
                title: null,
                description: null,
                id: null
            };
        };
    });
