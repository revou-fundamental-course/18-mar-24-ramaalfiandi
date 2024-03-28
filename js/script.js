var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var imgslide = document.getElementsByClassName("img-slidebanner");
  if (n > imgslide.length) slideIndex = 1;
  if (n < 1) slideIndex = imgslide.length;

  for (i = 0; i < imgslide.length; i++) {
    imgslide[i].style.display = "none";
  }
  imgslide[slideIndex - 1].style.display = "block";
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.trim() == "") {
    alert("Name must be filled out");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (subject == "") {
    alert("Please choose a subject");
    return false;
  }

  return true;
}