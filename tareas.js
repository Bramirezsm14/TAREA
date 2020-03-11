const fs = require('fs');// llamamos a file systme , es un modulo nativo que viene con node. nos brinda fx de manejos de archivos,

let archivoTareas = {
    archivo: 'tareas.json',
    encoding:'utf-8',
    leer: function () {
        //let archivoEnJson = fs.readFileSync(this.archivo, 'utf-8')
        // return Json.parse(archivoEnJson)
        let tareas = fs.readFileSync(this.archivo, this.encoding)
        return JSON.parse(tareas);
    },

}

module.exports = archivoTareas;
