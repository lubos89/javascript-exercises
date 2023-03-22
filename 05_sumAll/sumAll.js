const sumAll = function(start, end) {
    let result = 0;

    if (!Number.isFinite(start) || !Number.isFinite(end)) return 'ERROR';
    if (start < 0 || end < 0) return 'ERROR';
    if (start > end) [start, end] = [end, start];

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
