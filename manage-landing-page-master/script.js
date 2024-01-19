let check = document.getElementById("mail");
let btn = document.getElementById("btn");
let err = document.getElementById("error");

btn.addEventListener('click', function() {
  
  if (check.value === "" || !check.value.includes("@") || !check.value.includes(".com")) {
    err.innerText = "Enter a valid email";
    err.style.color = "red";
    err.style.opacity = "1";
  } else {
    err.innerText = "Done";
    err.style.color = "green";
    err.style.opacity = "1";
  }
});

