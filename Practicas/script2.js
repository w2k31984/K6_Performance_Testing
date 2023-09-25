import http from 'k6/http';

import { sleep } from 'k6';

export const options = {

 //Agregando el # de usuarios vus y el tiempo de duracion de la peticion 30s dentro del script.
  vus: 10,

  duration: '30s',

};

export default function () {

  http.get('http://test.k6.io');

  sleep(1);

}