/**
 * If array exists, evenly sample within the array. Otherwise if startPoint and endPoint are defined, evenly sample within this range according to the distribution
 * @param {number} startPoint - start point of the range if range constructed, no default value
 * @param {number} endPoint - end point of the range if range constructed, no default value
 * @param {number} nbPoints - number of points to sample within the array or the range, default is 100
 * @param {number} includeEnd - boolean value which specifies if one should include the end, only to be used if range is constructed, default value is true
 * @param {number} distribution - in the case when range is constructed, specified whether to use a uniform or log distribution, default is uniform
 * @param {number} base - in the case when range is constructed and log distribution is used, specifies which base to use, default is 10
 * @param {number} array - the array from which to sample from, if sampling from array, default is null
 * @return {array} array with evenly spaced elements
 */
export function xSampling(
  { startPoint, endPoint, nbPoints, includeEnd, distribution, base },
  array = null,
) {
  nbPoints = nbPoints || 100;
  includeEnd = typeof includeEnd === 'undefined' ? true : includeEnd;
  distribution = distribution || 'uniform';
  base = base || 10;
  let returnArray = [];
  if (array) {
    if (nbPoints > array.length) {
      throw new Error(
        'Choose sample number smaller than the number of elements in the array',
      );
    }

    let clonedArray = array.slice();
    // first element in array included anyway
    returnArray.push(clonedArray[0]);
    clonedArray.shift();
    let delta = Math.floor(clonedArray.length / (nbPoints - 1));

    for (
      let i = delta - 1, j = 0;
      i < clonedArray.length, j < nbPoints - 1;
      i = i + delta, j++
    ) {
      returnArray.push(clonedArray[i]);
    }

    return returnArray;
  } else if (startPoint && endPoint) {
    let div;
    if (includeEnd === true) {
      div = nbPoints - 1;
    } else if (includeEnd === false) {
      div = nbPoints;
    }

    let delta = (endPoint - startPoint) / div;
    if (distribution === 'uniform') {
      for (let i = 0, j = 0; i < endPoint, j < nbPoints; i = i + delta, j++) {
        returnArray.push(startPoint + i);
      }
    } else if (distribution === 'log') {
      for (let i = 0, j = 0; i < endPoint, j < nbPoints; i = i + delta, j++) {
        returnArray.push(base ** (startPoint + i));
      }
    } else {
      throw new Error(
        'Please choose for the distribution either uniform or log. By default the distribution chosen is uniform.',
      );
    }

    return returnArray;
  } else {
    throw new Error('Specify either an array, or a starting and ending points');
  }
}
