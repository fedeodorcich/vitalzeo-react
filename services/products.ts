import axios from 'axios';

const API_URL = 'https://vitalzeo.com.ar';

async function getProducts(category:string) {
  const response = await axios.get(`${API_URL}/crud/getProductsByCategory.php?category=${category}`);
  return response.data;
}

export default{getProducts}