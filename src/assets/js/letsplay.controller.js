angular.module('myapp').controller('LetsPlayController', function ($scope) {
  $scope.backgroundImg = ' "../patricia-hokama/resources/lp/bkg-letsplay.png"';
  $scope.name = "Let's Play?";

  $scope.indexPage = "lets-play"
  $scope.info = 'lp-info';
  $scope.gallery = 'lp-gallery';
  $scope.extras = 'lp-extras';


  $scope.headImage = '/patricia-hokama/resources/lp/prj-lp-head.png';
  $scope.images = [
  {'path': '/patricia-hokama/resources/lp/prj-lp-1.png',
   'description': 'Descrição 1'},
  {'path': '/patricia-hokama/resources/lp/prj-lp-2.png',
   'description': 'Descrição 2'}
  ];

  $scope.infoDetails = [
  {'paragraph' : 'Trabalho acadêmico realizado em grupo, com Kalinka Lopes e Samantha Oda para a matéria de fotografia.'},
  {'paragraph' : 'Todas as imagens (exceto os printscreens dos jogos) foram fotografadas por nós.'},
  {'paragraph' : 'A proposta do trabalho era criar um folder ou catálogo, divulgando publicitariamente um produto, e nós escolhemos o tema jogos.'}
  ];

});









