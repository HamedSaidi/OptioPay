class RomanNumerals {
  static get decimals() {
    // the order is critical to the algorithm of fromRoman and toRoman
    return [900, 1000, 400, 500, 90, 100, 40, 50, 9, 10, 4, 5, 1]
  }

  static get romans() {
    // the order is critical to the algorithm of fromRoman and toRoman
    return ['CM','M', 'CD', 'D', 'XC', 'C', 'XL', 'L', 'IX', 'X', 'IV', 'V','I']
  }

  static fromRoman(str = '') {
    let result = 0
    for (let i = 0; i < RomanNumerals.decimals.length && str !== ''; i++) {
      const romanRegex = new RegExp(RomanNumerals.romans[i], 'g')
      const count = (str.match(romanRegex) || []).length
      result += count * RomanNumerals.decimals[i]
      str = str.replace(romanRegex, '')
    }

    return result
  }

  static toRoman(num = 0) {
    let result = ''
    for (let idx = 0; idx < RomanNumerals.decimals.length && num > 0; idx++) {
      const decimal = RomanNumerals.decimals[idx]
      const roman = RomanNumerals.romans[idx]
      const count = parseInt(num / decimal, 10)
      result += roman.repeat(count)
      num -= count * decimal
    }

    return result
  }
}
