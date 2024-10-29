import http from 'k6/http'
import { check, sleep } from 'k6'

// source code dapet dari blog medium myskill

export let options = {
    stages: [
        { duration: '1m', target: 100 }, //ramp up 100 user untuk 1 menit
        { duration: '2m', target: 100 }, //stay 100 user untuk 2 menit
        { duration: '1m', target: 0 } //ramp down 0 user untuk 1 menit
    ]
}

export default function () {
    let respon = http.get('https://test-api.k6.io')
    check(respon, {
        'status was 200': (r) => r.status == 200
    })
    sleep(1)
}