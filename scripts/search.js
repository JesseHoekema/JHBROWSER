document.addEventListener("DOMContentLoaded", function() {
    // Get the search form, search input, and search icon
    var searchForm = document.getElementById("searchForm");
    var searchInput = document.getElementById("searchInput");
    var searchIcon = document.getElementById("searchIcon");

    // Add click event listener to the search icon
    searchIcon.addEventListener("click", function(event) {
        // Prevent the default behavior of the click event
        event.preventDefault();

        // Get the search query
        var query = searchInput.value.trim();

        // If the query is empty, do not submit the form
        if (query === "") {
            return false;
        }

        // Submit the form when the search icon is clicked and the input is not empty
        searchForm.submit();
    });
});

function validateSearch() {
    var query = document.getElementById('searchInput').value.trim();
    if (query === "") {
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}