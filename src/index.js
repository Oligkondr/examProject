import readlineSync from 'readline-sync';

export const getNumber = () => Math.floor(Math.random() * 100);

export const startGame = (condition, game) => {
  switch (game) {
    case 'gcm':
      console.log('Welcome to the gcmGame!');
      break;
    case 'geoPro':
      console.log('Welcome to the geoPro!');
      break;
    default:
      console.log('Welcome to the Menu!');
  }
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);
  return name;
};

export const bodyGame = (name, body) => {
  let i = 0;
  while (i < 3) {
    const message = body();
    if (message === 'Correct!') {
      i += 1;
    } else {
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export const checkAnswer = (name, answer, body) => {
  const correctAnswer = body();
  let message;
  if (answer === String(correctAnswer)) {
    message = 'Correct!';
  } else {
    message = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
  }

  return message;
};

export const showQuestion = (gameName, elem1, elem2 = null, elem3 = null) => {
  switch (gameName) {
    case 'gcm':
      console.log(`Question: ${elem1} ${elem2} ${elem3}`);
      break;
    case 'geoPro':
      console.log(`Question: ${elem1.join(' ')}`);
      break;
    default:
      console.log('No questions today :D');
  }
};

export const showMessage = (message) => console.log(message);

export const getProgression = () => {
  const progression = [];
  const length = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const element = Math.floor(Math.random() * length);
  const step = Math.floor(Math.random() * (6 - 1)) + 1;
  let start = getNumber();
  const check = start + ((length - 1) * step);
  if (check > 100) {
    start -= check - 100;
  }

  for (let i = 0; i <= length; i += 1) {
    progression.push(start);
    start *= step;
  }

  const hidden = progression[element];
  progression[element] = '..';
  return [progression, hidden];
};

export const gameSelection = () => {
  console.log('1-> gcm-game \n2-> geoProg\n');
  return readlineSync.question('Type number of wanted game: ');
};
