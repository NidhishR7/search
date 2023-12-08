document.addEventListener("DOMContentLoaded", function() {
    // Get references to the search input and the "Go" button
    const searchInput = document.getElementById("searchInput");
    const goButton = document.getElementById("goButton");

    // Add click event listener to the "Go" button
    goButton.addEventListener("click", function() {
        // Get the value from the search input
        const searchValue = searchInput.value;

        // Check if the search value is not empty
        if (searchValue.trim() !== '') {
            // Redirect to the next page appending the search query as a parameter
            window.location.href = "nextpage.html?q=" + encodeURIComponent(searchValue);
            // Change "nextpage.html" to the desired URL of your next page
        } else {
            // If the search input is empty, you can display an alert or handle it in any other way
            alert("Please enter a input");
        }
    });
});
