/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
/**
 * JS获取n至m随机整数
 * 琼台博客
 */
function rd(n, m) {
  var c = m - n + 1;
  return Math.floor(Math.random() * c + n);
}
