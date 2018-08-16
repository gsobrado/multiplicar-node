const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un numero`.red)
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}-limite-${limite}.txt`)
            }
        });
    });
}

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        reject(`El valor introducido '${base}' no es un numero.`.red)
        return;
    }

    console.log('============================='.green);
    console.log(`======== TABLA DEL ${base} ========`.red);
    console.log('============================='.green);

    let data = '';
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${ i } = ${ base * i }\n`.green);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}