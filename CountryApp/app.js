let Container = document.getElementById("container")


async function countryData() {

    try {
        let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries ")

        let Data = await res.json()
        console.log(Data);
    } catch (error) {
        console.log("Something went Wrong");
    }

}

countryData()