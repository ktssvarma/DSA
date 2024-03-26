var formatString = e => e.split('').sort().join('')
var isAnagram = (s, t) => {
    if (s.length !== t.length) return false
    else return formatString(s) === formatString(t)
}

console.log(isAnagram("anagram","nagaram"))
console.log(isAnagram("anagr12am","nagara21m"))
console.log(isAnagram("anagr1234am","nagar5678am"))