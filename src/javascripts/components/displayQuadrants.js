import Eat from './eatQuadrant';
import Play from './playQuadrant';
import Fight from './fightQuadrant';

const displayQuadrants = () => {
  Eat.displayEatQuadrant();
  Play.displayPlayQuadrant();
  Fight.displayFightQuadrant();
};

export default { displayQuadrants };
