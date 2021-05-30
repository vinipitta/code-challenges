function revert(input) {
    let buffer = '';
    let i, j;
  
    // reverse whole array: words will be backwards 
    for (i = 0, j = (input.length - 1); i < (input.length / 2); i++, j--) {
        buffer = input[i];
        input[i] = input[j];
        input[j] = buffer;
    }
   
    // loop through array
    for (i = 0, j = 0; j < input.length; j++) {
        // when found a word (hit white space or end of array)
        if (input[j] == ' ' || j == (input.length - 1)) {
            // use i and j to reverse the found word
            if (input[j] == ' ') {
                j = j - 1;
            }
            for(;i < j; i++, j--) {
                buffer = input[i];
                input[i] = input[j];
                input[j] = buffer;
            }
            // get j back to original position
            for (; input[j] != ' ' && j < input.length; j++);
            // put i ahead o j for next word reversing
            i = j + 1;   
        } 
    }
    
    return input;
}

const printable = (arr) => arr.reduce((acc, v) => `${acc }${v}`, '');

let input1 = ['l', 'a', 'z','y', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 'e', 'd', ' ', 'o', 'v', 'e', 'r'];
console.log(`input: ${printable(input1)}\nreverted: ${printable(revert(input1))}`);