function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}


document.querySelectorAll(".slideshow-group").forEach((group) => {
    let slideIndex = 0;

    const slides = group.querySelectorAll(".slides");
    const dots = group.querySelectorAll(".dot");
    const prev = group.querySelector(".prev");
    const next = group.querySelector(".next");

    

    
    function showSlide(index) {
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = index;
        }

        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        slides[slideIndex].style.display = "block";

        if (dots[slideIndex]) {
            dots[slideIndex].classList.add("active");
        }
    }

    prev.addEventListener("click", () => {
        showSlide(slideIndex - 1);
    });

    next.addEventListener("click", () => {
        showSlide(slideIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    showSlide(0);
});