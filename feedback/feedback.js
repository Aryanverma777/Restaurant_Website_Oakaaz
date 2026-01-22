// Load saved reviews when page loads
document.addEventListener("DOMContentLoaded", loadReviews);

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value;

    // Create feedback object (KEY–VALUE format)
    let feedback = {
        name: name,
        email: email,
        rating: rating,
        message: message
    };

    // Get existing feedbacks or empty array
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    // Add new feedback
    feedbacks.push(feedback);

    // Save back to localStorage
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    // Show on page
    addReviewToPage(feedback);

    document.getElementById("feedbackForm").reset();
});

// Function to display one review
function addReviewToPage(feedback) {
    let reviewDiv = document.createElement("div");
    reviewDiv.classList.add("review");

    reviewDiv.innerHTML = `
        <strong>Name:</strong> ${feedback.name}<br>
        <strong>Email:</strong> ${feedback.email}<br>
        <strong>Rating:</strong> ${feedback.rating}<br>
        <strong>Feedback:</strong> ${feedback.message}
    `;

    document.getElementById("reviews").prepend(reviewDiv);
}

// Load all saved reviews
function loadReviews() {
    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.forEach(addReviewToPage);
}
