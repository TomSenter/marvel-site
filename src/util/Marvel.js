const md5 = require('md5');
const Marvel = {
    /*
    searchCharacter(term){

        // get the url first 
     const baseUrl = 'http://gateway.marvel.com/v1/public/characters';
     const apiKey = '33b3a16ed4496639f1ef57bcf1c44823';
     const privateKey = '2141ecf8715dcde9af9c2d78aa973cc9530355c6';
     const limit = '9';
     
     const ts = Date.now();

     const hash = md5(ts + privateKey + apiKey);

     const url = `${baseUrl}?nameStartsWith=${term}&limit=${limit}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

     // do fetch now
     fetch(url).then(response=>{
         if(response.ok){
             return response.json();
         }
     },networkError=> console.log(networkError.message)
     ).then((jsonResponse=>{
         if(!jsonResponse.data){
             return [];
         }

          return jsonResponse.data.results.map(character=>{

            
             return {name:character.name,id:character.id,description:character.description,pic:character.thumbnail.path}
         });
     })
     )


       
    } */

    async searchCharacter(term){
          // get the url first 
     const baseUrl = 'http://gateway.marvel.com/v1/public/characters';
     const apiKey = '33b3a16ed4496639f1ef57bcf1c44823';
     const privateKey = '2141ecf8715dcde9af9c2d78aa973cc9530355c6';
     const limit = '20';
     
     const ts = Date.now();

     const hash = md5(ts + privateKey + apiKey);

     const url = `${baseUrl}?nameStartsWith=${term}&limit=${limit}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

     try{
         const response = await fetch(url);
         if(response.ok){
             const jsonResponse = await response.json();
             return jsonResponse.data.results.map(character=>{
                return {name:character.name,id:character.id,description:character.description,pic:character.thumbnail.path,extension:character.thumbnail.extension}
            });
         }

     }catch(error){
         console.log(error);
     }


    },

   async getComics(id){
        // going to do getComics in here
        const baseUrl = `http://gateway.marvel.com/v1/public/characters/${id}/comics`;
        const apiKey = '33b3a16ed4496639f1ef57bcf1c44823';
        const privateKey = '2141ecf8715dcde9af9c2d78aa973cc9530355c6';
        const limit = '20';
        
        const ts = Date.now();
   
        const hash = md5(ts + privateKey + apiKey);
   
        const url = `${baseUrl}?limit=${limit}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

        console.log(url);

        try{
            const response = await fetch(url);
            if(response.ok){
                const jsonResponse = await response.json();
                return jsonResponse.data.results.map(comic=>{
                   return {title:comic.title,id:comic.id,description:comic.description,pic:comic.thumbnail.path,extension:comic.thumbnail.extension,issue:comic.issueNumber,format:comic.format}
               });
            }
   
        }catch(error){
            console.log(error);
        }


    }
    
};


export default Marvel;