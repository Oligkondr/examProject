import readlineSync from 'readline-sync';
import {bodyGame, checkAnswer, showMessage, showQuestion, startGame, getProgression} from '../index.js';

const geomProgGame = () => {
    const game = 'geoPro';
    const name = startGame('What number is missing in the progression?', game);
    bodyGame(name, () => {
        const progression = getProgression();
        const hiddenElement = progression[1];
        showQuestion(game, progression[0]);
        const answer = readlineSync.question('Your answer: ');
        const message = checkAnswer(name, answer, () => hiddenElement);
        showMessage(message);
        return message;
    });
};

export default geomProgGame;
