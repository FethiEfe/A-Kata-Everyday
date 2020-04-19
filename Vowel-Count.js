// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

// My Solution

function getCount(str) {
    var vowelsCount = 0;
    let vowels ="aeuio"
    str.split("").forEach(letter => {
      if(vowels.includes(letter)){
        vowelsCount++
      }
    })
    return vowelsCount;
}