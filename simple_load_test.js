import http from 'k6/http'
import { check, sleep } from 'k6'

// source code dapet dari blog medium myskill

export let options = {
    vus: 10, //tes beban 10 virtual user
    duration: '30s' //untuk 30 detik
}

export default function () {
    let respon = http.get('https://test-api.k6.io');
    check(respon, {
        'status was 200': (r) => r.status == 200
    })
    sleep(1)
}