// install TypeScript in our project:
// npm i -D typescript

// compile it to JavaScript using tsc command in the terminal
// npx tsc example.ts

// create typescript configuration file
// tsc --init

type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const bob: User = {
  name: "Bob",
  age: 20,
};

const isBobAdult: boolean = isAdult(bob);
