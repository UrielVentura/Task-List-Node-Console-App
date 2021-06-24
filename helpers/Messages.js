const {
    resolve
} = require('path');

require('colors');

const showMenu = () => {

    return new Promise(resolve => {

        console.clear();

        console.log('==================='.green);
        console.log('  Select an option '.green);
        console.log('===================\n'.green);

        console.log(`${ '1.'.green } Create a new Task`);
        console.log(`${ '2.'.green } List Tasks`);
        console.log(`${ '3.'.green } List Completed Tasks`);
        console.log(`${ '4.'.green } List Pending Tasks`);
        console.log(`${ '5.'.green } Complete a Task`);
        console.log(`${ '6.'.green } Delete a Task`);
        console.log(`${ '0.'.green } Exit \n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Select an option: ', (opt) => {
            readLine.close();
            resolve(opt)
        })

    })

}

const pause = () => {

    return new Promise(resolve => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question(`\n Presione ${'ENTER'.green} para continuar\n`, (opt) => {
            readLine.close();
            resolve()
        })
    })
}

module.exports = {
    showMenu,
    pause
};