

export async function postUser(name){
    const userdata = {
        "name": name
    }
    const response = await fetch('https://1521-174-95-59-9.ngrok-free.app/create-user',{
        method: 'POST',
        headers: {
            'ngrok-skip-browser-warning':true,
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(userdata)
    })
    
}

export async function getUser(){
    const response = await fetch("https://1521-174-95-59-9.ngrok-free.app/get-user-data",
    {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning':true,
        Accept: 'application/json',
      },
    });    
    const data = await response.json();
    console.log(data);
    return data;
}

export async function getPhase(){
    const response = await fetch("https://1521-174-95-59-9.ngrok-free.app/get-phase",
    {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning':true,
        Accept: 'application/json',
      },
    });    
    const data = await response.json();
    console.log(data);
    return data;
}

export async function getQuestion(){
    const response = await fetch("https://1521-174-95-59-9.ngrok-free.app/get-qotd",
    {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning':true,
        Accept: 'application/json',
      },
    });    
    const data = await response.json();
    console.log(data);
    return data;
}
