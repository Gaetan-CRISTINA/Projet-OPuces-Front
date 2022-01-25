const storage = {
    // stocker des informations en localstorage
    set: function(variableName, value) {
  
      // je transforme la variable en JSON
      const json = JSON.stringify(value);
  
      //ajouter en storage/cookie
      localStorage.setItem(variableName, json);
    },
    // récupérer des informations en locastorage
    get: function(variableName) {
      const json = localStorage.getItem(variableName);
      //transformer une string en JSON
      const value = JSON.parse(json);
      return value;
    },
    
    //supprimer des informations en localstorage
    unset: function(variableName) {
      localStorage.removeItem(variableName);
    }
  
  };
  
  export default storage;
  