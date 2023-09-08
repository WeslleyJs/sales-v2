import axios from 'axios';

export default async function getShipping(id: string | undefined): Promise<any>{
    return await axios.get(`https://api.mercadolibre.com/items/shipping_options/free?ids=${id}`)
 }//MLB1054520743