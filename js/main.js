//-------------------Creating Variables-----------------------------//
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsEl = document.getElementById('results');
const searchNum = document.getElementById('search-num');

//-----------------Restricting Text Input---------------------------//
function lettersAndNumbersOnly(input) {
    var regex = /[^a-z,0-9,-, ]/gi;
    input.value = input.value.replace(regex, "");
}

function numbersOnly(input) {
    var regex = /[^0-9]/g;
    input.value = input.value.replace(regex, "");
}

//---------------------Event Listener-------------------------------//
searchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const q = searchInput.value;
    const limit = searchNum.value;
    search(q, limit);
    
});

//-----------------Concantinating Dynamic URL-----------------------//
function search(q, limit) {
    const apiKey = "9KemuYKuM7DozeEmiGoMHyPT9qqCBgdO";
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${limit}`;
    
 //---------------------Error Handling------------------------------//
    function errorHandling() {
        resultsEl.innerHTML = `
            <h3 class="error">Error loading data, make sure your network is on.</h>
        `;
    }

 //---------------Fetching and Converting Data----------------------//

            // Showing I can write functions inside a promise.
        
    fetch(path)
        .then(function(res) {  
        return res.json()
    })
        .then(function(json) {
            
            
            let resultsHTML = ''

            json.data.forEach(function(obj) {
                

                const url =  obj.images.fixed_width.url
                const width = obj.images.fixed_width.width
                const height = obj.images.fixed_width.height
                const alt = obj.title;

                resultsHTML += `<img 
                                class="items"
                                src="${url}" 
                                width="${width}" 
                                height="${height}" 
                                alt="${alt}"
                                >`
            })

        resultsEl.innerHTML = resultsHTML
    })

            // Showing I can write the function elsewhere and invoke it in the promise.

        .catch( errorHandling )
        };
