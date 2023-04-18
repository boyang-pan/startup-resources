/*

const inputEl = document.querySelector(".input"); 

const bodyEl = document.querySelector("body");

const navEl = document.querySelector("nav");

const headingEl = document.querySelectorAll("p")



inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
    if(inputEl.checked) {
        bodyEl.style.background = "black";
        navEl.style.background = "white";
        document.querySelectorAll("h1").forEach(el => el.style.color = "white");
        document.querySelectorAll("p").forEach(el => el.style.color = "white");
      
        document.querySelectorAll(".categories").forEach((category) => {
            category.style.backgroundColor = "white";
            category.style.color = "black";
        });
        
    }   else {

        bodyEl.style.background = "white";
        navEl.style.background = "black";
        document.querySelectorAll("h1").forEach(el => el.style.color = "black");
        document.querySelectorAll("p").forEach(el => el.style.color = "black");

        document.querySelectorAll(".categories").forEach((category) => {
            category.style.backgroundColor = "black";
            category.style.color = "white";
        });

    }
}


inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
})


function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}

*/

const darkModeToggle = document.getElementById("dark-mode");
const body = document.querySelector("body");

darkModeToggle.addEventListener("change", () => {
body.classList.toggle("dark-mode");
});