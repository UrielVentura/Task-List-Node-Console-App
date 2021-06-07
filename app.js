const { 
    inquirerMenu, 
    pause,
    readInput
} = require('./helpers/inquirer');
const { saveDB } = require('./helpers/saveFile');
const Tasks = require('./models/Tasks')

require('colors')


const main = async() =>{

    let opt = '';
    const tasks = new Tasks();

    do{
        
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Description:')
                tasks.createTask( desc )
                
            break;

            case '2':
                console.log( tasks.listsArr)
            break;
        }

        saveDB(tasks.listsArr)

        await pause();

    }while( opt !== '0');
}


main();