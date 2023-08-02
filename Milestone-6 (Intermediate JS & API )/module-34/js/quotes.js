const loadQuotes =()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}
function displayQuotes(data){
    const getBlockQuotes = document.getElementById('quotes')
    console.log(data)
    getBlockQuotes.innerHTML = data.quote;
}
loadQuotes()