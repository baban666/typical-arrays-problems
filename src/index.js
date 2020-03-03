exports.min = function min (array) {

    if(array === undefined || array.length === 0 || array === 0){
        return 0;
    }

  return array.sort((a, b) => {
      return a - b;
  })[0];
}

exports.max = function max (array) {

    if(array === undefined || array.length === 0 || array === 0){
        return 0;
    }
        return array.sort((a, b) => {
            return a - b;
        })[array.length - 1];
}

exports.avg = function avg (array) {
    let result = 0;
    if(array === undefined || array.length === 0 || array === 0){
        return result;
    }

    result = array.reduce((sum, item) => {
      return  sum+item;
    });

  return result / array.length;
}


