const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const optsPrimos = {
    cantidad: {
        demand: true,
        alias: 'n'
    }
}

const optsPrimosDesdeHata = {
    desde: {
        demand: true,
        alias: 'd'
    },
    hasta: {
        demand: true,
        alias: 'h'
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea el archovo de la tabla', opts)
    .command('nprimos', 'Devuelve los primeros N primos existentes', optsPrimos)
    .command('primosdh', 'Devuelve los existentes desde el paramento hasta', optsPrimosDesdeHata)
    .help()
    .argv;

module.exports = {
    argv
}