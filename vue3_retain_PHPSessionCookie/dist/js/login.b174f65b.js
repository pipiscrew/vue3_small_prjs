(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"578a":function(e,s,a){"use strict";a.r(s);var r=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"vue-template"},[a("div",{staticClass:"container"},[e.message.length>0?a("div",{staticClass:"alert",class:[e.messagehaserror?"alert-danger":"alert-success"],attrs:{role:"alert"}},[e._v(" "+e._s(e.message)+" ")]):e._e(),a("h3",[e._v("Login")]),a("div",{staticClass:"col-md-2 offset-md-5"},[a("div",{staticClass:"form-group"},[a("label",[e._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control form-control-lg",class:[e.usernameinvalid?"is-invalid":""],attrs:{type:"email"},domProps:{value:e.username},on:{keyup:function(s){return s.type.indexOf("key")||13===s.keyCode?e.login():null},input:function(s){s.target.composing||(e.username=s.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control form-control-lg",class:[e.passwordinvalid?"is-invalid":""],attrs:{type:"password"},domProps:{value:e.password},on:{keyup:function(s){return s.type.indexOf("key")||13===s.keyCode?e.login():null},input:function(s){s.target.composing||(e.password=s.target.value)}}})]),a("br"),a("button",{staticClass:"btn btn-lg btn-outline-primary",on:{click:e.login}},[e._v("Sign In")])])])])},n=[],t=a("1da1"),o=(a("96cf"),a("6594")),i=a("41cb"),l={data:function(){return{username:"",password:"",message:"",messagehaserror:!1,passwordinvalid:!1,usernameinvalid:!1}},methods:{login:function(){var e=this;return Object(t["a"])(regeneratorRuntime.mark((function s(){var a,r,n,t,l;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(e.usernameinvalid=0==e.username.length,e.passwordinvalid=0==e.password.length,0!=e.username.length&&0!=e.password.length){s.next=4;break}return s.abrupt("return");case 4:return a=new FormData,a.append("username",e.username),a.append("password",e.password),r="api/auth.php",s.next=10,o["a"].GetLogin(r,a);case 10:n=s.sent,t=n.response,l=n.error,t?t.success?(e.message=t.message,e.messagehaserror=!1,i["a"].push({name:"user"})):(e.message=t.message,e.messagehaserror=!0):(e.message="error : "+(null==l?"unknown":l),e.messagehaserror=!0),setTimeout((function(){return e.message=""}),2e3);case 15:case"end":return s.stop()}}),s)})))()}}},u=l,m=a("2877"),c=Object(m["a"])(u,r,n,!1,null,null,null);s["default"]=c.exports}}]);