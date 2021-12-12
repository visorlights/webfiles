let images = ["ayounglad.png","bluedeerarts.png","cabinet.gif","casette.png",
"frame.png","layout.png","mondo.png", "orange.gif", "jactus.png" ];

for(i=0; i< images.length; i++){
  imageSrc = "../assets/" + images[i];
  document.getElementsByClassName('image')[i].innerHTML = "<img src= \"" + imageSrc + "\" >";
}
