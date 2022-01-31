import axios from "axios"
import env from "@/env.js";

const classifiedsService = {
    
    opucesBaseURI: env.opucesApi,
    baseURI: env.wpApi,

    createClassified: async function(title, description, price, author, image){
        let response = await axios.post(
            classifiedsService.env.opucesApi + '/create-classified',
            {
                title: title,
                description: description,
                author: author,
                price: price,
                image: image 
            }
        ).catch(
            function(){
                console.log('upload classified failed');
                return false;
            }
        )
        return response.data;
    },

    async loadClassified(){
        const response = await axios.get(classifiedsService.baseURI + '/classified?_embed=true');
        return response.data;
    },
    async loadAuthor(){
        const response = await axios.get(classifiedsService.baseURI+ '/users/:id')
        return response.data;
    },

    async loadClassifiedProductCategory(){
        const response = await axios.get(classifiedsService.baseURI + '/productCategory?parent=0');
        
        return response.data;
        
    },

    async loadProductState(){
        const response = await axios.get(classifiedsService.baseURI + '/ProductState');
        return response.data;
    },
    
    async loadDeliveryMethods(){
        const response = await axios.get(classifiedsService.baseURI + '/DeliveryMethod?_embed=true');
        return response.data;
    },

    async loadSellerRate(){
        const response = await axios.get(classifiedsService.baseURI + '/SellerRate?_embed=true');
        return response.data;
    },

    async loadClassifiedsById(classifiedId){
        const response = await axios.get(classifiedsService.baseURI + '/classified/' + classifiedId );
        return response.data;
    },

    async loadClassifiedsByUser(userId){
        const response = await axios.get(classifiedsService.baseURI + '/classified?user=' + userId);
        return response.data;
    },

    async saveClassified(title, description, selectedState, selectedCategory, price, selectedDeliveryMethod){
        const response = await axios.post (classifiedsService.opucesBaseURI + '/save-classified',
            {
                title: title,
                description: description,
                selectedSate: selectedState,
                selectedCategory: selectedCategory,
                price: price,
                selectedDeliveryMethod: selectedDeliveryMethod
            })
        return response.data;
    }

    
}

export default classifiedsService;