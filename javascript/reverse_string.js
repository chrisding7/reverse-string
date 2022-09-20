function reverseString(str) {
  // type your code here
  let reversed = "";

  if (typeof str === "string") {
    for (let i = str.length - 1; i >= 0; i--) {
      reversed = reversed + str[i];
    }
  }
  else {
    throw new Error("argument must be of type String");
  }
  return reversed
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'kcapkcab'");
  console.log("=>", reverseString("backpack"));

  console.log("");

  console.log("Expecting: 'margorp'");
  console.log("=>", reverseString("program"));

  console.log("");

  console.log("Expecting: 'tpircSavaJ'");
  console.log("=>", reverseString("JavaScript"));

  console.log("");

  console.log("Expecting: 'a'");
  console.log("=>", reverseString("a"));

  console.log("");

  console.log("Expecting: ''");
  console.log("=>", reverseString(""));

  console.log("Expecting: 'argument must be of type String'");
  console.log("=>", reverseString(null));

  console.log("");

  console.log("Expecting: 'argument must be of type String'");
  console.log("=>", reverseString(12));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// 1. Check if data type of str equals string, otherwise throw error
// 2. Create an empty string variable that will hold our reversed characters of the string
// 3. Work through the string backwards using a for loop starting at the last index (character) of the string
// 4. For each character in our string, concatenate it to our existing string, gradually building the string as we increment through the for loop 

// And a written explanation of your solution
