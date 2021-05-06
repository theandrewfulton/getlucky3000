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