import Data from '../data/quadrantData';
import Quadrants from './components/displayQuadrants';

import '../styles/main.scss';

const init = () => {
  Quadrants.displayQuadrants(Data.getQuadrantData());
};

init();
