const users = [
  { id: 1, name: 'Arjun', age: 22 },
  { id: 2, name: 'Maya', age: 28 },
  { id: 3, name: 'Rahul', age: 19 },
  { id: 4, name: 'Priya', age: 25 },
];

const names = users.map((user) => user.name);
console.log('User names:', names);

const adults = users.filter((user) => user.age > 21);
console.log('Adults:', adults);

const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log('Average age:', avgAge.toFixed(1));
