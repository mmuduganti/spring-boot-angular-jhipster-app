'use strict';

angular.module('jhipsterApp')
	.controller('BookDeleteController', function($scope, $modalInstance, entity, Book) {

        $scope.book = entity;
        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            Book.delete({id: id},
                function () {
                    $modalInstance.close(true);
                });
        };

    });