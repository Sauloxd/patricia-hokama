angular.module('myapp').controller('BleuDeChannelController', function ($scope) {
  $scope.backgroundImg = ' "../patricia-hokama/resources/bdc/bkg-bleudechannel.png"';
  $scope.name = 'Bleu De Channel';

  $scope.indexPage = "bleu-de-channel"
  $scope.info = 'bdc-info';
  $scope.gallery = 'bdc-gallery';
  $scope.extras = 'bdc-extras';


  $scope.headImage = '/patricia-hokama/resources/bdc/prj-bdc-head.png';
  $scope.images = [
  {'path': '/patricia-hokama/resources/bdc/prj-bdc-1.png',
   'description': 'Descrição 1'}
  ];

  $scope.infoDetails = [
  {'paragraph' : 'Trabalho acadêmico realizado em grupo, com Kalinka Lopes e Samantha Oda para a matéria de fotografia.'},
  {'paragraph' : 'A proposta do trabalho era inventar um estúdio fictício e criar um anúncio publicitário.'},
  {'paragraph' : 'Foto tirada em estúdio com a técnica de lightpainting.'}
  ];

});









