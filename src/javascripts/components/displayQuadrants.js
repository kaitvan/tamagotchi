import Eat from './eatQuadrant';
import Play from './playQuadrant';

const displayQuadrants = () => {
  Eat.displayEatQuadrant();
  Play.displayPlayQuadrant();
};

export default { displayQuadrants };
