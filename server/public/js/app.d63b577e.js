(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0fd10761"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"c4503227"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2375:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("b-spinner",{attrs:{label:"Spinning"}})],1)},a=[],o={name:"Spinner"},i=o,s=n("2877"),c=Object(s["a"])(i,r,a,!1,null,null,null);e["a"]=c.exports},"3b21":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("Alert"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav ",attrs:{id:"nav"}},[n("div",{staticClass:"nav-inner"},[n("router-link",{attrs:{to:"/"}},[n("svg",{staticClass:"bi bi-house-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"}})])]),n("router-link",{attrs:{to:"/visitors"}},[t._v("Visitors")]),n("router-link",{staticClass:"new-visitor visitors",attrs:{to:"/new-visitor"}},[t._v(" + New Visitor")])],1),n("LoginButtons")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-group"},[n("b-button-group",[t.auth.user.isAuthenticated?n("b-button",{attrs:{"data-name":"logout-btn",variant:"outline-default"},on:{click:function(e){t.showModal=!0}}},[n("b-icon",{attrs:{icon:"door-open-fill"}}),t._v(" Logout ")],1):n("b-button",{attrs:{"data-name":"login-btn",variant:"outline-default"}},[n("router-link",{attrs:{to:"/login"}},[n("b-icon",{attrs:{icon:"person-fill"}}),t._v(" Login ")],1)],1)],1),n("transition",{attrs:{name:"fade-modal",appear:""}},[t.showModal?n("div",{staticClass:"modal-overlay"},[n("transition",{attrs:{name:"slide",appear:""}},[n("div",{staticClass:"modal-box"},[n("h3",[t._v("Are you sure you want to logout?")]),n("div",{staticClass:"buttons"},[n("b-button",{attrs:{"data-name":"logout-cancel-btn",variant:"secondary"},on:{click:function(e){t.showModal=!1}}},[t._v(" Cancel ")]),n("b-button",{attrs:{"data-name":"logout-fn-btn",variant:"danger"},on:{click:function(e){return t.logoutFn()}}},[t._v(" Logout ")])],1)])])],1):t._e()])],1)},u=[],l=(n("96cf"),n("1da1")),d=n("5530"),f=n("2f62"),p={name:"LoginButtons",data:function(){return{showModal:!1}},computed:Object(d["a"])({},Object(f["d"])(["auth"])),methods:Object(d["a"])(Object(d["a"])({},Object(f["b"])(["logout","alert"])),{},{logoutFn:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{t.$gAuth.signOut().then((function(){t.$store.dispatch("logout"),t.showModal=!1}))}catch(r){n={alert:r.message,alertType:"danger"},t.alert(n)}case 1:case"end":return e.stop()}}),e)})))()}})},h=p,v=(n("a08e"),n("2877")),m=Object(v["a"])(h,c,u,!1,null,"e955932a",null),g=m.exports,b={name:"Nav",components:{LoginButtons:g}},_=b,w=Object(v["a"])(_,i,s,!1,null,null,null),y=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"alert-block"},t._l(t.alerts,(function(e){return n("b-alert",{key:e.id,class:t.alerts.length?"fadeIn fadeOut":"",attrs:{show:"","data-name":"alert-box",variant:e.alertType}},[t._v(" "+t._s(e.alert)+" ")])})),1)])},R=[],S={name:"Alert",computed:Object(d["a"])({},Object(f["d"])(["alerts"]))},E=S,T=Object(v["a"])(E,O,R,!1,null,null,null),A=T.exports,j=n("bc3a"),k=n.n(j),V="token";function x(t){k.a.defaults.headers.common["Authorization"]="Bearer ".concat(t),localStorage.setItem(V,t)}function C(){return localStorage.getItem(V)}function I(){k.a.defaults.headers.common["Authorization"]="",localStorage.removeItem(V)}function L(){var t=C();return!!t}var P={name:"Home",components:{Nav:y,Alert:A},created:function(){localStorage.token&&C(localStorage.token),this.$store.dispatch("loadUser")}},U=P,$=(n("5c0b"),Object(v["a"])(U,a,o,!1,null,null,null)),D=$.exports,N=(n("b0c0"),n("d3b7"),n("8c4f")),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._m(0),t.visitors.isLoading?n("div",[n("Spinner")],1):n("div",[n("CurrentVisitors",{attrs:{visitors:t.activeVisitors,changeStatus:t.changeStatus}})],1)])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex justify-content-center align-items-center"},[n("h1",[t._v("Online Visitors")])])}],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{directives:[{name:"show",rawName:"v-show",value:t.visitors.length>0,expression:"visitors.length > 0"}],staticClass:"visitor-table"},[t._m(0),t._m(1),n("tbody",t._l(t.visitors,(function(e){return n("tr",{key:e.id},[n("td",{staticClass:"status"},[n("span",{class:[e.is_logged?"logged-in":"logged-out"]})]),n("td",[t._v(t._s(e.first_name+e.last_name))]),n("td",[t._v(t._s(e.email))]),n("td",[n("button",{staticClass:"btn status-btn",on:{click:function(n){return t.changeStatus(e.id)}}},[t._v(" "+t._s(e.is_logged?"End":"Start")+" ")])])])})),0)]),t.visitors.length?t._e():n("p",{attrs:{"data-name":"p-no-visitors"}},[t._v(" There are no visitors at the office right now. ")])])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th"),n("th",[t._v("Visitor")]),n("th",[t._v("Email")]),n("th")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tfoot",[n("tr",[n("th"),n("th",[t._v("Visitor")]),n("th",[t._v("Email")]),n("th")])])}],z={name:"CurrentVisitors",props:{visitors:Array,changeStatus:Function}},F=z,q=Object(v["a"])(F,B,G,!1,null,null,null),J=q.exports,K=n("2375"),Y={name:"Home",data:function(){return{currentlyActive:null}},components:{CurrentVisitors:J,Spinner:K["a"]},computed:Object(d["a"])(Object(d["a"])(Object(d["a"])({},Object(f["d"])(["visitors"])),Object(f["c"])(["getActiveVisitors"])),{},{activeVisitors:{get:function(){return this.getActiveVisitors}}}),methods:{changeStatus:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{this.$store.dispatch("updateVisitor",e)}catch(n){console.log(n)}case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.$store.dispatch("getAllVisitors")}},Q=Y,W=Object(v["a"])(Q,M,H,!1,null,null,null),X=W.exports;r["default"].use(N["a"]);var Z=[{path:"/",name:"Home",component:X},{path:"/visitors",name:"Visitors",component:function(){return n.e("about").then(n.bind(null,"d5c2"))}},{path:"/new-visitor",name:"NewVisitor",meta:{allowAnonymous:!0},component:function(){return n.e("about").then(n.bind(null,"520f"))}},{path:"/visitor/:id",name:"Visitor",component:function(){return n.e("about").then(n.bind(null,"a8fa"))}},{path:"/login",name:"Login",meta:{allowAnonymous:!0},component:function(){return n.e("about").then(n.bind(null,"a55b"))}}],tt=new N["a"]({mode:"history",base:"/",routes:Z});tt.beforeEach((function(t,e,n){"login"==t.name&&L()?n({path:"/"}):t.meta.allowAnonymous||L()?n():n({path:"/login",query:{redirect:t.fullPath}})}));var et=tt,nt={auth:{user:{token:localStorage.getItem("authToken"),id:null,email:"",full_name:"",isAuthenticated:!1},isLoading:!0},visitor:null,people:[],visitors:{isLoading:!0,data:[],errors:{}},visits:[],alerts:[]},rt=(n("99af"),n("caad"),n("2532"),n("11c1")),at=n.n(rt),ot="https://wirelab-vrs.herokuapp.com",it={loadUser:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,!localStorage.token){t.next=5;break}x(localStorage.token),t.next=6;break;case 5:return t.abrupt("return");case 6:return t.prev=6,t.next=9,k.a.get("".concat(ot,"/user"));case 9:r=t.sent,n("LOAD_USER",r.data),et.push("/").catch((function(t){"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||console.log(t)})),t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](6),n("AUTH_ERROR"),I();case 18:case"end":return t.stop()}}),t,null,[[6,14]])})));function e(e){return t.apply(this,arguments)}return e}(),login:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,o,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,a=e.dispatch,t.prev=1,o={data:n.wc},t.next=5,k.a.post("".concat(ot,"/auth"),o);case 5:i=t.sent,r("AUTH_SUCCESS"),x(i.data),a("loadUser"),s={alert:"You have successfully logged in",alertType:"primary"},a("alert",s),t.next=19;break;case 13:t.prev=13,t.t0=t["catch"](1),r("AUTH_ERROR"),I(),c={alert:t.t0.message,alertType:"danger"},a("alert",c);case 19:case"end":return t.stop()}}),t,null,[[1,13]])})));function e(e,n){return t.apply(this,arguments)}return e}(),logout:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,r=e.dispatch;try{n("LOGOUT"),I(),et.push("/login")}catch(o){a={alert:o.message,alertType:"danger"},r("alert",a)}case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getPeople:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,r=e.dispatch,k.a.get("https://my-json-server.typicode.com/elicarcar/mockAPI/people").then((function(t){n("GET_PEOPLE",t.data)})).catch((function(t){var e={alert:t.message,alertType:"danger"};r("alert",e)}));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),addVisitor:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,a=e.dispatch,t.prev=1,t.next=4,k.a.post("".concat(ot,"/visitor"),n);case 4:o=t.sent,r("ADD_VISITORS",o.data),o.data.length||a("getAllVisitors"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),i={alert:"An error occurred while fetching visitors.",alertType:"danger"},a("alert",i);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,n){return t.apply(this,arguments)}return e}(),getAllVisitors:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,k.a.get("".concat(ot,"/visitors")).then((function(t){n("GET_VISITORS",t.data)})).catch((function(t){n("ERROR_VISITORS",t.message)})).catch((function(t){n("ERROR_VISITORS",t.message),console.log(t)}));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateVisitor:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.commit,a=e.dispatch,k.a.post("".concat(ot,"/visitor/visits/").concat(n)).then((function(t){r("UPDATE_CURRENT_VISITORS",t.data),a("getAllVisitors")})).catch((function(t){var e={alert:t.message,alertType:"danger"};a("alert",e)}));case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),getVisits:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.prev=1,t.next=4,k.a.get("".concat(ot,"/visits"));case 4:a=t.sent,n("GET_VISITS",a.data),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),o={alert:"An error occurred while fetching visitors.",alertType:"danger"},r("alert",o);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));function e(e){return t.apply(this,arguments)}return e}(),alert:function(t,e){var n=t.commit,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,a=at.a.v4(),o=e.alert,i=e.alertType,s={id:a,alert:o,alertType:i};n("ADD_ALERT",s),setTimeout((function(){return n("REMOVE_ALERT",s.id)}),r)}},st=(n("4de4"),n("2909")),ct={AUTH_SUCCESS:function(t){t.auth.user.isAuthenticated=!0,t.auth.user.token=localStorage.getItem("token")},LOAD_USER:function(t,e){var n=e.id,r=e.email,a=e.full_name;t.auth.user.id=n,t.auth.user.email=r,t.auth.user.full_name=a,t.auth.user.isAuthenticated=!0},LOGOUT:function(t){t.auth.user={id:null,email:"",full_name:"",isAuthenticated:!1}},AUTH_ERROR:function(t){t.auth.user={id:null,email:"",full_name:"",isAuthenticated:!1}},GET_PEOPLE:function(t,e){t.people=e},ADD_VISITORS:function(t,e){t.visitors.data=[].concat(Object(st["a"])(t.visitors.data),[e]),t.visitors.isLoading=!1},GET_VISITORS:function(t,e){t.visitors.data=e,t.visitors.isLoading=!1},ERROR_VISITORS:function(t,e){t.visitors.errors=e},UPDATE_CURRENT_VISITORS:function(t){t.visitors=t.visitors},GET_VISITS:function(t,e){t.visits=e},ADD_ALERT:function(t,e){t.alerts=[e].concat(Object(st["a"])(t.alerts))},REMOVE_ALERT:function(t,e){t.alerts=t.alerts.filter((function(t){return t.id!==e}))}},ut={getActiveVisitors:function(t){return t.visitors.data.filter((function(t){return t.is_logged}))},visitorsVisits:function(t){return function(e){return t.visits.filter((function(t){return t.v_id==e.id}))}}};r["default"].use(f["a"]);var lt=new f["a"].Store({state:nt,mutations:ct,actions:it,getters:ut}),dt=n("9612"),ft=n("5f5b"),pt=n("b1e0"),ht=(n("f9e3"),n("2dd8"),n("a41b"),n("c9bf")),vt={clientId:"1007298745712-cjugfj7206jajdmj811ods8rrosf5ff5.apps.googleusercontent.com",scope:"profile email"};r["default"].use(ht["a"],vt),r["default"].use(ft["a"]),r["default"].use(pt["a"]),r["default"].use(dt["a"]),r["default"].config.productionTip=!1,new r["default"]({router:et,store:lt,render:function(t){return t(D)}}).$mount("#app"),window.Cypress&&(window.__store__=lt)},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){},a08e:function(t,e,n){"use strict";var r=n("3b21"),a=n.n(r);a.a},a41b:function(t,e,n){}});
//# sourceMappingURL=app.d63b577e.js.map