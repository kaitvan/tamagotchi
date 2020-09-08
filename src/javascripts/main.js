import Quadrants from './components/displayQuadrants';
import Header from './components/header';

import '../styles/main.scss';

const init = () => {
  Quadrants.displayQuadrants();
  Header.displayHeader();
  Header.updateOverallScore();
};

init();
