import {baseUrl} from "../shared/shared.js";




export const AddHomeController = ()=>{
    const postData = async (url = baseUrl, data = {}) => {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        return await response.json();
      }
      
      const data = {
        "uid": "string",
        "nom_prenom": "string",
        "user_adresse": "string",
        "user_email": "string",
        "user_phone": "string",
        "publish_date": "string",
        "commune": "string",
        "wilaya": "string",
        "image": "string",
        "type": "string",
        "sqft": 0,
        "nb_bath": 0,
        "nb_bed": 0,
        "title": "string",
        "descr": "string",
        "prix": 0
      };
      
      postData(baseUrl, data)
        .then(data => console.log("datadatadatadata 11111111111& => "+ JSON.stringify(data, null, 2)))
        .catch(error => console.log("errorerrorerror 2222222222& => "+ error));
}


