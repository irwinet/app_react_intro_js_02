import { getHeroeById } from "./bases/08-imp-exp";


// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('2 segundos despues');
//         // resolve();
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');

//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('Heroe', heroe);
// })
// .catch(err => console.log(err));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('2 segundos despues');
            // resolve();
            const heroe = getHeroeById(id);
            if(heroe)
                resolve(heroe);
            else 
                reject('No se pudo encontrar el heroe');
            // reject('No se pudo encontrar el heroe');
    
        }, 2000);
    });
}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.log)