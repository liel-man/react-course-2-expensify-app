//
// Object destructuring
//

// const person = {
//     name: 'Liel',
//     age: 45,
//     location: {
//         city: 'Petah-Tiqwa',
//         temp: 25
//     }
// };

// const name = person.name;
// const age = person.age;
// console.log(`${person.name} is ${person.age}.`);

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

////////////////////////////////////////////////////////////

// if (person.location.city && person.location.temp) {
//     console.log(`It's ${person.location.temp} in ${person.location.city}`);
// }

// const { city, temp } = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`);
// }

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//

const address = ['6 Huberman Street', 'Petqh-Tiqwa', 'Israel', '7654321'];

// console.log(`You are in ${address[1]} ${address[2]}.`);

// const [street, city, state, zip] = address;
// console.log(`You are in ${city} ${state}.`);

// const [, city, state] = address;
// console.log(`You are in ${city} ${state}.`);

const address2 = [];
const [, , state = 'Bermuda'] = address2;
console.log(`You are in ${state}.`);

///////////////////////////////////////////

const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75'];

const [itemName, , mediumPrice] = item;
// console.log(`A medium Coffee (hot) costs $2.50`);
console.log(`A medium ${itemName} costs ${mediumPrice}`);
