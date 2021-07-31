(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(46),s=n.n(c),i=n(47),u="csrf-token",o="CSRF-Token";function d(e){var t;return null===(t=document.cookie.split("; ").find((function(t){return(null===t||void 0===t?void 0:t.split("=")[0])===e})))||void 0===t?void 0:t.split("=")[1]}var j=n.n(i).a.create({headers:[{name:o,value:d(u)}].reduce((function(e,t){return t.value&&(e[t.name]=t.value),e}),{})}),b=j,l=n(28),h=n(82),O=n(7),p=n(1);var v=function(e){var t=e.a,n=e.onSubmit,a={a:t?t.a:""};return Object(p.jsx)(O.c,{initialValues:a,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"a",placeholder:"A"}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})},f=n(6);var x=function(){var e=Object(l.b)(),t=Object(f.f)(),n=Object(h.a)((function(e){return b.post("/api/v1/as",e)}),{onSuccess:function(){e.invalidateQueries("as")}});return Object(p.jsx)(v,{onSubmit:function(e,a){var r=a.setSubmitting;n.mutate(e),null===r||void 0===r||r(!1),t.push("/as")}})},m=n(81);function g(e){var t=e.a,n=e.handleEdit,a=e.handleDelete,r=e.handleDetail;return Object(p.jsxs)(p.Fragment,{children:[t.a,Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"detail"}),Object(p.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(p.jsx)("button",{type:"button",onClick:function(){return a(t)},children:"delete"})]})}var S=function(){var e,t,n=Object(f.f)(),a=Object(l.b)(),r=Object(m.a)("as",(function(){return b.get("/api/v1/as").then((function(e){return e.data}))})),c=Object(h.a)((function(e){var t=e.id;return b.delete("/api/v1/as/".concat(t))}),{onSuccess:function(){a.invalidateQueries("as")}}),s=function(e){var t=e.id;n.push("/as/update/".concat(t))},i=function(e){var t=e.id;c.mutate({id:t})},u=function(e){var t=e.id;n.push("/as/detail/".concat(t))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:[null===(e=r.data)||void 0===e?void 0:e.length," as"]}),Object(p.jsx)("ul",{children:null===(t=r.data)||void 0===t?void 0:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(g,{a:e,handleDelete:i,handleEdit:s,handleDetail:u})},e.id)}))})]})};var w=function(){var e=Object(f.g)().id,t=Object(m.a)(["as",e],(function(){return b.get("/api/v1/as/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(p.jsx)("div",{children:"Loading..."});var a=n;return Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:a.a}),Object(p.jsx)("br",{})]})};var y=function(){var e=Object(f.g)().id,t=Object(l.b)(),n=Object(f.f)(),a=Object(m.a)(["as",e],(function(){return b.get("/api/v1/as/".concat(e)).then((function(e){return e.data}))})),r=a.data,c=a.isLoading,s=Object(h.a)((function(t){return b.put("/api/v1/as/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("as")}});if(c)return Object(p.jsx)("div",{children:"Loading..."});var i=r;return Object(p.jsx)(v,{a:i,onSubmit:function(e,t){var a=t.setSubmitting;s.mutate(e),null===a||void 0===a||a(!1),n.push("/as")}})};var k=function(e){var t=e.user,n=e.onSubmit,a={username:t?t.username:"",passwordHash:t?t.passwordHash:""};return Object(p.jsx)(O.c,{initialValues:a,validate:function(){return{}},onSubmit:n,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(p.jsx)(O.a,{type:"text",name:"passwordHash",placeholder:"PasswordHash"}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Submit"})]})}})};var C=function(){var e=Object(l.b)(),t=Object(f.f)(),n=Object(h.a)((function(e){return b.post("/api/v1/users",e)}),{onSuccess:function(){e.invalidateQueries("users")}});return Object(p.jsx)(k,{onSubmit:function(e,a){var r=a.setSubmitting;n.mutate(e),null===r||void 0===r||r(!1),t.push("/users")}})};function L(e){var t=e.user,n=e.handleEdit,a=e.handleDelete,r=e.handleDetail;return Object(p.jsxs)(p.Fragment,{children:[t.username,Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"detail"}),Object(p.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"edit"}),Object(p.jsx)("button",{type:"button",onClick:function(){return a(t)},children:"delete"})]})}var D=function(){var e,t,n=Object(f.f)(),a=Object(l.b)(),r=Object(m.a)("users",(function(){return b.get("/api/v1/users").then((function(e){return e.data}))})),c=Object(h.a)((function(e){var t=e.id;return b.delete("/api/v1/users/".concat(t))}),{onSuccess:function(){a.invalidateQueries("users")}}),s=function(e){var t=e.id;n.push("/users/update/".concat(t))},i=function(e){var t=e.id;c.mutate({id:t})},u=function(e){var t=e.id;n.push("/users/detail/".concat(t))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:[null===(e=r.data)||void 0===e?void 0:e.length," users"]}),Object(p.jsx)("ul",{children:null===(t=r.data)||void 0===t?void 0:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(L,{user:e,handleDelete:i,handleEdit:s,handleDetail:u})},e.id)}))})]})};var E=function(){var e=Object(f.g)().id,t=Object(m.a)(["users",e],(function(){return b.get("/api/v1/users/".concat(e)).then((function(e){return e.data}))})),n=t.data;if(t.isLoading)return Object(p.jsx)("div",{children:"Loading..."});var a=n;return Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:a.username}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{children:a.passwordHash}),Object(p.jsx)("br",{})]})};var Q=function(){var e=Object(f.g)().id,t=Object(l.b)(),n=Object(f.f)(),a=Object(m.a)(["users",e],(function(){return b.get("/api/v1/users/".concat(e)).then((function(e){return e.data}))})),r=a.data,c=a.isLoading,s=Object(h.a)((function(t){return b.put("/api/v1/users/".concat(e),t).then((function(e){return e.data}))}),{onSuccess:function(){t.invalidateQueries("users")}});if(c)return Object(p.jsx)("div",{children:"Loading..."});var i=r;return Object(p.jsx)(k,{user:i,onSubmit:function(e,t){var a=t.setSubmitting;s.mutate(e),null===a||void 0===a||a(!1),n.push("/users")}})},F=n(23),H=n.n(F),U=n(30),A=n(31);var R=function(){var e=Object(a.useState)(""),t=Object(A.a)(e,2),n=t[0],r=t[1],c=Object(f.f)(),s=Object(l.b)(),i=function(e,t){var n=t.setSubmitting;if(e.response&&e.response.data){var a=e.response.data.error;a&&r(a)}null===n||void 0===n||n(!1)},u=function(){var e=Object(U.a)(H.a.mark((function e(t,n){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setSubmitting,e.prev=1,e.next=4,b.post("/auth/login",t);case 4:return null===a||void 0===a||a(!1),e.next=7,s.invalidateQueries("user");case 7:c.push("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),i(e.t0,{setSubmitting:a});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsx)(O.c,{initialValues:{username:"",password:""},validate:function(){return{}},onSubmit:u,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(p.jsx)(O.a,{type:"password",name:"password",placeholder:"Password"}),n&&Object(p.jsx)("div",{children:n}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Login"})]})}})};var V=function(){var e=Object(a.useState)(""),t=Object(A.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(U.a)(H.a.mark((function e(t,n){var a,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.setSubmitting,e.prev=1,e.next=4,b.post("/auth/register",t);case 4:null===a||void 0===a||a(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0.response&&e.t0.response.data&&(c=e.t0.response.data.error)&&r(c),null===a||void 0===a||a(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(p.jsx)(O.c,{initialValues:{username:"",email:"",password:"",passwordConfirm:""},validate:function(){return{}},onSubmit:c,children:function(e){var t=e.isSubmitting;return Object(p.jsxs)(O.b,{children:[Object(p.jsx)(O.a,{type:"text",name:"username",placeholder:"Username"}),Object(p.jsx)(O.a,{type:"text",name:"email",placeholder:"Email"}),Object(p.jsx)(O.a,{type:"password",name:"password",placeholder:"Password"}),Object(p.jsx)(O.a,{type:"password",name:"passwordConfirm",placeholder:"Confirm password"}),n&&Object(p.jsx)("div",{children:n}),Object(p.jsx)("button",{type:"submit",disabled:t,children:"Register"})]})}})},N=n(9);var P=function(){return Object(m.a)("user",(function(){return b.get("/auth/me")}),{retry:!1}).data,Object(a.useEffect)((function(){d(u)||j.get("/auth/csrf").then((function(){j.defaults.headers[o]=d(u)})).catch((function(e){console.warn("Received error while fetching CSRF token :",e)}))}),[]),Object(p.jsxs)(N.a,{children:[Object(p.jsx)("nav",{children:Object(p.jsxs)("ul",{className:"flex",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)(N.b,{to:"/",children:"Home"}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("li",{className:"ml-10",children:[Object(p.jsx)(N.b,{to:"/as",children:"As"}),Object(p.jsx)("br",{}),Object(p.jsx)(N.b,{to:"/as/create",children:"Create a A"}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("li",{className:"ml-10",children:[Object(p.jsx)(N.b,{to:"/users",children:"Users"}),Object(p.jsx)("br",{}),Object(p.jsx)(N.b,{to:"/users/create",children:"Create a User"}),Object(p.jsx)("br",{})]})]})}),Object(p.jsxs)("main",{children:[Object(p.jsx)(f.a,{path:"/as",children:Object(p.jsx)("h1",{children:"As"})}),Object(p.jsx)(f.a,{path:"/users",children:Object(p.jsx)("h1",{children:"Users"})}),Object(p.jsxs)(f.c,{children:[Object(p.jsx)(f.a,{path:"/as/create",component:x}),Object(p.jsx)(f.a,{path:"/as/update/:id",component:y}),Object(p.jsx)(f.a,{path:"/as/detail/:id",component:w}),Object(p.jsx)(f.a,{path:"/as",component:S}),",",Object(p.jsx)(f.a,{path:"/users/create",component:C}),Object(p.jsx)(f.a,{path:"/users/update/:id",component:Q}),Object(p.jsx)(f.a,{path:"/users/detail/:id",component:E}),Object(p.jsx)(f.a,{path:"/users",component:D}),Object(p.jsx)(f.a,{path:"/login",component:R}),Object(p.jsx)(f.a,{path:"/register",component:V})]})]})]})},J=new(n(80).a);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(l.a,{client:J,children:Object(p.jsx)(P,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.922936df.chunk.js.map