function accum (s) {
  let upperCasedStr = s.toUpperCase()
  let result = ''
  for (var i = 0; i < s.length; i++) {
    result = result + upperCasedStr[i] + upperCasedStr[i].toLowerCase().repeat(i) + '-'
  }
  return result.slice(0, result.length - 1)
}

console.log(accum("abcd")) // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")) // "C-Ww-Aaa-Tttt"
