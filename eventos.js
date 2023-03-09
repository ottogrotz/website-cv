//const div = document.querySelector("div");

document.querySelector(".hide").addEventListener("click", () => {
  document.getElementById("div1").style.display = "none";
});

document.querySelector(".show").addEventListener("click", () => {
    document.getElementById("div1").style.display = "block";
});



document.querySelector(".hide1").addEventListener("click", () => {
    document.getElementById("div2").style.display = "none";
  });
  
  document.querySelector(".show1").addEventListener("click", () => {
      document.getElementById("div2").style.display = "block";
  });