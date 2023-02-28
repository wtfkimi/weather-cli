import chalk from 'chalk'
import dedent from 'dedent-js'

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
}

export { printSuccess, printError, printHelp };