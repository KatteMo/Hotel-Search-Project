type DeclensionOptions ={
    single : string;
    double: string;
    plural: string;
}

const correctDeclension = (number :number, { single, double, plural }: DeclensionOptions) => {
  const num = Math.abs(number);
  const numDec = num % 100;
  const numUnit = num % 10;
  if (numDec >= 5 && numDec <= 20) {
    return plural;
  }
  if (numUnit === 1) {
    return single;
  }
  if (numUnit >= 2 && numUnit <= 4) {
    return double;
  }
  return plural;
};
export default correctDeclension;
