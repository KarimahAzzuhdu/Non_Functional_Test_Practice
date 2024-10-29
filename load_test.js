import { check } from "k6"
import http from "k6/http"

export default function() {
    let response1 = http.get("https://test.k6.io");
    check( response1, {
        'is status 200': (r) => r.status == 200
    })

    let url = "https://reqres.in/api/users"
    let body = JSON.stringify({
        "name": "morpheus",
        "job": "leader"
    })
    let response2 = http.post(url, body)
    check( response2, {
        'is status 201': (r) => r.status == 201
    })
}
