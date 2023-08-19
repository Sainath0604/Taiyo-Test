import axios from 'axios';

export const fetchCaseData = async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/all');
    return response.data;
  };