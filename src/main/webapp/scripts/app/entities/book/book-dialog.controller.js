'use strict';

angular.module('jhipsterApp').controller('BookDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Book',
        function($scope, $stateParams, $modalInstance, entity, Book) {

        $scope.book = entity;
        $scope.load = function(id) {
            Book.get({id : id}, function(result) {
                $scope.book = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('jhipsterApp:bookUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.book.id != null) {
                Book.update($scope.book, onSaveSuccess, onSaveError);
            } else {
                Book.save($scope.book, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
