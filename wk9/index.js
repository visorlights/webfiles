let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
let tasks = ["wake up early", "exercise", "cook a round meal", "sleep early", "watch a movie with friends",
 "stretch", "have a tea latte", "do a household errand", "take a bath", "relax for an hour", "talk to friends"];
let weekActivities = new Array(21);
let prevDay;
console.log("hello??");


for(i=0; i < document.getElementsByClassName('day').length; i++){
  //give day divs the same id as their label; ie, day[0] id = 'sunday'
  document.getElementsByClassName('day')[i].id = days[i];
  //fill label text with day name
  document.getElementsByClassName('day')[i].innerHTML= "<h3>" + days[i] + "</h3>";
  //adds event listener to each day
  document.getElementsByClassName('day')[i].addEventListener('click', setActive, false);
}

function setActive(e){
  prevDay = document.getElementsByClassName("active")[0].id;

  //if any tabs are set to active, set to inactive
  if(prevDay != undefined){
    document.getElementById(prevDay).classList.toggle("active");
    document.getElementById(prevDay).setAttribute('style', 'background-color: var(--jeans)');
  }
  //set clicked one to active
  if(e.target.class="day"){
    console.log("target class=day");
    e.currentTarget.classList.toggle("active");
    e.currentTarget.setAttribute('style', 'background-color: var(--pinkHot)');
  }

  let dayIndex = e.currentTarget.id;
  dayIndex = days.indexOf(dayIndex); //dayIndex = array position of that day in days[], i.e.
  //indexOf sunday = 0, monday = 1, etc
  updateItems(dayIndex);
}

//make random button choose a random # 0 thru tasks.length for each entry in weekActivities
//and assign that entry task[i]
document.getElementById("button").addEventListener("click", buttonClick)

function buttonClick(){
  //# of different possible tasks
  let numOptions = tasks.length;
  console.log(numOptions);
  //randomly select a task for each of the 21 weekActivities entries
  for(i=0; i < weekActivities.length; i++){
    let x = Math.floor(Math.random() * numOptions);
    weekActivities[i] = tasks[x];
  }
  //refresh currently displayed day's list of Tasks
  let activeDay = document.getElementsByClassName("active")[0].id;
  let dayIndex = days.indexOf(activeDay);
  updateItems(dayIndex);
}

//update the three task items display
function updateItems(position){
  for(i=0; i < document.getElementsByClassName('item').length; i++){
    document.getElementsByClassName('item')[i].innerHTML = "<h4> - " + weekActivities[position *3 + i] + "</h4>";
  }
}

//================================ first-time initialization ====================================

//default set Sunday as active day
document.getElementById('SUNDAY').classList.toggle("active");
document.getElementById('SUNDAY').setAttribute('style', 'background-color: var(--pinkHot)');

//run randomizer once
buttonClick();
