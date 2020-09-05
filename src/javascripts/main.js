import quadrantData from '../data/quadrantData';
import displayQuadrants from './components/displayQuadrants';

import '../styles/main.scss';

const init = () => {
  displayQuadrants.displayQuadrants(quadrantData.getQuadrantData());
};

init();
