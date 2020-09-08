let funScore = 50;

const getFunScore = () => funScore;

const superFunButtonClicked = () => {
  funScore += 50;
  if (funScore > 100) {
    funScore = 100;
  }
  return funScore;
};

const slightlyFunButtonClicked = () => {
  funScore += 2;
  if (funScore > 100) {
    funScore = 100;
  }
  return funScore;
};

const playButtonEvents = () => {
  $('#btn-super-fun').click(() => {
    $('#funScore').html('');
    $('#funScore').html(`
    <div class="score">Fun Score: ${superFunButtonClicked()}%</div>
    <progress id="play-progress" class="quad-progress" value="${funScore}" max="100"></progress>`);
  });
  $('#btn-slightly-fun').click(() => {
    $('#funScore').html('');
    $('#funScore').html(`<div class="score">Fun Score: ${slightlyFunButtonClicked()}%</div>
    <progress id="play-progress" class="quad-progress" value="${funScore}" max="100"></progress>`);
  });
};

const displayPlayQuadrant = () => {
  const domString = `
    <div class="play-div">
      <h2>Play</h2>
      <div class="btn-container">
        <button id="btn-super-fun">Super Fun Activity</button>
        <button id="btn-slightly-fun">Slightly Fun Activity</button>
      </div>
      <div id="funScore">
        <div class="score">Fun Score: ${funScore}%</div>
        <progress id="play-progress" class="quad-progress" value="${funScore}" max="100"></progress>
      </div>
    </div>
  `;
  $('#play').html(domString);
  playButtonEvents();
};

export default { displayPlayQuadrant, getFunScore };
