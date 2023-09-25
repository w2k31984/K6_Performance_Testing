import {check} from 'k6';
import http from 'k6/http';

export let options = {
    vus: 30 ,
    duration : '3s' 
};

export default function() {
    let res = http.get('https://www.saucedemo.com/');
    check(res, {
        'El estatus es 200' : (r) => r.status === 200

    });
}
