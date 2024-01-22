let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}

// Navigation Button Functions

// Home 
const home_view = () => {
  var home_view = document.getElementById("home_view");
  home_view.scrollIntoView();
}

// About Us
const abtUs = () =>{
  var about_us_view = document.getElementById("about_div");
  about_us_view.scrollIntoView();
}

// Recent Events
const events_view = () =>{
  var events_view = document.getElementById("recentevents_view")
  events_view.scrollIntoView();
}

// Timeline
const timeline_view = () => {
  var timeline_view = document.getElementById("timeline_view")
  timeline_view.scrollIntoView(); 
}

// Contact Us
const contact_us_view = () => {
  var contact_us_view = document.getElementById("contact_us_view")
  contact_us_view.scrollIntoView();
}