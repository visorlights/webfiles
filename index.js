let images = ["mondoicon", "standby", "testscreen", "vhs", "vhscover", "wallbg", "extrologo"];
let imageCount = 7;

//load in images into grid
for(i=0; i < imageCount; i++){
  console.log("images loaded");
  imageSrc = "./assets/" + images[i] + ".png";
  document.getElementsByClassName('gridItem')[i].innerHTML = "<img src= \"" + imageSrc + "\" >";
}

console.log("script working");
document.getElementById("button").addEventListener("click", buttonClicked);

function buttonClicked(){
  alert("you pushed the button");
}
