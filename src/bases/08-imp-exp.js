// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';

import heroes, {owners} from "../data/heroes";

// console.log(owners);

export const getHeroeById = (id) => heroes.find(r => r.id === id);

// console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) =>heroes.filter(r => r.owner === owner);

// console.log(getHeroeByOwner('DC'));

// export default getHeroeById;