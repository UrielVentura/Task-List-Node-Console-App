const Task = require("./Task");



class Tasks {

    _list = {};

    get listsArr() {
        const lists = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            lists.push(task)
        })

        return lists
    }

    constructor() {
        this._list = {}
    }

    deleteTask(id = '') {

        if (this._list[id]) {
            delete this._list[id]
        }
    }

    loadTaskArr(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        })
    }

    createTask(desc = '') {
        const task = new Task(desc);

        this._list[task.id] = task;

    }

    fullList() {

        console.log()
        this.listsArr.forEach((task, index) => {

            const idx = `${index + 1}`.green;
            const {
                desc,
                completedin
            } = task;

            const status = (completedin) ?
                'Completed'.green :
                'Pending'.red;
            console.log(`${idx}. ${desc} :: ${status}`);
        })
    }

    toListPendingCompleted(completed = true) {

        let count = 0;
        console.log()
        this.listsArr.forEach((task) => {

            const {
                desc,
                completedin
            } = task;

            const status = (completedin) ?
                'Completed'.green :
                'Pending'.red;

            if (completed) {
                //Show completed Tasks
                if (completedin) {
                    count += 1;
                    console.log(`${count.toString().green}. ${desc} :: ${completedin}`);
                }
            } else {
                // Show pending Tasks
                if (!completedin) {
                    count = +1
                    console.log(`${count.toString().green}. ${desc} :: ${status}`);
                }
            }


        })
    }

}

module.exports = Tasks