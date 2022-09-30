// function for the open navbar
const openBtn = document.getElementById("menu-bar");
openBtn.addEventListener("click",()=>{
   const openMenu = document.getElementById("ul")
   openMenu.classList.add("active")
});
// function for the close navbar
const clsBtn = document.getElementById("close-btn");
clsBtn.addEventListener("click",()=>{
    const openMenu = document.getElementById("ul")
    openMenu.classList.remove("active")
})
