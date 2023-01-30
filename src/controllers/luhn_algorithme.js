/*

const _codeFormat = 'xxxxxxxxxxxxxc';
const _codeSize = 14; // code size without CZ-

function generateCode() {
  const tmp = generate();
  console.log(tmp);
  console.log(`validate => ${validate(tmp)}`);
}

function generate() {
  const format = _codeFormat;

  let payload = format.split('c')[0];

  let value = '';
  for (let index = 0; index < payload.length; index++) {
    if (payload[index] == 'x') {
      let rand = Math.floor(Math.random() * 10);

      payload = setCharAt(payload, index, rand);
    } else {
    }
  }
  const controlDigit = checksum(removeNonDigits(payload));

  return `${payload}${controlDigit}`;
}

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function checksum(value) {
  const sum = compute(value);

  return (10 - (sum % 10)) % 10;
}

function validate(value) {
  if (value == null) {
    return false;
  }

  const cleanNumber = removeNonDigits(value);
  if (cleanNumber.length < _codeSize) {
    return false;
  }
  return compute(cleanNumber, true) % 10 == 0;
}

function compute(value, includesCheckDigit = false) {
  var sum = 0;

  /// If last char is checksum digit we skip the last multiplication
  ///  bcz we wanna calculate the Key "c"
  let isDouble = !includesCheckDigit;

  /// We want to double every second digit
  for (var i = value.length - 1; i >= 0; i--) {
    const digit = value[i];
    if (isDouble) {
      const doubled = digit * 2;
      if (doubled > 9) {
        sum += doubled - 9;
      } else {
        sum += doubled;
      }
    } else {
      sum += digit;
    }
    /// Double the value of every second digit
    isDouble = !isDouble;
  }

  return sum;
}

function removeNonDigits(str) {
  // remove prefix , for ex "CZ-"
  return String(str).replaceAll(/\[^0-9]/g, '');
}

generateCode();


*/