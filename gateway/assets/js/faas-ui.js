angular
  .module('faasUI', ['ngMaterial'])
  .controller('faasCtrl', function($mdSidenav, $scope) {
    $scope.avatar = function(func) {
      return 'https://www.gravatar.com/avatar/' + md5(func.name) + '?d=identicon&f=y';
    };
    $scope.functions = [
      {image: 'jrevillas/faasfriday', invocations: '1.337', name: 'faasfriday'},
      {image: 'jrevillas/applepay', invocations: '125', name: 'applepay'}
    ];
    console.log($scope.functions);
  });
