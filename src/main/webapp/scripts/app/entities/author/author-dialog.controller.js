'use strict';

angular.module('jhipsterApp').controller('AuthorDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Author',
        function($scope, $stateParams, $modalInstance, entity, Author) {

        $scope.author = entity;
        $scope.load = function(id) {
            Author.get({id : id}, function(result) {
                $scope.author = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('jhipsterApp:authorUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.author.id != null) {
                Author.update($scope.author, onSaveSuccess, onSaveError);
            } else {
                Author.save($scope.author, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
