// url        Example for rainbow search: http://api.giphy.com/v1/gifs/search?api_key=9KemuYKuM7DozeEmiGoMHyPT9qqCBgdO&q=rainbow

const apiKey = "9KemuYKuM7DozeEmiGoMHyPT9qqCBgdO";

const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`;

// Selecting DOM elements.
const submitElement = document.querySelector('.js-btn');
const inputElement = document.querySelector('.js-input');
const containerElement = document.querySelector('.js-container');

// Event listener.
submitElement.addEventListener('click', function(e) {
    // Prevent default page reload.
    e.preventDefault();

    // Create input value variable and dynamic url.
    const value = inputElement.value;
    const newUrl = url + value;

    // Fetching URL
    fetch(newUrl)

        // Return promise, take response and convert to JSON.
        .then((res) => res.json())

        // Turning JSON data and turning it into a variable.
        .then((data) => {
            //let //Gif? = data.results;
            //let //output? = '';
        });
    });

