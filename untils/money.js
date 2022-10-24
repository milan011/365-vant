import Decimal from 'decimal.js'

/**
 * 格式化金额格式
 * 返回的是字符串23,245.12保留2位小数
 * @param num
 * @returns {string}
 */
export function toMoney (num) {
  num = num.toFixed(2)
  num = parseFloat(num)
  num = num.toLocaleString('zh', { minimumFractionDigits: 2, useGrouping: true })
  return num
}

/**
 * 格式化金额格式
 * 返回的是字符串23,245.12保留2位小数
 * @param num
 * @returns {string}
 */
export function toDoller (val) {
  return new Decimal(val).div(100).toNumber();
}

/**
 * 格式化金额格式
 * 返回的是字符串23,245.12保留2位小数
 * @param num
 * @returns {string}
 */
export function toCent (val) {
  return new Decimal(val).mul(100).toNumber();
}

export function moneyFormat (val) {
  return val ? toMoney(toDoller(val)) : 0;
}
