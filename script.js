document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            sections.forEach(section => section.classList.remove("active"));
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.classList.add("active");
        });
    });

    // Mostrar la sección de inicio por defecto
    document.querySelector("#inicio").classList.add("active");
});