import { check, group } from "k6"
import http from "k6/http"

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
