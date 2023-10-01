import http from 'k6/http';

const BASE_URL = __ENV.BASE_URL || 'https://test-api.k6.io/'
export default function(){
       
    let url = BASE_URL + 'URL VALIDA';
        
    let response = http.get(url, 'Prueba de post del servicio');
   
    
    //Hacer debugging en K6
    //console.log(JSON.stringify(response));


}