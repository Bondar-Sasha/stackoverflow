function isPositiveInteger(s: string | undefined): boolean {
  if (s === undefined) {
    return false
  }
  const number = parseInt(s, 10)
  return !isNaN(number) && number > 0 && Number.isInteger(number)
}

export default isPositiveInteger
