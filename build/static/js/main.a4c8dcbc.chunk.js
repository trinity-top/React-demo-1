(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{82:function(e,n,l){e.exports=l(83)},83:function(e,n,l){"use strict";l.r(n);var t=l(25),a=l(1),c=l.n(a),o=l(81),r=l.n(o),u=(l(88),l(89),function(e){return c.a.createElement("div",{className:"cell",onClick:e.onClick},e.text)}),i=function(){var e=Object(a.useState)([[null,null,null],[null,null,null],[null,null,null]]),n=Object(t.a)(e,2),l=n[0],o=n[1],r=Object(a.useState)(!1),i=Object(t.a)(r,2),s=i[0],m=i[1],f=Object(a.useState)(0),v=Object(t.a)(f,2),d=v[0],b=v[1],E=function(e,n){b(d+1);var t=JSON.parse(JSON.stringify(l));t[e][n]=d%2==0?"x":"o",o(t),function(e){for(var n=0;n<3;n++)if(e[n][0]===e[n][1]&&e[n][1]===e[n][2]&&null!==e[n][0]){console.log(e[n][0]+"\u8d62\u4e86"),m(!0);break}for(var l=0;l<3;l++)if(e[0][l]===e[1][l]&&e[1][l]===e[2][l]&&null!==e[0][l]){console.log(e[0][l]+"\u8d62\u4e86"),m(!0);break}e[0][0]===e[1][1]&&e[1][1]===e[2][2]&&null!==e[0][0]&&(console.log(e[0][0]+"\u8d62\u4e86"),m(!0)),e[0][2]===e[1][1]&&e[1][1]===e[2][0]&&null!==e[1][1]&&(console.log(e[1][1]+"\u8d62\u4e86"),m(!0))}(t)};return c.a.createElement("div",null,c.a.createElement("div",null,"n:",d),l.map(function(e,n){return c.a.createElement("div",{className:"row"},e.map(function(e,l){return c.a.createElement("div",{className:"col"},c.a.createElement(u,{text:e,onClick:function(){return E(n,l)}}))}))}),s&&c.a.createElement("div",{className:"gameOver"},"\u6e38\u620f\u7ed3\u675f"))};r.a.render(c.a.createElement("div",null,c.a.createElement(i,null)),document.getElementById("root"))},88:function(e,n,l){}},[[82,1,2]]]);
//# sourceMappingURL=main.a4c8dcbc.chunk.js.map