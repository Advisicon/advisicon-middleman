var f = document.forms[0],
    p = document.getElementById("processing");

f.addEventListener("submit", function(e){
  e.preventDefault();
  p.style.display = "block";
});
