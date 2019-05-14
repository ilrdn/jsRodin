var str = "У попа была собака"
var words = str.split(" ")
var letters = {}
words.forEach(function (word) {
    word.split('').forEach(function (letter, i) {
        if (!letters[letter]  && -1 != word.indexOf(letter, i + 1)) {
            letters[letter] = 1
        }
    })
})
result = str.split('').filter(function (v) {
    return !letters[v]
}).join('')

console.log(result)