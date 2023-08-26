
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
