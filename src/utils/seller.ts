import axios from 'axios';

export default async function getSeller(id: any): Promise<any>{
    return await axios.get(`https://api.mercadolibre.com/users/${id}`);
}