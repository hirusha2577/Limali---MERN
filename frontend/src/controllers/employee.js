import axios from 'axios';

// Config
import { baseURL } from '../config';

export const getAllDrivers = async () => {
    const { data } = await axios.get(baseURL + '/employee/getDrivers/');
    return data;
}