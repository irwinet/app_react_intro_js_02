
function saludar(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar4 = (nombre) => `Hola, ${nombre}`;

console.log(saludar('Irwin'));
console.log(saludar2);
console.log(saludar3('Pedro'));
console.log(saludar4('Juan'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'irwinet'
    };
}

const getUser2 = () => (
    {
        uid: 'ABC123',
        username: 'irwinet'
    }
)

console.log(getUser2());

const getUsuarioActivo =  (nombre) => (
    {
        uid: 'ABC123',
        username: nombre
    }
);

const usuarioActivo = getUsuarioActivo('Irwin');
console.log(usuarioActivo)

