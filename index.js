export const returnTrue = () => true

// URLs for API entry points. affirmationURL runs through proxy to avoid CORS error
const affirmationURL = 'https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/'
const corporateBsURL = 'https://corporatebs-generator.sameerkumar.website/'
const dadJokeFetch = 'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes'
const dogPic = 'https://dog.ceo/api/breed'

// async function to fetch data from affirmation api
// this then calls a function called updateAffirmation and passes the affirmation data do it
async function getAffirmation() {
        let response = await fetch(affirmationURL)
        let affirmationData = await response.json()
        // updateAffirmation(affirmationData.affirmation)
        document.getElementById("affirmation").innerHTML = affirmationData.affirmation
}

// async function to fetch data from corporate bs api
async function getCorporateBS() {
    let response = await fetch(corporateBsURL)
    let corporateData = await response.json()
    // updateBS(corporateData.phrase)
    // console.log(corporateData.phrase)
    document.getElementsByClassName("occupation")[0].innerHTML = corporateData.phrase
}


// Dad joke
fetch(dadJokeFetch)
    .then((response) => response.json()) //returns a promise
    .then((data) => {console.log(data)}) //handles the data and runs a function
    .catch((error) => {console.log("error: " + error)}) //hands the errors


    let punchLine = document.getElementById("punchline")
    let setUp = document.getElementById("setup")
    // let jokeButton = document.getElementById("get-dad-jokes")
    // jokeButton.addEventListener('click', getJoke)
    
    async function getJoke() {
        let data = null
        let response = await fetch(`${dadJokeFetch}`)
        data = await response.json()
        // punchLine.innerText = data.punchline
        // setUp.innerText = data.setup

        document.getElementById("setup").innerHTML = data.setup
        document.getElementById("payoff").innerHTML = data.punchline

    }

    let dogBreed = document.getElementById("breed")
let doggie = document.getElementById("doggie")

async function getDog(breed) {
    let response = await fetch(`${dogPic}/${breed}/images/random`)
    let dogData = await response.json()
    let updateDog = dogData.message
    // change console.log with your function to update the html content
    doggie.src = updateDog
}




// let test_img = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rspcansw.org.au%2Fwhat-we-do%2Fadoptions%2Fdogs-and-puppies%2F&psig=AOvVaw3fTLDUiJGBwJutJInTh37F&ust=1620352875297000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiEhoD7s_ACFQAAAAAdAAAAABAD'






// testing

function updateAffirmation(newAffirmation) {
affirmation = document.getElementById("affirmation")
affirmation.innerHTML = (newAffirmation)
}
function updateBS(newBS) {
    corporateBS = document.getElementById("bs")
    corporateBS.innerHTML = (newBS)
}
getDog("collie")




let subButton = document.getElementById("submit")


let nameTag = document.getElementById("name")
let ageTag = document.getElementById("age")
let occupationTag = document.getElementById("occupation")
let breedTag = document.getElementById("breed")



subButton.addEventListener("click", function(event) {
    event.preventDefault()
    let nameValue = nameTag.value
    let ageValue = ageTag.value
    let occupationValue = occupationTag.value
    let breedValue = breedTag.value
        //This is just for testing not needed
        //let para = document.getElementById("test")
        //Uncomment and test to see if above values work
        //para.innerText = `name:${nameValue}, age:${ageValue}, occupation:${occupationValue}, breed:${breedValue} `


    getJoke()
    getDogPic()
    getCorporateBS()
    getAffirmation()
    document.getElementById("container").style.visibility = "hidden"
    document.getElementById("container").style.height = "0"
    document.getElementById("container2").style.visibility = "visible"
    
})


