app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'SHOWCASE';
  $scope.projects = [
  {
  name: 'Brazil',
  image:'images/cube1.jpg',
  description:'description',
  id: 'theory',
  showcase: true,
  },
  {
  name: 'MOUW',
  image:'images/cube2.jpg',
  description:'description',
  id: 'theory',
  showcase: true,
  },
  {
  name: 'Stair',
  image:'images/cube3.jpg',
  description:'description',
  id: 'professional',
  showcase: true,
  },
  {
  name: 'BAT',
  image:'images/cube4.jpg',
  description:'description',
  id: 'theory',
  showcase: true,
  },
  {
  name: 'Masterplan',
  image:'images/cube5.jpg',
  description:'description',
  id: 'theory',
  showcase: true,
  },
  {
  name: 'Survival',
  image:'images/cube6.jpg',
  description:'description',
  id: 'theory',
  showcase: true,
  }];



}]);

/*
  $scope.showDesc = function(projectToShow){
    console.log('this', $scope.projects.indexOf(projectToShow));
    var  $scope.projects.indexOf(projectToShow));
    
   };

<!--ng-show="show"-->  // to descr div
<!-- ng-mouseenter="show = !show" ng-mouseleave="!show = show"--> // to img

*/