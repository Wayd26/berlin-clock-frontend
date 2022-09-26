import axios from "axios";

import {BASE_URL} from '../constants/constants';

const api = axios.create({
    baseURL: BASE_URL,
     headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
}
  });


  export function convertToDigitalTime(data) {
    let formattedData = {
        'source' : data.source
    }
    const response = api.post("to-digital-time", formattedData);
    return response.then((data) => data).catch((error) => error);
  }

  export function convertToBerlinTime(data) {
    let formattedData = {
        'hours' : data.hours,
        'minutes' : data.minutes,
        'seconds' : data.seconds
    }
    const response = api.post("to-berlin-time", formattedData);
    return response.then((data) => data).catch((error) => error );
  }

  
