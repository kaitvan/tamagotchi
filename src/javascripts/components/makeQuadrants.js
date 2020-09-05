const makeQuadrants = (obj) => {
  const domString = `
  <h2>${obj.name}</h2>
    <div class="btn-container">
      <button id="">${obj.button1}</button>
      <button id="">${obj.button2}</button>
    </div>
    <div class="score-container">
      <progress id="" max="100" value="${obj.barValue}"></progress>
      <h5>${obj.progressBarLabel}: ${obj.barValue}</h5>
    </div>`;

  return domString;
};

export default { makeQuadrants };
