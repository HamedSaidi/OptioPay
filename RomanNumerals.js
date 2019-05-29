class RomanNumerals {
  static get decimals() {
    return [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  }

  static get romans() {
    return ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  }

  static fromRoman(str = '') {
    let result = 0
    for (let i = 0; i < RomanNumerals.decimals.length && str !== ''; i++) {
      const roman = RomanNumerals.romans[i]
      while (str.startsWith(roman)) {
        result += RomanNumerals.decimals[i]
        str = str.replace(roman, '')
      }
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
