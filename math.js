function add(a, b) {
  // 参数校验
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('参数必须是数字');
  }
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
module.exports = { add, subtract };
