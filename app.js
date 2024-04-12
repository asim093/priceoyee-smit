document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const headerImages = document.getElementById("header-images");

    function updateVisibility() {
        if (window.innerWidth < 500) {
            headerImages.classList.add("overflow-hidden");
        } else {
            headerImages.classList.remove("overflow-hidden");
        }
    }

    window.addEventListener("resize", updateVisibility);

    updateVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
    const headerImages = document.getElementById("header-images");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let scrollAmount = 0;
    const step = 100; 

    prevBtn.addEventListener("click", function() {
        scrollAmount -= step;
        headerImages.scrollLeft = scrollAmount;
    });

    nextBtn.addEventListener("click", function() {
        scrollAmount += step;
        headerImages.scrollLeft = scrollAmount;
    });
});

var user = localStorage.getItem('name');
if(!user){
    window.location.href = 'login.html';
}
