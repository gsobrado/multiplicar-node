const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const { getPrimerosNPrimos, imprimirPantalla, getPrimosDesdeHasta } = require('./primos/primos.js')
const argv = require('./config/yargs').argv;
const colors = require('colors');

let commando = argv._[0];

switch (commando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    case 'nprimos':
        getPrimerosNPrimos(argv.cantidad)
            .then((primos) => imprimirPantalla(primos))
            .catch(e => console.log(e));
        break;
    case 'primosdh':
        getPrimosDesdeHasta(argv.desde, argv.hasta)
            .then((primos) => imprimirPantalla(primos))
            .catch(e => console.log(e));
    default:
        break;
}