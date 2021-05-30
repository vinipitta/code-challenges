# Challenge

Given a array of chars with a setence, reverse the phrase without declaring additional variables besides:
```
char[] input = []; //the array that should be reversed
char buffer; //single char for buffer
byte i, j;
```

# Solution
Solution created in node. 

## Steps
1. Reverse the array and the result is that words are backward. 
2. Loop whole array and whenever find the end of a word (found a white space or end of array)
    1. Reverse the word using `i` and `j`
    2. Recalibrate `j` to original position