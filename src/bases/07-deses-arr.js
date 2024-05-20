
const personajes = ['Goku', 'Vegeta', 'Thunks'];

const [ , , p3] = personajes;

console.log(p3);
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras, numeros);


const retornaArreglo2 = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = retornaArreglo2('Goku');

console.log(nombre);
setNombre();