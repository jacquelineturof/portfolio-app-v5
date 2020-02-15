import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://portofolio-contact.firebaseio.com/'
})

export default instance