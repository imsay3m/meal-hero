// console.log("hello World")


let loadData = (defalut) => {
    const searchText = document.getElementById("search-box").value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText[0] ? searchText[0] : defalut}`)
        .then(res => res.json())
        .then(data => displayData(data.meals))
        .catch(err => {
            console.log(err.message)
        })
}

const displayData = (data) => {
    document.getElementById("total-meals").innerText = data.length
    // console.log(data)
    const mealsContainer = document.getElementById("meals-container")
    mealsContainer.innerText = ''
    data.forEach((meal) => {
        const card = document.createElement("div")
        card.innerHTML = `
            <div class="w-48 p-4 m-3 overflow-hidden bg-white shadow-lg rounded-xl flex flex-col justify-center items-center">
                <img src=${meal.strMealThumb}
                    class="w-36 h-36 ring-4 ring-orange-500 rounded-sm mb-4" />
                <div class="w-full">
                    <p class="mb-2 text-lg font-bold text-gray-800">
                        ${meal.strMeal}
                    </p>
                    <p class="text-xs text-gray-400">
                        ${meal.strArea}
                    </p>
                    <p class="text-sm font-normal text-indigo-400">
                        ${meal.strCategory}
                    </p>
                </div>
            </div>
        `

        mealsContainer.appendChild(card)
    });
}
loadData('a')