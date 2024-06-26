// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    return arr.reduce((acc, currentValue) => {
    if(currentValue < 0){
      return acc + 0
    }
    return acc + currentValue;
    }, 0)
    }

function positiveSum1(arr) {
    return arr.reduce((acc, currentValue) => acc + (currentValue > 0 ? currentValue : 0), 0)
  }