// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';

import { heroes } from "./data/heroes";

const getHeroeById = (id) => heroes.find(r => r.id === id);

console.log(getHeroeById(2));

const getHeroeByOwner = (owner) =>heroes.filter(r => r.owner === owner);

console.log(getHeroeByOwner('DC'));