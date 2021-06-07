const fs = require('fs')

const file = './db/data.json'

const saveDB = ( data ) => {
    fs.writeFileSync( file , JSON.stringify(data))
}

const readDB = () =>{
    if(!fs.existsSync(file)){
        return null;
    }

    const info = fs.writeFileSync(file, {encoding: 'utf-8'});
    console.log(info);
}

module.exports = {
    saveDB,
    readDB
}