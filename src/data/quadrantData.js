const quadrantData = [
  {
    name: 'Eat',
    button1: 'Healthy Food',
    button2: 'Unhealthy Food',
    progressBarLabel: 'Fullness Score',
    barValue: 100,
  },
  {
    name: 'Play',
    button1: 'Super Fun Activity',
    button2: 'Slightly Fun Activity',
    progressBarLabel: 'Fun Score',
    barValue: 50,
  },
  {
    name: 'Fight',
    button1: 'Run Away',
    button2: 'Commit Violence',
    progressBarLabel: 'Strength Score',
    barValue: 100,
  },
  {
    name: 'Sleep',
    button1: 'Take a Nap',
    button2: 'Deep Slumber',
    progressBarLabel: 'Energy Score',
    barValue: 50,
  },
];

const getQuadrantData = () => quadrantData;

export default { getQuadrantData };
