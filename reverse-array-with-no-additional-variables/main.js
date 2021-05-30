function revert(input) {
    let buffer = '';
    let i, j;
  
    for (i = 0, j = (input.length - 1); i < (input.length / 2); i++, j--) {
        buffer = input[i];
        input[i] = input[j];
        input[j] = buffer;
    }
   
    for (i = 0, j = 0; j < input.length; j++) {
        if (input[j] == ' ' || j == (input.length - 1)) {
            if (input[j] == ' ') {
                j = j - 1;
            }
            for(;i < j; i++, j--) {
                buffer = input[i];
                input[i] = input[j];
                input[j] = buffer;
            }
            for (; input[j] != ' ' && j < input.length; j++);
            i = j + 1;   
        } 
    }
    
    return input;
}

const printable = (arr) => arr.reduce((acc, v) => `${acc }${v}`, '');
let input1 = ['l', 'a', 'z','y', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 'e', 'd', ' ', 'o', 'v', 'e', 'r'];

console.log(`input: ${printable(input1)}\nreverted: ${printable(revert(input1))}`);