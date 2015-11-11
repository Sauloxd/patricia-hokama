angular.module('myapp').controller('MouseController', function ($scope) {
  $scope.backgroundImg = ' "../patricia-hokama/resources/rm/bkg-render.png"';
  $scope.name = 'Render';

  $scope.indexPage = "render-mouse"
  $scope.info = 'rm-info';
  $scope.gallery = 'rm-gallery';
  $scope.extras = 'rm-extras';


  $scope.headImage = '/patricia-hokama/resources/rm/prj-rm-head.png';
  $scope.images = [
  {'path': '/patricia-hokama/resources/rm/prj-rm-1.png',
   'description': 'Descrição 1'},
  {'path': '/patricia-hokama/resources/rm/prj-rm-2.png',
   'description': 'Descrição 2'},
  {'path': '/patricia-hokama/resources/rm/prj-rm-3.png',
   'description': 'Descrição 3'}
  ];

  $scope.infoDetails = [
  {'paragraph' : 'Mouse renderizado no KeyShot 4 e modelado no Rhinoceros 4.0.'}
  ];

});









