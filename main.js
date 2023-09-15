// destructuring objects and arrays EX#_2

const person = {
    name: 'Kyle',
    age: 32,
    address: {
        city: 'Jackson',
        country: 'USA',
    },
}
 let { name, age } = person;
console.log(name,age);


const fruits = ['apple', 'banana', 'cherry', 'date'];

let [a,b,c,d] = fruits;

console.log(b);
console.log(c);

// Async/Await EX#_3

async function fetchPost() {
    const url = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const res = await url.json();
    console.log(res)
    // Your async/await code here
}

// call the function to fetch posts
fetchPost();
