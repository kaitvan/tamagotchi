import Quadrants from './makeQuadrants';

const displayQuadrants = (arr) => {
  arr.forEach((obj) => {
    if (obj.name === 'Eat') {
      $('#eat').append(Quadrants.makeQuadrants(obj));
    } else if (obj.name === 'Play') {
      $('#play').append(Quadrants.makeQuadrants(obj));
    } else if (obj.name === 'Fight') {
      $('#fight').append(Quadrants.makeQuadrants(obj));
    } else if (obj.name === 'Sleep') {
      $('#sleep').append(Quadrants.makeQuadrants(obj));
    }
  });
};

export default { displayQuadrants };
