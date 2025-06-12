document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    
    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.transition = "transform 0.3s ease-in-out";
            section.style.transform = "scale(1.03)";
        });

        section.addEventListener("mouseleave", () => {
            section.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});
