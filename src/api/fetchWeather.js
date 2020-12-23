import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e8edff1a205bdcea954f3b8b9f291097';

export const fetchWeather = async (query)=>{
    const {data} = await axios.get(URL, {

        params:{


            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}

