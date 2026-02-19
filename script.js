document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

// Modal functions
function openModal() {
    document.getElementById("aqiModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("aqiModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
    var modal = document.getElementById("aqiModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
