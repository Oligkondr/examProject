import readlineSync from 'readline-sync';
import {
  bodyGame, checkAnswer, getNumber, showMessage, showQuestion, startGame,
} from '../index.js';

const gcmGame = () => {
  const game = 'gcm';
  const name = startGame('Find the smallest common multiple of given number.', game);
  bodyGame(name, () => {
    const elem1 = getNumber();
    const elem2 = getNumber();
    const elem3 = getNumber();
    const A = [elem1, elem2, elem3];
    showQuestion(game, elem1, elem2, elem3);
    const answer = readlineSync.question('Your answer: ');
    const message = checkAnswer(name, answer, () => {
      const n = A.length;
      let a = Math.abs(A[0]);
      for (let i = 1; i < n; i += 1) {
        let b = Math.abs(A[i]); const
          c = a;
        while (a && b) {
          a > b ? a %= b : b %= a;
        }
        a = Math.abs(c * A[i]) / (a + b);
      }
      return a;
    });
    showMessage(message);
    return message;
  });
};

export default gcmGame;
