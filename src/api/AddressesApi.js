import {api} from "./config/axiosConfig";

const URL = "/addresses";

export const AddressesApi = {

    getAll: async () => {
        const response = await api.get(`${URL}`);
        return response.data;
    },

    get: async (id) => {
        const response = await api.get(`${URL}/${id}`);
        return response.data;
    },

    create: async (address) => {
        const response = await api.post(`${URL}`, address);
        return response.data;
    },

    update: async (address) => {
        const response = await api.put(`${URL}/${address.id}`, address);
        return response.data;
    },

    delete: async (id) => {
        const response = await api.delete(`${URL}/${id}`);
        return response.data;
    }

}