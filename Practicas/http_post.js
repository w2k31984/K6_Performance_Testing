import http from 'k6/http';

const BASE_URL = __ENV.BASE_URL ||'https://httpbin.test.k6.io/post';

export default function(){
        let url = BASE_URL + 'URL VALIDA';
        
        let response = http.post(BASE_URL, 'Prueba de post del servicio');
        //let res = http.post((url, 'body'('headers','nameOfHeaders'))); 
        
        //Hacer debugging en K6
        console.log(JSON.stringify(response));

}