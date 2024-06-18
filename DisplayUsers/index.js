let Btn = document.getElementById("fetch-user");


Btn.addEventListener("click", function () {
    getUserData();
})


async function getUserData() {

    try {
        let res = await fetch("https://reqres.in/api/users?page=1")

        let user = await res.json();
        console.log(user);
        displayUserData(user.data);
    } catch (error) {
        console.log("something wrong");
    }

}


function displayUserData(user) {
    let userContainer = document.getElementById("user-container");
    userContainer.innerHTML = ""


    user.forEach((ele) => {
        let card = document.createElement("div");
        card.classList.add("user-card");

        let image = document.createElement("img");
        image.src = ele.avatar;

        let name = document.createElement("h3");
        name.textContent = `${ele.first_name} ${ele.last_name}`; // Full name

        let email = document.createElement("p");
        email.textContent = ele.email;

        card.append(image, name, email);
        userContainer.appendChild(card); // Append the card to the container
    });
}

