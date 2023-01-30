


export  function getMessages() {
    return fetch("http://localhost:63342/hello_world/index.php?_ijt=92e3da37qtu7h56c775lvhffii").then(res=>{
        return res.json();
    }).then(data=>{
       return data;
    });
}


export  function setMessage({home_id,message}) {
    return fetch("http://localhost:63342/hello_world/index.php?_ijt=92e3da37qtu7h56c775lvhffii").then(res=>{
        return res.json();
    }).then(data=>{
       return data;
    });
}