// Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
  }


// Check if a String is a Palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }