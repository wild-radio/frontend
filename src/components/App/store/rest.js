// Axios
import axios from 'axios';

// Base URL
import BASE_URL from '../../../utils/url';

export const getSistemas = () => axios.get(`${BASE_URL}/sistemas`);
