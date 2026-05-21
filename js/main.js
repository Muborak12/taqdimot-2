var loading = document.querySelector(".loading");
var header = document.querySelector(".header");
var topBtn = document.querySelector(".top-btn");
window.addEventListener("load" , function() {
    loading.classList.add("hidden")
})
window.addEventListener( "scroll" , function(){
    console.log(window.scrollY);
    if(window.scrollY > 50){
        header.classList.remove("py-[40px]");
         header.classList.add("py-[20px]");
    }
    else{
        header.classList.remove("py-[20px]");
         header.classList.add("py-[40px]"); 
    }
    if(window.scrollY > 400){
        topBtn.classList.remove("hidden")
    }
    else{
        topBtn.classList.add("hidden");
    }
})
