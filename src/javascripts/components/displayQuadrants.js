import Eat from './eatQuadrant';
import Play from './playQuadrant';
import Fight from './fightQuadrant';
import Sleep from './sleepQuadrant';

const displayQuadrants = () => {
  Eat.displayEatQuadrant();
  Play.displayPlayQuadrant();
  Fight.displayFightQuadrant();
  Sleep.displaySleepQuadrant();
};

export default { displayQuadrants };
