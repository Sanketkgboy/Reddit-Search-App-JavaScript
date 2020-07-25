const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search-input')

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get search term
    const searchTerm = searchInput.value;
    
    // Get sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value
    
    // Get limit
    const searchLimit = document.querySelector('#limit').value

    // Check Input
    if(searchTerm === '') {
        // show message
        showMessage('Please add a search term', 'alert-danger')
    }
    
    // Clear input after searching
    searchInput.value = '';

    // Do the reddit search by respective inputs
    searchReddit(searchTerm, searchLimit, sortBy)
    .then(results => {
        let output = '<div class="card-columns">';
        // Loop through posts
        results.forEach(post => {
            // Check for image
            const image = post.preview ? post.preview.images[0].source.url 
            :'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';
            
            // Creating card for searches
            output += `
            <div class="card">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${truncateText(post.selftext, 100)}</p>
                    <a href="${post.url}" target="_blank" class="btn btn-primary">Read More</a>
                    <hr>
                    <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
                    <span class="badge badge-dark">Score: ${post.score}</span>
                </div>
            </div>
            `;
        })
        output += '</div>'
    document.getElementById('results').innerHTML = output;
});

})


function showMessage(message, className) {
    // Create div
    const div = document.createElement('div')
    // add classes
    div.className = `alert ${className}`
    // insert text inside div
    div.appendChild(document.createTextNode(message))
    // Get parent
    const searchContainer = document.getElementById('search-container')
    // Get the id of element before what you want to insert the div
    const search = document.getElementById('search')
    // Insert in the document
    searchContainer.insertBefore(div, search)
    
    // Vanish alert after 2.5 seconds
    setTimeout(() => document.querySelector('.alert').remove(),2000)
}

// Truncate Text
function truncateText(text, limit) {
    const shortened = text.indexOf(' ', limit);
    console.log(shortened)
    if(shortened == -1) return text;
    return text.substring(0, shortened)
}


// Search on Reddit
function searchReddit(searchTerm, searchLimit, sortBy) {
    return fetch(
        `http://www.reddit.com/search.json?q=${searchTerm}&
        sort=${sortBy}&limit=${searchLimit}`
    ).then(res => res.json())
    .then(data => data.data.children.map(data => data.data)) //map is used to get array of only data from the object
    .catch(err => console.log(err))
}
    