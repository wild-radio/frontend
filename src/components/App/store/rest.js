// Axios
import axios from 'axios';

// Base URL
import { BACK } from '../../../utils/url';

export const getSistemas = () => axios.get(`${BACK}/sistemas`);
