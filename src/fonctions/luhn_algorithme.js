




const _codeFormat = 'xxxxxxxxxxxxxc';
const _codeSize = 14; // code size without CZ-



function generateCode(){
    const tmp = generate();
    console.log(tmp);
    console.log(`validate => ${  validate(tmp)}`);
}







   function  generate() {

    const format = _codeFormat;

    const payload = format.split('c')[0];

     console.log(typeof payload);
     
    const value = String(payload).replaceAll('x',Math.floor((Math.random()*10)));
    const controlDigit = checksum(removeNonDigits(value));
     
    return   `${value}${controlDigit}`;
  }




  function  checksum(value) {
     const sum = compute(value);

     return (10 - (sum % 10)) % 10;
     }


     function validate({value}) {
    if (value == null) {
      return false;
    }

    const cleanNumber = removeNonDigits(value);
    if (cleanNumber.length < _codeSize) {
      return false;
    }

    return compute(cleanNumber,true) % 10 == 0;
  }


  function compute( value, includesCheckDigit  = false) {


    var sum = 0;

    /// If last char is checksum digit we skip the last multiplication
    ///  bcz we wanna calculate the Key "c"
    let isDouble = !includesCheckDigit ;

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



  function removeNonDigits(str) { // remove prefix , for ex "CZ-"
    let nonDigit = RegExp('[^0-9]');
    return String(str).replaceAll(nonDigit, '');
  }


console.log(generateCode());
  


