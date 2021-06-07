const { 
    inquirerMenu, 
    pause,
    readInput
} = require('./helpers/inquirer');
const Tasks = require('./models/Task')

require('colors')



console.clear();


const main = async() =>{

    let opt = '';
    const tasks = new Tasks();

    do{
        
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput()
                
            break;

            case '2':
                console.log( tasks._list)
            break;
        }


        console.log({ opt }); 

        await pause();

    }while( opt !== '0');
}


main();