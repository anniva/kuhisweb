app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'SHOWCASE';
  $scope.projects = [
  {
  name: 'Brazil',
  image:'images/brazil.jpg',
  description:'description',
  id: 'theory',
  showcase: true,
  },
  {
  name: 'MOUW',
  image:'images/mouw.jpg',
  description:'description',
  id: 'theory',
  showcase: true,
  },
  {
  name: 'Stair',
  image:'images/stair.jpg',
  description:'description',
  id: 'professional',
  showcase: true,
  },
  {
  name: 'BAT',
  image:'images/bat.jpg',
  description:'description',
  id: 'theory',
  showcase: true,
  },
  {
  name: 'Masterplan',
  image:'images/masterplan.jpg',
  description:'description',
  id: 'theory',
  showcase: true,
  },
  {
  name: 'Survival',
  image:'images/survival.jpg',
  description:'description',
  id: 'theory',
  showcase: true,
  }];

}]);

