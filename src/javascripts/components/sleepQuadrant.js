let energyScore = 50;

const takeNapButtonClicked = () => {
  energyScore += 50;
  if (energyScore > 100) {
    energyScore = 100;
  }
  return energyScore;
};

const deepSleepButtonClicked = () => {
  energyScore += 60;
  if (energyScore > 100) {
    energyScore = 100;
  }
  return energyScore;
};

const sleepButtonEvents = () => {
  $('#btn-take-nap').click(() => {
    $('#energyScore').html('');
    $('#energyScore').html(`
    <div class="score">Energy Score: ${takeNapButtonClicked()}</div>
    <progress id="sleep-progress" class="progress" value="${energyScore}" max="100"></progress>`);
  });
  $('#btn-deep-sleep').click(() => {
    $('#energyScore').html('');
    $('#energyScore').html(`
    <div class="score">Energy Score: ${deepSleepButtonClicked()}</div>
    <progress id="sleep-progress" class="progress" value="${energyScore}" max="100"></progress>`);
  });
};

const displaySleepQuadrant = () => {
  const domString = `
    <div class="sleep-div">
      <h2>Sleep</h2>
      <div class="btn-container">
        <button id="btn-take-nap">Take a Nap</button>
        <button id="btn-deep-sleep">Deep Sleep</button>
      </div>
      <div id="energyScore">
        <div class="score">Energy Score: ${energyScore}</div>
        <progress id="sleep-progress" class="progress" value="${energyScore}" max="100"></progress>
      </div>
    </div>
  `;
  $('#sleep').html(domString);
  sleepButtonEvents();
};

export default { displaySleepQuadrant };
