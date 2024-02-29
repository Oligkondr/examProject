import {gameSelection, startGame} from '../index.js';
import gcmGame from './gcm-game.js';
import geomProgGame from './geomProg-game.js';

const menuGreetings = () => {
    const name = startGame('What game you want?');
    let x = true;
    while (x) {
        const select = Number(gameSelection());
        switch (select) {
            case 1:
                gcmGame(name);
                x = false;
                break;
            case 2:
                geomProgGame(name);
                x = false;
                break;
            default:
                console.log('No such game :(\nSelect another:\n');
        }
    }
};

export default menuGreetings;
