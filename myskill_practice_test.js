import { check, group } from "k6"
import http from "k6/http"

// This will export to HTML as filename "result.html" AND also stdout using the text summary
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export default function() {
    group('Reqres create user', () => {
        let url = "https://reqres.in/api/users"
        let body = JSON.stringify({
            "name": "morpheus",
            "job": "leader"
        })
        let response2 = http.post(url, body)
        check( response2, {
            'is status 201': (r) => r.status == 201
        })

        group('Get user reqres', () => {
            let url2 = "https://reqres.in/api/users/2"
            let response3 = http.get(url2)
            check( response3, {
                'is status 200': (r) => r.status == 200
            })
        })
    })
}

export function handleSummary(data) {
    return {
        "myskill_practice_result.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}