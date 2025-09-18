const person = { name: 'Arjun', age: 22, city: 'Bangalore' };
const { name, age } = person;
console.log(`${name} is ${age} years old.`);

const numbers = [10, 20, 30, 40];
const [first, second, ...rest] = numbers;
console.log('First:', first);
console.log('Second:', second);
console.log('Rest:', rest);
