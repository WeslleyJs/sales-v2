import axios from 'axios';

export default async function getCategory(id: string | undefined): Promise<any>{
    return await axios.get(`https://api.mercadolibre.com/categories/${id}`);
}