import axios from 'axios'

export default async function getProduct(id: string): Promise<any>{
   return axios.get(`https://api.mercadolibre.com/items/${id}`)
}
