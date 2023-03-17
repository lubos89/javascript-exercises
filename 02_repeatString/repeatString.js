const repeatString = function(string, number) {
    let result = "";

    if (number < 0 || typeof string !== "string") return "ERROR";

    for (let i = 0; i < number; i++) {
        result += string;
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
