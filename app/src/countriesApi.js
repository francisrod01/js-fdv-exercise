import axios from 'axios';

const baseURL = 'https://restcountries.eu/rest/v2/';
const api = axios.create({
  baseURL,
});


const countriesApi = {
  loadAllCountries: () => api.get('all'),
};

export default countriesApi;
