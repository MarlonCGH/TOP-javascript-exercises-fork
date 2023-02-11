const removeFromArray = function(array, ...nums) {
    const newArray = array.filter(numcheck)
    function numcheck(value){ 
        return !nums.includes(value);
    }
    return newArray;
    }

// Do not edit below this line
module.exports = removeFromArray;