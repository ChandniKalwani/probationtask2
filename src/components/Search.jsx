import React from 'react';
function Search(event) {
    const apikey='741d189921c745d7b440ad78255638d5';
    const topic=document.getElementById('search').innerHTML;
    let url='https://newsapi.org/v2/everything?q={topic}&apiKey=741d189921c745d7b440ad78255638d5'
    return(console.log(topic));
}
export default Search;