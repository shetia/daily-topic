/* 
浏览器为什么要阻止跨域请求
如何解决跨域
每次跨域请求都需要到达服务端吗?

*/


/* 
一. 什么是跨域
跨域是针对浏览器的'同源策略'提出的说法, 之所以有'同源策略'这种模式是基于网络安全方面的考虑, 所谓的同源策略关注三点:
1. 协议 (http://www.baidu.com & https://www.baidu.com 协议不同, 跨域)
2. 域名 (https://www.aliyun.com & https://developer.aliyun.com 域名不同,跨域)
3. 端口 (http://localhost:8080 & http://localhost: 8000 端口不同, 跨域)
*/

/* 
二. 那些网络资源涉及到跨域
'同源策略' 对于跨域网络资源的设定非常的清晰
这些场景涉及到跨域禁止操作:
1. 无法获取非同源网页的cookie localstorage 和 indexedDB
2. 无法访问非同源网页的DOM (iframe)
3. 无法向非同源地址发送AJAX请求或fetch请求(可以发送, 但浏览器拒绝接受响应)
为什么要阻止跨域?
基于安全策略: 比如一个恶意网站的页面通过iframe嵌入了银行的登录页面, 如果没有同源限制, 恶意网页上的js脚本
就可以在用户登录银行的时候获取用户名和密码
*/

/* 
三. 针对跨域问题主流解决方案:
1. 通过jsonp跨域
2. document.domain + iframe 跨域
3. location.hash + iframe
4. window.name + iframe
5. postMessage 
6. 跨域资源共享(CORS)
7. nginx代理
8.nodejs中间件代理跨域
9.webSocket协议跨域
*/

/* 
四. 关于跨域需要明确的问题
跨域并非浏览器限制了发起跨域请求, 而是跨站请求可以正常发起, 但是返回结果被浏览器拦截了

每次需求都会发出, 服务器端也会做出响应, 只是浏览器端在接受响应的时候基于同源策略进行拦截

注意: 有些浏览器不允许从HTTPS的跨域访问HTTP, 比如Chrome和Firefox, 这些浏览器在请求还未发出的时候就会拦截请求, 这是个特例
*/