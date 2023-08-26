const apiLink = 'http://localhost:5000'

export async function postUser(name){
    const userdata = {
        "name": name
    }
    const response = await fetch(apiLink + '/create-user',{
        method: 'POST',
        headers: {
            'ngrok-skip-browser-warning':true,
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(userdata)
    })
    
}

export async function getUser(){
    const response = await fetch(apiLink + '/get-user-data',
    {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning':true,
        Accept: 'application/json',
      },
    });    
    const data = await response.json();
    // console.log(data);
    return data;
}

export async function getPhase(){
    const response = await fetch(apiLink + "/get-phase",
    {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning':true,
        Accept: 'application/json',
      },
    });    
    const data = await response.json();
    // console.log(data);
    return data;
}

export async function getQuestion(){
    const response = await fetch(apiLink + "/get-qotd",
    {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning':true,
        Accept: 'application/json',
      },
    });    
    const data = await response.json();
    // console.log(data);
    return data;
}

export async function updateVote(voter,votee){
    const votes = {
        "voter":voter,
        "votee":votee
    }
    const response = await fetch(apiLink + "/update-vote",
    {
        method: 'PUT',
        headers:{
            'ngrok-skip-browser-warning':true,
            Accept: 'application/json',
          },
        body:JSON.stringify(votes)
    })
}


