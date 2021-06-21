/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let first = coordinates[0];
    let second = coordinates[1];

    if ((first.charCodeAt(0) - 96 + Number(second)) % 2 === 0) {
        return false;
    } else {
        return true;
    }
};