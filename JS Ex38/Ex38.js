const toggleButton=document.querySelector(".toggle-btn");
const navBar=document.querySelector(".navbar")


toggleButton.addEventListener('click', function(){
    navBar.classList.toggle('active')
})