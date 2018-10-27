// Axios
import axios from 'axios';

// Base URL
import { BACK } from '../../../utils/url';

export const postSistema = sistema => axios.post(`${BACK}/sistemas`, sistema);
