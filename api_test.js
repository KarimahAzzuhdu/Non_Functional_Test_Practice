import { check, group } from "k6"
import http from "k6/http"

// This will export to HTML as filename "result.html" AND also stdout using the text summary
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export default function() {
    group('API TEST', () => {
        // GET
        group('Get', () => {
            group('User', () => {
                // List User
                let urlMultiUser = "https://reqres.in/api/users?page=2"
                let resMultiUser = http.get(urlMultiUser)
                check(resMultiUser, {
                    'is status 200': (r) => r.status == 200
                })
                // Single User
                let urlUser = "https://reqres.in/api/users/2"
                let resUser = http.get(urlUser)
                check(resUser, {
                    'is status 200': (r) => r.status == 200
                })
                // User Not Found
                urlUser = "https://reqres.in/api/users/23"
                resUser = http.get(urlUser)
                check(resUser, {
                    'is status 404': (r) => r.status == 404
                })
            })
            group('<Resource>', () => {
                // List <Resource>
                let urlMulti2 = "https://reqres.in/api/unknown"
                let resMulti2 = http.get(urlMulti2)
                check(resMulti2, {
                    'is status 200': (r) => r.status == 200
                })
                // Single <Resource>
                let url2 = "https://reqres.in/api/unknown/2"
                let res2 = http.get(url2)
                check(res2, {
                    'is status 200': (r) => r.status == 200
                })
                // <Resource> Not Found
                url2 = "https://reqres.in/api/unknown/23"
                res2 = http.get(url2)
                check(res2, {
                    'is status 404': (r) => r.status == 404
                })
            })
            // Delayed Response
            let url = "https://reqres.in/api/users?delay=3"
            let res = http.get(url)
            check(res, {
                'is status 200': (r) => r.status == 200
            })
        })

        // POST
        group('Post', () => {
            group('Register', () => {
                let urlReg = "https://reqres.in/api/register"
                let successBody = {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }
                let failedBody = {
                    "email": "sydney@fife"
                }
    
                let regSuccess = http.post(urlReg,successBody)
                check( regSuccess, {
                    'is status 200': (r) => r.status == 200
                })
    
                let regFailed = http.post(urlReg,failedBody)
                check( regFailed, {
                    'is status 400': (r) => r.status == 400
                })
            })
    
            group('Login', () => {
                let urlLog = "https://reqres.in/api/login"
                let successBody = {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
                let failedBody = {
                    "email": "peter@klaven"
                }
    
                let logSuccess = http.post(urlLog,successBody)
                check( logSuccess, {
                    'is status 200': (r) => r.status == 200
                })
    
                let logFailed = http.post(urlLog,failedBody)
                check( logFailed, {
                    'is status 400': (r) => r.status == 400
                })
            })

            let url1 = "https://reqres.in/api/users"
            let body1 = {
                "name": "morpheus",
                "job": "leader"
            }
            let res1 = http.post(url1,body1)
            check(res1, {
                'is status 201': (r) => r.status == 201
            })
        })

        // UPDATE
        group('UPDATE', () => {
            let url3 = "https://reqres.in/api/users/2"
            let body3 = {
                "name": "morpheus",
                "job": "zion resident"
            }
            let res3 = http.put(url3,body3)
            check(res3, {
                'is status 200': (r) => r.status == 200
            })
        })

        // PATCH
        group('PATCH', () => {
            let url3 = "https://reqres.in/api/users/2"
            let body3 = {
                "name": "morpheus",
                "job": "zion resident"
            }
            let res3 = http.patch(url3, body3)
            check(res3, {
                'is status 200': (r) => r.status == 200
            })
        })

        // DELETE
        group('DELETE', () => {
            let url4 = "https://reqres.in/api/users/2"
            let res4 = http.del(url4)
            check(res4, {
                'is status 204': (r) => r.status == 204
            })
        })
    })
}

export function handleSummary(data) {
    return {
        "api_test.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}