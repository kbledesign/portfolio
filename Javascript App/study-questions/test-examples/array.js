// 1. Reverse a string.
const reverseString = (str) => {
    return str.split('').reverse().join('');
};
console.log("Reversed String:", reverseString("hello")); // Output: "olleh"
  




  // 2. Check if a string is a palindrome.
  const isPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  };
  console.log("Is Palindrome:", isPalindrome("racecar")); // Output: true
  



  // 3. Count the number of vowels in a string.
  const countVowels = (str) => {
    const vowels = str.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
  };
  console.log("Number of Vowels:", countVowels("hello")); // Output: 2
  



  // 4. Remove duplicates from a string.
  const removeDuplicates = (str) => {
    return str
      .split('')
      .filter((char, index, arr) => arr.indexOf(char) === index)
      .join('');
  };
  console.log("Remove Duplicates:", removeDuplicates("hello")); // Output: "helo"
  




  // 5. Find the longest word in a string.
  const longestWord = (str) => {
    const words = str.split(' ');
    return words.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
  };
  console.log("Longest Word:", longestWord("Hello world, how are you?")); // Output: "world,"
  


  // 6. Convert a string to title case.
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
  };
  console.log("Title Case:", toTitleCase("hello world")); // Output: "Hello World"
 
  



  // 7. Find the first non-repeating character in a string.
  const firstNonRepeatingChar = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return str[i];
      }
    }
    return null;
  };
  console.log("First Non-Repeating Char:", firstNonRepeatingChar("statistics")); // Output: "a"





  
  // 8. Check if a string contains only numbers.
  const containsOnlyNumbers = (str) => {
    return /^\d+$/.test(str);
  };
  console.log("Contains Only Numbers:", containsOnlyNumbers("12345")); // Output: true
  




  // 9. Check if a string contains another string (substring).
  const containsSubstring = (str, sub) => {
    return str.includes(sub);
  };
  console.log("Contains Substring:", containsSubstring("hello world", "world")); // Output: true
  




  // 10. Find the index of the first occurrence of a substring in a string.
  const indexOfSubstring = (str, sub) => {
    return str.indexOf(sub);
  };
  console.log("Index of Substring:", indexOfSubstring("hello world", "world")); // Output: 6
  
  
  
  
  // 11. Reverse words in a sentence without reversing the entire string.
  const reverseWordsInSentence = (str) => {
    return str.split(' ').reverse().join(' ');
  };
  console.log("Reverse Words in Sentence:", reverseWordsInSentence("hello world")); // Output: "world hello"
  




  // 12. Count the occurrences of a specific character in a string.
  const countCharOccurrences = (str, char) => {
    return str.split(char).length - 1;
  };
  console.log("Count Char Occurrences:", countCharOccurrences("hello world", "l")); // Output: 3
  




  // 13. Check if a string is an anagram of another string.
  const areAnagrams = (str1, str2) => {
    const cleanStr1 = str1.replace(/\W/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\W/g, '').toLowerCase();
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
  };
  console.log("Are Anagrams:", areAnagrams("listen", "silent")); // Output: true
  





  // 14. Check if a string starts with a specific prefix.
  const startsWithPrefix = (str, prefix) => {
    return str.startsWith(prefix);
  };
  console.log("Starts With Prefix:", startsWithPrefix("hello world", "hello")); // Output: true
  





  // 15. Check if a string ends with a specific suffix.
  const endsWithSuffix = (str, suffix) => {
    return str.endsWith(suffix);
  };
  console.log("Ends With Suffix:", endsWithSuffix("hello world", "world")); // Output: true






  
  // 16. Check if a string is a valid email address.
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  console.log("Is Valid Email:", isValidEmail("example@email.com")); // Output: true
  





  // 17. Replace all occurrences of a substring in a string.
  const replaceSubstring = (str, sub, replacement) => {
    return str.replace(new RegExp(sub, 'g'), replacement);
  };
  console.log("Replace Substring:", replaceSubstring("hello world", "l", "X")); // Output: "heXXo worXd"





  
  // 18. Check if a string contains only whitespace.
  const containsOnlyWhitespace = (str) => {
    return /^\s*$/.test(str);
  };
  console.log("Contains Only Whitespace:", containsOnlyWhitespace("   ")); // Output: true
  




  // 19. Convert a string to a URL-friendly slug.
  const toSlug = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };
  console.log("URL-Friendly Slug:", toSlug("Hello World Example")); // Output: "hello-world-example"







  
  // 20. Find the second most frequent character in a string.
  const secondMostFrequentChar = (str) => {
    const charCount = {};
    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    const sortedChars = Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]);
    return sortedChars[1];
  };
  console.log("Second Most Frequent Char:", secondMostFrequentChar("aabbcdd")); // Output: "b"
  




  // 21. Check if a string is a valid phone number.
  const isValidPhoneNumber = (phoneNumber) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
  };
  console.log("Is Valid Phone Number:", isValidPhoneNumber("1234567890")); // Output: true
  






  // 22. Find the most common word in a sentence.
  const mostCommonWord = (str) => {
    const words = str.toLowerCase().match(/\w+/g);
    const wordCount = {};
    let maxCount = 0;
    let mostCommon = '';
    for (const word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
      if (wordCount[word] > maxCount) {
        maxCount = wordCount[word];
        mostCommon = word;
      }
    }
    return mostCommon;
  };
  console.log("Most Common Word:", mostCommonWord("This is a test. This is only a test.")); // Output: "this"
  




  
  // 23. Remove whitespace from the beginning and end of a string.
  const trimWhitespace = (str) => {
    return str.trim();
  };
  console.log("Trim Whitespace:", trimWhitespace("  hello world  ")); // Output: "hello world"
  
  




  
  // 24. Check if a string is a valid URL.
  const isValidURL = (url) => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlPattern.test(url);
  };
  console.log("Is Valid URL:", isValidURL("https://www.example.com")); // Output: true
  




  // 25. Check if a string contains a valid credit card number (simple check for illustration).
  const isValidCreditCard = (cardNumber) => {
    const cardPattern = /^\d{16}$/;
    return cardPattern.test(cardNumber);
  };
  console.log("Is Valid Credit Card:", isValidCreditCard("1234567890123456")); // Output: true
  