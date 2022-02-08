import axios from 'axios';
import storage from '../plugins/storage.js';
import env from "../../env";


const userService = {

    jwtBaseURI: env.jwtBaseURI,
    baseURI: env.baseURI,
    opucesBaseURI: env.opucesApi,
    wpApi : env.wpApi,
  
    login: async function(login, password){
        let response = await axios.post(
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
    checkUser: async function(token){
        if(token){
            const options = {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            };
       
        let response = await axios.post( userService.jwtBaseURI+'/token/validate',
           null,
            options
        ).catch(
            function(){
                console.log('User différent');
                return false;
            }
        )
        return {
            'success': true,
            
            'response': response,
        }
        
        }
        console.log('checkUser OK');
    },

    userConnected: async function(){
        const userData = storage.get('userData');
        if(userData != null){
            const token = userData.token;
            if(token){
                const options = { headers:{Authorization: 'Bearer' . token }};
                const response = await axios.post(userService.jwtBaseURI + '/token/validate',
                null,
                options).catch(function(){ return false; });
                return response.data;
            }
        }
        return false;
    },

    inscription: async function(username, email, password, passwordVerify)
    {
        const response = await axios.post(userService.opucesBaseURI + '/create-user',
          {
              userName: username,
              email: email,
              password: password,
              confirmPassword: passwordVerify
          }  
        ).catch(function(){
            return false;
        });
        return response.data;
    },

    logout: async function ()
    {
        //on supprime dans local storage
        storage.unset('userData');
    },

    updateUserPassword: async function(currentPassword, newPassword)
    {
        const userData = storage.get('userData');
        const token = userData.token;
        const id = storage.get('UserIdLogged');
        if(token && id){
            const options = { 
                headers: {
                    Authorization: 'Bearer' + token 
                }
            };
        
        const response = await axios.put(userService.wpApi + '/users/' + id,
        {
            password: currentPassword,
            new_password: newPassword
        },
        options
        ).catch(function(){
            console.log('Update Password Failed!');
            console.log(response);
            return false;
        });
        console.log('Password Updated!');
        return response.data;
    }
    },
    updateUserEmail: async function(newEmail){
        const userData = storage.get('userData');
        const token = userData.token;
        const id = storage.get('UserIdLogged');
        if(token && id){
            const options = { 
                headers: {
                    Authorization: 'Bearer ' + token 
                }
            };
            const response = await axios.put(userService.wpApi + '/users/' + id,
            {
                email: newEmail
            },
            options
            ).catch(function(){
                console.log('Update Email Failed!');
                console.log(response);
                return false;
            });
            console.log('Email Updated!');
            return response.data;

        }
    },

    saveUserInformation: async function (adress, adress2, country, phoneNumber, zipcode, city,civility, firstname, lastname,)
    {
        const userData = storage.get('userData');
        const token = userData.token;
        if(token){
            const options = { 
                headers: {
                    Authorization: 'Bearer ' + token 
                }
            };
        const response = await axios.post(userService.opucesBaseURI + '/user-table',
        {
            
            adress1: adress,
            adress2: adress2,
            zipcode: zipcode,
            city: city,
            country: country,
            phone_number: phoneNumber,
            civility: civility,
            firstname: firstname,
            lastname: lastname
        },
        options
        ).catch(function(){
            console.log('saveUserInfo Error');
            console.log(response);
            return false;
        });
        return response.data;
        }
    },
    
    
    deleteUser: async function(){
        const userId = storage.get('UserIdLogged');
        console.log(userId);
        const userData = storage.get('userData');
        const token = userData.token;
        console.log(token);
        if(token){       
        const response = await axios.delete(userService.wpApi + '/users/' + userId,
        {
            headers: {
                        Authorization: 'Bearer ' + token 
                    },
            params:{
                        // on ne veut pas réassigner les annonces, elles auront donc le status Trash
                        reassign: false, 
                        // un user ne peut pas avoir le status Trash on force donc pour la suppression pure
                        force: true 
                    },
        }
            
        ).catch(function(){
            console.log('Failed Deletion User');
            console.log(response);
            return false;
        });
        return response.data;
        }
    },

    async loadUserFromUserTable(id){

    const response = await axios.get(userService.opucesBaseURI + '/user-table',
        {
            params:{
                userID: id
            }
        }
        ).catch(function(){
            console.log('Failed To Load User Informations');
            return false;
        });
        console.log('User Informations Loaded');
        return response.data;
        
    },

    async loadUserEmail()
    {
        const userId = storage.get('UserIdLogged');
        console.log(userId);
        const userData = storage.get('userData');
        const token = userData.token;
        console.log(token);
        if(token){
        const response = await axios.get(userService.opucesBaseURI + '/load-user-email',
            {
                headers: {
                    Authorization: 'Bearer ' + token 
                },
                params:{
                    ID: this.userID
                }
            }
            
            ).catch(function(){
                console.log('User Forbidden');
                return response;
            })
            return response;
         }
    }
};
export default userService;