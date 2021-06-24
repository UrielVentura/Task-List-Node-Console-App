const {
    inquirerMenu,
    pause,
    readInput,
    listTaskDelete
} = require('./helpers/inquirer');
const {
    saveDB,
    readDB
} = require('./helpers/saveFile');
const Tasks = require('./models/Tasks')

require('colors')


const main = async () => {

    let opt = '';
    const tasks = new Tasks();

    const taskDb = readDB();

    if (taskDb) {
        tasks.loadTaskArr(taskDb);
    }


    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Description:')
                tasks.createTask(desc)

                break;

            case '2':
                tasks.fullList();
                break;

            case '3':
                tasks.toListPendingCompleted();
                break;

            case '4':
                tasks.toListPendingCompleted(false);
                break;

            case '6':
                const id = await listTaskDelete(tasks.listsArr)
                console.log({
                    id
                });
                break;
        }

        saveDB(tasks.listsArr)

        await pause();

    } while (opt !== '0');
}


main();