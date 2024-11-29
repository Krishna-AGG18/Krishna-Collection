document.getElementById("menu-toggle").addEventListener("click",()=>{
    document.getElementById("menu-toggle").classList.toggle('fa-xmark');
    const menuToggle = document.getElementById("menu-toggle");

    if (menuToggle.style.left === "230px") {
        menuToggle.style.left = "5px";  // Reset to 0px (or any other starting value)
        menuToggle.style.transitionDuration = "0.3s"
    } else {
        menuToggle.style.transitionDuration = "0.5s"
        menuToggle.style.left = "230px";  
    }

    const menu = document.getElementById('menu');   
    menu.classList.toggle('open')
});