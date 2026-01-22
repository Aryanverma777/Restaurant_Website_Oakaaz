// Toggle dropdown for the clicked menu box
function toggleDropdown(menuBox) {
    const dropdown = menuBox.querySelector(".dropdown");

    // Close all other dropdowns
    document.querySelectorAll(".dropdown").forEach(d => {
        if (d !== dropdown) {
            d.style.display = "none";
        }
    });

    // Toggle current dropdown
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
}
