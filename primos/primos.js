const colors = require('colors');

let getPrimerosNPrimos = (cantidad) => {
    return new Promise((resolve, reject) => {
        if (!Number(cantidad)) {
            reject(`Cantidad no es un numero`.red);
        }
        if (cantidad < 1) {
            reject(`No existe nigun numero primo`.bgRed);
        }

        let primos = [1];
        let i = 2;
        while (primos.length !== cantidad) {
            let esPrimo = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    esPrimo = false
                    break;
                }
            }
            if (esPrimo) {
                primos.push(i);
            }
            i++;
        }
        resolve(primos);
    });
}

let getPrimosDesdeHasta = (desde, hasta) => {
    return new Promise((resolve, reject) => {
        if (!Number(desde)) {
            reject(`El Parametro desde tiene que ser un numero`.red)
        }
        if (!Number(hasta)) {
            reject(`El Parametro hasta tiene que ser un numero`.red)
        }

        let primos = [];
        for (let d = desde; d <= hasta; d++) {
            let esPrimo = true;
            for (let i = 2; i < d; i++) {
                if (d % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {
                primos.push(d);
            }
        }

        resolve(primos);
    });
}

let imprimirPantalla = (primos) => {
    if (primos.length === 0) {
        console.log(`No existe nignun numero primo en el rango seleccionado`.bgRed);
    }
    for (let index = 0; index < primos.length; index++) {
        console.log(`El ${index + 1}° Primo es: ${primos[index]}`.green);
    }
}

module.exports = {
    getPrimerosNPrimos,
    imprimirPantalla,
    getPrimosDesdeHasta
}