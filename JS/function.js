document.addEventListener("DOMContentLoaded", () => {
    // Idea form submission handler
    const ideaForm = document.getElementById("idea-form");
    const ideaThankYou = document.getElementById("idea-thank-you");

    if (ideaForm && ideaThankYou) {
        ideaForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            ideaForm.classList.add("hidden"); // Hide form
            ideaThankYou.classList.remove("hidden"); // Show thank you message
        });
    }

    // Hamburger menu toggle
    const hamburger = document.getElementById("hamburger");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Toggle the visibility of the dropdown menu
    hamburger.addEventListener("click", () => {
        dropdownMenu.classList.toggle("visible");
    });

    // Close the menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!hamburger.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("visible");
        }
    });
});
