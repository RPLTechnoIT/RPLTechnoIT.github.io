(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"15e5":function(t,e,r){t.exports=r.p+"img/tenor.90c70a8d.gif"},"3d7b":function(t,e,r){t.exports=r.p+"img/danger.4823ff58.svg"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-view")],1)},o=[],i={name:"app"},s=i,c=(r("034f"),r("2877")),u=Object(c["a"])(s,a,o,!1,null,null,null),l=u.exports,p=r("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showPic,expression:"showPic"}],on:{click:function(e){return t.animate()}}},[n("b-icon-arrow-left",{staticClass:"back-btn"}),n("span",{staticClass:"heading"},[t._v("CORONA TRACKER")])],1),n("div",{class:{"wrapper-off":t.toggle,"wrapper-on":!t.toggle}},[n("img",{staticClass:"home-img",attrs:{src:r("fbf5")}}),n("b-btn",{staticClass:"home-btn",attrs:{variant:"danger"},on:{click:function(e){return t.animate()}}},[t._v("TRACK CORONA")])],1),t.toggle?n("div",{staticClass:"search-page"},[n("div",[n("img",{staticClass:"search-img",attrs:{src:r("bbc5")}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.zip,expression:"zip"}],staticClass:"search-bar p-2",attrs:{maxlength:"6",placeholder:"ENTER YOUR PIN-CODE",type:"number"},domProps:{value:t.zip},on:{input:function(e){e.target.composing||(t.zip=e.target.value)}}}),n("b-icon-search",{staticClass:"search-lens",on:{click:function(e){return t.getTotalCount()}}})],1),t.loader?n("img",{staticStyle:{width:"6rem",display:"block",margin:"10rem auto"},attrs:{src:r("6e70")}}):t._e(),1==t.inputError?n("b-alert",{staticStyle:{"margin-top":"5rem"},attrs:{show:"",variant:"danger"}},[t._v("Invalid pin code")]):t._e(),1==t.serverError?n("b-alert",{staticStyle:{"margin-top":"5rem"},attrs:{show:"",variant:"primary"}},[t._v("Servers are being updated. Please try again later!")]):t._e(),0==t.inputError&&1==t.gotResult?n("div",[n("div",{staticClass:"total-number mb-3"},[n("img",{staticClass:"virus",attrs:{src:r("3d7b")}}),t._v(" "+t._s(t.totalNumber)+" People ")]),n("div",{staticClass:"people-details"},[t._v(" This tells the number of quarantined in your Area/PinCode. The data shown here is the same given by government of Karnataka Website. ")]),n("img",{staticStyle:{width:"95%","border-radius":"9px","margin-top":"10px"},attrs:{src:r("15e5")}})]):t._e()],1):t._e()])},f=[],g=r("bc3a"),h=r.n(g),m={data:function(){return{zip:"",inputError:!1,serverError:!1,gotResult:!1,loader:!1,toggle:!1,showPic:!0,totalNumber:0}},methods:{animate:function(){this.toggle=!this.toggle,this.showPic=this.toggle},getDetails:function(){var t=this,e=this.zip,r="https://mcbc3n72td.execute-api.ap-south-1.amazonaws.com/dev/items/"+e;h.a.get(r).then((function(e){t.loader=!1,console.log(e.data,"people details")}))},getTotalCount:function(){var t=this;this.loader=!0,this.inputError=!1,this.serverError=!1;var e=this.zip;if(this.gotResult=!1,6==e.length){var r="https://mcbc3n72td.execute-api.ap-south-1.amazonaws.com/dev/items/count/"+e;h.a.get(r).then((function(e){t.loader=!1,t.inputError=!1,t.serverError=!1,t.gotResult=!0,console.log(e.data),t.totalNumber=e.data.result,t.getDetails()})).catch((function(e){console.log(e),t.serverError=!0,t.loader=!1,t.inputError=!1}))}else this.inputError=!0,this.serverError=!1,this.loader=!1}},mounted:function(){}},v=m,b=(r("b540"),Object(c["a"])(v,d,f,!1,null,"56c142bb",null)),w=b.exports;n["default"].use(p["a"]);var y=new p["a"]({mode:"history",routes:[{path:"/",name:"website",component:w}]}),_=r("5f5b"),x=r("b1e0"),C=r("a7fe"),E=r.n(C);r("f9e3"),r("2dd8");n["default"].use(E.a,h.a),n["default"].use(_["a"]),n["default"].use(x["a"]),n["default"].config.productionTip=!1,new n["default"]({router:y,render:function(t){return t(l)}}).$mount("#app")},"6e70":function(t,e,r){t.exports=r.p+"img/loader.c3157ca7.svg"},"85ec":function(t,e,r){},b540:function(t,e,r){"use strict";var n=r("deb2"),a=r.n(n);a.a},bbc5:function(t,e,r){t.exports=r.p+"img/search.da0b883d.png"},deb2:function(t,e,r){},fbf5:function(t,e,r){t.exports=r.p+"img/home.f115d3a0.png"}});
//# sourceMappingURL=app.ce4ad1fb.js.map