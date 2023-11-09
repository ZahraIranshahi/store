import axios from 'axios';

const BASE_URL = "https://fakestoreapi.com";
const fetchAPI = async ()=>{
const products = await axios.get(`${BASE_URL}/products`);
return products.data;
}
export {fetchAPI};