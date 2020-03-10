const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    encoding:'utf-8',
    leer: function () {
        let tareas = fs.readFileSync(this.archivo, this.encoding)
        return JSON.parse(tareas);
    },

}

module.exports = archivoTareas;
