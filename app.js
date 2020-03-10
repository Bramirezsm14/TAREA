
let archivoTareas = require('./tareas');
let orden = process.argv[2]);
switch (orden) {
    case 'listar':
        console.log('listando de tareas');
        let tareas = archivoTareas.leer();
        for (let i = 0;  i< tareas.length; i++) {
           console.log(i+1+ ' ' + tareas[i].titulo + ' - ' + tareas[i].estado);     
        }
        break;
    case undefined:
        console.log('Tenés que pasar una accion!');
        break;
    default:
        console.log('mmmmmm NO ENTIENDO');
        console.log('Las acciones disponibles son: - Listar');
        break
        
        break;
}



