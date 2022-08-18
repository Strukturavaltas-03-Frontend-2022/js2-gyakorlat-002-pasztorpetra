const numericConverter = (num) => {
  const bin = num.toString(2);
  const oct = num.toString(8);
  const hex = num.toString(16);

  return {
    binary: bin,
    octal: oct,
    hexa: hex,
  };
};

export default numericConverter;
