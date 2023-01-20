module.exports = function reverse(n) {
  let result = '';

  for (let i = String(Math.abs(n)).length - 1; i >= 0; i = i - 1) {
    result = result + String(Math.abs(n))[i];
  }

  return result;
}
