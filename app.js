function displayNumbers(result) {
  const disp = document.querySelector('#dispoutput')
//  if(disp.value.includes('.') && result === '.') return
  const validateFloat = () => {
    let isFloat = false;
    const numberGroups = disp.value.split('+')
    numberGroups.map((numberGroup)=>{
      if(numberGroup.includes('.') && result === '.'){
        isFloat = true
      } else{
        isFloat = false
      }
    })
    return(isFloat);
  }
  let isFloat = validateFloat()
  if(isFloat) return
  disp.value = disp.value+result;
}

const numberBtns = document.querySelectorAll('.numberbtn');
numberBtns.forEach((btn)=> {
  btn.addEventListener('click', ()=> {
    const btnValue = btn.value
    displayNumbers(btnValue)
  })
})
const operatorBtns = document.querySelectorAll('.operatorbtn')
operatorBtns.forEach((btn)=> {
  
  btn.addEventListener('click', ()=> {
    const disp = document.querySelector('#dispoutput')
    dispValue = disp.value
    if(!disp.value) return
    const btnValue = btn.value
    if(dispValue.charAt(dispValue.length -1)==='+' || dispValue.charAt(dispValue.length -1)=== '-' || dispValue.charAt(dispValue.length -1)==='*' || dispValue.charAt(dispValue.length -1)=== '/') {
      disp.value = disp.value.slice(0, -1) + btnValue
      return
    }
    displayNumbers(btnValue)
  })
})

const equalBtn = document.querySelector('#submit')
equalBtn.addEventListener('click', ()=> {
  const disp = document.querySelector('#dispoutput')
  const total = disp.value
  if (!total || total == null) {
    disp.value = "I love You Jaan"
    disp.style.color = 'red'
    disp.style.fontFamily = "'Carattere', cursive";
    disp.style.fontSize = '39.2px'
    disp.style.textAlign = 'center'
    return
  } else {
    disp.value = eval(total)
    disp.style.color = "black"
    disp.style.fontFamily = "sans-serif"
    disp.style.fontSize = '38px'
    disp.style.textAlign = 'right'
  }
})
const backBtn = document.querySelector('#backspace')
backBtn.addEventListener('click', ()=> {
  const disp = document.querySelector('#dispoutput')
  disp.value = disp.value.slice(0, -1)
})

const resetBtn = document.querySelector('#reset')
resetBtn.addEventListener('click', ()=> {
  const disp = document.querySelector('#dispoutput')
  disp.value = ""
  disp.style.color = 'black'
  disp.style.fontFamily = "sans-serif"
  disp.style.fontSize = '38px'
  disp.style.textAlign = 'right'
})
