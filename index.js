function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true 
      } 
    }
  }
  return false
}

console.log(hasTargetSum([1,3,5],4))

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  create empty array
  Sort through provided array using sort method
  Identify index of integer that is equal to or greater than target integer
  Push all integers before that index to new array
  iterates through the new array starting with the first integer and adding
  to other integers
  if two integers add up to target integer, return true
  else false
*/

/*
  Add written explanation of your solution here


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
