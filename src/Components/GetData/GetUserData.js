// import APIBaseUrl from './API.js';
import Axios from 'axios';

async function GetUserData(userEmail) {

    try {
        const res = await fetch('http://localhost:4000' + '/requestuserdata?userEmail=' + userEmail, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }); 
        const data = await res.json()
        return data;
    }
    catch (e) {
        console.log('catch error')
        console.log(e)
    }
    return;
}

export default GetUserData;