//***************************************** */
//Step 1
//***************************************** */

//1 O(n + 10)
O(n)
//2 O(100 * n)
O(n)
//3 O(25)
O(1)
//4 O(n^2 + n^3)
O(n^3)
//5 O(n + n + n + n)
O(n)
//6 O(1000 * log(n) + n)
O(log (n))
//X the answer is O(n)

//7 O(1000 * n * log(n) + n)
O(log n)
//X the answer is O(n log n)

//8 O(2^n + n^2)
O(2^n)

//9 O(5 + 3 + 1)
O(1)
//10 O(n + n^(1/2) + n^2 + n * log(n)^10)
O(nlogn)
//X the answer is O(n^2)


//***************************************** */
//Step 2
//***************************************** */
//1. -> O(n)
function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }

//2. -> O(n)
function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }

//3. -> O(n) X The answer is O(1)
function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  }

//4. -> O(n)
function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }

//5. -> O(n^2)
function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  }

//6. O(n)
function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  }

//***************************************** */
//Step 3
//***************************************** */

// Answer the following questions

// 1. True or false: n^2 + n is O(n^2). 
-> true
// 2. True or false: n^2 * n is O(n^3). 
-> false
// 3. True or false: n^2 + n is O(n). 
-> false
// 4. What’s the time complexity of the .indexOf array method? 
-> O(n)
// 5. What’s the time complexity of the .includes array method? 
-> O(n)
// 6. What’s the time complexity of the .forEach array method? 
-> O(n)
// 7. What’s the time complexity of the .sort array method? 
-> O(n x log2n) X The answer is O(nlogn)
//Best runtime for sorting is O(n x log2n)
// 8. What’s the time complexity of the .unshift array method? 
-> O(n)
// 9. What’s the time complexity of the .push array method? 
-> O(n) X The answer is O(1)
// 10. What’s the time complexity of the .splice array method? 
-> O(n)
// 11. What’s the time complexity of the .pop array method? 
-> O(1)
// 12. What’s the time complexity of the Object.keys() function? 
-> O(n)
//BONUS hat’s the space complexity of the Object.keys() function? 
-> O(1) X The answer is O(n)