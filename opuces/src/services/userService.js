import axios from 'axios';

import storage from '../plugins/storage.js';

const userService = {

    jwtBaseURI: 'http://localhost/OPuces/public/wp-json/jwt-auth/v1',


    login: async function(login, password){
        const response = await axios.post(
            userService.jwtBaseURI+'/token',
            {
                username: login,
                password: password
            }
        ).catch( 
            // gestion des erreurs
            // si j'ai une erreur je vais atterir dans le .catch
            function(){
                console.log('on a une erreur');
                return false;
            }
        )
        return response.data;
    },

    logout: async function ()
    {
        //on supprime dans local storage
        storage.unset('userData');
    }
};
export default userService;