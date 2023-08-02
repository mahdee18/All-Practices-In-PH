const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = (meals) => {
    console.log(meals)
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerText = ''
    meals.forEach(meal => {
        console.log(meal)
        const mealDiv =document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML=`
        <div class="col mb-4">
          <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores nihil a expedita adipisci voluptatum, voluptas debitis! Molestiae, accusantium autem eligendi error assumenda nobis nesciunt, voluptate quas ut eveniet quos.</p>
              <button type="button" onclick="loadMealDetail(${meal.idMeal})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meal-detailsModal ">
              Details
              </button>
            </div>
          </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv)
    });
}
const searchText = ()=>{
    const searchText = document.getElementById('searchInput').value;
    loadMeals(searchText)
}

const loadMealDetail = idMeal=>{
    console.log(idMeal)
    const url = (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data))
}
const displayMealDetails = meal =>{
    document.getElementById('meal-detailsModal').innerText=meal.strMeal;
    const mealDetailsBody = document.getElementById('meal-details-body')
    mealDetailsBody.innerHTML=`
    <img class="img-fluid" src="${meal.strMealThumb}" class="card-img-top" alt="...">
    `

}
loadMeals('fish')