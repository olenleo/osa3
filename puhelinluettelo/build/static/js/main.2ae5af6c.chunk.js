(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(16),a=t.n(c),i=t(17),s=t(3),u=t(0),l=function(e){var n=e.person,t=e.deletePerson;return Object(u.jsxs)("p",{children:[n.name," - ",n.number," ",Object(u.jsx)("button",{onClick:t,children:"Poista"})]})},d=function(e){var n=e.persons,t=e.deletePerson,r=n.filter((function(e){return e.show}));return Object(u.jsx)("div",{children:r.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(l,{person:e,deletePerson:function(){return t(e.id)}})},e.name)}))})},j=function(e){var n=e.filterText,t=e.handleFilterChange;return Object(u.jsxs)("p",{children:["Filter names with ",Object(u.jsx)("input",{value:n,onChange:t})]})},f=function(e){var n=e.addNewPerson,t=e.newName,r=e.handleNameChange,o=e.newNumber,c=e.handleNumberChange;return Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["name: ",Object(u.jsx)("input",{name:t,onChange:r})]})}),Object(u.jsx)("div",{children:Object(u.jsxs)("p",{children:["number: ",Object(u.jsx)("input",{number:o,onChange:c})]})}),Object(u.jsx)("button",{type:"submit",children:"add"})]})},b=t(5),h=t.n(b),m="/api/persons",p={getAll:function(){return h.a.get(m).then((function(e){return e.data}))},create:function(e){return h.a.post(m,e)},update:function(e,n){return console.log("service here \n you called \n update Person method for id ",n),h.a.put("".concat(m,"/").concat(e),n)},deletePerson:function(e){return console.log("service here \n you called \n deletePerson method for id ",e),h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))}},O=function(e){var n=e.message,t=e.notificationType;return null===n?null:Object(u.jsx)("div",{className:t,children:Object(u.jsx)("p",{children:n})})},g=(t(41),function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)(""),a=Object(s.a)(c,2),l=a[0],b=a[1],h=Object(r.useState)(""),m=Object(s.a)(h,2),g=m[0],v=m[1],x=Object(r.useState)(""),w=Object(s.a)(x,2),C=w[0],P=w[1],N=Object(r.useState)(""),y=Object(s.a)(N,2),S=y[0],k=y[1],L=Object(r.useState)(""),T=Object(s.a)(L,2),D=T[0],E=T[1];Object(r.useEffect)((function(){p.getAll().then((function(e){o(e)}))}),[]);var I=function(){console.log("Klick"),setTimeout((function(){k(null),E(null)}),5e3)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(f,{addNewPerson:function(e){if(e.preventDefault(),t.find((function(e){return e.name===l}))){var n=t.find((function(e){return e.name===l})).id;console.log("AddNewPerson persID.id",n),function(e){if(window.confirm("".concat(l," is already added to phonebook. Update phone number?"))){var n={id:e,name:l,number:g};p.update(e,n).then((function(n){o(t.map((function(t){return t.id!==e?t:n.data}))),k("".concat(l," updated!")),E("success")})).catch((function(e){k("".concat(l," already removed from server!")),E("error")})),I()}}(n),e.target.reset()}else{var r={id:Math.floor(1e5*Math.random()),name:l,number:g};p.create(r).then((function(e){console.log("Logging pers object",r),console.log("Logging db",t.find((function(e){return e.name===l}))),k("".concat(l," added!")),E("success"),o([].concat(Object(i.a)(t),[r]))})).catch((function(e){console.log("THIS IS THE ERROR:"),console.log(e.response.data),console.log(e.response.data.error),console.log(typeof e.response.data),k(e.response.data),E("error")})),e.target.reset(),I()}},handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){v(e.target.value)},newNumber:g,newName:l}),Object(u.jsx)(O,{message:S,notificationType:D}),Object(u.jsx)(j,{input:C,handleFilterChange:function(e){e.preventDefault(),P(e.target.value),t.filter((function(n){return!n.name.toLowerCase().includes(e.target.value.toLowerCase())})).map((function(e){return e.show=!1})),t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})).map((function(e){return e.show=!0}))}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)("ul",{children:Object(u.jsx)(d,{persons:t,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));console.log("Person to delete",n,"id",n.id),window.confirm("Delete contacts for ".concat(n.name,"?"))&&(p.deletePerson(e).then((function(r){o(t.filter((function(n){return e!==n.id}))),k("".concat(n.name," deleted!")),E("success"),I()})).catch((function(e){k("".concat(n.name," already removed from server!")),E("error")})),I())}})})]})]})});a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.2ae5af6c.chunk.js.map