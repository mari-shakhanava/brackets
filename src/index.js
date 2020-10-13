module.exports = function check(str, bracketsConfig) {
    let matchingOpeningBracket, ch
    let stack = [];
    let bracketsConfigArray = [].concat(...bracketsConfig);
    let openingBrackets = [];
    let closingBrackets = [];
    if (str.length <= 1){
        return false
    } else
    {
        for (let i=0; i < bracketsConfigArray.length; i++ ){
            if (i % 2 === 0 ){
                openingBrackets.push(bracketsConfigArray[i]);
            } else
            {
                closingBrackets.push(bracketsConfigArray[i]);
            };
        };
    };

    for (let i = 0; i < str.length; i++) {
        ch = str[i]

        if (closingBrackets.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
            if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
                return false
            }
        } else {
            stack.push(ch)
        }
    }

    return (stack.length == 0)

}
