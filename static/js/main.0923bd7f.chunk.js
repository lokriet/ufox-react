(this.webpackJsonpufox=this.webpackJsonpufox||[]).push([[0],{102:function(e,n,t){},271:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),i=t.n(r),l=(t(102),t(40)),c=t(14),u=t(90),d=t(58),s=t(59),f=t(302),p=t(306),b=t(307),m=t(85),g=t.n(m),h=t(86),x=t.n(h);function v(){var e=Object(d.a)(["\n    position: fixed;\n    top: 30%;\n    left: ",";\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    transform: translateX(-50%);\n    @media (max-width: 500px) {\n        left: 50%;\n        width: 80%;\n    }\n"]);return v=function(){return e},e}function E(){var e=Object(d.a)(["\n    height: 100vh;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: 80% 100%;\n    background-image: url(",");\n"]);return E=function(){return e},e}var w=s.a.div(E(),x.a),O=1e3,k=563,y=function(e){if(e){var n=e.getBoundingClientRect(),t=Math.min(O/n.width,k/n.height),a=O/t,o=.72*a,r=.8*(a-n.width),i=Math.round(o-r);return"".concat(i,"px")}return"60%"},j=s.a.form(v(),(function(e){return e.left})),M=Object(f.a)({root:{marginBottom:30,"& .MuiOutlinedInput-notchedOutline":{borderColor:"#ddd6d370",transition:"all 300ms ease-in"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"#fffc9680",animation:"$pulsate 3s ease-in-out infinite"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#fffc96",borderWidth:1,boxShadow:"0px 0px 10px 4px rgba(255,252,150,0.5)",animation:"unset"},"& .MuiFormLabel-root":{color:"#ddd6d3",transition:"color 300ms ease-in,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms"},"&:hover .MuiFormLabel-root":{color:"#fffc96"},"& .Mui-focused.MuiFormLabel-root":{color:"#fffc96"},"& .MuiOutlinedInput-input":{color:"#fffffb",transition:"background 300ms ease-in"},"& .Mui-focused .MuiOutlinedInput-input":{background:"linear-gradient(90deg, rgba(10,27,76,0.7) 0%, rgba(6,17,61,0.7) 100%)"}},"@keyframes pulsate":{"0%":{boxShadow:"0px 0px 5px 1px rgba(255,255,250,0.3)"},"50%":{boxShadow:"0px 0px 20px 6px rgba(255,252,150,1)"},"100%":{boxShadow:"0px 0px 5px 1px rgba(255,255,250,0.3)"}}}),S=function(e){var n=Object.assign({},e),t=M();return o.a.createElement(p.a,Object.assign({classes:t,variant:"outlined"},n))},I=Object(f.a)({root:{background:"linear-gradient(90deg, rgba(10,27,76,1) 0%, rgba(6,17,61,1) 100%)",color:"#fffffb",opacity:.7,transition:"all 300ms ease-in",width:"100%","&:hover":{animation:"$pulsate 3s ease-in-out infinite",background:"linear-gradient(90deg, rgba(10,27,76,1) 0%, rgba(6,17,61,1) 100%)",color:"#fffc96",opacity:.9},"& span":{letterSpacing:1,opacity:1}},"@keyframes pulsate":{"0%":{textShadow:"0 0 20px #fffc96"},"50%":{textShadow:"0 0 6px #fffc96"},"100%":{textShadow:"0 0 20px #fffc96"}}}),L=function(e){var n=Object.assign({},e),t=I();return o.a.createElement(b.a,Object.assign({classes:t,disableElevation:!0,disableRipple:!0,variant:"contained"},n))},U=function(){return o.a.createElement(g.a,{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%"},options:{fpsLimit:60,interactivity:{modes:{bubble:{distance:400,duration:2,opacity:.8,size:40}}},particles:{color:{value:"#fffc96"},shadow:{blur:20,color:{value:"#fffc96"},enable:!0,offset:{x:0,y:0}},links:{enable:!1},collisions:{enable:!1},move:{enable:!0,random:!0,speed:1,direction:"top",out_mode:"out"},number:{density:{enable:!1},value:100},opacity:{random:!0,value:.5},shape:{type:"circle"},size:{random:!0,value:15}},detectRetina:!0}})},z=t(91),F=t(6),B={noUnderline:{display:"block",textDecoration:"none"}},C=function(e){var n=e.noUnderline,t=Object(z.a)(e,["noUnderline"]);return o.a.createElement(l.b,Object.assign({style:n?B.noUnderline:{}},t))};C.props={noUnderline:t.n(F).a.bool};var R=C,W=function(){var e=Object(a.useState)("60%"),n=Object(u.a)(e,2),t=n[0],r=n[1],i=Object(a.useRef)();return Object(a.useEffect)((function(){r(y(i.current)),window.addEventListener("resize",(function(){return r(y(i.current))}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{ref:i},o.a.createElement(U,null),o.a.createElement(j,{left:t},o.a.createElement(S,{label:"Login"}),o.a.createElement(S,{label:"Password"}),o.a.createElement(R,{to:"/dashboard",noUnderline:!0},o.a.createElement(L,null,"Enter")))))},$=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,"Hello world!"),o.a.createElement(l.b,{to:"/login"},"login"))};var J=function(){return o.a.createElement(l.a,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/dashboard"},o.a.createElement($,null)),o.a.createElement(c.a,{path:"/login"},o.a.createElement(W,null)),o.a.createElement(c.a,{path:"/"},o.a.createElement(W,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,n,t){e.exports=t.p+"static/media/backgroundSky.700e3840.jpg"},97:function(e,n,t){e.exports=t(271)}},[[97,1,2]]]);
//# sourceMappingURL=main.0923bd7f.chunk.js.map