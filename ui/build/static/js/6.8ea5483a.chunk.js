(this["webpackJsonplic-ui"]=this["webpackJsonplic-ui"]||[]).push([[6],{723:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));t(726);var s=t(223),l=t.n(s),c=t(736),r=t(2);const n=(e,a)=>{var t;"success"===e&&(t=a,l.a.success(t,{style:{borderRadius:"10px",background:"#28a745",color:"#fff"}})),"error"===e&&(e=>{l.a.error(e,{style:{borderRadius:"10px",background:"#dc3545",color:"#fff"}})})(a),"warning"===e&&(e=>{l()(e,{style:{borderRadius:"10px",background:"#ffc107",color:"#fff"}})})(a),"info"===e&&(e=>{l()(e,{style:{borderRadius:"10px",background:"#17a2b8",color:"#fff"}})})(a)};c.a,c.a,c.a},724:function(e,a,t){"use strict";var s=t(160),l=t.n(s),c=t(723),r=t(27);const n=l.a.create({baseURL:r.c});let o=sessionStorage.getItem("token");n.interceptors.request.use((async e=>(o||(o=sessionStorage.getItem("token")),e.headers.Authorization=o,e))),n.interceptors.response.use((async e=>e),(e=>{var a,t;return c.a("error",null===e||void 0===e||null===(a=e.response)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message),Promise.reject(e.response&&e.response.data||"Something went wrong")})),a.a=n},725:function(e,a,t){"use strict";t.d(a,"h",(function(){return s})),t.d(a,"g",(function(){return l})),t.d(a,"d",(function(){return c})),t.d(a,"f",(function(){return r})),t.d(a,"m",(function(){return n})),t.d(a,"a",(function(){return o})),t.d(a,"k",(function(){return i})),t.d(a,"i",(function(){return d})),t.d(a,"j",(function(){return j})),t.d(a,"b",(function(){return u})),t.d(a,"c",(function(){return b})),t.d(a,"l",(function(){return m})),t.d(a,"e",(function(){return O}));const s="/auth/signup",l="/auth/login",c="/auth/forget-password",r="/auth/reset-password",n="/auth/verify-otp",o="/auth/change-password",i="/user/list",d="/user/top-earners",j="/user/",u="/user/filter",b="/user/username/",m="/user/profile",O="/policy-holder"},727:function(e,a,t){"use strict";var s=t(3),l=t(4),c=t(12),r=t.n(c),n=t(1),o=t.n(n),i=t(14),d=["bsPrefix","className","as"],j=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,n=e.as,u=void 0===n?"div":n,b=Object(l.a)(e,d),m=Object(i.a)(t,"col"),O=[],h=[];return j.forEach((function(e){var a,t,s,l=b[e];if(delete b[e],"object"===typeof l&&null!=l){var c=l.span;a=void 0===c||c,t=l.offset,s=l.order}else a=l;var r="xs"!==e?"-"+e:"";a&&O.push(!0===a?""+m+r:""+m+r+"-"+a),null!=s&&h.push("order"+r+"-"+s),null!=t&&h.push("offset"+r+"-"+t)})),O.length||O.push(m),o.a.createElement(u,Object(s.a)({},b,{ref:a,className:r.a.apply(void 0,[c].concat(O,h))}))}));u.displayName="Col",a.a=u},728:function(e,a,t){"use strict";var s=t(3),l=t(1),c=t.n(l),r=t(12),n=t.n(r);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(s.a)({},a,{ref:t,className:n()(a.className,e)}))}))}},730:function(e,a,t){"use strict";t.d(a,"d",(function(){return r})),t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return o})),t.d(a,"e",(function(){return i})),t.d(a,"c",(function(){return d}));var s=t(724),l=t(723),c=t(725);const r=async e=>{try{return await s.a.post(c.e,e)}catch(a){return void console.log(a,"<<")}},n=async e=>{try{let a=c.e;null!==e&&void 0!==e&&e.pageSize&&(a+="?pageSize="+(null===e||void 0===e?void 0:e.pageSize)),null!==e&&void 0!==e&&e.pageNumber&&(a+="&pageNumber="+(null===e||void 0===e?void 0:e.pageNumber)),null!==e&&void 0!==e&&e.search&&(a+="&search="+(null===e||void 0===e?void 0:e.search));return await s.a.get(a)}catch(a){return void console.log(a,"<<")}},o=async e=>{try{return await s.a.get(c.e+"/"+e)}catch(a){return void console.log(a,"<<")}},i=async(e,a)=>{try{const t=await s.a.patch(c.e+"/"+e,a);return l.a("success",t.data.message),t}catch(t){return void console.log(t,"<<")}},d=async()=>{try{return await s.a.get(c.e+'?sort="nextDue"&sortType=-1')}catch(e){return void console.log(e,"<<")}}},733:function(e,a,t){"use strict";t(1);var s=t(2);a.a=function(e){return Object(s.jsx)("div",{className:"text-error mt-2 text-danger text-left",children:e.children})}},734:function(e,a,t){"use strict";var s=t(3),l=t(4),c=t(12),r=t.n(c),n=t(1),o=t.n(n),i=t(14),d=["bsPrefix","className","noGutters","as"],j=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,n=e.noGutters,u=e.as,b=void 0===u?"div":u,m=Object(l.a)(e,d),O=Object(i.a)(t,"row"),h=O+"-cols",x=[];return j.forEach((function(e){var a,t=m[e];delete m[e];var s="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&x.push(""+h+s+"-"+a)})),o.a.createElement(b,Object(s.a)({ref:a},m,{className:r.a.apply(void 0,[c,O,n&&"no-gutters"].concat(x))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},739:function(e,a,t){"use strict";var s=t(3),l=t(4),c=t(12),r=t.n(c),n=t(1),o=t.n(n),i=(t(357),t(221)),d=t(220),j=t(14),u=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],b=o.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,i=e.bsCustomPrefix,b=e.className,m=e.type,O=void 0===m?"checkbox":m,h=e.isValid,x=void 0!==h&&h,v=e.isInvalid,f=void 0!==v&&v,p=e.isStatic,N=e.as,g=void 0===N?"input":N,A=Object(l.a)(e,u),I=Object(n.useContext)(d.a),L=I.controlId,y=I.custom?[i,"custom-control-input"]:[c,"form-check-input"],C=y[0],E=y[1];return c=Object(j.a)(C,E),o.a.createElement(g,Object(s.a)({},A,{ref:a,type:O,id:t||L,className:r()(b,c,x&&"is-valid",f&&"is-invalid",p&&"position-static")}))}));b.displayName="FormCheckInput";var m=b,O=["bsPrefix","bsCustomPrefix","className","htmlFor"],h=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,i=e.className,u=e.htmlFor,b=Object(l.a)(e,O),m=Object(n.useContext)(d.a),h=m.controlId,x=m.custom?[c,"custom-control-label"]:[t,"form-check-label"],v=x[0],f=x[1];return t=Object(j.a)(v,f),o.a.createElement("label",Object(s.a)({},b,{ref:a,htmlFor:u||h,className:r()(i,t)}))}));h.displayName="FormCheckLabel";var x=h,v=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],f=o.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,u=e.bsCustomPrefix,b=e.inline,O=void 0!==b&&b,h=e.disabled,f=void 0!==h&&h,p=e.isValid,N=void 0!==p&&p,g=e.isInvalid,A=void 0!==g&&g,I=e.feedbackTooltip,L=void 0!==I&&I,y=e.feedback,C=e.className,E=e.style,R=e.title,w=void 0===R?"":R,T=e.type,D=void 0===T?"checkbox":T,U=e.label,G=e.children,P=e.custom,V=e.as,Y=void 0===V?"input":V,Q=Object(l.a)(e,v),k="switch"===D||P,F=k?[u,"custom-control"]:[c,"form-check"],S=F[0],H=F[1];c=Object(j.a)(S,H);var B=Object(n.useContext)(d.a).controlId,M=Object(n.useMemo)((function(){return{controlId:t||B,custom:k}}),[B,k,t]),z=k||null!=U&&!1!==U&&!G,K=o.a.createElement(m,Object(s.a)({},Q,{type:"switch"===D?"checkbox":D,ref:a,isValid:N,isInvalid:A,isStatic:!z,disabled:f,as:Y}));return o.a.createElement(d.a.Provider,{value:M},o.a.createElement("div",{style:E,className:r()(C,c,k&&"custom-"+D,O&&c+"-inline")},G||o.a.createElement(o.a.Fragment,null,K,z&&o.a.createElement(x,{title:w},U),(N||A)&&o.a.createElement(i.a,{type:N?"valid":"invalid",tooltip:L},y))))}));f.displayName="FormCheck",f.Input=m,f.Label=x;var p=f,N=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],g=o.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,i=e.bsCustomPrefix,u=e.className,b=e.isValid,m=e.isInvalid,O=e.lang,h=e.as,x=void 0===h?"input":h,v=Object(l.a)(e,N),f=Object(n.useContext)(d.a),p=f.controlId,g=f.custom?[i,"custom-file-input"]:[c,"form-control-file"],A=g[0],I=g[1];return c=Object(j.a)(A,I),o.a.createElement(x,Object(s.a)({},v,{ref:a,id:t||p,type:"file",lang:O,className:r()(u,c,b&&"is-valid",m&&"is-invalid")}))}));g.displayName="FormFileInput";var A=g,I=["bsPrefix","bsCustomPrefix","className","htmlFor"],L=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,i=e.className,u=e.htmlFor,b=Object(l.a)(e,I),m=Object(n.useContext)(d.a),O=m.controlId,h=m.custom?[c,"custom-file-label"]:[t,"form-file-label"],x=h[0],v=h[1];return t=Object(j.a)(x,v),o.a.createElement("label",Object(s.a)({},b,{ref:a,htmlFor:u||O,className:r()(i,t),"data-browse":b["data-browse"]}))}));L.displayName="FormFileLabel";var y=L,C=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],E=o.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,u=e.bsCustomPrefix,b=e.disabled,m=void 0!==b&&b,O=e.isValid,h=void 0!==O&&O,x=e.isInvalid,v=void 0!==x&&x,f=e.feedbackTooltip,p=void 0!==f&&f,N=e.feedback,g=e.className,I=e.style,L=e.label,E=e.children,R=e.custom,w=e.lang,T=e["data-browse"],D=e.as,U=void 0===D?"div":D,G=e.inputAs,P=void 0===G?"input":G,V=Object(l.a)(e,C),Y=R?[u,"custom"]:[c,"form-file"],Q=Y[0],k=Y[1];c=Object(j.a)(Q,k);var F=Object(n.useContext)(d.a).controlId,S=Object(n.useMemo)((function(){return{controlId:t||F,custom:R}}),[F,R,t]),H=null!=L&&!1!==L&&!E,B=o.a.createElement(A,Object(s.a)({},V,{ref:a,isValid:h,isInvalid:v,disabled:m,as:P,lang:w}));return o.a.createElement(d.a.Provider,{value:S},o.a.createElement(U,{style:I,className:r()(g,c,R&&"custom-file")},E||o.a.createElement(o.a.Fragment,null,R?o.a.createElement(o.a.Fragment,null,B,H&&o.a.createElement(y,{"data-browse":T},L)):o.a.createElement(o.a.Fragment,null,H&&o.a.createElement(y,null,L),B),(h||v)&&o.a.createElement(i.a,{type:h?"valid":"invalid",tooltip:p},N))))}));E.displayName="FormFile",E.Input=A,E.Label=y;var R=E,w=t(697),T=["bsPrefix","className","children","controlId","as"],D=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.children,u=e.controlId,b=e.as,m=void 0===b?"div":b,O=Object(l.a)(e,T);t=Object(j.a)(t,"form-group");var h=Object(n.useMemo)((function(){return{controlId:u}}),[u]);return o.a.createElement(d.a.Provider,{value:h},o.a.createElement(m,Object(s.a)({},O,{ref:a,className:r()(c,t)}),i))}));D.displayName="FormGroup";var U=D,G=(t(72),t(727)),P=["as","bsPrefix","column","srOnly","className","htmlFor"],V=o.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"label":t,i=e.bsPrefix,u=e.column,b=e.srOnly,m=e.className,O=e.htmlFor,h=Object(l.a)(e,P),x=Object(n.useContext)(d.a).controlId;i=Object(j.a)(i,"form-label");var v="col-form-label";"string"===typeof u&&(v=v+" "+v+"-"+u);var f=r()(m,i,b&&"sr-only",u&&v);return O=O||x,u?o.a.createElement(G.a,Object(s.a)({ref:a,as:"label",className:f,htmlFor:O},h)):o.a.createElement(c,Object(s.a)({ref:a,className:f,htmlFor:O},h))}));V.displayName="FormLabel",V.defaultProps={column:!1,srOnly:!1};var Y=V,Q=["bsPrefix","className","as","muted"],k=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,n=e.as,i=void 0===n?"small":n,d=e.muted,u=Object(l.a)(e,Q);return t=Object(j.a)(t,"form-text"),o.a.createElement(i,Object(s.a)({},u,{ref:a,className:r()(c,t,d&&"text-muted")}))}));k.displayName="FormText";var F=k,S=o.a.forwardRef((function(e,a){return o.a.createElement(p,Object(s.a)({},e,{ref:a,type:"switch"}))}));S.displayName="Switch",S.Input=p.Input,S.Label=p.Label;var H=S,B=t(44),M=["bsPrefix","inline","className","validated","as"],z=Object(B.a)("form-row"),K=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.inline,n=e.className,i=e.validated,d=e.as,u=void 0===d?"form":d,b=Object(l.a)(e,M);return t=Object(j.a)(t,"form"),o.a.createElement(u,Object(s.a)({},b,{ref:a,className:r()(n,i&&"was-validated",c&&t+"-inline")}))}));K.displayName="Form",K.defaultProps={inline:!1},K.Row=z,K.Group=U,K.Control=w.a,K.Check=p,K.File=R,K.Switch=H,K.Label=Y,K.Text=F;a.a=K},740:function(e,a,t){"use strict";var s=t(3),l=t(4),c=t(12),r=t.n(c),n=t(1),o=t.n(n),i=t(14),d=t(44),j=t(728),u=o.a.createContext(null);u.displayName="CardContext";var b=u,m=["bsPrefix","className","variant","as"],O=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,n=e.variant,d=e.as,j=void 0===d?"img":d,u=Object(l.a)(e,m),b=Object(i.a)(t,"card-img");return o.a.createElement(j,Object(s.a)({ref:a,className:r()(n?b+"-"+n:b,c)},u))}));O.displayName="CardImg",O.defaultProps={variant:null};var h=O,x=["bsPrefix","className","bg","text","border","body","children","as"],v=Object(j.a)("h5"),f=Object(j.a)("h6"),p=Object(d.a)("card-body"),N=Object(d.a)("card-title",{Component:v}),g=Object(d.a)("card-subtitle",{Component:f}),A=Object(d.a)("card-link",{Component:"a"}),I=Object(d.a)("card-text",{Component:"p"}),L=Object(d.a)("card-header"),y=Object(d.a)("card-footer"),C=Object(d.a)("card-img-overlay"),E=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,j=e.text,u=e.border,m=e.body,O=e.children,h=e.as,v=void 0===h?"div":h,f=Object(l.a)(e,x),N=Object(i.a)(t,"card"),g=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return o.a.createElement(b.Provider,{value:g},o.a.createElement(v,Object(s.a)({ref:a},f,{className:r()(c,N,d&&"bg-"+d,j&&"text-"+j,u&&"border-"+u)}),m?o.a.createElement(p,null,O):O))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=h,E.Title=N,E.Subtitle=g,E.Body=p,E.Link=A,E.Text=I,E.Header=L,E.Footer=y,E.ImgOverlay=C;a.a=E},742:function(e,a,t){"use strict";var s=t(3),l=t(4),c=t(12),r=t.n(c),n=t(1),o=t.n(n),i=t(14),d=["bsPrefix","fluid","as","className"],j=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.fluid,n=e.as,j=void 0===n?"div":n,u=e.className,b=Object(l.a)(e,d),m=Object(i.a)(t,"container"),O="string"===typeof c?"-"+c:"-fluid";return o.a.createElement(j,Object(s.a)({ref:a},b,{className:r()(u,c?""+m+O:m)}))}));j.displayName="Container",j.defaultProps={fluid:!1},a.a=j},748:function(e,a,t){"use strict";t.r(a);var s=t(1),l=t(742),c=t(740),r=t(734),n=t(727),o=t(354),i=t(739),d=t(117),j=t(733),u=(t(731),t(21)),b=(t(723),t(730)),m=t(25),O=t(2);const h=m.b.contactUs,x=Object(s.forwardRef)(((e,a)=>{const t=Object(u.useHistory)(),[m,x]=Object(s.useState)(!0),[v,f]=Object(s.useState)(!1),[p,N]=Object(s.useState)({name:"Abhay",sName:"---",fName:"Ram Basant Upadhyay",mName:"Sona Devi",mob:9653309234,email:"mtabhay2271@gmail.com",dob:"09-12-1995",address:"Kanech",uid:563657921064,pan:"997898989",edu:"dfsd",work:"997898989",hight:123,weight:997898989,nominee:"6887787",fAge:33,mAge:33,spAge:33,childAge:33,childAge2:33,childAge3:33,childAge4:33,bAge1:98,bAge2:98,sAge1:98,sAge2:98,planNo:98,amount:98,typeOfEmi:"mon",bank:"mon",accNo:979779,ifscCode:"6887787",policyNo:6887787,sumAssured:6887787,nomYear:6887787,term:68,ppt:12,accHolder:"Abhay",slipNum1:6887787,doc:"6887787",dom:"6887787",dlp:"6887787",uin:"6887787",nextDue:"6887787"}),[g,A]=Object(s.useState)([]),I=Object(u.useLocation)(),L=new URLSearchParams(null===I||void 0===I?void 0:I.search).get("id"),y=new URLSearchParams(null===I||void 0===I?void 0:I.search).get("edit");Object(s.useEffect)((()=>{x(!0),(async()=>{if(console.log("userIduserId>>>",L),L){let a=await Object(b.a)(L);var e;200==(null===a||void 0===a?void 0:a.status)&&N({...null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.data})}x(!1)})(),x(!1)}),[]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(d.a,{loaded:m}),Object(O.jsx)(l.a,{className:"mt-3",children:Object(O.jsxs)(c.a,{className:"no-shadow",children:[Object(O.jsxs)(c.a.Header,{children:[Object(O.jsxs)(r.a,{children:[Object(O.jsx)(n.a,{sm:5}),Object(O.jsx)(n.a,{sm:7,className:"d-flex justify-content-end ",children:Object(O.jsx)("div",{children:Object(O.jsx)(o.a,{className:"btn-rounded",onClick:()=>(async()=>{if(f(!0),y){f(!1);let e=await Object(b.e)(L,p);console.log("res22",e),200==(null===e||void 0===e?void 0:e.status)&&t.push({pathname:"/policy-holder"})}else{f(!1);let e=await Object(b.d)(p);console.log("res11",e),200==(null===e||void 0===e?void 0:e.status)&&t.push({pathname:"/policy-holder"})}})(),children:h.LAYOUT.SAVE_AND_CONTINUE})})})]}),Object(O.jsx)(r.a,{children:Object(O.jsx)(n.a,{sm:5,children:Object(O.jsx)(c.a.Title,{as:"h5",children:"BASIC DETAILS"})})})]}),Object(O.jsx)(c.a.Body,{children:Object(O.jsxs)(c.a,{className:"no-shadow mb-0",children:[Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Name"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.name),onChange:e=>{N({...p,name:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.name?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Mobile Number"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.mob),onChange:e=>{N({...p,mob:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.mob?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Email"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.email),onChange:e=>{N({...p,email:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.email?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Father Name"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.fName),onChange:e=>{N({...p,fName:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.fName?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Mother Name"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.mName),onChange:e=>{N({...p,mName:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.mName?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Spouse Name"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.sName),onChange:e=>{N({...p,sName:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.sName?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Date Of Birth"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.dob),onChange:e=>{N({...p,dob:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.dob?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"UID"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.uid),onKeyDown:e=>[".","e","E","-"].includes(e.key)&&e.preventDefault(),onChange:e=>{e.target.value.match(/^(?=.*[+0-9])[+0-9]{1,12}$/)?N({...p,uid:e.target.value}):e.target.value||N({...p,uid:""})},className:"form-control-sm shu",type:"text"}),v&&!p.uid?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"PAN"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.pan),onChange:e=>{N({...p,pan:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.pan?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Address"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.address),onChange:e=>{N({...p,address:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.address?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Eadution"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.edu),onChange:e=>{N({...p,edu:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.edu?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Work"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.work),onChange:e=>{N({...p,work:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.work?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Hight(cm)"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.hight),onChange:e=>{N({...p,hight:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.hight?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Weight"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.weight),onChange:e=>{N({...p,weight:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.weight?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Nominee"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.nominee),onChange:e=>{N({...p,nominee:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.nominee?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]})]})}),Object(O.jsx)(c.a.Header,{children:Object(O.jsx)(c.a.Title,{as:"h5",children:"BANK DETAILS"})}),Object(O.jsx)(c.a.Body,{children:Object(O.jsxs)(c.a,{className:"no-shadow mb-0",children:[Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:6,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Bank NAme"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.bank),onChange:e=>{N({...p,bank:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.bank?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:6,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Accoun Holder"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.accHolder),onChange:e=>{N({...p,accHolder:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.accHolder?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:6,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Account Number"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.accNo),onChange:e=>{N({...p,accNo:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.accNo?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:6,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"IFSC Code"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.ifscCode),onChange:e=>{N({...p,ifscCode:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.ifscCode?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]})]})}),Object(O.jsx)(c.a.Header,{children:Object(O.jsx)(c.a.Title,{as:"h5",children:"Family History"})}),Object(O.jsx)(c.a.Body,{children:Object(O.jsxs)(c.a,{className:"no-shadow mb-0",children:[Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Father Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.fAge),onChange:e=>{N({...p,fAge:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.fAge?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Mother Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.mAge),onChange:e=>{N({...p,mAge:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.mAge?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Spouse Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.spAge),onChange:e=>{N({...p,spAge:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.spAge?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:3,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Brother Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.bAge1),onChange:e=>{N({...p,bAge1:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.bAge1?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:3,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Brother Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.bAge2),onChange:e=>{N({...p,bAge2:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.bAge2?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:3,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Sister Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.sAge1),onChange:e=>{N({...p,sAge1:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.sAge1?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:3,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Sister Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.sAge2),onChange:e=>{N({...p,sAge2:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.sAge2?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:3,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Child Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.childAge),onChange:e=>{N({...p,childAge:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.childAge?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:3,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Child Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.childAge2),onChange:e=>{N({...p,childAge2:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.childAge2?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:3,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Child Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.childAge3),onChange:e=>{N({...p,childAge3:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.childAge3?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:3,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Child Age"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.childAge4),onChange:e=>{N({...p,childAge4:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.childAge4?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]})]})}),Object(O.jsx)(c.a.Header,{children:Object(O.jsx)(c.a.Title,{as:"h5",children:"POLICY DETAILS"})}),Object(O.jsx)(c.a.Body,{children:Object(O.jsxs)(c.a,{className:"no-shadow mb-0",children:[Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Plan Number"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.planNo),onChange:e=>{N({...p,planNo:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.planNo?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Amount"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.amount),onChange:e=>{N({...p,amount:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.amount?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Policy Number"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.policyNo),onChange:e=>{N({...p,policyNo:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.policyNo?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"First Slip Number"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.slipNum1),onChange:e=>{N({...p,slipNum1:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.slipNum1?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Term Year"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.term),onChange:e=>{N({...p,term:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.term?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Paying Term"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.ppt),onChange:e=>{N({...p,ppt:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.ppt?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Type Of Emi"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.typeOfEmi),onChange:e=>{N({...p,typeOfEmi:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.typeOfEmi?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Sum Assured"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.sumAssured),onChange:e=>{N({...p,sumAssured:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.sumAssured?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"D.O.C"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.doc),onChange:e=>{N({...p,doc:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.doc?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]}),Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"D.O.M"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.dom),onChange:e=>{N({...p,dom:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.dom?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"UIN"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.uin),onChange:e=>{N({...p,uin:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.uin?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]}),Object(O.jsxs)(n.a,{sm:4,children:[Object(O.jsx)(i.a.Group,{children:Object(O.jsx)(i.a.Label,{className:"test-two",children:"Next Due"})}),Object(O.jsxs)(i.a.Group,{children:[Object(O.jsx)(i.a.Control,{value:p&&(null===p||void 0===p?void 0:p.nextDue),onChange:e=>{N({...p,nextDue:e.target.value})},className:"form-control-sm shu",type:"text"}),v&&!p.nextDue?Object(O.jsx)(j.a,{children:h.LAYOUT.VALIDATION.REQUIRED}):null]})]})]})]})})]})})]})}));a.default=x}}]);
//# sourceMappingURL=6.8ea5483a.chunk.js.map