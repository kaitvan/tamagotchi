import Eat from './eatQuadrant';
import Play from './playQuadrant';
import Fight from './fightQuadrant';
import Sleep from './sleepQuadrant';
import Tamagotchi from '../../assets/images/tamagotchi.gif';

const getOverallScore = () => Math.round((Eat.getFullnessScore() + Fight.getStrengthScore() + Play.getFunScore() + Sleep.getEnergyScore()) / 4);

const displayHeader = () => {
  const domString = `
  <div id="header-text">
    <h1>Tamagotchi 2.0</h1>
  </div>
  <div id="img-pet">
    <img src=${Tamagotchi} alt="Tamagotchi">
  </div>
  <div id="overallScore">
    <div class="score">Overall Health Score: ${getOverallScore()}%</div>
    <progress id="overall-progress" value="${getOverallScore()}" max="100"></progress>
  </div>
  `;
  $('#header').html(domString);
};

const updateOverallScore = () => {
  $('button').click(() => {
    $('#overallScore').html(`
      <div class="score">Overall Health Score: ${getOverallScore()}%</div>
      <progress id="overall-progress" value="${getOverallScore()}" max="100"></progress>`);
  });
};

export default { displayHeader, updateOverallScore };
