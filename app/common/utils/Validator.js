const languages = {
  pt: {
    "1": "Valor abaixo do permitido.",
    "2": "Valor acima do permitido.",
    "3": "Texto inválido ou menor que o permitido.",
    "4": "Texto inválido ou maior que o permitido.",
    "5": "E-mail inválido.",
  }
};

export default class Validator {

  constructor(){}

  validate(value, type = "string", minLength = 0, maxLength=Infinity, language = "pt"){
    switch (type) {
      case "number": return this.validateNumber(value, minLength, maxLength, language);
      case "string": return this.validateString(value, minLength, maxLength, language);
      case "email": return this.validateEmail(value, language);
    }
  }
  
  
  validateNumber(value, minLength, maxLength, language) {
    const response = {
      err: false,
      errors: [],
    };
    // success
    if(value >= minLength && value <= maxLength) {
      return response;
    }
    // errors
    else {
      if (value < minLength) {
        response.err = true;
        response.errors.push(languages[language]["1"]);
        response.code = 1;
      }
      if (value > maxLength) {
        response.err = true;
        response.errors.push(languages[language]["2"]);
        response.code = 2;
      }
      return response;
    }
  };
  
  validateString(value, minLength, maxLength, language){
    const response = {
      err: false,
      errors: [],
    };
    // success
    if (value.length >= minLength && value.length <= maxLength) {
      return response;
    }
    // errors
    else {
      if (value.length < minLength) {
        response.err = true;
        response.errors.push(languages[language]["3"]);
        response.code = 1;
      }
      if (value.length > maxLength) {
        response.err = true;
        response.errors.push(languages[language]["4"]);
        response.code = 2;
      }
      return response;
    }
  };
  
  validateEmail(value, language){
    const response = {
      err: false,
      errors: [],
    };
    // success
    if ((value.search("@") > -1) && (value.search(".") > -1)) {
      return response;
    }
    // errors
    else {
      response.err = true;
      response.errors.push(languages[language]["5"]) ;
      response.code = 5;
      return response;
    }
  };
}
