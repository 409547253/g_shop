/* 
    ajax请求函数模块
    返回值为promise对象
*/
import axios from 'axios';
export default function ajax (url, data={}, type='GET') {  /* 此时当你 */

    return new Promise(function(resolve, reject) {

        //执行异步ajax请求
        if (type === 'GET'){ 
            //准备url query参数数据
            let dataStr = '' // 数据拼接字符串 
            Object.keys(data).forEach(key => { 
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') { 
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            //发送get请求 
            promise = axios.get(url)
         } else {
            //发 送 post请 求
            promise = axios.post(url, data)
         }

         promise.then(function (response) {  /* 成功后返回的参数为response */
            //成功了后调用resolve
            resolve(response.data)
         }).catch(function (error) {  /* 失败后返回的参数为error */
             //失败了后调用reject
             reject(error)
         })

        
    })
        
}
    