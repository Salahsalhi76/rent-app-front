import { baseUrl } from "../shared/shared.js";




export function AddHomeController(
  name,
  adresse,
  email,
  phone,
  baladiya,
  wilaya,
  type,
  categorie,
  Surface,
  bed_nb,
  title,
  description,
  price
) {
  const postData = async (url = baseUrl + "Annonce/add/ann", data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  }

    console.log('name => '+name);
    console.log('adresse => '+adresse);
    console.log('email => '+email);
    console.log('phone => '+phone);
    console.log('baladiya => '+baladiya);
    console.log('wilaya => '+wilaya);
    console.log('type => '+type);
    console.log('categorie => '+categorie);
    console.log('Surface => '+Surface);
    console.log('bed_nb => '+bed_nb);
    console.log('title => '+title);
    console.log('description => '+description);
    console.log('price => '+price);
  const data = {
    "uid": "",
    "nom_prenom": name,
    "user_adresse": adresse,
    "user_email": email,
    "user_phone": phone,
    "publish_date": "publish_date",
    "commune": baladiya,
    "wilaya": wilaya,
    "image": "image",
    "type": type,
    "sqft": Surface,
    "nb_bath": 0,
    "nb_bed": bed_nb,
    "title": title,
    "descr": description,
    "prix": price
  };


  return postData(baseUrl + "Annonce/add/ann", data).then(data => {
    return data;
  });
  /*
  
        postData(baseUrl, data)
          .then(data => {
            console.log("datadatadatadata 11111111111& => "+ JSON.stringify(data, null, 2));
  
            return data;
          })
          .catch(error =>{
            console.log("errorerrorerror 2222222222& => "+ error);
            throw error;
          });
  */
}


