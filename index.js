export const returnTrue = () => true


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