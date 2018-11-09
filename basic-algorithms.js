/* 
Names and Input
Create a variable hacker1 with the driver's name

Print "The driver's name is XXXX"

Create a variable hacker2 and ask the user for the navigator's name

Print "The navigator's name is YYYY"

Conditionals
Depending on which name is longer, print:
The Driver has the longest name, it has XX characters or
Yo, navigator got the longest name, it has XX characters or
wow, you both got equally long names, XX characters!!

Loops
Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

Depending on the lexicographic order of the strings, print:

The driver's name goes first
Yo, the navigator goes first definitely
What?! You both got the same name?
*/

const hacker1 = "AJOC";
const hacker2 = 'Guilherme';

// ES5 style
console.log('The driver\'s name is ' + hacker1);

// ES6 Style
console.log(`The driver's name is ${hacker1} ES6`);



// ES5 style
console.log('The navigator\'s name is ' + hacker2);

// ES6 Style
console.log(`The navigator's name is ${hacker2} ES6`);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${2>1} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`wow, you both got equally long names, ${hacker1.length} characteres!!`);
}

//Loops

// using builtin methods instead of for loops
const driverName = hacker1.split('').join(' ').toUpperCase();
console.log(`The driver's name with caps and separated by spaces is ${driverName}`);

const navigatorName = hacker2.split('').reverse().join('');
console.log(`The inverted navigator's name is ${navigatorName} - using ES6`);

// no use of bulitin methods - charCodeAt to determine values of the letters
// TODO: check size of the longest name.
const lexicalNames = (name1, name2) => {
  if (name1 === name2) console.log('What?! You both got the same name?');

  for (let x = 0; x < name1.length; x++) {
    // console.log(name1.charCodeAt(x),name2.charCodeAt(x))
    if (name1.charCodeAt(x) < name2.charCodeAt(x)) {
      console.log('The driver\'s name goes first');
      break;
    } else if (name1[x].charAt() > name2[x].charAt()) {
      console.log('Yo, the navigator goes first definitely');
      break;
    };
  };
};

lexicalNames(hacker1,hacker2);

// Palindrome

const str = 'madam';

// built in methods
const palindrome = (str) => {
  const cleanStr = str.replace(/[\W_]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
};

console.log(`built in palindrome: ${palindrome(str)}`);

// recursive solution for palindrome
// with some control of spaces and special caracters
const isPalindrome = (str) => {
  const cleanStr = str.replace(/[\W_]/g, '');
  const strLen = cleanStr.length;
  if (strLen === 0 || strLen === 1) {
      return true;
  }
  
  if (cleanStr[0] === cleanStr[strLen - 1]) {
      return isPalindrome( cleanStr.slice(1, strLen - 1) );
  }
  
  return false;
};

console.log(isPalindrome('madam'));
console.log(isPalindrome('stack cats'));
console.log(isPalindrome('taco cat'));