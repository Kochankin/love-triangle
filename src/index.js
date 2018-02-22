/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
    
  if (preferences.length < 3) {
    return 0;
  } else {
    for (var i = 0; i < preferences.length; i++) {
      if (getLoverForThird(preferences, i) === (i++)) { 
        count++;   
      }
    }
  }
    
  function getLoverForThird(preferences, i) {
    var firstLover = preferences[i];
    var secondLover = preferences[firstLover - 1];
    var thirdLover = preferences[secondLover - 1];
  
    if ((firstLover === secondLover) && (secondLover === thirdLover) && (firstLover === thirdLover)) {
      return null;
    } else {
        return thirdLover;
    }
  } 
  return count/3; 
};
