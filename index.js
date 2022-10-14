// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for (let i = 0; i < array.length; i++) {
//     const comp = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === comp) return true
//     }
//   }
//   return false
// }

function hasTargetSum(array, target) {
  const seenNumbers = {};
  
  for (const number of array) {
    console.log(seenNumbers)
    const comp = target - number;
    if (comp in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false;
}



/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  
  a = 1st elevemnt of the array;
  array2 = spread array
  remove first element of array2
  for b in array2
  if (a+b) === target
    return true
    else
      return false
*/

/*
  Add written explanation of your solution here

  We need compare sum of any two numbers in the array to target value;
  If any sum equiles target number, function will return true.
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
