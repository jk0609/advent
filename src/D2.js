import { dayTwoInput } from './input';

const validPasswords = input => {
  let validCount = 0;

  for(let i=0; i<input.length; i++) {
    const [policy, password] = [...input[i].split(': ')];
    const [min, max, char] = [...policy.split(/[\s, -]/)];

    let charCount = 0;
    let valid = true;

    for(let j=0; j<password.length; j++) {
      if(password[j] === char) {
        charCount++;
        if(charCount > max) {
          valid = false;
          break;
        }
      }
    }

    if(charCount < min) valid = false;

    if(valid) validCount++;
  }

  return validCount
}

const actualValidPasswords = input => {
  let validCount = 0;

  for(let i=0; i<input.length; i++) {
    const [policy, password] = [...input[i].split(': ')];
    const [l, r, char] = [...policy.split(/[\s, -]/)];

    const first = password[l-1];
    const second = password[r-1];

    if((first === char || second === char) && first !== second) validCount++;
  }

  return validCount
}


console.log(actualValidPasswords(dayTwoInput));