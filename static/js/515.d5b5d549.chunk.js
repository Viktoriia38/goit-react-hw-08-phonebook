"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[515],{7515:function(n,e,t){t.r(e),t.d(e,{default:function(){return s}});var r=t(9434),u=t(5047),i=t(2791),o=t(5789),a=t(2286),c={loginPageTitle:"SignIn_loginPageTitle__yyBr5",loginForm:"SignIn_loginForm__VA-1J",loginBtn:"SignIn_loginBtn__fIv+r",loginInput:"SignIn_loginInput__iNIm9"},l=t(184);function f(n){var e=n.onSubmit,t=(0,i.useRef)(),u=(0,i.useRef)(),f=(0,r.v9)(a.J$),s=(0,r.v9)(a.rK);return(0,l.jsxs)(l.Fragment,{children:[!0===f&&(0,l.jsx)(o.a,{}),s?"":(0,l.jsx)("form",{onSubmit:function(n){n.preventDefault();var r={email:t.current.value,password:u.current.value};e(r),n.target.reset()},children:(0,l.jsxs)("div",{className:c.loginForm,children:[(0,l.jsx)("div",{className:c.loginLabel,children:(0,l.jsxs)("label",{children:[(0,l.jsx)("span",{children:"Email "}),(0,l.jsx)("input",{className:c.loginInput,type:"email",name:"email",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c c\u0432\u0456\u0439 e-mail",label:"Email",ref:t,required:!0})]})}),(0,l.jsx)("div",{className:c.loginLabel,children:(0,l.jsxs)("label",{children:[(0,l.jsx)("span",{children:"Password "}),(0,l.jsx)("input",{className:c.loginInput,label:"Password",type:"password",name:"password",minLength:7,required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",ref:u})]})}),(0,l.jsx)("button",{className:c.loginBtn,children:"login"})]})})]})}function s(){var n=(0,r.I0)();return(0,l.jsx)("div",{children:(0,l.jsx)(f,{onSubmit:function(e){n((0,u.Qb)(e))}})})}},2286:function(n,e,t){t.d(e,{AD:function(){return v},vp:function(){return d},rK:function(){return f},I_:function(){return l},xR:function(){return p},J$:function(){return s}});var r="NOT_FOUND";var u=function(n,e){return n===e};function i(n,e){var t="object"===typeof e?e:{equalityCheck:e},i=t.equalityCheck,o=void 0===i?u:i,a=t.maxSize,c=void 0===a?1:a,l=t.resultEqualityCheck,f=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,u=0;u<r;u++)if(!n(e[u],t[u]))return!1;return!0}}(o),s=1===c?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(n,e){var t=[];function u(n){var u=t.findIndex((function(t){return e(n,t.key)}));if(u>-1){var i=t[u];return u>0&&(t.splice(u,1),t.unshift(i)),i.value}return r}return{get:u,put:function(e,i){u(e)===r&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(c,f);function p(){var e=s.get(arguments);if(e===r){if(e=n.apply(null,arguments),l){var t=s.getEntries(),u=t.find((function(n){return l(n.value,e)}));u&&(e=u.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function o(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function a(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=function(){for(var e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];var i,a=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=c,s=f.memoizeOptions,p=void 0===s?t:s,v=Array.isArray(p)?p:[p],d=o(r),h=n.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(v)),g=n((function(){for(var n=[],e=d.length,t=0;t<e;t++)n.push(d[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(g,{resultFunc:l,memoizedResultFunc:h,dependencies:d,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),g};return u}var c=a(i),l=function(n){return n.auth.authData.email},f=function(n){return n.auth.token},s=function(n){return n.auth.IsLoading},p=function(n){return n.contactsData.contacts.items},v=function(n){return n.contactsData.filter},d=c([p,v],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().trim().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=515.d5b5d549.chunk.js.map