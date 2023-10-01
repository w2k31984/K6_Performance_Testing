import http from 'k6/http';
import { group, check, sleep } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js'

const BASE_URL = __ENV.BASE_URL || 'https://test-api.k6.io/';

export default function () {
    let res={}  // Inicializando una variable para almacenar respuestas de las solicitudes HTTP
    //Creando grupos de ejecucion por endpoints.
    group("GET V2", function () {

        let res = http.get(BASE_URL);
    //Creamos el check para validar lo que se quiere reciba de la ejecucion.
        check(res,{"status is 200":(res) => res.status === 200})

    })
    //Agregamos la funcion sleep para poder apreciar mejor las pruebas en segundos.
    sleep(1);
    group("GET Cocodrile", function () {
        res = http.get(`${BASE_URL}public/crocodiles/`);
        check(res,{"status is 200":(res) => res.status === 200})
    //Agregamos para ver los resultados.
    //  console.log(JSON.stringify(res.json()[0].id))
        console.log(JSON.stringify(res.json()[randomIntBetween(0,res.json().length-1)].id))


    })
    sleep(1);
    group("GET Cocodrile ID", function () {
        //res = http.get(`${BASE_URL}public/crocodiles/1`);
        res = http.get(`${BASE_URL}public/crocodiles/${res.json()[randomIntBetween(0,res.json().length-1)].id}`);
        check(res,{"status is 200":(res) => res.status === 200})
        console.log(JSON.stringify(res.json())) //Similar a si escribimos res.body aca me lo devuelve como un json.
  
        
    })


    //Hacer debugging en K6
    //console.log(JSON.stringify(response));


}