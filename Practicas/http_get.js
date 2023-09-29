import http from 'k6/http';

const BASE_URL = 'https://test-api.k6.io/'
export default function(){
       
    let response = http.get(BASE_URL);

 //Hacer debugging en K6
    console.log(JSON.stringify(response));


}