const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
    {
    name: {
    common: "John",
    fullName: ["John", "Doe"]
    },
    age: 32,
    isMale: false,
    address: {
    street: "13/A St Joseph",
    house: 10,
    },
    },
    {
    name: {
    common: "Humayoun",
    fullName: ["Humayoun", "Kabir"]
    },
    age: 33,
    isMale: false,
    address: {
    street: "13/A St Lucia",
    house: 11,
    },
    },
    ]
    };
   
    

    // Get load data
    const cardContainer = document.getElementById('card-container')
    person.result.forEach((person)=>{
        console.log(person)
        const personDiv = document.createElement('div')
        personDiv.classList.add('col')
        personDiv.innerHTML =`
        <h3>Name:${person.name.common}</h3>
        <h5>Age:${person.age}</h5>
        <h5>Street:${person.address.street}</h5>
        `
        cardContainer.appendChild(personDiv)
    })

    