import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://stage.rescrypto.pro/proxy/api/v1/`,
  headers: {
    'Authorization': 'Basic dGVzdDp0ZXN0',
    'Content-Type': 'application/json'
  }
});
