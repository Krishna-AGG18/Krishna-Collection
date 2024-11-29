document.getElementById("menu-toggle").addEventListener("click",()=>{
    document.getElementById("menu-toggle").classList.toggle('fa-xmark');
    const menuToggle = document.getElementById("menu-toggle");

    // Toggle 'left' property value between 0 and 175px
    if (menuToggle.style.left === "225px") {
        menuToggle.style.left = "0px";  // Reset to 0px (or any other starting value)
        menuToggle.style.transitionDuration = "0.3s"
    } else {
        menuToggle.style.transitionDuration = "0.5s"
        menuToggle.style.left = "225px";  // Move it to 175px
    }
    const menu = document.getElementById('menu');   
    menu.classList.toggle('open')
});