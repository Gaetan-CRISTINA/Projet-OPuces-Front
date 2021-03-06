import axios from "axios";
import env from "../../env";
import storage from "../plugins/storage.js";

const classifiedsService = {
    
    opucesBaseURI: env.opucesApi,
    baseURI: env.wpApi,

    async createClassified(title, description, selectedState, selectedCategory,  price, selectedDeliveryMethod, content, imageId){
        const userData = storage.get('userData');
        if(userData !=null){
            const token = userData.token;
            if(token){
                const options = {
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                };
            const response = await axios.post(
            classifiedsService.opucesBaseURI + '/save-classified',
            {
                post_id: 0,
                title: title,
                description: description,
                ProductState: selectedState,
                ProductCategorie: selectedCategory,
                price: price,
                DeliveryMethod: selectedDeliveryMethod,
                content: content,
                imageId: imageId
                
            },
            options
        ).catch(
            function(){
                console.log('upload classified failed');
                return false;
            });
            
            return response.data;
            
            }
        }
        
    },

    async updateClassified(id, title, description, selectedState, selectedCategory, price, selectedDeliveryMethod, content, imageId){
        const userData = storage.get('userData');
        if(userData !=null){
            const token = userData.token;
            if(token){
                const options = {
                    headers: {
                        Authorization: 'Bearer' + token
                    }
                };
            const response = await axios.post(
            classifiedsService.opucesBaseURI + '/update-classified',
            {
                post_id: id,
                title: title,
                description: description,
                ProductState: selectedState,
                ProductCategorie: selectedCategory,
                price: price,
                DeliveryMethod: selectedDeliveryMethod,
                content: content,
                imageId: imageId
                
            },
            options
        ).catch(
            function(){
                console.log('upload classified failed');
                return false;
            });
            
            return response.data;
            
            }
        }
    },

    async loadClassified(){
        const response = await axios.get(classifiedsService.baseURI + '/classified?_embed=true');
        return response.data;
    },

    async loadAuthor(){
        const userData = storage.get('userData');
        const token = userData.token;
        const response = await axios.get(classifiedsService.opucesBaseURI + '/userIdLogged',
        {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        });
        return response.data;
    },

    loadUserData: function(){
        const userData = storage.get('userData');
            if(userData != null){
                const usernameLogged = userData.user_nicename;
                return usernameLogged;
            } else {
                return false;
            }
    },

    async loadAuthorLogged(){
        const userData = storage.get('userData');
        const token = userData.token;
        const response = await axios.get(classifiedsService.opucesBaseURI + '/CurrentUserLogged',
        {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        });
        return response.data;
    },

    async loadClassifiedProductCategory(){
        const response = await axios.get(classifiedsService.baseURI + '/ProductCategory/?parent=0');
        
        return response.data;
        
    },
    async loadOneCustonomy(typeCusto,id){
        const response = await axios.get(classifiedsService.baseURI + '/' + typeCusto + '/' + id);
        
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
        const response = await axios.get(classifiedsService.baseURI + '/classified/' + classifiedId  +'?_embed=true');
        return response.data;
    },
    async updateClassifiedSold(id){
        const response = await axios.patch(classifiedsService.opucesBaseURI + '/classified-sold',
        {
            classifiedId: id
            
        }).catch(function(){
            console.log('Failed to update Sold Status');
            return response;
        });
        console.log ('Classified Sold');
        console.log(response.data);
        return response.data;
    },

    async loadClassifiedsByUser(userId){
        //TODO voir pour rajouter +'?_embed=true'
        const response = await axios.get(classifiedsService.baseURI + '/classified?author=' + userId);
        return response.data;
    },

    async uploadImage(image){
        let formData = new FormData();
        formData.append("image", image);
        const userData = storage.get('userData');
        const token = userData.token;
        const response = await axios.post(classifiedsService.opucesBaseURI+ '/upload-image', formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + token
            }
        });
        return response.data;
    },
    async getUrlImage(postID){
        const response = await axios.get(classifiedsService.opucesBaseURI + '/' + 'geturlimage?id=' + postID);
        return response.data;
    },
    async getTaxonomyName(){
        const response = await axios.get(classifiedsService.opucesBaseURI + '/' + 'taxonomy');
        return response.data;
    },

    async deleteCurrentClassified(classifiedId){
        const userData = storage.get('userData');
        const token = userData.token;
        const response = await axios.delete(classifiedsService.baseURI+ '/classified/' + classifiedId, 
        {
                headers: {
                    'Authorization' : 'Bearer ' + token
                }
        });
        console.log('Classified Deleted !');
        return response.data;
    },

    async loadClassifiedsByKeyWord(keyword){
        const response = await axios.get(classifiedsService.baseURI+ '/classified?search=' + keyword);
        return response.data;
    },

    async getQueryClassified(keyWords)
    {
        this.category = keyWords[0],
        this.city = keyWords[1],
        this.priceMin = keyWords[2],
        this.priceMax = keyWords[3];

        const response = await axios.get(classifiedsService.opucesBaseURI+ '/queryClassified',
        {
            params:{
            city : this.city,
            taxo: this.category,
            priceMin: this.priceMin,
            priceMax: this.priceMax
            }
        }
        );
        console.log(response);
        return response.data;
    }


    
}

export default classifiedsService;