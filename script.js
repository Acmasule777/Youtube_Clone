var menuIcon = document.querySelector(".logo i");
var nav2 = document.querySelector(".nav2");
var main = document.querySelector(".main");

menuIcon.onclick = function()
{
    nav2.classList.toggle("animation");
    main.classList.toggle("large-main");
}