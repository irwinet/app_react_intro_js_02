
const persona = {
    nombre: 'Irwin',
    apellido: 'Estrada',
    edad: 29,
    direccion: {
        ciudad: 'Lima',
        zip: 101,
        lat: 14.0222,
        lng: 17.9339,
    }
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);