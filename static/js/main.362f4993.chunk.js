(this.webpackJsonptask4=this.webpackJsonptask4||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(1),c=n.n(i),b=n(7),a=n.n(b),s=(n(14),n(6)),l=n(8),r=n(2),u=n(18),j=(n(15),function(e){var t=e.title,n=e.settitle,i=e.author,c=e.setauthor,b=e.isbn,a=e.setisbn,s=e.currentbookid,l=e.handleSubmit,r=e.canceledit;return Object(o.jsxs)("form",{onSubmit:l,children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("label",{children:"Author"}),Object(o.jsx)("input",{type:"text",required:!0,value:i,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("label",{children:"isbn"}),Object(o.jsx)("input",{type:"text",required:!0,value:b,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("button",{tabIndex:"0",type:"submit",children:null!==s?"update":"Add"}),null!==s&&Object(o.jsx)("button",{onClick:r,children:"Cancel"})]})}),d=function(e){var t=e.fieldName,n=e.settingfield,i=e.removebook,c=e.editbook;return Object(o.jsxs)("div",{className:"tableField",children:[t,n&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("i",{className:"fas fa-edit",onClick:c}),Object(o.jsx)("i",{className:"fas fa-trash-alt",onClick:i})]})]})},O=function(e){var t=e.books,n=e.removebook,i=e.editbook;return Object(o.jsxs)("div",{className:"table",children:[Object(o.jsxs)("div",{className:"tableHeading",children:[Object(o.jsx)(d,{fieldName:"title"}),Object(o.jsx)(d,{fieldName:"author"}),Object(o.jsx)(d,{fieldName:"isbn"}),Object(o.jsx)(d,{fieldName:"settings"})]}),t.map((function(e){return Object(o.jsxs)("div",{className:"tableRow",children:[Object(o.jsx)(d,{fieldName:e.bookTitle}),Object(o.jsx)(d,{fieldName:e.bookAuthor}),Object(o.jsx)(d,{fieldName:e.bookisbn}),Object(o.jsx)(d,{settingfield:!0,removebook:function(){n(e.bookId)},editbook:function(){i(e)}})]},e.bookId)}))]})},k=function(){var e=Object(i.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],b=Object(i.useState)(""),a=Object(r.a)(b,2),d=a[0],k=a[1],f=Object(i.useState)(""),h=Object(r.a)(f,2),x=h[0],m=h[1],v=Object(i.useState)(""),p=Object(r.a)(v,2),g=p[0],N=p[1],C=Object(i.useState)([{bookTitle:"title",bookAuthor:"john",bookisbn:"13215",bookId:Object(u.a)()}]),I=Object(r.a)(C,2),S=I[0],A=I[1],T=function(){c(""),k(""),m("")};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(j,{title:n,settitle:c,author:d,setauthor:k,isbn:x,setisbn:m,currentbookid:g,handleSubmit:function(e){e.preventDefault(),T(),N(null),""!==n.trim()&&""!==d.trim()&&""!==x.trim()&&A(g?S.map((function(e){return e.bookId===g?Object(s.a)(Object(s.a)({},S),{},{bookTitle:n,bookAuthor:d,bookisbn:x}):e})):[].concat(Object(l.a)(S),[{bookTitle:n,bookAuthor:d,bookisbn:x,bookId:Object(u.a)()}]))},canceledit:function(){T(),N("")}}),Object(o.jsx)(O,{books:S,title:n,author:d,isbn:x,removebook:function(e){A(S.filter((function(t){return t.bookId!==e})))},editbook:function(e){c(e.bookTitle),k(e.bookAuthor),m(e.bookisbn),N(e.bookId)}})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,b=t.getTTFB;n(e),o(e),i(e),c(e),b(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.362f4993.chunk.js.map