import {baseUrl} from '../shared/shared.js';


export  function getHomes() {
    console.log("dgggggggggggggggggggggggg")
    return fetch(`${baseUrl}/Annonce`).then(res=>{
        return res.json();
    }).then(data=>{
       return data;
    });
}




