(this["webpackJsonpreact-form-demo"]=this["webpackJsonpreact-form-demo"]||[]).push([[0],{153:function(e,a,t){},155:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(13),o=t.n(c),r=(t(73),t(6)),u=t(67),i=t(7),s=t(14),m=t(60),b=t.n(m),d=function(e,a){var t=a.payload,n=t.defaultValue,l=t.key,c=t.value,o=t.ftn;switch(a.type){case"init":return Object(r.a)({},n);case"updateValue":return b()(c)?Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},l,c(e[l],e))):Object(r.a)(Object(r.a)({},e),{},Object(s.a)({},l,c));case"updateFormValue":return o?Object(r.a)(Object(r.a)({},e),{},{value:o(e.value)}):Object(r.a)(Object(r.a)({},e),{},{value:Object(r.a)(Object(r.a)({},e.value),c)});default:return e}},p=Object(n.createContext)({value:{},updateValue:{},updateFormValue:{},size:"sm ",layout:"2-10",horizontal:!1}),f=function(e){var a=Object(n.useContext)(p),t=a.state,l=a.updateValue,c=a.horizontal,o=a.size,r=a.layout;return[(t||{})[e],function(a){console.log("update value"),l(e,a)},c,o,r]},v=Object(n.forwardRef)((function(e,a){var t=e.children,c=e.defaultValue,o=void 0===c?{}:c,u=e.horizontal,s=void 0!==u&&u,m=e.size,b=e.layout,f=Object(n.useReducer)(d,o),v=Object(i.a)(f,2),j=v[0],O=v[1],h=Object(n.useCallback)((function(e,a){return O({type:"updateValue",payload:{key:e,value:a}})}),[O]),C=Object(n.useCallback)((function(e){return O({type:"updateFormValue",payload:{value:e}})}),[O]);return Object(n.useImperativeHandle)(a,(function(){return{getValue:function(){return Object(r.a)({},j)}}})),Object(n.useEffect)((function(){O({type:"init",payload:{defaultValue:o}})}),[o,O]),l.a.createElement(p.Provider,{value:{state:j,updateValue:h,updateFormValue:C,horizontal:s,size:m,layout:b}},t)})),j=t(48),O=t(26),h=t.n(O),C=t(66),y=t(63),g=t.n(y),E=t(61),N=t.n(E),w=t(62),V=t.n(w),z=(t(92),function(e){var a=f(e.id),t=Object(i.a)(a,2),n=t[0],c=t[1],o=e.onChange||function(e,a){c(e)};return l.a.createElement(C.a,Object.assign({value:n,onChange:o},e))}),k=function(e){var a=e.value,t=e.updateValue,n=Object(j.a)(e,["value","updateValue"]);return console.log(a),l.a.createElement(g.a,Object.assign({selected:a,onChange:t},n))},S=function(e){var a=e.id,t=e.label,n=void 0===t?V()(a):t,c=e.type,o=void 0===c?"text":c,u=e.onChange,m=e.component,b=e.componentProps,d=e.horizontal,p=e.size,v=e.layout,O=(e.value,Object(j.a)(e,["id","label","type","onChange","component","componentProps","horizontal","size","layout","value"])),C=f(a),y=Object(i.a)(C,5),g=y[0],E=y[1],N=y[2],w=function e(a,t,n,l,c){var o,r=c.containerClassName,u=c.labelClassName,i=c.inputContainerClassName,m=c.inputClassName,b=l.split("-");return"string"===typeof a||void 0===a?[{containerClassName:h()("form-group",{row:t},r),labelClassName:h()((o={},Object(s.a)(o,"col-".concat(n,"-").concat(b[0]),t),Object(s.a)(o,"col-form-label",t),o),u),inputContainerClassName:h()(Object(s.a)({},"col-".concat(n,"-").concat(b[1]),t),"d-flex","align-items-center",i),inputClassName:h()("form-control",{},m)}]:a.map((function(a,l){return e(a,t,n[l],b[l])}))}(a,N||d,y[3]||p,y[4]||v,O),z=Object(i.a)(w,1)[0],k=z.containerClassName,S=z.labelClassName,x=z.inputContainerClassName,F=z.inputClassName,T=u||function(e){return E(e.target.value)},I=m?l.a.createElement(m,Object(r.a)({id:a,value:g,updateValue:E},b)):l.a.createElement("input",Object.assign({className:F,id:a,type:o,value:g,onChange:T},O));return l.a.createElement("div",{className:k},l.a.createElement("label",{htmlFor:a,className:S},n),N||d?l.a.createElement("div",{className:x},I):I)},x=(t(153),[{name:"Ben Tang",age:23,email:"1@1.com",phone:"0933221103",schedule:[]},{name:"Ada Chiu",age:33,email:"a@a.com",phone:"0945231126",schedule:[]}]);var F=function(e){var a=f("schedule"),t=Object(i.a)(a,2),c=t[0],o=void 0===c?[]:c,s=t[1],m=Object(n.useState)(null),b=Object(i.a)(m,2),d=b[0],p=b[1],v=Object(n.useState)(null),j=Object(i.a)(v,2),O=j[0],h=j[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(z,{isClearable:!0,className:"w-25 mr-3",options:[{value:"UAT",label:"UAT"},{value:"SIT",label:"SIT"}],styles:{container:function(e,a){return Object(r.a)(Object(r.a)({},e),{},{width:"100%"})}},id:"type",name:"type",value:d,inputId:"schedule",onChange:p}),l.a.createElement(k,{wrapperClassName:"w-50 mr-3",className:"form-control",value:O,onChange:h}),l.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:function(){p(null),h(null),s((function(e){return[].concat(Object(u.a)(e),[{type:d,date:O}])}))},disabled:!d||!O},"Add"),l.a.createElement("div",{className:"w-100 m-2"},o.map((function(e,a){return l.a.createElement("div",{key:a,className:"w-75 d-flex border border-primary".concat(0!==a?" border-top-0":""," p-1")},l.a.createElement("div",{className:"w-25 mr-3"},e.type.label),l.a.createElement("div",{className:"w-50 mr-3"},function(e,a){return N()(e).format("DD/MM/YYYY",a)}(e.date)))}))))},T=function(){var e=Object(n.useRef)(),a=Object(n.useState)({}),t=Object(i.a)(a,2),c=t[0],o=t[1],r=Object(n.useState)(0),u=Object(i.a)(r,2),s=u[0],m=u[1];return Object(n.useEffect)((function(){setTimeout((function(){o(x[0])}),1e3)}),[o,x]),Object(n.useEffect)((function(){o(x[s])}),[s,o,x]),l.a.createElement("div",{className:"container-fluid p-5"},l.a.createElement("button",{className:"btn btn-primary btn-sm m-2",onClick:function(){0===s&&o(x[1]),1===s&&o(x[0]),m((function(e){return 0===e?1:1===e?0:void 0}))}},"Change Form Default Value Props"),l.a.createElement(v,{ref:e,defaultValue:c,horizontal:!0,size:"sm",layout:"2-10"},l.a.createElement(S,{id:"name"}),l.a.createElement(S,{id:"age",type:"number"}),l.a.createElement(S,{id:"phone"}),l.a.createElement(S,{id:"email"}),l.a.createElement(S,{id:"schedule",inputContainerClassName:"flex-wrap",component:F}),l.a.createElement("button",{className:"btn btn-primary btn-sm m-2",onClick:function(){var a=e.current.getValue();console.log(a)}},"Submit")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,a,t){e.exports=t(155)},73:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.c6d87890.chunk.js.map