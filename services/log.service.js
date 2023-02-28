import chalk from 'chalk'
import dedent from 'dedent-js'
import {EMOJI_DICTIONARY} from "../dictionary/emoji.dictionary.js"
import {getIcon} from "../helpers/emoji.helper.js";

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}
const printSuccess = (msg) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + msg);
}

const printHelp = () => {
    //dedent - destroy tabs and space
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        `
    );
};

const logDataResultBeautiful = (data) => {
    console.log(data)
    console.log(
        dedent`
        ${getIcon(data?.weather[0]?.icon)} Погода в городе ${data.name}
        ${EMOJI_DICTIONARY.COORDINATE} ${chalk.bgCyan(' Координаты: ')} долгота ${data?.coord?.lon}, широта: ${data?.coord?.lat}
        ${EMOJI_DICTIONARY.THERMOMETER} ${chalk.bgCyan(' Температура: ')} по цельсию ${data?.main?.temp}, чувствуется как ${data?.main?.feels_like}
        ${EMOJI_DICTIONARY.PRESSURE} ${chalk.bgCyan(' Атмосферное давление: ')} показатель  ${data?.main?.pressure} hPa, чувствуется как ${data?.main?.humidity}%
        ${EMOJI_DICTIONARY.MINIMUM} ${chalk.bgCyan(' Минимальная температура: ')} по цельсию  ${data?.main?.temp_min}
        ${EMOJI_DICTIONARY.MAXIMUM} ${chalk.bgCyan(' Максимальная температура: ')} по цельсию  ${data?.main?.temp_max}
        
      
        `
    )
}

export { printSuccess, printError, printHelp, logDataResultBeautiful };