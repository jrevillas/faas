angular
  .module('faasUI', ['ngMaterial'])
  .controller('faasCtrl', function($mdSidenav, $scope) {
    $scope.avatar = function(func) {
      return 'https://www.gravatar.com/avatar/' + md5(func.name) + '?d=identicon&f=y';
    };
    $scope.functions = [
      {image: 'jrevillas/faasfriday', invocations: '1.337', name: 'faasfriday'},
      {image: 'jrevillas/applepay', invocations: '125', name: 'applepay'},
      {image: 'alexellis/inception', invocations: '5.250', name: 'inception'},
      {image: 'jrevillas/stripe', invocations: '10', name: 'stripe (prod)'},
      {image: 'jrevillas/stripe', invocations: '155', name: 'stripe (test)'},
      {image: 'jrevillas/pkmn-serverless', invocations: '1.575', name: 'pokedex'}
    ];
    $scope.isSelectedFunc = function(func) {
      return $scope.selectedFunc === func.name;
    };
    $scope.selectedFunc = undefined;
    $scope.selectFunc = function(func) {
      $scope.selectedFunc = func.name;
    };
    console.log($scope.functions);
  });
