(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),o=t(16),a=t.n(o),i=t(17),u=t(3),s=t(0),d=function(e){var n=e.person,t=e.deletePerson;return Object(s.jsxs)("p",{children:[n.name," - ",n.number," ",Object(s.jsx)("button",{onClick:t,children:"Poista"})]})},l=function(e){var n=e.persons,t=e.deletePerson,r=n.filter((function(e){return e.show}));return Object(s.jsx)("div",{children:r.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(d,{person:e,deletePerson:function(){return t(e.id)}})},e.name)}))})},j=function(e){var n=e.filterText,t=e.handleFilterChange;return Object(s.jsxs)("p",{children:["Filter names with ",Object(s.jsx)("input",{value:n,onChange:t})]})},f=function(e){var n=e.addNewPerson,t=e.newName,r=e.handleNameChange,c=e.newNumber,o=e.handleNumberChange;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:["name: ",Object(s.jsx)("input",{name:t,onChange:r})]})}),Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:["number: ",Object(s.jsx)("input",{number:c,onChange:o})]})}),Object(s.jsx)("button",{type:"submit",children:"add"})]})},b=t(5),h=t.n(b),m="/api/persons",p={getAll:function(){return h.a.get(m).then((function(e){return e.data}))},create:function(e){return h.a.post(m,e)},update:function(e,n){return console.log("service here \n you called \n update Person method for id ",n),h.a.put("".concat(m,"/").concat(e),n)},deletePerson:function(e){return console.log("service here \n you called \n deletePerson method for id ",e),h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))}},O=function(e){var n=e.message,t=e.notificationType;return null===n?null:Object(s.jsx)("div",{className:t,children:Object(s.jsx)("p",{children:n})})},g=(t(41),function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),a=Object(u.a)(o,2),d=a[0],b=a[1],h=Object(r.useState)(""),m=Object(u.a)(h,2),g=m[0],v=m[1],x=Object(r.useState)(""),w=Object(u.a)(x,2),P=w[0],C=w[1],N=Object(r.useState)(""),y=Object(u.a)(N,2),S=y[0],k=y[1],L=Object(r.useState)(""),D=Object(u.a)(L,2),T=D[0],A=D[1];Object(r.useEffect)((function(){p.getAll().then((function(e){c(e.data)}))}),[]);var F=function(){console.log("Klick"),setTimeout((function(){k(null),A(null)}),5e3)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(f,{addNewPerson:function(e){if(e.preventDefault(),t.find((function(e){return e.name===d}))){var n=t.find((function(e){return e.name===d})).id;console.log("AddNewPerson persID.id",n),function(e){if(window.confirm("".concat(d," is already added to phonebook. Update phone number?"))){var n={id:e,name:d,number:g};console.log("updatedPersonObject",n,"id",e),p.update(e,n).then((function(e){c(t.map((function(t){return t.id!==n.id?t:e.data}))),k("".concat(d," updated!")),A("success")})).catch((function(e){k("".concat(d," already removed from server!")),A("error")})),F()}}(n),e.target.reset()}else{var r={name:d,number:g};p.create(r).then((function(e){console.log("Logging pers object",r),console.log("Logging db",t.find((function(e){return e.name===d}))),k("".concat(d," added!")),A("success"),c([].concat(Object(i.a)(t),[r]))})).catch((function(e){k("Name or number missing!"),A("error")})),e.target.reset(),F()}},handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){v(e.target.value)},newNumber:g,newName:d}),Object(s.jsx)(O,{message:S,notificationType:T}),Object(s.jsx)(j,{input:P,handleFilterChange:function(e){e.preventDefault(),C(e.target.value),t.filter((function(n){return!n.name.toLowerCase().includes(e.target.value.toLowerCase())})).map((function(e){return e.show=!1})),t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})).map((function(e){return e.show=!0}))}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)("ul",{children:Object(s.jsx)(l,{persons:t,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));console.log("Person to delete",n,"id",n.id),window.confirm("Delete contacts for ".concat(n.name,"?"))&&(p.deletePerson(e).then((function(r){c(t.filter((function(n){return e!==n.id}))),k("".concat(n.name," deleted!")),A("success"),F()})).catch((function(e){k("".concat(n.name," already removed from server!")),A("error")})),F())}})})]})]})});a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a942e64d.chunk.js.map