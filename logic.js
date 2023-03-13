function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
// , 'Full-Stack Developer'

var typed = new Typed(".runningText", {
  strings: ["Software Engineer", "FrontEnd Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// for contacts 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };
}

// for skills 
function myFunctionTwo() {
  document.getElementById("myDropdown1").classList.toggle("show1");

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn1")) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show1")) {
          openDropdown.classList.remove("show1");
        }
      }
    }
  };
}
