// Get elements
const modal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const modal2 = document.getElementById("loginModal2");
const loginBtn2 = document.getElementById("loginBtn2");
const modal3 = document.getElementById("loginModal3");
const loginBtn3 = document.getElementById("loginBtn3");

// Open modal on Login click
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
});

loginBtn2.addEventListener("click", (e) => {
  e.preventDefault();
  modal2.style.display = "flex";
  modal.style.display  = "none"
});

loginBtn3.addEventListener("click", (e) => {
  e.preventDefault();
  modal3.style.display = "flex";
  modal.style.display  = "none"
});
signinbtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  modal2.style.display  = "none"
});
signinbtn2.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  modal3.style.display  = "none"
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("click", (e) => {
  if (e.target === modal2) {
    modal2.style.display = "none";
  }
});
window.addEventListener("click", (e) => {
  if (e.target === modal3) {
    modal3.style.display = "none";
  }
});


function send(){
  var reqt = document.getElementById("reqt");
  var required = document.getElementById("required");
  var warning = document.getElementById("warn");
  
  if (required.value === "") {
    warning.style.display = "inline";
  }
}