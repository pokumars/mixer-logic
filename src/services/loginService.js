import axios from 'axios';
const baseURL = 'http://localhost:3003/api/login'
//const baseURL = 'http://ec2-18-192-55-244.eu-central-1.compute.amazonaws.com:3003/api/drinks'
// baseUrl as a relative URL because it is hosted from the same root folder
//const baseURL = '/api/login'


const resetPassword = () => {
  const request = axios.post(`${baseURL}/reset-password`)

  return request.then((response) => {
    console.log('axios reset password')
    console.log('-----response.status --------',response.status)
    console.log('-----response.data --------',response.data)
    return response
  })
}


export default { resetPassword }