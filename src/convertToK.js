function kConverter(num) {
  return num <= 999
    ? num
    : (0.1 * Math.floor(num / 100)).toFixed(1).replace(".0", "") + "k";
}

export default kConverter;
