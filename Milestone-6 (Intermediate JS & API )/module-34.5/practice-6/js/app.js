const getLoadData = async()=>{
    const url =('https://api.dictionaryapi.dev/api/v2/entries/en/keyboard')
    const res = await fetch(url)
    const data = await res.json()
    getDisplayWord(data)

}
const getDisplayWord=(words)=>{
    const divContainer = document.getElementById('div-container')
    words.forEach(word => {
        console.log(word)
        divContainer.innerHTML = `
        <h2>${word.word}</h2>
        <p>${word.phonetic}</p>
    <ul>
        <li>${word.meanings[0].definitions[0].definition}</li>
        <li>${word.meanings[0].definitions[1].definition}</li>
        <li>${word.meanings[0].definitions[2].definition}</li>   
    </ul>
    <p>Synonyms : <span>${word.meanings[0].synonyms}</span> </p>
    <h2>${word.meanings[1].partOfSpeech}</h2>
        `
        divContainer.appendChild()

    });
}
getLoadData()