"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[97315],{297315:(e,t,n)=>{n.d(t,{cA:()=>z,fM:()=>Y,N5:()=>U});var r=n(667294),a=n(616550),o=n(707671),i=n(194087),l=n(939129),s=n(760890),u=n(45528),c=n(485756),d=n(643778),p=n(302234),m=n(371626),f=n(663678),h=n(396596);let _=({botType:e,browserName:t,deviceType:n,region:r})=>{let a=`pwtlogger.${e}.${n}`,o=["all",...r?[r.toLowerCase()]:[]];"OTHER"!==r&&o.push("ALL_EXCLUDING_OTHER");let i=[];"desktop"===n?("Chrome"===t||"Edge"===t||"Safari"===t||"Firefox"===t||"Opera"===t)&&(i=[t.toLowerCase().replace(/\s/g,"_")]):"phone"===n?("Chrome"===t||"Mobile Safari"===t||"Samsung Browser"===t||"Chrome WebView"===t||"GSA"===t)&&(i=[t.toLowerCase().replace(/\s/g,"_")]):"tablet"===n&&"Chrome"===t&&(i=[t.toLowerCase().replace(/\s/g,"_")]);let l=["all",...i],s=[];return o.forEach(e=>{l.forEach(t=>{s.push(`${a}.region_${e}.browser_${t}`)})}),s};var g=n(865611),E=n(421715);let C=e=>10*Math.round(e/10);var L=n(953565);let S={pin_closeup:{LCP:"pin_closeup_lcp",INP:"pin_closeup_inp"},board:{LCP:"board_lcp",INP:"board_inp"},other_profile:{LCP:"other_profile_lcp",INP:"other_profile_inp"},topic:{LCP:"topic_lcp",INP:"topic_inp"}},w=["CA","GB","DE","FR","AU","JP","BR","MX","AU","IN"],b=({surface:e,pwtStaticContext:t})=>{switch(e){case"pin_closeup":return[...t.isAuthenticated?["desktop"===t.deviceType?"auth_dweb_graphql_pin_page":"auth_mweb_graphql_pin_page"]:[],t.isAuthenticated?"web_eager_loadable_auth":"web_eager_loadable_unauth"];case"board":return[t.isAuthenticated?"web_eager_loadable_auth":"web_eager_loadable_unauth"];default:return[]}},v=({pwtStaticContext:e,surface:t})=>{let n=(0,d.Jx)({annotateExperiments:b({surface:t,pwtStaticContext:e}),annotateResourceTimingForSurface:t,annotateMarks:["initialAppLoad","RenderReactContainer",...e.isAuthenticated?[]:["firstClientRenderUnauthPageWrapper","mountUnauthPageWrapper"],..."pin_closeup"===t?["firstClientRenderCloseupPage","firstClientRenderCloseupImage"]:[]],name:S[t].LCP,pwtStaticContext:e}),r=(0,d.Jx)({name:S[t].INP,pwtStaticContext:e});return(e,t)=>{"LCP"===e?n.stop(t):"INP"===e&&r.stop(t)}},$=({pwtStaticContext:e,surface:t,getCurrentRoute:n})=>{let r=v({pwtStaticContext:e,surface:t}),{isAuthenticated:a,isBot:o,isSocialBot:i,deviceType:l,country:s,fullPath:d,browserName:S,osName:b}=e,$={},R=({name:u,value:p,metricDetails:C})=>{if(!$[u]){let v;$[u]=!0;let R=(0,f.Z)(e),A=`${R}.${t}.${u}`,y=`${R}.tags.${t}.${u}`;if(v="iOS"===b&&"Chrome"===S?"iOS_Chrome":"CrUX","LCPCount"===u)(0,L.QX)(`${A}.sum`,p,{sampleRate:1}),(0,L.nP)(`${A}.size`,{sampleRate:1});else{let e=(0,m.Z)(s),f=(0,h.Z)(d);if("INP"===u){if(C){let{rating:t,navigationType:r}=C,{interactionTime:o,interactionType:i,loadState:l}=C.attribution,s=(0,g.Z)(o),{path:u}=n(),d={isAuth:a,path:u,CrUXSegment:v,region:e,CWVBucket:t,eventTimeGroup:s,interactionType:i,loadState:l,navigationType:r,domain:(0,c.xR)(document.domain||"unknown")};if((0,L.LY)(`${A}`,p,{sampleRate:1}),(0,L.LY)(`${y}`,p,{sampleRate:1,tags:d}),"Chrome"===S&&C.attribution){let e=(0,E.b)(C);e&&(0,L.LY)(`${A}.INPBoundary`,p,{sampleRate:1,tags:{...d,INPBoundary:e}}),["inputDelay","processingDuration","presentationDelay"].forEach(e=>{(0,L.LY)(`${A}.${e}`,C.attribution[e],{sampleRate:1,tags:d})})}}}else"LCP"===u?((0,L.LY)(`${A}`,p,{sampleRate:1}),(0,L.LY)(`${y}`,p,{sampleRate:1,tags:{isAuth:a,CrUXSegment:v,region:e,...f&&{pinType:f}}})):"CLS"===u&&((0,L.LY)(`${A}`,100*p,{sampleRate:1}),(0,L.LY)(`${y}`,100*p,{sampleRate:1,tags:{isAuth:a,CrUXSegment:v,region:e}}));!a&&w.includes(s)&&_({botType:i&&"socialBot"||o&&"bot"||"nonbot",browserName:S,deviceType:l,region:e}).forEach(e=>{(0,L.LY)(`${e}.tags.growthSEO.${t}_${u}`,p,{sampleRate:1,tags:{country:s}})}),r(u,p)}}};(0,u.NO)(({value:e})=>{R({name:"LCPCount",value:(0,p.Kj)()}),R({name:"LCP",value:C(e)})}),(0,u.a4)(({value:e})=>{R({name:"FCP",value:e})}),(0,u.Yn)(e=>{R({name:"INP",value:e.value,metricDetails:e})}),(0,u.mw)(({value:e})=>{R({name:"CLS",value:e})})};var R=n(297329),A=n(107860);let y=(0,n(608029).XV)("LayoutShiftDebugger"),P=e=>e<=.1?"good":e<=.25?"adequate":"poor",T=e=>e instanceof HTMLElement&&e.dataset&&(e.dataset.layoutShiftBoundaryId||e.dataset.testId)||e.parentNode&&T(e.parentNode)||null,O=e=>Math.round(1e3*e),k=[],I=e=>{let t=Object.freeze({}),n=0;k.forEach(({value:e,shift:{sources:r},route:a,params:o,hadRecentNavigation:i,hadRecentScroll:l,isAuth:s})=>{if(n+=e,!r||!r.length)return;let u=e/r.length;r.forEach(({node:e})=>{let n=e?T(e)||"ROOT":"NODE_REMOVED",r={route:a,searchScope:o&&o.scope?o.scope:"none",boundaryId:n,hadRecentNavigation:i,hadRecentScroll:l,isAuth:s,domain:(0,c.xR)(document.domain||"unknown")},d=JSON.stringify(r);t={...t,[d]:{score:((t[d]||{}).score||0)+u,tags:r}}})}),Object.keys(t).forEach(n=>{let{score:r,tags:a}=t[n];(0,L.QX)(`${e}.shifts`,O(r),{sampleRate:1,tags:{...a}}),(0,L.LY)(`${e}.shifts`,O(r),{sampleRate:1,tags:{...a}})}),y("Debug CLS boundaries",n,t,k),k=[]},N=({staticContext:e,getCurrentRoute:t,getLastNavigationTime:n})=>{let r;let a=(0,d.Jx)({annotateMarks:["initialAppLoad","RenderReactContainer"],name:"cumulative_layout_shift",pwtStaticContext:e}),o=0,i=e=>{o=e.timeStamp};window.addEventListener("scroll",i),window.addEventListener("beforeunload",()=>{window.removeEventListener("scroll",i)});let l=`${(0,f.Z)(e)}.CLS`,s=()=>I(l),c=0,p=0,m=0;(0,u.mw)(({entries:a,value:i})=>{if(m=i||0,a.length){let{path:l,params:s}=t();r=n();let u=a[0].startTime,d=c!==u,m=d?a:a.slice(p);d&&(c=u),k=k.concat(m.map(t=>({value:i,shift:t,route:l,params:s,hadRecentNavigation:r>0&&r+500>t.startTime,hadRecentScroll:o>0&&o+500>t.startTime,isAuth:e.isAuthenticated}))),p=a.length}},!0);let h=setInterval(()=>{if(k.length){s();let e=P(m);(0,L.QX)(`${l}.${e}`,1,{sampleRate:1}),(0,L.LY)(`${l}.${e}`,1,{sampleRate:1}),a.stop(O(m))}},1e3);window.addEventListener("beforeunload",()=>{clearInterval(h),0===m&&a.abort("no_shifts_detected")})};var Z=n(279600),B=n(785893);let x=(0,r.createContext)(null),M=(0,r.createContext)(null),D=()=>{(0,R.A9)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach(e=>{window.performance[e]||(0,R.A9)(`not_supported.window.performance.${e}`)}):(0,R.A9)("not_supported.window.performance"),window.PerformanceObserver||(0,R.A9)("not_supported.window.PerformanceObserer"),(0,s.v)()||(0,R.A9)("not_supported.grid_profiler")},j=()=>window.performance?.now?window.performance.now():null,H=e=>["/advertiser/"].reduce((t,n)=>e.includes(n)||t,!1);function z({children:e,immutableLocation:t,resourceTimingCacheSize:n,routerHistoryAction:s,staticContext:u}){let c=(0,r.useRef)(null),d=(0,r.useRef)(null),m=(0,r.useRef)(t),f=(0,r.useRef)(!0),{path:h,params:_}=(0,a.$B)(),g=(0,r.useRef)(h),E=(0,r.useRef)(_),C=!u.isCachedRender&&(0,o.Z)(u.deviceType);if((0,r.useEffect)(()=>{g.current=h},[h]),(0,r.useEffect)(()=>{E.current=_},[_]),(0,r.useEffect)(()=>{if((0,Z.X_)({size:n||1e3}),(0,p.UQ)(),D(),f.current=!1,C&&!i.is&&"Chrome"===u.browserName){N({staticContext:u,getCurrentRoute:()=>({path:g.current,params:E.current}),getLastNavigationTime:()=>d.current||0});let e=(0,l.e)(g.current);e&&$({pwtStaticContext:u,surface:e,getCurrentRoute:()=>({path:g.current})})}},[]),H(t.pathname)?m.current.pathname!==t.pathname:m.current!==t){m.current=t,d.current=j();let{current:e}=d;if(!f.current){let t=!c.current;(0,R.A9)("routeStart",{tags:{action:s}}),(0,Z.Eg)(t),(0,p.Ux)(t),(0,p.on)(),(0,A.tl)();let{customBufferSize:n,defaultBufferSize:r}=(0,Z.LH)();e&&((0,R.A9)("routeStart.customBufferSize",{count:n}),(0,R.A9)("routeStart.defaultBufferSize",{count:r}),c.current={time:e,action:s})}}return(0,B.jsx)(x.Provider,{value:C?u:null,children:(0,B.jsx)(M.Provider,{value:c.current,children:e})})}let Y=()=>(0,r.useContext)(M),U=()=>(0,r.useContext)(x)},309300:(e,t,n)=>{n.d(t,{D3:()=>o,Hd:()=>s,jh:()=>l,rX:()=>i});var r=n(383340),a=n(302234);let o=e=>({...(0,r.Z)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),i=()=>{let{largestContentfulPaint:e}=(0,a.v2)();return{largestContentfulPaint:e||0}},l=(e,t)=>Object.keys(t).reduce((n,r)=>({...n,[`${e}${r}`]:t[r]}),{}),s=(e,t)=>Object.keys(e).reduce((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n,Object.freeze({}))},383340:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},840387:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(253926),a=n(383340),o=n(404373);let i=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function l(e,t){let{category:n,timing:l,isDeferred:s,isExternal:u,isVisuallyCompleteRequired:c}=e;return l.responseEnd&&("image"!==n||c)?{name:i(e),id:(0,o.Z)(),parentId:t,startTime:l.startTime,endTime:l.responseEnd,annotationMap:(0,a.Z)(l),binaryAnnotationMap:{category:(0,r.sk)(n),decodedBodySize:(0,r.cC)(l.decodedBodySize||0),initiatorType:(0,r.sk)(l.initiatorType),isDeferred:(0,r.qr)(s),isExternal:(0,r.qr)(u),name:(0,r.sk)(l.name),nextHopProtocol:(0,r.sk)(l.nextHopProtocol),transferSize:(0,r.cC)(l.transferSize||0)}}:null}},643778:(e,t,n)=>{n.d(t,{ku:()=>y,Jx:()=>$,PY:()=>A});var r=n(608029),a=n(297329),o=n(107860),i=n(309300),l=n(521525),s=n(819281),u=n(302234);let c=()=>(0,u.PJ)().reduce((e,{identifier:t,loadTime:n,renderTime:r})=>e[`${t}_loadTime`]?e[`${t}_dupe_loadTime`]?{...e,[`${t}_dupe_loadTime`]:n,[`${t}_dupe_renderTime`]:r}:e:{...e,[`${t}_loadTime`]:n,[`${t}_renderTime`]:r},Object.freeze({}));var d=n(383340),p=n(146935),m=n(279600);let f=e=>{let t=(0,m.y0)();return e.reduce((e,{name:n,match:r})=>t.filter(e=>r(e)).slice(0,2).reduce((e,t,r)=>({...e,...(0,i.jh)(`${n}${r?"_dupe1":""}_`,(0,d.Z)(t))}),e),Object.freeze({}))},h=e=>{if("pin_closeup"===e){let e=(0,p.Z)();return f([{name:"mainImage",match:({name:t})=>t===e},{name:"PinResource",match:({name:e})=>e.includes("PinResource")}])}return{}};var _=n(793250),g=n(363404),E=n(840387),C=n(396596),L=n(59648),S=n(404373);let w=(0,r.XV)("LightStopwatch"),b=()=>{let e=[],t=null;return window.PerformanceObserver&&(t=(0,L.Z)({entryTypes:["resource"]},t=>{(e=e.concat(t.getEntries())).length>1e3&&(e=e.slice(-1e3))})),{get:()=>e,disconnect:()=>{t&&t.disconnect()}}},v={},$=({annotateExperiments:e,annotateMarks:t,annotateResourceTimingForSurface:n,name:r,pwtStaticContext:u})=>{let d=b(),p=(0,C.Z)(u.fullPath),m=!0,f={...p?{pagePath:{value:p,type:"STRING"}}:{}};(0,a.A9)(`TIMING.${r}`,{tags:{isAuth:u.isAuthenticated}});let L={type:"stopwatch",name:r,navigationType:"initial_app_load"},$={abort:e=>{if(!m){(0,a.H)("duplicate_abort_action",{action:r});return}m=!1,(0,g.Z)({metricId:L,pwtStaticContext:u,result:{type:"ABORT",reason:e}})},error:(e,t)=>{let n={...t,action:r};if(!m){(0,a.H)("duplicate_error_action",n);return}e&&(0,a.H)(e,n),d&&d.disconnect(),m=!1},stop:p=>{if(!m){(0,a.H)("duplicate_stop_action",{action:r});return}m=!1,d.disconnect();let C=(0,S.Z)(),w=(0,s.Z)(),b=d.get(),v={type:"COMPLETE",traceId:(0,S.Z)(),startTime:0,endTime:p,spans:[{name:"network_resources",id:C,startTime:0,endTime:p,annotationMap:{},binaryAnnotationMap:{},parentId:null},...b.map(e=>(0,E.Z)((0,_.p)(e,[]),C)).filter(Boolean)],annotationMap:{...(0,i.jh)("resource_",n?h(n):{}),...(0,i.jh)("element_",c()),...(0,i.jh)("mark_",t&&t.length?(0,i.Hd)((0,o.gQ)(),t):{}),...(0,i.jh)("browser_",w?(0,i.D3)(w):{})},binaryAnnotationMap:(0,l.ng)({annotateExperiments:e,metricId:L,pwtStaticContext:u,performanceResourceTimings:b,binaryAnnotations:f})};(0,g.Z)({metricId:L,pwtStaticContext:u,result:v,isAuth:u.isAuthenticated})},addBinaryAnnotation:(e,t,n)=>{w(`adding binary annotation {${e}: ${String(t)}}`),f={...f,[e]:{value:t,type:n}}}};return v[r]=$,$},R=e=>v[e],A=e=>!!R(e),y=({stopwatchName:e,binaryAnnotationName:t,value:n,annotationType:r})=>{let a=R(e);a&&a.addBinaryAnnotation(t,n,r)}},663678:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>{let{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${r&&"socialBot"||n&&"bot"||"nonbot"}.${t}`}},146935:(e,t,n)=>{n.d(t,{Z:()=>a,f:()=>r});let r="closeupImage",a=()=>{if(!document.querySelector)return null;let e=document.querySelector('head>link[rel="preload"][as="image"][href^="https://i.pinimg.com/"]');return e instanceof HTMLLinkElement?e.href:null}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/97315-39fddce0c948012b.mjs.map