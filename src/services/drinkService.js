import axios from 'axios';
//const baseURL = 'http://localhost:3001/api/drinks'
//const baseURL = 'http://ec2-18-192-55-244.eu-central-1.compute.amazonaws.com:3003/api/drinks'
// baseUrl as a relative URL because it is hosted from the same root folder
const baseURL = '/api/drinks'


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