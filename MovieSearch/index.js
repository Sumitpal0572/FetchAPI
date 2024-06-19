let btn = document.getElementById("search");

//adding eventlistener on button when clicked
btn.addEventListener("click", function () {
    getMovieDetails();
});

//function to fetch the movie details
async function getMovieDetails() {
    try {
        let title = document.getElementById("movieTitle").value; //grabbing title from the input
        let apiKey = "ad9cf180"; //api key
        let response = await fetch(
            `http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`
        );
        let moviedata = await response.json();
        console.log(moviedata);
        displayMovie(moviedata); //calling displayMovie function to display the details
    } catch (error) {
        console.log("Something went wrong!");
    }
}

//The displayed information should include at least the movie title, release year, plot, and poster.

//function to display data
function displayMovie(movieData) {
    let card = document.getElementById("movie");
    card.innerText = "";

    let title = document.createElement("h2");
    title.innerText = movieData.Title;

    let plot = document.createElement("p");
    plot.innerText = movieData.Plot;

    let poster = document.createElement("img");
    poster.src = movieData.Poster;

    let releaseYear = document.createElement("p");
    releaseYear.innerText = movieData.Released;

    card.append(poster, title, plot, releaseYear);
}