// NOTICE JS storage est un objet qui va nous permettre de stocker des informations
const storage = {

    set: function(variableName, value) {
  
      // je transforme la variable en JSON
      const json = JSON.stringify(value);
  
      //ajouter en storage/cookie
      localStorage.setItem(variableName, json);
    },
  
    get: function(variableName) {
      const json = localStorage.getItem(variableName);
      //transformer une string en JSON
      const value = JSON.parse(json);
      return value;
    },
  
    unset: function(variableName) {
      localStorage.removeItem(variableName);
    }
  
  };
  
  export default storage;
  