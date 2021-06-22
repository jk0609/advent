import { dayOneInput } from './input';

const findSumDuo = input => {
  const diffMap = {};

  for(let i=0; i<input.length; i++) {
    if(diffMap[input[i]]) {
      return input[i] * diffMap[input[i]];
    }
    else {
      diffMap[2020 - input[i]] = input[i];
    }
  }

  return null;
}

const findSumTriad = input => {
  const sorted = input.sort((a,b) => a-b);

  for(let i=0; i<sorted.length; i++) {
    // pointers
    let l = i+1;
    let r = sorted.length-1;

    while(l<r) {
      let sum = sorted[l] + sorted[i] + sorted[r];
      if(sum === 2020) {
        return sorted[l] * sorted[i] * sorted[r];
      }
      else if(sum < 2020) {
        l++;
      }
      else{
        r--;
      }
    }
  }
  return null;
}

console.log(findSumTriad(dayOneInput));