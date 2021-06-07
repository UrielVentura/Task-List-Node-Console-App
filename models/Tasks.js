const Task = require("./Task");



class Tasks {

    _list = {};

    get listsArr() {
        const lists = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            lists.push( task )
        })

        return lists
    }

    constructor(){
        this._list = {}
    }

    createTask( desc = '' ) {
        const task = new Task(desc);
        
        this._list[task.id] = task;
        
    }

}

module.exports = Tasks