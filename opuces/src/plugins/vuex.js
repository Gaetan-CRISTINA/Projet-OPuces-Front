import Vue from 'vue';
import Vuex from 'vuex';
import storage from '../plugins/storage.js';
import classifiedsService from '../services/classifiedsService.js';


import userService from '../services/userService';
// import classifiedsService from '../services/classifiedsService';


Vue.use(Vuex);

const store = new Vuex.Store({
    //stockage des données partageable
    state:{ 
        user: null,
        taxoVuexList: [],
        services:{
            user: userService,
            storage: storage,
            classified: classifiedsService
        }
    },
    //setters pour modifier le state 
    mutations: {
        saveUser(state, newUser){
            state.user = newUser;
        },
        saveTaxoList(state, newTaxoVuexList) {
            state.taxoVuexList = newTaxoVuexList;
          },
        addTaxoList(state, data){
            state.taxoVuexList.push(data);
        },
    },
    });

const userData = storage.get('userData');
if(userData){
    store.commit('saveUser', userData);
}
export default store;