import Vue from 'vue';
import VueResource from 'vue-resource';

import api from './api.js'

Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

export default function http(req) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            Vue.http.post(api[req.api], req.data).then((res) => {
                if (res.body.success) {
                    resolve(res.body);
                } else {
                    if(req.vm){
                        req.vm.$message({
                            type: 'error',
                            message: res.body.errorMsg,
                            showClose: true,
                            duration: 1500
                        }); 
                    }
                    reject(res.body);
                }
            }, (res) => {
                reject(JSON.parse(res.body));
            })
        }, 400);
    });
}