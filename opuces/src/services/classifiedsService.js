import axios from "axios"


const classifiedsService = {
    
    jwtBaseURI: 'http://localhost/OPuces/public/wp-json/opuces/v1',

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

    
}