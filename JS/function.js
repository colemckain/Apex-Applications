document.getElementById("idea-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Hide the form and show the thank you message
    document.getElementById("idea-form").classList.add("hidden");
    document.getElementById("idea-thank-you").classList.remove("hidden");
});
