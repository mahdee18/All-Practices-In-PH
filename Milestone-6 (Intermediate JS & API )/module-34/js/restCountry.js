const getRestCountry = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>getDisplay(data))
}

const getDisplay = countries =>{
    console.log(countries)
    const countryDiv = document.getElementById('countries')
    countries.forEach(country=>{
        console.log(country.languages)
        const singleCountryDiv = document.createElement('div')
        singleCountryDiv.classList.add('country')
        singleCountryDiv.innerHTML = `
        <img src="${country.flags.png}" >
        <h1>Name : ${country.name.common}</h1>
        <h4>Capital : ${country.capital ? country.capital[0]:'No Capital'}</h4>
        <h4>Language : ${country.languages.eng}</h4>

        <h4>Maps : ${country.maps.googleMaps}</h4>
        `
        countryDiv.appendChild(singleCountryDiv)
    })
}

getRestCountry()
