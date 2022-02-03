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
        cart: null,
        classified: null,
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

        saveClassified(state, newClassified){
            state.classified = newClassified;
        }
    },
    getters: {
        getCart: state => state.cart,
        getCartLength: (state, getters) => {
            return getters.getCart.length
        }
    },
});

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


const classifiedData = storage.get('classifiedData');
if(classifiedData){
    store.commit('saveClassified', classifiedData);
}

export default store;