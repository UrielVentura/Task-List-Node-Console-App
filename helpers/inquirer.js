const inquirer = require('inquirer')
require('colors')

const  menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create a new Task`
            },
            {
                value: '2',
                name: `${'2.'.green} List Tasks`
            },
            {
                value: '3',
                name: `${'3.'.green} List Completed Tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} List Pending Tasks`
            },
            {
                value: '5',
                name: `${'5.'.green } Complete a Task`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete a  Task`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
            },
        ]
    }
]


const inquirerMenu = async() => {
    console.clear();

    console.log('==================='.green);
    console.log('  Select an option '.green);
    console.log('===================\n'.green);

    const { option } = await inquirer.prompt(menuOpts);

    return option;
}

const pause = async() => {
    const question = {
        type: 'input',
        name: 'enter',
        message: `Press ${'ENTER'.green } for continue`
    }

    console.log('\n');
    await inquirer.prompt(question)
}


module.exports = {
    inquirerMenu,
    pause
}