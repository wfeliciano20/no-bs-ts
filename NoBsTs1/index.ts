let username = "Jack";
let hasLoggedIn = true; 
username += " Herrington";

console.log(hasLoggedIn);

let myRegex = /foo/;

const names = username.split(' ');

const myValues: Array<number> = [2,4];

interface Person {
	first: string;
	last: string;
}
const myPerson: Person = {
  first: "Jack",
  last: "Herrington"
};

const ids: Record<number,string>= {
  10: 'a',
  20: 'b'
}
ids[30] = 'c';

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[2,4,6].forEach(v => console.log(v));
const out = [5,6,7].map(n => n*3);
