const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = user=>{
    const getImg = document.getElementById('img')
    getImg.src = user.results[0].picture.large;
    const getName = document.getElementById('name')
    getName.innerHTML = user.results[0].name.first+ ' ' +user.results[0].name.last;
    console.log(user)
    const getGender = document.getElementById('gender')
    getGender.innerHTML = user.results[0].gender;
    const getLocation = document.getElementById('location')
    getLocation.innerHTML = user.results[0].location.city;
     
}
loadUser()