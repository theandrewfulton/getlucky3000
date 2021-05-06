export const returnTrue = () => true

// entry point for affirmation url, runs through proxy to avoid CORS error
const affirmationURL = "https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/"
const corporateBsURL = "https://corporatebs-generator.sameerkumar.website/"
// initially set data to loading. It can be something else, or an empty string.
let affirmationData = "loading"
// async function to fetch data from affirmation api
async function getAffirmation () {
        let response = await fetch(affirmationURL)
        affirmationData = await response.json()
        return affirmationData.affirmation
}
let corporateData = "loading"
// async function to fetch data from corporate bs api
async function getCorporateBS () {
    let response = await fetch(corporateBsURL)
    corporateData = await response.json()
    return corporateData.phrase
}



const dogPic = 'https://dog.ceo/api/breeds/image/random'

let fart
let doggie = document.getElementById("doggie")
fetch(dogPic)
    .then((response) => response.json()) //returns a promise
    .then((data) => {console.log(data)}) //handles the data and runs a function
    .catch((error) => {console.log("error: " + error)}) 



async function getDogPic() {
    let data = null
    let response = await fetch(`${dogPic}`)
    data = await response.json()
    doggie.src = data.message

}


// getDogPic()



let test_img = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rspcansw.org.au%2Fwhat-we-do%2Fadoptions%2Fdogs-and-puppies%2F&psig=AOvVaw3fTLDUiJGBwJutJInTh37F&ust=1620352875297000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiEhoD7s_ACFQAAAAAdAAAAABAD'

// entry point for affirmation url, runs through proxy to avoid CORS error
const affirmationURL = "https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/"
const corporateBsURL = "https://corporatebs-generator.sameerkumar.website/"
// initially set data to loading. It can be something else, or an empty string.
let affirmationData = "loading"
// async function to fetch data from affirmation api
async function getAffirmation () {
        let response = await fetch(affirmationURL)
        affirmationData = await response.json()
        return affirmationData.affirmation
}
let corporateData = "loading"
// async function to fetch data from corporate bs api
async function getCorporateBS () {
    let response = await fetch(corporateBsURL)
    corporateData = await response.json()
    return corporateData.phrase
}