import http from 'k6/http';

import { sleep } from 'k6';

const BASE_URL = 'http://test.k6.io'

export default function () {

 let response = http.get(BASE_URL);

 //Hacer debugging en K6
 console.log(JSON.stringify(response));

  sleep(1);

}