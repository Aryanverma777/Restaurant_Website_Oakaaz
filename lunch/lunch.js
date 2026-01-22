// Lunch Menu Dropdown Controller
document.addEventListener("DOMContentLoaded", function () {

    const menuBoxes = document.querySelectorAll(".menu-box");

    menuBoxes.forEach(box => {
        box.addEventListener("click", function () {
            const dropdown = this.querySelector(".dropdown");

            // Close all other dropdowns
            document.querySelectorAll(".dropdown").forEach(d => {
                if (d !== dropdown) {
                    d.style.display = "none";
                }
            });

            // Toggle current dropdown
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
        });
    });

});
