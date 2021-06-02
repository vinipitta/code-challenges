// 4
// 3 1
// 1 3 
// 2 2 
// 2 1 1 
// 1 2 1
// 1 1 2
// 1 1 1 1 
function result(target) {
    let leftParenthesis = createSymbolSet('(', target);
    let rightParenthesis = createSymbolSet(')', target);
    let combinations = [];

    return '';
}

function createSymbolSet(symbol, size) {
    let symbols = [];
    let curentSymbol = symbol;
    for (let i = 0; i < size; i++) {
        symbols[i] = currentSymbol;
        currentSymbol += symbol;
    } 
    return symbols;
}

console.log(result(1));
console.log(result(2));
console.log(result(3));
console.log(result(4));