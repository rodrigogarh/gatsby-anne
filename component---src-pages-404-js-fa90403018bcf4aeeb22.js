(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(157),l=n(155);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},147:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),c=n(32),o=n.n(c);n.d(t,"a",function(){return o.a});n(148);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},148:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},149:function(e,t,n){"use strict";var a=n(145),r=n.n(a);n(0);function i(){var e=r()(["\n  max-width: 960px;\n  margin: 0 auto;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  @media (max-width: 960px) {\n    max-width: calc(100% - 80px);\n  }\n"]);return i=function(){return e},e}var l=n(146).b.div(i());t.a=l},150:function(e,t,n){e.exports=n.p+"static/Abril-119378bce321e43cd3de208d24e9fd49.otf"},151:function(e,t,n){e.exports=n.p+"static/Abril-e5026774b53cd27c6f94e7488bd85d6c.ttf"},152:function(e,t,n){e.exports=n.p+"static/Abril-e25609db4e232c38319350cce2bd76e7.woff"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),c=n(55),o=n(2),u=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},155:function(e,t,n){"use strict";var a=n(156),r=n(0),i=n.n(r),l=n(4),c=n.n(l),o=n(159),u=n.n(o);function s(e){var t=e.description,n=e.lang,r=e.meta,l=e.keywords,c=e.title,o=a.data.site,s=t||o.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=s},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},157:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),l=(n(4),n(147)),c=n(145),o=n.n(c),u=n(146),s=n(149);function d(){var e=o()(["\n  transition: 0.5s ease;\n  width: 36px;\n\n  &:hover,\n  &:focus {\n    width: 45px;\n  }\n"]);return d=function(){return e},e}function m(){var e=o()(["\n  background: #210305;\n  height: 76px;\n  display: flex;\n  alignitems: center;\n"]);return m=function(){return e},e}var f=u.b.header(m()),p=u.b.img(d()),h=function(){return r.createElement(f,null,r.createElement(s.a,null,r.createElement(l.a,{title:"Nossa homepage",to:"/"},r.createElement(p,{alt:"Anne Schuartz",src:"https://s3-sa-east-1.amazonaws.com/anneschuartz/site/logo.svg"}))),">")};function b(){var e=o()(["\n  font: 14px Muli, Helvetica, sans-serif;\n  color: #160203;\n  margin-bottom: 8px;\n  a {\n    text-decoration: none;\n    color: #160203;\n  }\n"]);return b=function(){return e},e}function g(){var e=o()(["\n  font: 16px Abril, Muli, Helvetica, sans-serif;\n  color: #160203;\n  margin-bottom: 20px;\n"]);return g=function(){return e},e}function E(){var e=o()(["\n  background: #210305;\n  height: 40px;\n  width: 100%;\n  display: block;\n"]);return E=function(){return e},e}function y(){var e=o()(["\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: 700px) {\n    flex-direction: column;\n  }\n"]);return y=function(){return e},e}function w(){var e=o()(['\n  padding: 70px 0;\n  display: flex;\n  background: url("https://s3-sa-east-1.amazonaws.com/anneschuartz/site/pink_bg.png")\n    repeat center center;\n']);return w=function(){return e},e}var x=u.b.footer(w()),v=u.b.div(y()),k=u.b.div(E()),A=u.b.dt(g()),z=u.b.dd(b()),M=function(){return r.createElement(r.Fragment,null,r.createElement(x,null,r.createElement(v,null,r.createElement("div",null,r.createElement("dl",null,r.createElement(A,null,"Local"),r.createElement(z,null,"Anne Schuartz Sweet Maker"),r.createElement(z,null,r.createElement("a",{title:"Alameda Presidente Taunay 1045",tabIndex:0,target:"_blank",href:"https://goo.gl/maps/MgMZK7K3bGK2"},"Alameda Presidente Taunay 1045,")))),r.createElement("div",null,r.createElement("dl",null,r.createElement(A,null,"Contato"),r.createElement(z,null,r.createElement("a",{title:"email",tabIndex:0,href:"mailto:anne@anneschuartz.com.br"},"anne@anneschuartz.com.br")),r.createElement(z,null,r.createElement("a",{title:"Envie-nos uma mensagem via whatsapp",tabIndex:0,href:"https://api.whatsapp.com/send?phone=5541995958787"},"(41) 9 9595-8787")),r.createElement(z,null,r.createElement("a",{title:"Ligue para a Anne",href:"tel:4137798785"},"(41) 3779-8785")),r.createElement(z,null,r.createElement("a",{title:"Instagram",tabIndex:0,href:"https://www.instagram.com/anneschuartz/",target:"_blank"}),r.createElement("a",{title:"Facebook",tabIndex:0,href:"https://www.facebook.com/anneschuartz/",target:"_blank"}),r.createElement("a",{title:"spotify playlist",tabIndex:0,href:"https://open.spotify.com/user/12180965366/playlist/7hesivtrFtrHpnkTyti5Ox?si=KRLe-dzHQGOrdR7LkM128A"})))),r.createElement("div",null,r.createElement("dl",null,r.createElement(z,null,"Curitiba, Brasil"),r.createElement(z,null,"Ter - Sáb: das 13h às 19h"),r.createElement(z,null,"Dom: das 14h às 18h"))))),r.createElement(k,null))},T=(n(158),n(150),n(151)),j=n.n(T),q=n(152),R=n.n(q);function S(){var e=o()(['\n  @font-face {\n      font-family: "Abril";\n      font-style: normal;\n      font-weight: normal;\n      src: local("Abril"), local("Abril"), url(',') format("ttf"), url(',') format("woff");\n    }\n  }\n  h2 {\n    font: 30px Abril;\n    margin: 0;\n  }\n']);return S=function(){return e},e}var I=Object(u.a)(S(),j.a,R.a);t.a=function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(I,null),i.a.createElement(h,null),i.a.createElement("div",null,i.a.createElement("main",null,t),i.a.createElement(M,null)))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-404-js-fa90403018bcf4aeeb22.js.map