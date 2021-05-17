/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
  let result = '';
  let start = 0;

  while (start < command.length) {
    if (command[start] === '(' && command[start + 1] === ')') {
      result += 'o';
      start += 2;
      continue;
    }

    if (command[start] === '(' && command[start + 3] === ')') {
      result += 'al';
      start += 4;
      continue;
    }

    result += 'G';
    start++;
  }

  return result;
};