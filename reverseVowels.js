const reverseVowels = (s)=>{
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    const stringArray = s.split("");
    const vowelsInArray = stringArray
    .map((e, index) => ({ vowel: e, index }))
    .filter(param => vowels.includes(param.vowel));

    let i=0;
    while(i<vowelsInArray.length){

        stringArray[vowelsInArray[i].index] =
          vowelsInArray[vowelsInArray.length - 1 - i].vowel;

        i++;
    }
    return stringArray.join('');
}

reverseVowels("hello")