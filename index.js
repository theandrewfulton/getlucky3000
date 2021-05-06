// export const returnTrue = () => true

// // entry point for affirmation url, runs through proxy to avoid CORS error
// const affirmationURL = "https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/"
// const corporateBsURL = "https://corporatebs-generator.sameerkumar.website/"
//     // initially set data to loading. It can be something else, or an empty string.
// let affirmationData = "loading"
//     // async function to fetch data from affirmation api
// async function getAffirmation() {
//     let response = await fetch(affirmationURL)
//     affirmationData = await response.json()
//     return affirmationData.affirmation
// }
// let corporateData = "loading"
//     // async function to fetch data from corporate bs api
// async function getCorporateBS() {
//     let response = await fetch(corporateBsURL)
//     corporateData = await response.json()
//     return corporateData.phrase
// }



// const dogPic = 'https://dog.ceo/api/breeds/image/random'

// let fart
// let doggie = document.getElementById("doggie")
// fetch(dogPic)
//     .then((response) => response.json()) //returns a promise
//     .then((data) => { console.log(data) }) //handles the data and runs a function
//     .catch((error) => { console.log("error: " + error) })



// async function getDogPic() {
//     let data = null
//     let response = await fetch(`${dogPic}`)
//     data = await response.json()
//     doggie.src = data.message

// }


// // getDogPic()



// let test_img = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rspcansw.org.au%2Fwhat-we-do%2Fadoptions%2Fdogs-and-puppies%2F&psig=AOvVaw3fTLDUiJGBwJutJInTh37F&ust=1620352875297000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiEhoD7s_ACFQAAAAAdAAAAABAD'

// // entry point for affirmation url, runs through proxy to avoid CORS error
// const affirmationURL = "https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/"
// const corporateBsURL = "https://corporatebs-generator.sameerkumar.website/"
//     // initially set data to loading. It can be something else, or an empty string.
// let affirmationData = "loading"
//     // async function to fetch data from affirmation api
// async function getAffirmation() {
//     let response = await fetch(affirmationURL)
//     affirmationData = await response.json()
//     return affirmationData.affirmation
// }
// let corporateData = "loading"
//     // async function to fetch data from corporate bs api
// async function getCorporateBS() {
//     let response = await fetch(corporateBsURL)
//     corporateData = await response.json()
//     return corporateData.phrase
// }



// const dadJokeFetch = 'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes'

// fetch(dadJokeFetch)
//     // .then((response) => response.json()) //returns a promise
//     // .then((data) => {console.log(data)}) //handles the data and runs a function
//     // .catch((error) => {console.log("error: " + error)}) //hands the errors


// let punchLine = document.getElementById("punchline")
// let setUp = document.getElementById("setup")
// let jokeButton = document.getElementById("get-dad-jokes")
// jokeButton.addEventListener('click', getJoke)

// async function getJoke() {
//     let data = null
//     let response = await fetch(`${dadJokeFetch}`)
//     data = await response.json()
//     punchLine.innerText = data.punchline
//     setUp.innerText = data.setup
// }


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
})