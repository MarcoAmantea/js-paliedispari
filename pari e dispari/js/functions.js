let result = randomNum (1, 5);
function randomNum(min, max) {
  const randomcpu = Math.floor(Math.random() * (max - min + 1) + min);
  return randomcpu;
}

function evenOdd(number) {
    let final = "";
    if(sum % 2 === 0) {
        final = "pari";
    } else {
        final = "dispari";
    }
    return final;
}





