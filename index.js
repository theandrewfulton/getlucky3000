export const returnTrue = () => true

// entry point for affirmation url
const affirmationURL = "https://cors-anywhere.herokuapp.com/https://www.affirmations.dev/"
// initially set data to loading. It can be something else, or an empty string.
let data = "loading"
// async function to fetch data from affirmation api
async function getAffirmation () {
        let response = await fetch(affirmationURL)
        data = await response.json()
        return data.affirmation
}