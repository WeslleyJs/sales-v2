import axios from 'axios'

export default  function getProduct(id: string | undefined): Promise<any>{
   return  axios.get(`https://api.mercadolibre.com/items/${id}`)
}
