#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import {printHelp, printSuccess, printError, logDataResultBeautiful} from "./services/log.service.js";
import {getKeyValue, saveKeyValue} from "./services/storage.service.js";
import {TOKEN_DICTIONARY} from "./dictionary/service.dictionary.js"
import {getWeatherByCity} from "./services/api.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError("Token not set");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token successfully added')
    }catch (e) {
        printError(e.message);
    }
}

const saveCity = async (city) => {
    if (!city) {
        printError("City not set");
        return;
    }
    try {
        await saveKeyValue('city', city);
        printSuccess('City successfully added');
    }catch (e) {
        printError(e.message)
    }
}

const getForcast = async () => {
    const city = await getKeyValue('city');
    try {
        const weather = await getWeatherByCity(process.env.CITY ?? city);
        logDataResultBeautiful(weather)
    }catch (e) {
        if (e?.response?.status == 404) {
            printError('Can\'t find city, check ISO-3166');
        }else if (e?.response?.status == 401) {
            printError('Token not valid');
        } else {
            printError(e.message);
        }

    }


}

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
    if (args.s) {
        saveCity(args.s);
    }
    if (args.t) {
        saveToken(args.t);
    }
    getForcast();
    // Give weather
}



initCLI()