function c(r,{insertAt:a}={}){if(!r||typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",a==="top"&&e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n),n.styleSheet?n.styleSheet.cssText=r:n.appendChild(document.createTextNode(r))}c(`.rti--container *{box-sizing:border-box;transition:all .2s ease}.rti--container{--rti-bg: #fff;--rti-border: #ccc;--rti-main: #3182ce;--rti-radius: .375rem;--rti-s: .5rem;--rti-tag: #edf2f7;--rti-tag-remove: #e53e3e;--rti-tag-padding: .15rem .25rem;align-items:center;background:var(--rti-bg);border:1px solid var(--rti-border);border-radius:var(--rti-radius);display:flex;flex-wrap:wrap;gap:var(--rti-s);line-height:1.4;padding:var(--rti-s)}.rti--container:focus-within{border-color:var(--rti-main);box-shadow:var(--rti-main) 0 0 0 1px}.rti--input{border:0;outline:0;font-size:inherit;line-height:inherit;width:50%}.rti--tag{align-items:center;background:var(--rti-tag);border-radius:var(--rti-radius);display:inline-flex;justify-content:center;padding:var(--rti-tag-padding)}.rti--tag button{background:none;border:0;border-radius:50%;cursor:pointer;line-height:inherit;padding:0 var(--rti-s)}.rti--tag button:hover{color:var(--rti-tag-remove)}
`);import v,{useState as S}from"react";import{useEffect as B,useRef as O}from"react";function f(r,a){let e=O(!1);B(()=>{e.current?r():e.current=!0},a)}function l(...r){return r.filter(a=>a).join(" ")}import m from"react";function b({text:r,remove:a,disabled:e,className:n}){let u=g=>{g.stopPropagation(),a(r)};return m.createElement("span",{className:l("rti--tag",n)},m.createElement("span",null,r),!e&&m.createElement("button",{type:"button",onClick:u,"aria-label":`remove ${r}`},"\u2715"))}var K=["Enter"],G=({name:r,placeHolder:a,value:e,onChange:n,onBlur:u,separators:g,disableBackspaceRemove:T,onExisting:p,onRemoved:h,disabled:y,isEditOnRemove:E,beforeAddValidate:x,onKeyUp:k,classNames:s,addTagOnPaste:P=!1,required:I=!1})=>{let[i,d]=S(e||[]);f(()=>{n&&n(i)},[i]),f(()=>{JSON.stringify(e)!==JSON.stringify(i)&&d(e)},[e]);let C=t=>{t.stopPropagation();let o=t.target.value;if(!o&&!T&&i.length&&t.key==="Backspace"&&(t.target.value=E?`${i.at(-1)} `:"",d([...i.slice(0,-1)])),o&&(g||K).includes(t.key)){if(t.preventDefault(),x&&!x(o,i))return;if(i.includes(o)){p&&p(o);return}d([...i,o]),t.target.value=""}},D=t=>{d(i.filter(o=>o!==t)),h&&h(t)},w=t=>{t.preventDefault();let o=t.clipboardData.getData("text");if(i.includes(o)){p&&p(o);return}d([...i,o])};return v.createElement("div",{"aria-labelledby":r,className:"rti--container"},i.map(t=>v.createElement(b,{key:t,className:s==null?void 0:s.tag,text:t,remove:D,disabled:y})),v.createElement("input",{className:l("rti--input",s==null?void 0:s.input),type:"text",name:r,placeholder:a,onKeyDown:C,onBlur:u,disabled:y,onKeyUp:k,onPaste:P?w:void 0,required:I}))};export{G as TagsInput};
