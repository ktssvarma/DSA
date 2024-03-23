function countCharacters(words, chars) {
    let count = 0;
    for (const word of words) {
      let allValid = true;
      for (const char of word) {
        if (!chars.includes(char)) {
          allValid = false;
          break;
        }
      }
      if (allValid) {
        count += word.length;
      }
    }
    return count;
  }

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));