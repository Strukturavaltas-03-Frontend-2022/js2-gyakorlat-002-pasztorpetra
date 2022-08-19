function summarize(...numbers) {
  let intNumbers = numbers.filter((item) => Number.isInteger(item));
  intNumbers = intNumbers.map((item) => BigInt(item));
  const result = intNumbers.reduce((a, b) => a + b);

  return result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER
    ? result
    : Number(result);
}

export default summarize;
