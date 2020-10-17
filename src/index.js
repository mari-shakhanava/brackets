module.exports = function check(str, bracketsConfig) {
    let matchingOpeningBracket, ch;
    let stack = [];
    let bracketsConfigArray = [].concat(...bracketsConfig);
    let openingBrackets = [];
    let closingBrackets = [];
    if (str.length <= 1){
        return false;
    } else
    {
        for (let i=0; i < bracketsConfigArray.length; i++ ){
            if (i % 2 === 0 ){
                openingBrackets.push(bracketsConfigArray[i]);
            } else
            {
                closingBrackets.push(bracketsConfigArray[i]);
            }
        }
    }

    for (let i = 0; i < str.length; i++) {
        ch = str[i];

        if (closingBrackets.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
            if ((stack.length == 0 || (stack.pop() != matchingOpeningBracket)) && openingBrackets[closingBrackets.indexOf(ch)] !== closingBrackets[closingBrackets.indexOf(ch)]) {
                return false;
            }
        } else {
            stack.push(ch);
        }
    }

    return (stack.length == 0);
};



// };


// let bracketsConfigString = [].concat(...bracketsConfig).join('');
// // console.log(bracketsConfigArray);
// // let brackets = "[]{}()<>"
// let stack = []
//
// for(let bracket of str) {
//     let bracketsConfigStringIndex = bracketsConfigString.indexOf(bracket)
//
//     if (bracketsConfigStringIndex === -1){
//         continue
//     }
//
//     if(bracketsConfigStringIndex % 2 === 0) {
//         stack.push(bracketsConfigStringIndex + 1)
//     } else {
//         if(stack.pop() !== bracketsConfigStringIndex) {
//             return false;
//         }
//     }
// }
// return stack.length === 0
