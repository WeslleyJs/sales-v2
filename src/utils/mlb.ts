import axios from 'axios'

export default async  function getProduct(id: string | undefined): Promise<any>{
   return await axios.get(`https://api.mercadolibre.com/items/${id}`)
}
