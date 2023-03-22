const removeFromArray = function(array, ...args) {

    let resultArray = Array.from(array);

    for (let i = 0; i < args.length; i++) {
        let index = resultArray.indexOf(args[i]);

        if (index !== -1) {
            resultArray.splice(index, 1);
        }
    }

    return resultArray;
};
// Do not edit below this line
module.exports = removeFromArray;
