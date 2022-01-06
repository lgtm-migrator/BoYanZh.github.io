/*! For license information please see 9509bef3c146d73cdd1fc2adedf66a13b70e54d5-4151edefc8665ede5c67.js.LICENSE.txt */
(self.webpackChunkexample=self.webpackChunkexample||[]).push([[525],{19275:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(77554),a=n(47223),l=n(23205),c=n(27378),o=n(90382),i=n.n(o),u=n(56565),s=n(48798),f=n(21185),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=function(e){var t,n=e.prefixCls,l=e.className,o=e.checked,u=e.onChange,s=e.onClick,m=p(e,["prefixCls","className","checked","onChange","onClick"]),v=(0,c.useContext(f.E_).getPrefixCls)("tag",n),g=i()(v,(t={},(0,r.Z)(t,"".concat(v,"-checkable"),!0),(0,r.Z)(t,"".concat(v,"-checkable-checked"),o),t),l);return c.createElement("span",(0,a.Z)({},m,{className:g,onClick:function(e){null==u||u(!o),null==s||s(e)}}))},v=n(95389),g=n(31147),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},y=new RegExp("^(".concat(v.Y.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(v.E.join("|"),")$")),b=function(e,t){var n,o=e.prefixCls,p=e.className,m=e.style,v=e.children,b=e.icon,x=e.color,E=e.onClose,Z=e.closeIcon,C=e.closable,k=void 0!==C&&C,O=d(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),j=c.useContext(f.E_),w=j.getPrefixCls,N=j.direction,P=c.useState(!0),S=(0,l.Z)(P,2),_=S[0],I=S[1];c.useEffect((function(){"visible"in O&&I(O.visible)}),[O.visible]);var F=function(){return!!x&&(y.test(x)||h.test(x))},U=(0,a.Z)({backgroundColor:x&&!F()?x:void 0},m),M=F(),R=w("tag",o),T=i()(R,(n={},(0,r.Z)(n,"".concat(R,"-").concat(x),M),(0,r.Z)(n,"".concat(R,"-has-color"),x&&!M),(0,r.Z)(n,"".concat(R,"-hidden"),!_),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===N),n),p),$=function(e){e.stopPropagation(),null==E||E(e),e.defaultPrevented||"visible"in O||I(!1)},A="onClick"in O||v&&"a"===v.type,D=(0,u.Z)(O,["visible"]),z=b||null,B=z?c.createElement(c.Fragment,null,z,c.createElement("span",null,v)):v,H=c.createElement("span",(0,a.Z)({},D,{ref:t,className:T,style:U}),B,k?Z?c.createElement("span",{className:"".concat(R,"-close-icon"),onClick:$},Z):c.createElement(s.Z,{className:"".concat(R,"-close-icon"),onClick:$}):null);return A?c.createElement(g.Z,null,H):H},x=c.forwardRef(b);x.displayName="Tag",x.CheckableTag=m;var E=x},31697:function(e,t,n){"use strict";n(74805)},86199:function(e,t,n){"use strict";var r=n(69345);e.exports=function(e){return!r(e)}},83981:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var c=a.apply(null,n);c&&e.push(c)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},51290:function(e){e.exports=function(e,t,n,r){for(var a=-1,l=null==e?0:e.length;++a<l;){var c=e[a];t(r,c,n(c),e)}return r}},12439:function(e,t,n){var r=n(94105);e.exports=function(e,t,n,a){return r(e,(function(e,r,l){t(a,e,n(e),l)})),a}},61872:function(e,t,n){var r=n(8047);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},94105:function(e,t,n){var r=n(51766),a=n(23719)(r);e.exports=a},86905:function(e,t,n){var r=n(57599)();e.exports=r},51766:function(e,t,n){var r=n(86905),a=n(77856);e.exports=function(e,t){return e&&r(e,t,a)}},16026:function(e,t,n){var r=n(51290),a=n(12439),l=n(32146),c=n(99362);e.exports=function(e,t){return function(n,o){var i=c(n)?r:a,u=t?t():{};return i(n,e,l(o,2),u)}}},23719:function(e,t,n){var r=n(86351);e.exports=function(e,t){return function(n,a){if(null==n)return n;if(!r(n))return e(n,a);for(var l=n.length,c=t?l:-1,o=Object(n);(t?c--:++c<l)&&!1!==a(o[c],c,o););return n}}},57599:function(e){e.exports=function(e){return function(t,n,r){for(var a=-1,l=Object(t),c=r(t),o=c.length;o--;){var i=c[e?o:++a];if(!1===n(l[i],i,l))break}return t}}},8047:function(e,t,n){var r=n(61929),a=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=a},75906:function(e,t,n){var r=n(61872),a=n(16026)((function(e,t,n){r(e,n,t)}));e.exports=a},81811:function(e,t,n){var r=n(61872),a=n(51766),l=n(32146);e.exports=function(e,t){var n={};return t=l(t,3),a(e,(function(e,a,l){r(n,a,t(e,a,l))})),n}},80170:function(e,t,n){"use strict";n(54924);var r=n(10187),a=(n(31697),n(19275)),l=n(27378),c=n(68941),o=n(98730),i=n.n(o);t.Z=function(e){var t=(0,c.$)(),n=e.tag,o=n.color||"",u=n.name||"",s=u?i().generateFullUrl(t,"/tags/"+u):"#";return l.createElement(r.Z,{xs:!0},l.createElement(a.Z,{color:o},l.createElement("a",{href:s},"#"+u)))}},97432:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});n(37172);var r=n(16348),a=(n(37179),n(77934)),l=(n(50425),n(86946)),c=(n(54924),n(10187)),o=(n(30043),n(21007)),i=n(83981),u=n.n(i),s=(n(54622),n(86199)),f=n.n(s),p=n(27378),m=n(68941),v=n(98730),g=n.n(v),d=n(80170),y="projectCard-module--divider--1c75E",h=function(e){var t=e.data.node,n=e.tagsMap,i=t.fields.slug.links,s=t.frontmatter,v=s.title,h=(s.authors,s.excerpt),b=s.path,x=s.date,E=s.tags,Z=s.venue,C=s.cover,k=(C&&C.childImageSharp.fluid,(0,m.$)()),O=g().resolvePageUrl(b),j=[];x&&(j=j.concat([p.createElement(c.Z,{xs:!0,key:"date"},p.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},g().formatDate(x))),p.createElement(a.Z,{key:"date-divider",type:"vertical",className:y})])),Z&&(j=j.concat([p.createElement(c.Z,{xs:!0,key:"venue"},p.createElement("span",{style:{color:"rgba(0, 0, 0, 0.45)"}},Z)),p.createElement(a.Z,{key:"venue-divider",type:"vertical",className:y})])),E?j=j.concat(E.map((function(e){return n[e]?p.createElement(d.Z,{key:"tag-"+e,tag:n[e]}):null}))):j.length>0&&j.pop();var w=g().parseMarkDown(g().trimExcerpt(h),!0);return p.createElement(r.Z,{className:u()("projectCard-module--projectCard--1RxKS","cursor-default"),bodyStyle:{padding:"0.8rem"},style:{height:"100%"},hoverable:!0},p.createElement(l.Z,{gutter:[8,0],align:"middle"},p.createElement(r.Z.Meta,{title:p.createElement("span",{className:"projectCard-module--title--2Cc41"},p.createElement("a",{href:g().generateFullUrl(k,O)},v)),style:{marginBottom:"4px"}}),p.createElement(l.Z,{align:"middle",gutter:[0,4]},j),p.createElement("a",{href:g().generateFullUrl(k,O)},p.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:w}})),p.createElement(l.Z,{gutter:[8,8]},i?i.map((function(e){var t="#";return e.url&&(t=f()(e.url)?g().generateFullUrl(k,e.url):e.url),p.createElement(l.Z,null,p.createElement(c.Z,{xs:!0},p.createElement(o.Z,{shape:"round",href:t,target:"_blank",size:"small"},e.name)))})):null)))}}}]);
//# sourceMappingURL=9509bef3c146d73cdd1fc2adedf66a13b70e54d5-4151edefc8665ede5c67.js.map