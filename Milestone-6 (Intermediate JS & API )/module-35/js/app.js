const loadPhone = async (searchText, searchLimit) => {
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const res = await fetch(url);
    const data = await res.json()
    displayPhone(data.data, searchLimit)
}
const displayPhone = (phones, searchLimit) => {
    const phoneContainer = document.getElementById('phones-container')
    phoneContainer.textContent = ''

    // Show All
    const showAll = document.getElementById('show-all')
    if (searchLimit && phones.length > 10) {
        phones = phones.slice(0, 10)
        showAll.classList.remove('d-none')
    }
    else {
        showAll.classList.add('d-none')
    }
    // Phone Slice


    // No Phone message
    const noPhoneMessage = document.getElementById('no-phone-message')

    if (phones.length === 0) {
        noPhoneMessage.classList.remove('d-none')
    }
    else {
        noPhoneMessage.classList.add('d-none')
    }

    phones.forEach(phone => {
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
        <div class="card h-100">
                    <img src="${phone.image}" class="card-img-top p-4" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>          
                      <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</button>
                    </div>
                  </div>
        `
        phoneContainer.appendChild(phoneDiv)
    });
    // Loader Stop
    toggleSpinner(false)

}

const processSearch = searchLimit => {
    // Loader Start
    toggleSpinner(true)

    const getInputField = document.getElementById('search-field').value;
    const searchText = getInputField;
    loadPhone(searchText, searchLimit)
}
document.getElementById('search-btn').addEventListener('click', function () {
    processSearch(10)
})
document.getElementById('search-field').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        processSearch(10)
    }
})
const toggleSpinner = (isLoading) => {
    const loader = document.getElementById('spinner')
    if (isLoading) {
        loader.classList.remove('d-none')
    }
    else {
        loader.classList.add('d-none')
    }
}
document.getElementById('show-all-btn').addEventListener('click', function () {
    processSearch()
})

const loadPhoneDetails = async(id) =>{
    const url =`https://openapi.programming-hero.com/api/phone/${id}`
    const res =await fetch(url)
    const data = await res.json()
    displayPhoneDetails(data.data)
}
 
const displayPhoneDetails = phone =>{
    console.log(phone)
   const title =  document.getElementById("modalTitle")
   title.innerText =phone.name
   const phoneDetails = document.getElementById("phoneDetailsBody")
   phoneDetails.innerHTML =`
   <P>Released Date:${phone.releaseDate ? phone.releaseDate : "No Release Date Found"} </p>
   <p>Others : ${phone.others ? phone.others.Bluetooth : "No Bluetooth Found"}</P>
   `
}
loadPhone('apple')