import http from 'k6/http'
import { check, sleep } from 'k6'

// source code dapet dari blog medium myskill

export let options = {
    stages: [
        {duration: '1m', target: 100 },
        {duration: '1m', target: 500 }, //spike 500 user dalam 1 menit
        {duration: '1m', target: 100 },
        {duration: '1m', target: 0 }
    ]
}

export default function () {
    let respon = http.get('https://test-api.k6.io');
    check(respon, {
        'status was 200': (r) => r.status == 200
    })
    sleep(1)
}