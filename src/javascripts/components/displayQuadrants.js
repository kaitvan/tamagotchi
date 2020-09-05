import makeQuadrants from './makeQuadrants';

const displayQuadrants = (arr) => {
  arr.forEach((obj) => {
    $('#app').append(makeQuadrants.makeQuadrants(obj));
  });
};

export default { displayQuadrants };
