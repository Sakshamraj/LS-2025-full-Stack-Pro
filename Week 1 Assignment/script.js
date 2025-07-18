const mmObj = window.matchMedia("(max-width: 600px)");

window.onscroll = function() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementsByTagName("nav")[0].style.padding = "2% 1.5%";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementsByTagName("nav")[0].style.padding = "2.5% 1.5%";
    document.getElementById("logo").style.fontSize = "35px";
  }
};
// Create a match mobile media object
// This will be used to check if the screen size is less than or equal to 600
function mobileMedia(x) {
  if (x.matches) {
    document.getElementById("navbar-right").style.display = "none";
    document.getElementById("closebtn").style.display = "block";
    document.getElementById("openbtn").style.display = "inline-block";
  } else {
    document.getElementById("navbar-right").style.display = "block";
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("openbtn").style.display = "none";
  }
}
// Add the match function as a listener for state changes
mmObj.addEventListener("change", function() {
  mobileMedia(mmObj);
});




//about

function openCity(cityName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
// Call the match function at run time
mobileMedia(mmObj);
// Get the element with id="defaultOpen" and click on it
document.getElementsByClassName("tablink")[0].click();
