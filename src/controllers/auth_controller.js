


export  function authentication_controller(){

    console.log(`sdfkjhsfliksjdfkj;sdfhkjsd,hfjhdsgfj `);
    localStorage.setItem('hgfdgfgh', true);
    

}

    

export  function logOut(){
        localStorage.removeItem('hgfdgfgh');
}



export  function isAuthenticated_controller(){
  return true;

      const storedLoginStatus = localStorage.getItem('hgfdgfgh');
      console.log(`storedLoginStatusstoredLoginStatus ${storedLoginStatus}`);
      if (storedLoginStatus === 'true') {
        return true;
      }else{
        return false;
      }
  
}



