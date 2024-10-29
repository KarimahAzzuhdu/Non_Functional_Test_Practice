// source code & step-by-step from https://medium.com/@ravipatel.it/step-by-step-guide-to-load-testing-with-k6-5afb625e231a
// But, I don't have influxDB

import http from 'k6/http'
import { check, sleep, group } from 'k6'
// import { Trend } from 'k6/metrics'

//custom metrics & thresholds
// let myTrend = new Trend('my_trend')

export let option = {
    //scenario : number of users ramps up, hold steady, then ramps down
    stages: [
        {duration: '30s', target: 20 }, //ramp-up 20 Virtual Users
        {duration: '1m', target: 20 }, //stay 20 VUs for 1 minutes
        {duration: '10s', target: 0 } // ramp-down to 0 VUs
    ],
    //add thresholds
    // thresholds: {
    //     'http_req_duration': ['p(95)<500'], //95% of request
    //     'my_trend': ['avg<200'], //Custom threshold for the custom metric
    // }
}

export default function (){
    group('Public endpoints', function () {
        let res = http.get('https://test.k6.io/public/crocodiles/1/')
        check(res, { 'status is 200': (r) => r.status == 200})
        sleep(1)

        res = http.get('https://test.k6.io/public/crocodiles/')
        check(res, { 'status is 200': (r) => r.status == 200})
        sleep(1)
    })
    group('Private endpoints', function () {
        let loginRes = http.post('https://test.k6.io/auth/token/login/', {
            username: 'test',
            password: 'test',
        });

        check(loginRes, { 'login status is 200': (r) => r.status === 200 });

        let authHeaders = {
            headers: {
                Authorization: `Bearer ${loginRes.json('access')}`,
            },
        };

        let res = http.get('https://test.k6.io/my/crocodiles/', authHeaders);
        check(res, { 'status is 200': (r) => r.status === 200 });
        sleep(1);
    })
}