// Evening Menu Dropdown Logic
document.addEventListener("DOMContentLoaded", function () {

    const menuBoxes = document.querySelectorAll(".menu-box");

    menuBoxes.forEach(box => {
        box.addEventListener("click", function () {
            const dropdown = this.querySelector(".dropdown");

            // If no dropdown exists, do nothing
            if (!dropdown) return;

            // Close all other dropdowns
            document.querySelectorAll(".dropdown").forEach(d => {
                if (d !== dropdown) {
                    d.style.display = "none";
                }
            });

            // Toggle the clicked dropdown
            dropdown.style.display =
                dropdown.style.display === "block" ? "none" : "block";
        });
    });

});
