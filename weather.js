#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import {printHelp, printSuccess, printError} from "./services/log.service.js";
import {saveKeyValue} from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError("Token not set");
        return;
    }
    try {
        await saveKeyValue('token', token);
        printSuccess('Token successfully added')
    }catch (e) {
        printError(e.message);
    }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        //save city
    }
    if (args.t) {
        return saveToken(args.t);
    }
    // Give weather
}



initCLI()