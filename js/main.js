// // get todays date month day year


// if localstorage newsurl doesnt exist create it and set value https://www.nu.nl/rss/Algemeen
if (localStorage.getItem("newsurl") == null) {
  localStorage.setItem("newsurl", "https://www.nu.nl/rss/Algemeen");
}


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

var today = dd + "-" + mm + "-" + yyyy;
document.getElementById("greeting").innerText = today;

// get current time and update every second
var time = new Date();
var h = time.getHours();
var m = time.getMinutes();
var s = time.getSeconds();

if (h < 10) {
  h = "0" + h;
}
if (m < 10) {
  m = "0" + m;
}

// set the time
document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;

// call the function every second
setInterval(function () {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }

  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
}, 1000);


// automatically focus search input when typing
document.onkeydown = function (e) {
  document.getElementById("search").focus();
};

// Save and load theme from local storage
var checkbox = document.querySelector("input[name=theme-switcher]");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

var currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "light";
if (currentTheme == "dark") {
  checkbox.checked = false;
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  checkbox.checked = true;
  document.documentElement.setAttribute("data-theme", "light");
}
// get newsurl from localstorage
var newsurl = localStorage.getItem("newsurl");
if (newsurl) {
  document.getElementById("newsurl").value = newsurl;
}

let url = newsurl;
// let url = 'https://www.nu.nl/rss/Algemeen';

// change url value when dropdown is changed
function changeUrl(url) {
  document.getElementById("rss-url").value = url;
}
// console log the url after the dropdown is changed
function changeUrl(url) {
  console.log(url);
}


  const textarea = document.querySelector('#feed-textarea > ul');

  const date = new Date();
  var max = 6;
 
  
    feednami.load(url)
    .then(feed => {
      textarea.value = ''
      console.log(feed);
      for(let entry of feed.entries){
          //create a list element
          let li = document.createElement('li');
          //add HTML content to list item
          li.innerHTML = `<h4><a href="${entry.link}">${entry.title}</a></h4>`;
          //append HTML content to list 
          textarea.appendChild(li);
          //if list is too long, remove first item
          if(textarea.childElementCount > max){
              textarea.removeChild(textarea.lastChild);
          }
      }
    });


    // if button ctrl + x pressed change theme
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.keyCode == 88) {
            if (document.documentElement.getAttribute("data-theme") == "light") {
                document.documentElement.setAttribute("data-theme", "dark");
                checkbox.checked = false;
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                checkbox.checked = true;
                localStorage.setItem("theme", "light");
            }
        }
    }
    );


    // change value of max to input value if new value is filled in
    document.getElementById("max-input").addEventListener("change", function () {
        max = this.value;
    }
    );

    // document.getElementById("max-button").addEventListener("click", function () {
    //     max = document.getElementById("max-input").value;
    //     console.log(max);
    // }
    // );
    // save max value to local storage
    document.getElementById("max-input").addEventListener("change", function () {
        localStorage.setItem("max", this.value);
    }
    );
    // get max value from local storage
    var max = localStorage.getItem("max")
    ? localStorage.getItem("max")
    : 6;
    document.getElementById("max-input").value = max;
    


// if id="search-checkbox" checked hide search input
document.getElementById("search-checkbox").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("feed-textarea").style.display = "none";
  }
  else {
    document.getElementById("feed-textarea").style.display = "block";
  }
}
  , false);


// save checkbox value
document.getElementById("search-checkbox").addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("search-checkbox", "true");
  }
  else {
    localStorage.setItem("search-checkbox", "false");
  }
}
  , false);
 
  
// get checkbox value
var searchCheckbox = localStorage.getItem("search-checkbox");
if (searchCheckbox == "true") {
  document.getElementById("search-checkbox").checked = true;
  document.getElementById("feed-textarea").style.display = "none";
}
else {
  document.getElementById("search-checkbox").checked = false;
  document.getElementById("feed-textarea").style.display = "block";
}

