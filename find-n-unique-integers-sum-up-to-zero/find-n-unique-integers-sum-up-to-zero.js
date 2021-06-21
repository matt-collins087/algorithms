var sumZero = function(n) {
    let arr = [];

    if (n % 2 === 0) {
        for (let i = 0; i < n; i+=2) {
            arr.push(i + 1);
            arr.push(-i - 1);
        }
    } else {
        arr[0] = 0;
        for (let i = 1; i < n; i+=2) {
            arr.push(i + 1);
            arr.push(-i - 1);
        }
    }

    return arr;
};