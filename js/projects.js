var data = [
  {
  name: 'Brazil',
  image:'images/cube1.jpg',
  description:'Description 1',
  id: ' theory',
  showcase: true,
  },
  {
  name: 'MOUW',
  image:'images/cube2.jpg',
  description:'Description 2',
  id: ' theory',
  showcase: true,
  },
  {
  name: 'Stair',
  image:'images/cube3.jpg',
  description:'Description 3',
  id: ' practise',
  showcase: true,
  },
  {
  name: 'BAT',
  image:'images/cube4.jpg',
  description:'Description 4',
  id: ' practise',
  showcase: true,
  },
  {
  name: 'Masterplan',
  image:'images/cube5.jpg',
  description:'Description 5',
  id: ' theory',
  showcase: true,
  },
  {
  name: 'Survival',
  image:'images/cube6.jpg',
  description:'Description 6',
  id: ' theory',
  showcase: true,
  }];

var item = document.getElementsByClassName('js-item');
var descr = document.getElementsByClassName('js-hidden-text');
var title = document.getElementsByClassName('js-title');
var dLength=data.length;

document.onload =setData(); // Inital setup



  function setData(){
  for(var i=0; i<dLength; i++){
   item[i].style.backgroundImage = "url("+ data[i].image +")";
   descr[i].innerHTML = data[i].description;
   title[i].innerHTML = data[i].name;
   sortClassCheckerSetter(i);
  }
}
//setData();


//Adds a class to item by id === either Theory or Practise if item doesn't have class 
function sortClassCheckerSetter(pos){
  if(item[pos].className.indexOf('theory') !== -1 || item[pos].className.indexOf('prectise') !== -1 ){
    return true;
  }else{
    item[pos].className += data[pos].id;
  }
}


function filterData(filter){

  


}

