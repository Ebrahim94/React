import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 9eba44c5f19201f044459904651ba52273ad9ba1d53ce091e4e73e42cd19d8c1'
    }
})