import readlineSync from 'readline-sync';

export const getNumber = () => Math.floor(Math.random() * 100);

export const startGame = (condition) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  return name;
};
