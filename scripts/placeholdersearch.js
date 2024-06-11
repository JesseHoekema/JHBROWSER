function getUrlParameter(name) {
            name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        };

        // Get the 'q' parameter from the URL
        var searchedQuery = getUrlParameter('q');

        // Set the value of the search input field to the searched query
        document.getElementById('searchInput').value = searchedQuery;

        // Set the title of the page
        document.title = searchedQuery + " - JHBROWSER";