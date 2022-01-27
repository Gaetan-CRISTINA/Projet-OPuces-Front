import axios from "axios"


const classifiedsService = {
    
    jwtBaseURI: 'http://localhost/OPuces/public/wp-json/opuces/v1',
    baseURI: 'http://localhost/OPuces/public/wp-json/wp/v2',

    createClassified: async function(title, description, price, author, image){
        let response = await axios.post(
            classifiedsService.jwtBaseURI + '/create-classified',
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
        const response = await axios.get(classifiedsService.baseURI + '/productCategory?_embed=true');
        return response.data;
    },

    async loadProductState(){
        const response = await axios.get(classifiedsService.baseURI + '/ProductState?_embed=true');
        return response.data;
    },
    
    async loadDeliveryMethods(){
        const response = await axios.get(classifiedsService.baseURI + '/DeliveryMethod?_embed=true');
        return response.data;
    },

    async loadSellerRate(){
        const response = await axios.get(classifiedsService.baseURI + '/SellerRate?_embed=true');
        return response.data;
    }

    
}

export default classifiedsService;