


export  function authentication_controller(){

    localStorage.setItem('isLogged', true);

}

    

export  function logOut(){
        localStorage.removeItem('isLogged');
}



export  function isAuthenticated_controller(){

      const storedLoginStatus = localStorage.getItem('isLogged');
      console.log(`storedLoginStatusstoredLoginStatus ${storedLoginStatus}`);
      if (storedLoginStatus === 'true') {
        return true;
      }else{
        return false;
      }
  
}



export function getMe(){
  return {name:"salah eddine",image:"https://avatars.githubusercontent.com/u/89273323?v=4"};
}

