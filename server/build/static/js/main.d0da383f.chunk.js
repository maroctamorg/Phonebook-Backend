(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(14),r=t.n(c),a=t(3),o=t(2),u=t(4),i=t.n(u),s="/api/persons",l=function(){return i.a.get(s).then((function(e){return e.data}))},d=function(e){return i.a.post(s,e).then((function(e){return e.data}))},b=function(e,n){return i.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(s,"/").concat(e))},m=t(0),f=function(e){var n=e.message,t=e.type;return console.log("Call to Notification"),null===n||null===t?(console.log("Returning null, params: ",n,t),null):Object(m.jsx)("div",{className:t,children:n})},j=function(e){return Object(m.jsxs)("div",{children:["filter shown with ",Object(m.jsx)("input",{value:e.search,onChange:e.handler})]})},p=function(e){return Object(m.jsxs)("form",{onSubmit:e.addPerson,children:[Object(m.jsxs)("div",{children:["name: ",Object(m.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(m.jsxs)("div",{children:["number: ",Object(m.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var n=e.person,t=e.deleteEntry;return Object(m.jsxs)(m.Fragment,{children:["".concat(n.name," ").concat(n.number)," ",Object(m.jsx)("button",{onClick:function(){return t(n.id)},children:"delete"})," ",Object(m.jsx)("br",{})]})},y=function(e){return Object(m.jsx)("div",{children:e.persons.map((function(n){return Object(m.jsx)(O,{person:n,deleteEntry:e.deleteEntry},n.id)}))})},g=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),u=Object(a.a)(r,2),i=u[0],s=u[1],O=Object(o.useState)(""),g=Object(a.a)(O,2),x=g[0],v=g[1],w=Object(o.useState)(""),C=Object(a.a)(w,2),N=C[0],k=C[1],S="error",E="success",P=Object(o.useState)({message:null,type:S}),T=Object(a.a)(P,2),U=T[0],D=T[1],J=function(e,n){D({message:e,type:n}),setTimeout((function(){D({message:null,type:null})}),5e3)};Object(o.useEffect)((function(){l().then((function(e){return c(e)})).catch((function(e){J("Unable to fetch phonebook from the server. Please refresh the page and try again!",S)}))}),[]);return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{message:U.message,type:U.type}),Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(j,{search:N,handler:function(e){k(e.target.value)}}),Object(m.jsx)("h3",{children:"add a new entry"}),Object(m.jsx)(p,{addPerson:function(e){e.preventDefault();var n={name:i,number:x};t.map((function(e){return e.name})).includes(n.name)?t.map((function(e){return e.number})).includes(n.number)?J("The entry ".concat(i," ").concat(x," is already added to the phonebook"),S):window.confirm("Update phone number for entry '".concat(n.name," to ").concat(n.number,"'?"))&&b(t.find((function(e){return e.name===n.name})).id,n).then((function(e){c(t.map((function(t){return t.name===n.name?e:t}))),s(""),v(""),J("Successfully updated phone number for entry '".concat(n.name,"' to '").concat(n.number,"'!"),E)})).catch((function(e){J("Error updating the number for the entry '".concat(n.name,"' to the phonebook.\n                                The entry was probably deleted from the server. Please refresh the page and try again!"),S)})):d(n).then((function(e){c(t.concat(e)),s(""),v(""),J("Successfully created entry '".concat(n.name," ").concat(n.number,"'!"),E)})).catch((function(e){J("Error submitting the new entry: ".concat(n.name," ").concat(n.number," to the phonebook. Please try again!"),S)}))},newName:i,newNumber:x,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){v(e.target.value)}}),Object(m.jsx)("h3",{children:"Numbers"}),Object(m.jsx)(y,{persons:function(e){return""===e?t:t.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}(N),deleteEntry:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete entry ".concat(n.name," ").concat(n.number,"?"))?h(e).then((function(e){console.log(e),c(t.filter((function(e){return e.id!==n.id}))),J("Successfully deleted entry ".concat(n.name," ").concat(n.number),E)})).catch((function(e){J("Unable to delete entry ".concat(n.name," ").concat(n.number," from the server. Please try again!"),S)})):J("the deletion of entry ".concat(n.name," ").concat(n.number," was cancelled"),E)}})]})};t(38);r.a.render(Object(m.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d0da383f.chunk.js.map