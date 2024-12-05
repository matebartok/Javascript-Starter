// JavaScript String Methods Helper File

// ========================
// Basic Methods
// ========================

// 1. length - Gets the length of the string
const str = "Hello, World!";
console.log(str.length); // Output: 13

// 2. charAt(index) - Returns the character at the specified index
console.log(str.charAt(0)); // Output: "H"

// 3. charCodeAt(index) - Returns the Unicode of the character at the specified index
console.log(str.charCodeAt(0)); // Output: 72

// 4. toUpperCase() - Converts the string to uppercase
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"

// 5. toLowerCase() - Converts the string to lowercase
console.log(str.toLowerCase()); // Output: "hello, world!"

// ========================
// Searching Methods
// ========================

// 6. indexOf(substring) - Finds the index of the first occurrence of a substring
console.log(str.indexOf("World")); // Output: 7

// 7. lastIndexOf(substring) - Finds the index of the last occurrence of a substring
console.log(str.lastIndexOf("o")); // Output: 8

// 8. includes(substring) - Checks if the string contains a substring
console.log(str.includes("World")); // Output: true

// 9. startsWith(substring) - Checks if the string starts with a substring
console.log(str.startsWith("Hello")); // Output: true

// 10. endsWith(substring) - Checks if the string ends with a substring
console.log(str.endsWith("!")); // Output: true

// ========================
// Manipulation Methods
// ========================

// 11. concat() - Combines strings
const greeting = "Hello";
const name = "Alice";
console.log(greeting.concat(", ", name)); // Output: "Hello, Alice"

// 12. slice(start, end) - Extracts a part of a string
console.log(str.slice(0, 5)); // Output: "Hello"

// 13. substring(start, end) - Similar to slice but doesn’t accept negative indexes
console.log(str.substring(7, 12)); // Output: "World"

// 14. substr(start, length) - Returns a portion of the string (deprecated but still works)
console.log(str.substr(7, 5)); // Output: "World"

// 15. split(separator) - Splits the string into an array
console.log(str.split(", ")); // Output: ["Hello", "World!"]

// 16. replace(substring, newSubstring) - Replaces a substring with a new value
console.log(str.replace("World", "Everyone")); // Output: "Hello, Everyone!"

// 17. replaceAll(substring, newSubstring) - Replaces all occurrences of a substring
const newStr = "foo foo bar";
console.log(newStr.replaceAll("foo", "baz")); // Output: "baz baz bar"

// 18. trim() - Removes whitespace from both ends of the string
const spacedStr = "   Hello!   ";
console.log(spacedStr.trim()); // Output: "Hello!"

// 19. padStart(targetLength, padString) - Pads the beginning of a string
console.log("5".padStart(3, "0")); // Output: "005"

// 20. padEnd(targetLength, padString) - Pads the end of a string
console.log("5".padEnd(3, "0")); // Output: "500"

// ========================
// Advanced Methods
// ========================

// 21. repeat(count) - Repeats the string a specified number of times
console.log("Hi!".repeat(3)); // Output: "Hi!Hi!Hi!"

// 22. match(regex) - Matches a string against a regular expression
const regex = /[A-Z]/g;
console.log(str.match(regex)); // Output: ["H", "W"]

// 23. search(regex) - Searches for a match using a regular expression
console.log(str.search(/World/)); // Output: 7

// 24. toLocaleLowerCase() and toLocaleUpperCase() - Locale-aware case conversion
console.log(str.toLocaleLowerCase()); // Output: "hello, world!"

// ========================
// Template Literals
// ========================

// 25. Interpolation - Use `${}` to embed expressions
const age = 25;
console.log(`I am ${age} years old.`); // Output: "I am 25 years old."

// 26. Multi-line Strings
const multiLine = `This is a
multi-line
string.`;
console.log(multiLine); // Prints the multi-line string

// ========================
// Helper Functions
// ========================

// Function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("hello")); // Output: "Hello"

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const cleaned = str.replace(/[\W_]/g, "").toLowerCase();
  return cleaned === reverseString(cleaned);
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
