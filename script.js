const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");



const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
	
    output.innerHTML = "Please enter a valid number";
     output.style.display = 'block';
	 return;
	
  } else if(inputInt < 1){
     output.innerHTML = "Please enter a number greater than or equal to 1";
     output.style.display = 'block';
	 return;
  } else if(inputInt > 3999){
     output.innerHTML = "Please enter a number less than or equal to 3999";
     output.style.display = 'block';
	 return;
  } else decimalToRoman(inputInt);
}

const decimalToRoman = (num) =>{
   const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };

      let result = '';

      for (const key in romanNumerals) {
        while (num >= romanNumerals[key]) {
          result += key;
          num -= romanNumerals[key];
        }
      } 
      
      output.innerHTML = `${result}`;
      output.style.display = 'block';
}

convertBtn.addEventListener("click", checkUserInput);