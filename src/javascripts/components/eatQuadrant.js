let fullnessScore = 100;

const getFullnessScore = () => fullnessScore;

const healthyButtonClicked = () => {
  fullnessScore += 10;
  if (fullnessScore > 100) {
    fullnessScore = 100;
  }
  return fullnessScore;
};

const unhealthyButtonClicked = () => {
  fullnessScore -= 3;
  if (fullnessScore < 0) {
    fullnessScore = 0;
  }
  return fullnessScore;
};

const eatButtonEvents = () => {
  $('#btn-healthy').click(() => {
    $('#fullnessScore').html('');
    $('#fullnessScore').html(`
    <div class="score">Fullness Score: ${healthyButtonClicked()}%</div>
    <progress id="eat-progress" class="quad-progress" value="${fullnessScore}" max="100"></progress>`);
  });
  $('#btn-unhealthy').click(() => {
    $('#fullnessScore').html('');
    $('#fullnessScore').html(`
    <div class="score">Fullness Score: ${unhealthyButtonClicked()}%</div>
    <progress id="eat-progress" class="quad-progress" value="${fullnessScore}" max="100"></progress>`);
  });
};

const displayEatQuadrant = () => {
  const domString = `
    <div class="eat-div">
      <h2>Eat</h2>
      <div class="btn-container">
        <button id="btn-healthy">Eat Healthy Food</button>
        <button id="btn-unhealthy">Eat Unhealthy Food</button>
      </div>
      <div id="fullnessScore">
        <div class="score">Fullness Score: ${fullnessScore}%</div>
        <progress id="eat-progress" class="quad-progress" value="${fullnessScore}" max="100"></progress>
      </div>
    </div>
  `;
  $('#eat').html(domString);
  eatButtonEvents();
};

export default { displayEatQuadrant, getFullnessScore };
