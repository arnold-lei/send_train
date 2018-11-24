const validate = (val, rules) => {
  let isValid = true; 
  _.forEach(rules, function(rule){
    switch(rule){
      case 'isEmail': 
        isValid = isValid && emailValidator(val);
      case 'minLength':
        isValid = isValid && minLengthValidator(val, rules[rule])
      case 'equalTo':
        isValid = isValid && equalToValidator(val, rules[rule])
      default: 
        isValid = true;
    }
  })
  return isValid;
}

const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val)
}

const minLengthValidator = (val, minLength) =>{
  return val.length >= minLength;
}

const equalToValidator = (val, checkValue) =>{
  return val === checkVlaue
}

export default validate;