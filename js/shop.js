var buyBtns = document.querySelector(".buy-btn");
var cardBtns = document.querySelector(".card-btn");
var plus = document.querySelector(".plus");
var miqdor = document.querySelector(".miqdor");
var minus = document.querySelector(".minus");


plus.addEventListener("click" , function()
    {
    miqdor.textContent++;
});
minus.addEventListener("click" , function()
    {
    miqdor.textContent--;
})

