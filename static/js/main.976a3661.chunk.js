(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{30:function(n,t,e){},76:function(n,t,e){"use strict";e.r(t);var i,o,a,r,c,p,s,d,u,b,l,x,g,h=e(0),f=e.n(h),j=e(8),m=e.n(j),O=(e(30),e(13)),v=e(6),w=e(10),y=e(2),k=e(3),z=k.a.header(i||(i=Object(y.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),S=k.a.button(o||(o=Object(y.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n']))),C=k.a.span(a||(a=Object(y.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),E=k.a.input(r||(r=Object(y.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),B=k.a.form(c||(c=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),F=e(1),L=function(n){var t=n.onSubmit;return Object(F.jsx)(z,{children:Object(F.jsxs)(B,{onSubmit:function(n){n.preventDefault();var e=n.target.searchForm.value;""!==e?t(e):w.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e")},children:[Object(F.jsx)(S,{type:"submit",children:Object(F.jsx)(C,{})}),Object(F.jsx)(E,{name:"searchForm",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},I=k.a.li(p||(p=Object(y.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),P=k.a.img(s||(s=Object(y.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),A=function(n){var t=n.images,e=n.getBigImage;return t.map((function(n){var t=n.webformatURL,i=n.tags,o=n.largeImageURL;return Object(F.jsx)(I,{children:Object(F.jsx)(P,{src:t,alt:i,onClick:function(){return e(o)}})},o)}))},J=k.a.ul(d||(d=Object(y.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),N=function(n){var t=n.images,e=n.largePicture;return Object(F.jsx)(J,{children:Object(F.jsx)(A,{images:t,getBigImage:e})})},R=k.a.button(u||(u=Object(y.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),T=function(n){var t=n.onAction;return Object(F.jsx)(R,{type:"button",onClick:function(){return t()},children:"Load more"})},U=k.a.div(b||(b=Object(y.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),_=k.a.div(l||(l=Object(y.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),q=function(n){var t=n.picture,e=n.onClick,i=function(n){n.target!==n.currentTarget&&"Escape"!==n.code||e()};return Object(h.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}})),Object(F.jsx)(U,{onClick:i,children:Object(F.jsx)(_,{children:Object(F.jsx)("img",{src:t,alt:"Big"})})})},D=e(23),H=e.n(D),M=k.a.div(x||(x=Object(y.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),G=k.a.div(g||(g=Object(y.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),K=e(24),Q=e.n(K),V=function(){return Object(F.jsx)(G,{children:Object(F.jsx)(Q.a,{type:"Circles",color:"#00BFFF",height:50,width:50})})};e(74),e(75);var W=function(){var n=Object(h.useState)(null),t=Object(v.a)(n,2),e=t[0],i=t[1],o=Object(h.useState)([]),a=Object(v.a)(o,2),r=a[0],c=a[1],p=Object(h.useState)(null),s=Object(v.a)(p,2),d=s[0],u=s[1],b=Object(h.useState)("idle"),l=Object(v.a)(b,2),x=l[0],g=l[1],f=Object(h.useState)(1),j=Object(v.a)(f,2),m=j[0],y=j[1],k=Object(h.useState)(!1),z=Object(v.a)(k,2),S=z[0],C=z[1],E=function(){return C(!S)};Object(h.useEffect)((function(){null===e&&1===m||(g("pending"),function(n){var t=n.pictureName,e=n.page;return H.a.get("".concat("https://pixabay.com/api","/?key=").concat("22628996-cf4023f9c883b96dd8e407c0b","&q=").concat(t,"&page=").concat(e,"&").concat("image_type=photo&orientation=horizontal&per_page=12")).then((function(n){return n.data.hits}))}({pictureName:e,page:m}).then((function(n){c(1===m?n:function(t){return[].concat(Object(O.a)(t),Object(O.a)(n))}),g("resolved"),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(n){console.log(n.message)})))}),[e,m]);var B=r.length>0,I=S,P="pending"===x;return Object(F.jsxs)(M,{children:[Object(F.jsx)(L,{onSubmit:function(n){i(n),c([]),y(1)}}),P&&Object(F.jsx)(V,{}),Object(F.jsx)(N,{images:r,largePicture:function(n){u(n),E()}}),B&&Object(F.jsx)(T,{onAction:function(){return y((function(n){return n+1}))}}),Object(F.jsx)(w.a,{position:"top-right",autoClose:1200,hideProgressBar:!0}),I&&Object(F.jsx)(q,{picture:d,onClick:E})]})};m.a.render(Object(F.jsx)(f.a.StrictMode,{children:Object(F.jsx)(W,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.976a3661.chunk.js.map