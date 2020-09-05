import makeQuadrants from './makeQuadrants';

const displayQuadrants = (arr) => {
  arr.forEach((obj) => {
    if (obj.name === 'Eat') {
      $('#eat').append(makeQuadrants.makeQuadrants(obj));
    } else if (obj.name === 'Play') {
      $('#play').append(makeQuadrants.makeQuadrants(obj));
    } else if (obj.name === 'Fight') {
      $('#fight').append(makeQuadrants.makeQuadrants(obj));
    } else if (obj.name === 'Sleep') {
      $('#sleep').append(makeQuadrants.makeQuadrants(obj));
    }
  });
};

export default { displayQuadrants };
