// Load DOM before scripts.

document.addEventListener("DOMContentLoaded", function(event) { 
  
    // url        Example for rainbow search: http://api.giphy.com/v1/gifs/search?api_key=9KemuYKuM7DozeEmiGoMHyPT9qqCBgdO&q=rainbow

    const apiKey = "9KemuYKuM7DozeEmiGoMHyPT9qqCBgdO";
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`;

    // Selecting DOM elements.
    const submitElement = document.querySelector('.js-form');
    const inputElement = document.querySelector('.js-input');
    const container = document.querySelector('.js-container');
    const searchIcon = document.querySelector('.js-icon');

    let inputValue = '';

    function convertResponseToJson( response ) {
        return response.json();
    }

    /* data/images/original/url */
    function processJsonResponse( data ) {
        let markup = `<li>${inputValue}</li>`;
        for (const images of data) {
            markup = markup + `
            <li>${images.original.url}
            `;
        }
        container.innerHTML = markup;
    }
    // Error handling
    function errorHandling() {
        container.innerHTML = `
        <li class="error">Error loading data. Make sure your network is on.</li>
        `;
    }

    // Event Listener
    submitElement.addEventListener('submit', loadData);
    searchIcon.addEventListener('click', loadData);

    function loadData(event) {
        // Retrieving User Input
        const value = inputElement.value;
        // Creating New URL by concantinating API URL and user input.
        const newUrl = url + value;
        // Prevent Page from reloading
        event.preventDefault();
        // Inputing data objects from JSON data array.
        inputValue = document.querySelector('[data=url]').value;
        // Fetching the concantinated URL.
        fetch(newUrl)
            .then( convertResponseToJson )
            .then( processJsonResponse )
            .catch( errorHandling );
    }
});