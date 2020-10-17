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
            if ((openingBrackets[closingBrackets.indexOf(ch)] === closingBrackets[closingBrackets.indexOf(ch)]) && (stack[stack.length-1] != matchingOpeningBracket) &&  (stack.indexOf(ch) === -1))  {
                stack.push(ch);

            }
            else {
                if ((stack.length == 0 || (stack.pop() != matchingOpeningBracket)) && openingBrackets[closingBrackets.indexOf(ch)] !== closingBrackets[closingBrackets.indexOf(ch)]) {
                    return false;
                }
            }
        }
        else {
            stack.push(ch);
        }
    }
    return (stack.length == 0);
};

// let matchingOpeningBracket, ch;
// let stack = [];
// let bracketsConfigArray = [].concat(...bracketsConfig);
// let openingBrackets = [];
// let closingBrackets = [];
// if (str.length <= 1){
//     return false;
// } else
// {
//     for (let i=0; i < bracketsConfigArray.length; i++ ){
//         if (i % 2 === 0 ){
//             openingBrackets.push(bracketsConfigArray[i]);
//         } else
//         {
//
//             closingBrackets.push(bracketsConfigArray[i]);
//         }
//     }
//
// }
// for (let i = 0; i < str.length; i++) {
//     ch = str[i];
//     console.log(stack, "loop")
//     if (closingBrackets.indexOf(ch) > -1) {
//         matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
//         if ((openingBrackets[closingBrackets.indexOf(ch)] === closingBrackets[closingBrackets.indexOf(ch)]) && (stack[stack.length-1] != matchingOpeningBracket) &&  (stack.indexOf(ch) === -1))  {
//             stack.push(ch);
//             //  console.log(stack,"wd")
//             //  console.log(ch)
//             //  console.log(stack+'1');
//         }
//         else {
//             if ((stack.length == 0 || (stack.pop() != matchingOpeningBracket)) && openingBrackets[closingBrackets.indexOf(ch)] !== closingBrackets[closingBrackets.indexOf(ch)]) {
//                 // console.log(stack)
//                 return false;
//             }
//         }
//
//     }
//     else {
//         stack.push(ch);
//         // console.log(stack)
//     }
// }
// return (stack.length == 0);
// };
