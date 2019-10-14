var imageList = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg"];
var i = 0;
var grid = 4;
var milisecond = 3000;

for(i=0;i<grid && i< this.imageList.length;i++){
    var division = document.createElement('div');
    var image = document.createElement('img');
    var para = document.createElement('p');
    var text = document.createTextNode(i+1);
    var carousel_container = document.getElementById('display_items_container');

    division.setAttribute('class','carousel_item');
    image.setAttribute('id','image');
    image.setAttribute('src',this.imageList[i]);
    para.appendChild(text);
    division.appendChild(para);
    division.appendChild(image);
    carousel_container.insertBefore(division, carousel_container.childNodes[0]);
}
setInterval(function(){ 
    if(i == this.imageList.length-1){i = 0;}
    else{i++;}
    milisecond = 3000;

    var division = document.createElement('div');
    var image = document.createElement('img');
    var para = document.createElement('p');
    var text = document.createTextNode(i+1);
    var carousel_container = document.getElementById('display_items_container');

    console.log(carousel_container);

    division.setAttribute('class','carousel_item');
    image.setAttribute('id','image');
    image.setAttribute('src',this.imageList[i]);
    para.appendChild(text);
    division.appendChild(para);
    division.appendChild(image);
    carousel_container.insertBefore(division, carousel_container.childNodes[0]);

    if(carousel_container.childElementCount - 1 == grid){
        var child = carousel_container.lastElementChild;
        carousel_container.removeChild(child);
    }
},milisecond);

function left_carousel(){
    
    carousel_container.removeChild(carousel_container.childNodes[0]);

    var division = document.createElement('div');
    var image = document.createElement('img');
    var para = document.createElement('p');
    var text = document.createTextNode(i-grid);
    var carousel_container = document.getElementById('display_items_container');

    if(i == 0){
        i = this.imageList.length - 1;
    }
    else{
        i--;
    }

    division.setAttribute('class','carousel_item');
    image.setAttribute('id','image');
    image.setAttribute('src',this.imageList[i-grid]);
    para.appendChild(text);
    division.appendChild(para);
    division.appendChild(image);
    carousel_container.appendChild(division);
    milisecond=7000;
}

function right_carousel(){
    if(i == this.imageList.length - 1){
        i = 0;
    }
    else{
        i++;
    }
    var current_image = document.getElementById('image');
    current_image.setAttribute('src',this.imageList[i]);
}