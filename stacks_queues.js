/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const queue = [...s];
  const stack = [];

  if (queue.length % 2 === 1) {
    return false;
  }

  if (queue[0] === ")" || queue[0] === "}" || queue[0] === "]") {
    return false;
  }

  stack.push(queue[0]);
  queue.shift();
  while (queue[0]) {
    const next = queue.shift();
    if (stack[stack.length - 1] === "(" && next === ")") {
      stack.pop();
    } else if (stack[stack.length - 1] === "{" && next === "}") {
      stack.pop();
    } else if (stack[stack.length - 1] === "[" && next === "]") {
      stack.pop();
    } else {
      stack.push(next);
    }
  }

  if (stack.length) {
    return false;
  } else {
    return true;
  }
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("()[]{}()[]{)"));
console.log(isValid("({[({[]})]})"));
console.log(isValid("({[({]})]})"));
