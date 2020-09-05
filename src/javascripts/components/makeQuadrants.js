const makeQuadrants = (obj) => {
  const domString = `
  <h2>${obj.name}</h2>
    <div class="btn-container">
      <button id="">${obj.button1}</button>
      <button id="">${obj.button2}</button>
    </div>
  <h4>${obj.progressBarLabel}</h4>
  <progress id="" max="100" value="${obj.barValue}"></progress>`;

  return domString;
};

export default { makeQuadrants };
