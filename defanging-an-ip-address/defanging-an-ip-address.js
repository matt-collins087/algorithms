/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
let str = address.replace(/\./g, '[.]');
  return str;
};