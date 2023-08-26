
export async function postUser(name){
    const userdata = {
        name: name
    }
    console.log(userdata)
    const response = await fetch('/create-user',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json' },
        body: userdata
    })
    }

getUser();

export async function getUser(){
    console.log('asdas');
    const response = await fetch('/get-user-data', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    const data = await response.json();
    console.log('pee');
    return data;
}