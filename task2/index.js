var string = '3.5 +4*10-5.3 /5 =';
var mathStr = string.match(/\-?\d+(\.\d+)?|[\+,\-,\*,\/,\=]{1}/ig);

for (var i = 1; i < mathStr.length; i = i + 2) {
    if (mathStr[i] === '+') {mathStr[i+1] = parseFloat(mathStr[i-1]) + parseFloat(mathStr[i+1])}
    else if (mathStr[i] === '*') {mathStr[i+1] = parseFloat(mathStr[i-1]) * parseFloat(mathStr[i+1])}
    else if (mathStr[i] === '/') {mathStr[i+1] = parseFloat(mathStr[i-1]) / parseFloat(mathStr[i+1])}
    else if (mathStr[i] === '=') {var result = Math.round(parseFloat(mathStr[i-1])*100)/100}
    else {
        mathStr[i] =  parseFloat(mathStr[i-1]) +  parseFloat(mathStr[i]);
        i = i - 1;
    }
};

console.log(result)