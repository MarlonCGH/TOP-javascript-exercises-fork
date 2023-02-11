const sumAll = function(firstNum, lastNum) {
    let finalSum = 0;
    if (firstNum < 0 || typeof firstNum !== "number" || lastNum < 0 || typeof lastNum !== "number"){
        return "ERROR";
    }
    else if (firstNum > lastNum) {
        for (i = lastNum; i <= firstNum; i++) {
            finalSum += i;
        }    
    }
    else {
        for (i = firstNum; i <= lastNum; i++) {
            finalSum += i;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