// hide time
document.getElementById("clock-checkbox").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("clock").style.display = "none";
  }
  else {
    document.getElementById("clock").style.display = "block";
  }
}
  , false);


// save checkbox value
document.getElementById("clock-checkbox").addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("clock-checkbox", "true");
  }
  else {
    localStorage.setItem("clock-checkbox", "false");
  }
}
  , false);
 
  
// get checkbox value
var searchCheckbox = localStorage.getItem("clock-checkbox");
if (searchCheckbox == "true") {
  document.getElementById("clock-checkbox").checked = true;
  document.getElementById("clock").style.display = "none";
}
else {
  document.getElementById("clock-checkbox").checked = false;
  document.getElementById("clock").style.display = "block";
}

// hide date
document.getElementById("date-checkbox").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("greeting").style.display = "none";
  }
  else {
    document.getElementById("greeting").style.display = "block";
  }
}
  , false);


// save checkbox value
document.getElementById("date-checkbox").addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("date-checkbox", "true");
  }
  else {
    localStorage.setItem("date-checkbox", "false");
  }
}
  , false);
 
  
// get checkbox value
var searchCheckbox = localStorage.getItem("date-checkbox");
if (searchCheckbox == "true") {
  document.getElementById("date-checkbox").checked = true;
  document.getElementById("greeting").style.display = "none";
}
else {
  document.getElementById("date-checkbox").checked = false;
  document.getElementById("greeting").style.display = "block";
}

// hide date
document.getElementById("weather-checkbox").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("temperature").style.display = "none";
  }
  else {
    document.getElementById("temperature").style.display = "block";
  }
}
  , false);


// save checkbox value
document.getElementById("weather-checkbox").addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("weather-checkbox", "true");
  }
  else {
    localStorage.setItem("weather-checkbox", "false");
  }
}
  , false);
 
  
// get checkbox value
var searchCheckbox = localStorage.getItem("weather-checkbox");
if (searchCheckbox == "true") {
  document.getElementById("weather-checkbox").checked = true;
  document.getElementById("temperature").style.display = "none";
}
else {
  document.getElementById("weather-checkbox").checked = false;
  document.getElementById("temperature").style.display = "block";
}


const show = document.getElementById("showModal");
const modal = document.getElementById("theModal");

show.addEventListener("click", () => {
  modal.showModal();
});

// if clicked outside modal close it
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.close();
  }
}
  , false);
  


// dont let max value be more than 15 in localstorage
document.getElementById("max-input").addEventListener("change", function () {
  if (this.value > 15) {
    this.value = 15;
  }
  localStorage.setItem("max", this.value);
}   , false); 

// if ctrl + q pressed open modal
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.keyCode == 81) {
    modal.showModal();
  }
});


// if newsurl-button clicked save value of newsurl into localstorage and reload page
document.getElementById("newsurl-button").addEventListener("click", function () {
  localStorage.setItem("newsurl", document.getElementById("newsurl").value);
  // location reload
  location.reload();
}
  , false);

  

// drag element showmodal to another posisiton
var offset = [0,0];
var divOverlay = document.getElementById ("search");
var isDown = false;
divOverlay.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        divOverlay.offsetLeft - e.clientX,
        divOverlay.offsetTop - e.clientY
    ];
}, true);
document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(e) {
    event.preventDefault();
    if (isDown) {
        divOverlay.style.left = (e.clientX + offset[0]) + 'px';
        divOverlay.style.top  = (e.clientY + offset[1]) + 'px';
    }
}, true);

// save new position of search
document.getElementById("search").addEventListener("mouseup", function () {
  localStorage.setItem("search-position", document.getElementById("search").style.top + " " + document.getElementById("search").style.left);
}
  , false);



  // get new position of search
  var searchPosition = localStorage.getItem("search-position");
  if (searchPosition != null) {
    document.getElementById("search").style.top = searchPosition.split(" ")[0];
    document.getElementById("search").style.left = searchPosition.split(" ")[1];
  }
