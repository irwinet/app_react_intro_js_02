
// Desestructuración

const persona = {
    nombre: 'Irwin',
    edad: 29,
    clave: '123456',
    rango: 'Soldado'
};

// const { nombre: nombre2, edad, clave } = persona;

// console.log(nombre2);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({nombre, edad, clave, rango='Capitan'}) => {
    // const { nombre, edad, clave } = usuario;
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.12,
            lng: -12.12
        }
    }
}

const { nombreClave, anios, latlng: {lat, lng} } = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat, lng);