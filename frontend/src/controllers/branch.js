import axios from 'axios';

// Config
import { baseURL } from '../config';

export const getAllBranch = async () => {
    const { data } = await axios.get(baseURL + '/branch/getAllBranch/');
    return data;
}