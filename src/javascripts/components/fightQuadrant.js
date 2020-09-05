let strengthScore = 100;

const runAwayButtonClicked = () => {
  strengthScore += 1;
  if (strengthScore > 100) {
    strengthScore = 100;
  }
  return strengthScore;
};

const commitViolenceButtonClicked = () => {
  strengthScore -= 10;
  if (strengthScore < 0) {
    strengthScore = 0;
  }
  return strengthScore;
};

const fightButtonEvents = () => {
  $('#btn-run-away').click(() => {
    $('#strengthScore').html('');
    $('#strengthScore').html(`Strength Score: ${runAwayButtonClicked()}`);
  });
  $('#btn-commit-violence').click(() => {
    $('#strengthScore').html('');
    $('#strengthScore').html(`Strength Score: ${commitViolenceButtonClicked()}`);
  });
};

const displayFightQuadrant = () => {
  const domString = `
    <div class="fight-div">
      <h2>Fight</h2>
      <div class="btn-container">
        <button id="btn-run-away">Run Away</button>
        <button id="btn-commit-violence">Commit Violence</button>
      </div>
      <div id="strengthScore">Strength Score: ${strengthScore}</div>
    </div>
  `;
  $('#fight').html(domString);
  fightButtonEvents();
};

export default { displayFightQuadrant };
