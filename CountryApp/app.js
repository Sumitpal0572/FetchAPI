
document.addEventListener("DOMContentLoaded", () => {
    countryData();
});

async function countryData() {

    try {
        let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries ")

        let countryData = await res.json()
        country = countryData.data
        DisplayCountry(country)

    } catch (error) {
        console.log("Something went Wrong");
    }

}


function DisplayCountry(country) {
    let Container = document.getElementById("container")

    Container.innerHTML = "";
    country.forEach((country) => {
        const countryCard = document.createElement("div");
        countryCard.className = "country-card";

        const name = document.createElement("h2");
        name.innerText = country.country;
        console.log(name);

        const rank = document.createElement("h6");
        rank.innerText = country.Rank;

        const population = document.createElement("p");
        population.innerText = country.population;

        countryCard.append(name, rank, population);
        Container.append(countryCard);
    });
}

//function to sort countries by population
function sortCountriesByPopulation() {
    country.sort((a, b) => a.population - b.population);
    DisplayCountry(country);
}

//Selecting button
let sortButton = document.getElementById("sort-population");

//added click event listener on button
sortButton.addEventListener("click", sortCountriesByPopulation);