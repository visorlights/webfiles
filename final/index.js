let pages = ["Art", "Projects"];
let pageLinks = ["pages/gallery.html", "pages/projects.html"];
let icons = ["cabinet.gif", "robit.jpg" ];
console.log("aaa");
//load page grid listings
for(i=0; i < pages.length; i++){
  console.log("in loop");
  pageSource = "<a class=\"pageLink\"  href=\"" + pageLinks[i] + "\" >"
  document.getElementsByClassName('name')[i].innerHTML = "<p>" + pageSource + pages[i] + "</a></p>";
  document.getElementsByClassName('page')[i].addEventListener("click", pageClicked);
  document.getElementsByClassName('page')[i].id= pages[i];
  imgSource  = "assets/" + icons[i];

  document.getElementsByClassName('icon')[i].innerHTML = "<img src= \"" + imgSource + "\" >";
}
//function for when the page div was clicked to redirect
//doesn't actually work 
function pageClicked(e){
  console.log("link clicked");
  target = e.currentTarget.id;
  console.log(target);
}
