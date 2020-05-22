const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsEl = document.getElementById('results');
const searchNum = document.getElementById('search-num');

searchForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const q = searchInput.value;
    const limit = searchNum.value;
    search(q, limit);
    
});

function search(q, limit) {
    const apiKey = "9KemuYKuM7DozeEmiGoMHyPT9qqCBgdO";
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=${limit}`;
    console.log(path);
 //---------------------Error Handling------------------------------//
   

 //---------------Fetching and Converting Data----------------------//
    fetch(path)
        .then(function(res) {  
        return res.json()
    })
        .then(function(json) {
            console.log(json.data[0].images.fixed_width.url)
            
            let resultsHTML = ''

            json.data.forEach(function(obj) {
                console.log(obj);

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
        .catch(function(err) {
            console.log(err.message)
        });
};