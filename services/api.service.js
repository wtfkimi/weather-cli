import * as https from "https";
import {getKeyValue} from "./storage.service.js"
import {TOKEN_DICTIONARY} from '../dictionary/service.dictionary.js'
import axios from "axios";

const getWeatherByCity = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Token not set, please add it by command -t [API_KEY]')
    }
    const { data  } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }

    })
    return data
};

export { getWeatherByCity }