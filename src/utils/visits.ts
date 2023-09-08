import axios, { AxiosResponse } from 'axios';

export const getVisits = async (id: string | undefined): Promise<AxiosResponse> => {
    try {
        const res = await axios.get(`https://api.mercadolibre.com/items/${id}/visits/time_window?last=7&unit=day`);
        return res;
    } catch (error: any) {
        if (error.response && error.response.status === 429) {
            const retryAfter = error.response.headers['Retry-After'];
            // Aguarde o tempo especificado antes de tentar novamente
            await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
            // Tente novamente a solicitação
            return getVisits(id);
        }
        throw error;
    }
}