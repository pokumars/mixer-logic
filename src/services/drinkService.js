import axios from 'axios';
const baseURL = 'http://localhost:3001/drinks'

const getAllDrinks = () => {
  const request = axios.get(`${baseURL}`)

  return request.then((response) => {
    console.log('axios fetch of drinks fulfilled.', response.data.length, 'drinks found')
    return response.data
  })
}

const getSingleDrink = (drinkID) => {
  const request = axios.get(`${baseURL}/${drinkID}`)

  return request.then((response) => {
    console.log(`axios fetch of single drink fulfilled`)
    return response.data
  })
}


export default { getAllDrinks, getSingleDrink }