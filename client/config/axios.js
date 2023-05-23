import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: "https://restcountries.com/v3.1",
    headers:{
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json',
    }

});

export default clienteAxios;