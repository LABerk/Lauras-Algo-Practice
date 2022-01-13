//FROM ALGOEXPERT

// EASY:
////////2 num sum
function twoNumberSum(array, targetSum) {
  let pair = [];
  let currSum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      currSum = array[i] + array[j];
      if (currSum === targetSum) {
        pair.push(array[i], array[j]);
      }
    }
  }
  return pair;
}
//////////////////
//Validate Subsequence
