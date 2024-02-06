
  function introduction(name) {
    if (name === "Aki")
      return ("Hi, my name is Aki.")
     else if (name === "Samip")
       return ("Hi, my name is Samip.")
   }
   
   function introductionWithLanguage(name, language) {
    if ((name === "Aki" || name === "Samip") && (language === "Ember.js" || language === "React")) 
      return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    
  }

  function introductionWithLanguageOptional(name, language = "JavaScript") {
    if ((name === "Gracie"))
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }

 
