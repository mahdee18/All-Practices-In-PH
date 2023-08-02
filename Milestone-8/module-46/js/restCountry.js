const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    console.log(countries)
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML)
    const container = document.getElementById('container')
    container.innerHTML = countriesHTML.join(' ')
}
const getCountryHTML = country => {
    return `
    <div class="country">
    <img src="${country.flags.png}">
        <h2>Name: ${country.name.common}</h2>
        <h2>Capital: ${country.capital}</h2>
    </div>
    `
}

loadCountries()