const reverseString = function(string) {
    const array = Array.from(string);

    let arraySwapped = [];
    for (i = array.length -1; i >= 0; i--) {
        arraySwapped.push(array[i]);
    }
    let stringSwapped = arraySwapped.join("");
    return stringSwapped;
};

reverseString("Hello");

// Do not edit below this line
module.exports = reverseString;
