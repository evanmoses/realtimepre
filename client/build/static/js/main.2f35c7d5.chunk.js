(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{167:function(e,n,t){},168:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),r=t.n(i),a=t(37),o=t.n(a),l=(t(76),t(14)),s=t(6),d=t.n(s),u=t(10),h=t(3),p=t(2),j=t(38),f=t.n(j),b=t(9),x=t.n(b),g=t(22),O=t(66),m=t.n(O),v=t(4);var C=function(e){return"FOLD"===e?"#85c2c9":"CALL"===e?"#aecf84":"N/A"===e?"#dfdfdf":"#a484d1"},y=p.a.div.withConfig({displayName:"ActionRandomizer__FreqRandom",componentId:"sc-1j2ozj2-0"})(["background-color:rgba(64,64,64,0.8);padding:25px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:5px;display:flex;flex-direction:column;justify-content:center;;"]),w=p.a.div.withConfig({displayName:"ActionRandomizer__RandomNum",componentId:"sc-1j2ozj2-1"})(["font-size:50px;font-weight:500;line-height:50px;color:",";;"],(function(e){return C(e.action)})),k=p.a.div.withConfig({displayName:"ActionRandomizer__FreqAction",componentId:"sc-1j2ozj2-2"})(["font-size:25px;font-weight:500;line-height:25px;color:",";;"],(function(e){return C(e.action)})),q=function(e){return Object(c.jsxs)(y,{onClick:e.handleComboClick,children:[Object(c.jsx)(w,Object(v.a)(Object(v.a)({},e),{},{children:e.randomNum})),Object(c.jsx)(k,Object(v.a)(Object(v.a)({},e),{},{children:e.action}))]})};var F=p.a.div.withConfig({displayName:"Rangechart__RangeBox",componentId:"blvevy-0"})(["background-color:#414141;margin:10px;padding:10px;border-radius:5px;position:relative;;"]),_=p.a.div.withConfig({displayName:"Rangechart__RangeContainer",componentId:"blvevy-1"})(["display:flex;width:391px;height:391px;flex-wrap:wrap;border-top:1px solid #d4d4d4;border-left:1px solid #d4d4d4;background-color:#525252;;"]),B=p.a.div.withConfig({displayName:"Rangechart__ComboSquare",componentId:"blvevy-2"})(["width:30px;height:30px;border-right:1px solid #d4d4d4;border-bottom:1px solid #d4d4d4;display:flex;align-items:center;justify-content:center;font-size:0.6rem;user-select:none;;"]),S=p.a.div.withConfig({displayName:"Rangechart__FreqFill",componentId:"blvevy-3"})(["width:100%;display:flex;flex-direction:column;flex-wrap:no-wrap;align-self:flex-end;;"]),I=p.a.div.withConfig({displayName:"Rangechart__Freq",componentId:"blvevy-4"})(["width:100%;background-color:",";height:",";;"],(function(e){return e.color}),(function(e){return e.height})),N=p.a.div.withConfig({displayName:"Rangechart__ComboText",componentId:"blvevy-5"})(["position:relative;& div{display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:15px;right:0;bottom:0;}& p{background-color:rgba(82,82,82,.5);line-height:0.6rem;};"]),R=function(e){var n=Object(i.useState)(null),t=Object(h.a)(n,2),r=t[0],a=t[1],o=Object(g.useStateWithCallbackLazy)(!1),l=Object(h.a)(o,2),s=l[0],d=l[1],u=Object(i.useState)(Math.ceil(100*Math.random())),p=Object(h.a)(u,2),j=p[0],f=p[1],b=Object(i.useState)(""),x=Object(h.a)(b,2),O=x[0],m=x[1],v=function(){s||(m(y()),d(!0,(function(){a(setTimeout((function(){d(!1),f(Math.ceil(100*Math.random()))}),5e3))}))),s&&(d(!1),f(Math.ceil(100*Math.random())),clearTimeout(r))},C=function(n){e.setMouseDown(!0),e.handleFreqInput(e.currentCombo)},y=function(){var n=e.range.betRange[e.currentCombo],t=n.foldFreq,i=n.callFreq,r=n.raise;if(!t&&!i&&!r[0])return"N/A";if(void 0===t&&(t=0),void 0===i&&(i=0),t>j)return"FOLD";if(t+i>j)return"CALL";var a=r.map((function(e){return t+i+e.freq})),o=a.map((function(e,n){return a.slice(0,n+1).reduce((function(e,n){return e+n}))})).findIndex((function(e){return e>j}));return void 0===r[o]?"N/A":Object(c.jsxs)("div",{children:["RAISE",Object(c.jsx)("br",{}),r[o].size," BB"]})},w=function(n){var t=e.range.betRange[n],i=[];return i=t.raise?t.raise:null,Object(c.jsxs)(S,{children:[i[3]?Object(c.jsx)(I,{color:"#d1b684",height:"".concat(i[3].freq/100*29,"px")}):null,i[2]?Object(c.jsx)(I,{color:"#d19184",height:"".concat(i[2].freq/100*29,"px")}):null,i[1]?Object(c.jsx)(I,{color:"#d184ce",height:"".concat(i[1].freq/100*29,"px")}):null,i[0]?Object(c.jsx)(I,{color:"#a484d1",height:"".concat(i[0].freq/100*29,"px")}):null,t.callFreq?Object(c.jsx)(I,{color:"#aecf84",height:"".concat(t.callFreq/100*29,"px")}):null,t.foldFreq?Object(c.jsx)(I,{color:"#85c2c9",height:"".concat(t.foldFreq/100*29,"px")}):null]})};return Object(c.jsxs)(F,{children:[Object(c.jsx)(_,{children:e.range.betRange.map((function(n,t){return Object(c.jsxs)(B,{onMouseEnter:function(n){return function(n,t){var c=t;e.setCombo(c,(function(n){e.isMouseDown&&e.handleFreqInput(n)}))}(0,t)},onMouseDown:e.displayActive?v:C,children:[Object(c.jsx)(N,{children:Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:e.range.betRange[t].hand})})}),w(t)]},e.range.betRange[t].hand)}))}),s&&Object(c.jsx)(q,{action:O,randomNum:j,handleComboClick:v})]})};var A=p.a.div.withConfig({displayName:"Buttons__ButtonContainer",componentId:"ha4p6u-0"})(["display:flex;flex-direction:column;"]),P=p.a.div.withConfig({displayName:"Buttons__ButtonHeading",componentId:"ha4p6u-1"})(["font-size:14px;font-weight:500;width:100%;text-align:left;margin-bottom:6px;"]),z=p.a.div.withConfig({displayName:"Buttons__ButtonGroup",componentId:"ha4p6u-2"})(["margin-bottom:15px;"]),T=p.a.label.withConfig({displayName:"Buttons__ButtonLabel",componentId:"ha4p6u-3"})(["& > span{display:inline-block;border:1px solid #d4d4d4;margin:0;height:30px;width:60px;line-height:30px;text-align:center;@media (max-width:420px){width:45px;}}&:hover > span,&:active > span,&:focus > span &:checked{background-color:#702227;border:1px solid #d4d4d4;}"]),D=p.a.input.withConfig({displayName:"Buttons__CheckButton",componentId:"ha4p6u-4"})(["display:none;&:checked + span{background-color:#702227;border:1px solid #d4d4d4;}"]),L=function(e){var n=["UTG","HJ","CO","BTN","SB","BB"];return Object(c.jsxs)(A,{children:[Object(c.jsxs)(z,{children:[Object(c.jsx)(P,{children:"Hero Position"}),n.map((function(n){return Object(c.jsxs)(T,{children:[Object(c.jsx)(D,{type:"radio",name:"hero",value:n,checked:e.heroPosition===n,onChange:e.handleHeroChange}),Object(c.jsx)("span",{children:n})]},"hero".concat(n))}))]}),Object(c.jsxs)(z,{children:[Object(c.jsx)(P,{children:"Villain Position"}),n.map((function(n){return Object(c.jsxs)(T,{children:[Object(c.jsx)(D,{type:"radio",name:"villain",value:n,checked:e.villainPosition===n,onChange:e.handleVillainChange}),Object(c.jsx)("span",{children:n})]},"villain".concat(n))}))]}),Object(c.jsxs)(z,{children:[Object(c.jsx)(P,{children:"Facing Action"}),["N/A","CC","RAISE","3BET","SQZ","4BET","JAM"].map((function(n){return Object(c.jsxs)(T,{children:[Object(c.jsx)(D,{type:"radio",name:"action",value:n,checked:e.facingAction===n,onChange:e.handleActionChange}),Object(c.jsx)("span",{style:{width:"51.5px"},children:n})]},"facing".concat(n))}))]})]})};var M=p.a.div.withConfig({displayName:"SingleBar__Container",componentId:"sc-1pipxco-0"})(["width:15%;margin-right:5px;margin-bottom:10px;"]),E=p.a.div.withConfig({displayName:"SingleBar__FreqFill",componentId:"sc-1pipxco-1"})(["width:100%;height:100%;display:flex;flex-direction:column;flex-wrap:no-wrap;align-items:flex-end;;"]),H=p.a.div.withConfig({displayName:"SingleBar__Freq",componentId:"sc-1pipxco-2"})(["width:25px;background-color:",";height:",";;"],(function(e){return e.color}),(function(e){return e.height})),J=function(e){if(null===e.range||null===e.currentCombo)return Object(c.jsx)(M,{});var n=e.range.betRange[e.currentCombo],t=[];return t=n.raise?n.raise:null,Object(c.jsx)(M,{children:Object(c.jsxs)(E,{children:[t[3]?Object(c.jsx)(H,{color:"#d1b684",height:"".concat(t[3].freq/100*170,"px")}):null,t[2]?Object(c.jsx)(H,{color:"#d19184",height:"".concat(t[2].freq/100*170,"px")}):null,t[1]?Object(c.jsx)(H,{color:"#d184ce",height:"".concat(t[1].freq/100*170,"px")}):null,t[0]?Object(c.jsx)(H,{color:"#a484d1",height:"".concat(t[0].freq/100*170,"px")}):null,n.callFreq?Object(c.jsx)(H,{color:"#aecf84",height:"".concat(n.callFreq/100*150,"px")}):null,n.foldFreq?Object(c.jsx)(H,{color:"#85c2c9",height:"".concat(n.foldFreq/100*150,"px")}):null]})})};var K=p.a.div.withConfig({displayName:"FreqSelect__SelectContainer",componentId:"o7viv5-0"})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;align-items:flex-end;;"]),V=p.a.div.withConfig({displayName:"FreqSelect__SelectButtonContainer",componentId:"o7viv5-1"})(["display:flex;flex-direction:column;width:85%;margin-bottom:10px;;"]),G=p.a.div.withConfig({displayName:"FreqSelect__FreqButtonRow",componentId:"o7viv5-2"})(["display:flex;flex-direction:row;justify-content:left;align-items:center;margin:5px 10px 0 0;;"]),U=p.a.div.withConfig({displayName:"FreqSelect__InputContainer",componentId:"o7viv5-3"})(["width:70px;text-align:left;;"]),Q=p.a.div.withConfig({displayName:"FreqSelect__ControlButton",componentId:"o7viv5-4"})(["user-select:none;font-size:14px;padding:8px 0;font-weight:500;width:90px;border-radius:5px;cursor:pointer;background-color:#414141;margin-right:10px;&:hover,&:active{background-color:#525252;};"]),W=Object(p.a)(Q).withConfig({displayName:"FreqSelect__FreqButton",componentId:"o7viv5-5"})(["border:1px solid ",";background-color:transparent;width:50px;padding:3px 0;&:hover,&:active,&.active{background-color:",";};"],(function(e){return e.color}),(function(e){return e.color})),Z=p.a.input.withConfig({displayName:"FreqSelect__FreqInput",componentId:"o7viv5-6"})(["font-size:18px;width:40px;background-color:#414141;color:#d4d4d4;text-align:center;border-radius:3px;&:focus{background-color:#414141;box-shadow:0 0 0 2px #525252;}&::placeholder{color:#d4d4d4;};"]),X=p.a.div.withConfig({displayName:"FreqSelect__RaiseText",componentId:"o7viv5-7"})(["font-size:0.6rem;;"]),Y=function(e){return Object(c.jsxs)(K,{children:[Object(c.jsxs)(V,{children:[Object(c.jsxs)(G,{children:[Object(c.jsx)(W,{color:"#85c2c9",onClick:e.handleFoldClick,className:e.foldPicker&&"active",children:"FOLD"}),Object(c.jsxs)(U,{children:[Object(c.jsx)(Z,{type:"text",value:e.freqPicker[0],onChange:function(n){return e.handleFreqChange(n,0)}}),Object(c.jsx)("span",{children:"%"})]}),Object(c.jsx)(W,{style:{marginLeft:"20px"},color:"#aecf84",onClick:e.handleCallClick,className:e.callPicker&&"active",children:"CALL"}),Object(c.jsxs)(U,{children:[Object(c.jsx)(Z,{type:"text",value:e.freqPicker[1],onChange:function(n){return e.handleFreqChange(n,1)}}),Object(c.jsx)("span",{children:"%"})]})]}),Object(c.jsxs)(G,{style:{marginTop:"15px"},children:[Object(c.jsx)(W,{color:"#a484d1",onClick:e.handleRaiseClick,className:e.raisePicker&&"active",children:"RAISE"}),Object(c.jsx)(X,{children:"Raise size, smallest to largest"})]}),Object(c.jsxs)(G,{children:[Object(c.jsxs)(U,{children:[Object(c.jsx)(Z,{type:"text",value:e.freqPicker[2],onChange:function(n){return e.handleFreqChange(n,2)}}),Object(c.jsx)("span",{children:"%"})]}),Object(c.jsxs)(U,{children:[Object(c.jsx)(Z,{type:"text",value:e.freqPicker[3],onChange:function(n){return e.handleFreqChange(n,3)}}),Object(c.jsx)("span",{children:"%"})]}),Object(c.jsxs)(U,{children:[Object(c.jsx)(Z,{type:"text",value:e.freqPicker[4],onChange:function(n){return e.handleFreqChange(n,4)}}),Object(c.jsx)("span",{children:"%"})]}),Object(c.jsxs)(U,{children:[Object(c.jsx)(Z,{type:"text",value:e.freqPicker[5],onChange:function(n){return e.handleFreqChange(n,5)}}),Object(c.jsx)("span",{children:"%"})]})]}),Object(c.jsxs)(G,{children:[Object(c.jsxs)(U,{children:[Object(c.jsx)(Z,{type:"text",value:e.sizePicker[0],onChange:function(n){return e.handleSizeChange(n,0)}}),Object(c.jsx)("span",{children:"BB"})]}),Object(c.jsxs)(U,{children:[Object(c.jsx)(Z,{type:"text",value:e.sizePicker[1],onChange:function(n){return e.handleSizeChange(n,1)}}),Object(c.jsx)("span",{children:"BB"})]}),Object(c.jsxs)(U,{children:[Object(c.jsx)(Z,{type:"text",value:e.sizePicker[2],onChange:function(n){return e.handleSizeChange(n,2)}}),Object(c.jsx)("span",{children:"BB"})]}),Object(c.jsxs)(U,{children:[Object(c.jsx)(Z,{type:"text",value:e.sizePicker[3],onChange:function(n){return e.handleSizeChange(n,3)}}),Object(c.jsx)("span",{children:"BB"})]})]}),Object(c.jsxs)(G,{style:{marginTop:"15px"},children:[Object(c.jsx)(Q,{onClick:e.handleLoadClick,children:"LOAD"}),Object(c.jsx)(Q,{onClick:e.handleResetClick,children:"RESET"}),Object(c.jsx)(Q,{onClick:e.handleSubmitClick,children:"SUBMIT"})]})]}),Object(c.jsx)(J,Object(v.a)({},e))]})};var $=p.a.div.withConfig({displayName:"FreqBars__Container",componentId:"vy50b9-0"})(["display:flex;flex-direction:row;width:60%;justify-content:space-around;;"]),ee=p.a.div.withConfig({displayName:"FreqBars__ActionCol",componentId:"vy50b9-1"})(["display:flex;flex-direction:column;justify-content:flex-end;align-items:center;;"]),ne=p.a.div.withConfig({displayName:"FreqBars__RaiseBars",componentId:"vy50b9-2"})(["display:flex;flex-direction:row;justify-content:center;;"]),te=p.a.div.withConfig({displayName:"FreqBars__Bar",componentId:"vy50b9-3"})(["background-color:",";width:25px;display:flex;justify-content:center;align-items:center;color:#702227;height:",";;"],(function(e){return e.color}),(function(e){return e.height})),ce=p.a.div.withConfig({displayName:"FreqBars__FreqText",componentId:"vy50b9-4"})(["font-size:12px;font-weight:500;& > div{font-size:8px;};"]),ie=p.a.div.withConfig({displayName:"FreqBars__ActionText",componentId:"vy50b9-5"})(["font-size:20px;font-weight:500;height:30px;;"]),re=function(e){var n=e.range.betRange[e.currentCombo],t=n.raise,i=function(e){return 0===e?"#a484d1":1===e?"#d184ce":2===e?"#d19184":3===e?"#d1b684":void 0};return Object(c.jsxs)($,{children:[n.foldFreq?Object(c.jsxs)(ee,{children:[Object(c.jsxs)(ce,{children:[n.foldFreq,"%"]}),Object(c.jsx)(te,{color:"#85c2c9",height:"".concat(1.5*n.foldFreq,"px")}),Object(c.jsx)(ie,{children:"FOLD"})]},"foldCol"):null,n.callFreq?Object(c.jsxs)(ee,{children:[Object(c.jsxs)(ce,{children:[n.callFreq,"%"]}),Object(c.jsx)(te,{color:"#aecf84",height:"".concat(1.5*n.callFreq,"px")}),Object(c.jsx)(ie,{children:"CALL"})]},"callCol"):null,t[0]?[t[0].freq?Object(c.jsxs)(ee,{children:[Object(c.jsx)(ne,{children:t.map((function(e,n){return Object(c.jsxs)(ee,{children:[Object(c.jsxs)(ce,{children:[e.freq,"%"]}),Object(c.jsx)(te,{color:i(n),height:"".concat(1.5*e.freq,"px"),children:Object(c.jsxs)(ce,{children:[e.size,Object(c.jsx)("div",{children:"BB"})]})})]},"ActionCol:".concat(n))}))}),Object(c.jsx)(ie,{children:"RAISE"})]},"raiseCol"):null]:null]})};var ae=p.a.div.withConfig({displayName:"FreqDisplay__FreqContainer",componentId:"sc-1x7avf1-0"})(["display:flex;flex-direction:row;justify-content:",";width:100%;;"],(function(e){return e.displayActive?"center":"space-around"})),oe=function(e){return Object(c.jsx)(ae,Object(v.a)(Object(v.a)({},e),{},{children:e.displayActive?Object(c.jsx)(re,Object(v.a)({},e)):Object(c.jsx)(Y,Object(v.a)({},e))}))};var le=p.a.div.withConfig({displayName:"Dash__DashBox",componentId:"xqmcxy-0"})(["padding:10px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;;"]),se=function(e){return Object(c.jsxs)(le,{children:[Object(c.jsx)("div",{children:Object(c.jsx)(L,Object(v.a)({},e))}),Object(c.jsx)(oe,Object(v.a)({},e))]})},de=t(70).a.mixin({width:400,padding:25,confirmButtonText:"Confirm"}),ue=(t(167),["A","K","Q","J","T","9","8","7","6","5","4","3","2"]),he=function(e){var n=Array.from(ue);return n.reverse(),n.indexOf(e)+2},pe=ue.map((function(e,n,t){return t.map((function(n){return n+e}))})).flat().map((function(e){return e.split("").reduce((function(e,n){return he(e)>he(n)?e+n+"o":he(n)>he(e)?n+e:he(e)===he(n)?e+n:void 0}),"")})).map((function(e){return e.length<3&&e.charAt(0)!==e.charAt(1)?e+"s":e})),je={heroPos:"",vilPos:"",facing:"",stackDepth:100,betRange:Object(l.a)(Array(169).keys()).map((function(e,n){var t=Object.assign({},e);return t.hand=pe[n],t.foldFreq=0,t.callFreq=0,t.raise=[],t}))},fe=function e(n,t){if(n===t)return!0;if("object"!=typeof n||"object"!=typeof t||null==n||null==t)return!1;var c=Object.keys(n),i=Object.keys(t);if(c.length!=i.length)return!1;for(var r=0,a=c;r<a.length;r++){var o=a[r];if(!i.includes(o))return!1;if("function"===typeof n[o]||"function"===typeof t[o]){if(n[o].toString()!=t[o].toString())return!1}else if(!e(n[o],t[o]))return!1}return!0},be=m()(de);var xe=p.a.div.withConfig({displayName:"App__MainContainer",componentId:"sc-1tc4o2e-0"})(["text-align:center;padding:10px;color:#d4d4d4;"]),ge=p.a.div.withConfig({displayName:"App__AppRow",componentId:"sc-1tc4o2e-1"})(["display:flex;flex-wrap:wrap;justify-content:center;"]),Oe=p.a.label.withConfig({displayName:"App__ButtonLabel",componentId:"sc-1tc4o2e-2"})(["& > span{display:inline-block;border:1px solid #d4d4d4;margin:0;height:30px;width:150px;line-height:30px;text-align:center;@media (max-width:420px){width:45px;}}&:hover > span,&:active > span,&:focus > span &:checked{background-color:#702227;border:1px solid #d4d4d4;}"]),me=p.a.input.withConfig({displayName:"App__DispButton",componentId:"sc-1tc4o2e-3"})(["display:none;&:checked + span{background-color:#702227;border:1px solid #d4d4d4;}"]),ve=function(){var e=Object(i.useState)(!0),n=Object(h.a)(e,2),t=n[0],r=n[1],a=Object(g.useStateWithCallbackLazy)(0),o=Object(h.a)(a,2),s=o[0],p=o[1],j=Object(i.useState)("BB"),b=Object(h.a)(j,2),O=b[0],m=b[1],v=Object(i.useState)("BTN"),C=Object(h.a)(v,2),y=C[0],w=C[1],k=Object(i.useState)("RAISE"),q=Object(h.a)(k,2),F=q[0],_=q[1],B=Object(i.useState)(["BB","BTN","RAISE"]),S=Object(h.a)(B,2),I=S[0],N=S[1],A=Object(i.useState)(je),P=Object(h.a)(A,2),z=P[0],T=P[1],D=Object(i.useState)(!1),L=Object(h.a)(D,2),M=L[0],E=L[1],H=Object(i.useState)(!1),J=Object(h.a)(H,2),K=J[0],V=J[1],G=Object(i.useState)(!1),U=Object(h.a)(G,2),Q=U[0],W=U[1],Z=Object(i.useState)([100,0,0,0,0,0]),X=Object(h.a)(Z,2),Y=X[0],$=X[1],ee=Object(i.useState)([3,0,0,0]),ne=Object(h.a)(ee,2),te=ne[0],ce=ne[1],ie=Object(i.useState)(!1),re=Object(h.a)(ie,2),ae=(re[0],re[1]),oe=Object(i.useState)(!1),le=Object(h.a)(oe,2),de=le[0],ue=le[1],he=function(e){var n="true"===e.target.value;r(n)},pe=function(e,n,t){N([e,n,t])},ve=Object(i.useCallback)(function(){var e=Object(u.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]),Ce="http://localhost:9000",ye=Object(i.useCallback)(Object(u.a)(d.a.mark((function e(){var n,t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x.a.CancelToken.source(),e.prev=1,e.next=4,x.a.get("".concat(Ce,"/ranges"),{params:{heroPos:I[0],vilPos:I[1],facing:I[2],stackDepth:100}},{cancelToken:n.token});case 4:return t=e.sent,e.next=7,t.data;case 7:if(null!==(c=e.sent)){e.next=10;break}return e.abrupt("return",T(je));case 10:T(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:return e.abrupt("return",(function(){return n.cancel("axios request cancelled")}));case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[I]),we=function(){var e=Object(u.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x.a.CancelToken.source(),e.prev=1,e.next=4,x.a.get("".concat(Ce,"/ranges"),{params:{heroPos:O,vilPos:y,facing:F,stackDepth:100}},{cancelToken:n.token});case 4:if(null===e.sent.data){e.next=9;break}return e.abrupt("return",be.fire({title:"Range for this scenario already exists, press confirm to overwrite",showCancelButton:!0,reverseButtons:!0}).then((function(e){e.isConfirmed?ke():e.isDismissed&&be.fire({title:"Range not Posted",icon:"error",confirmButtonText:"OK"})})));case 9:ke();case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:return e.abrupt("return",(function(){return n.cancel("axios request cancelled")}));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=Object(u.a)(d.a.mark((function e(){var n,t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x.a.CancelToken.source(),e.prev=1,e.next=4,x.a.post("".concat(Ce,"/ranges"),{heroPos:O,vilPos:y,facing:F,stackDepth:100,betRange:z.betRange},{cancelToken:n.token});case 4:return t=e.sent,e.next=7,t.status;case 7:c=e.sent,console.log(c),200===c&&be.fire({title:"Nice!",text:"Range has been posted to Database",icon:"success",confirmButtonText:"OK"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),be.fire({title:"Error Posting to Database",text:"Please try again later",icon:"error",confirmButtonText:"OK"}),console.log(e.t0);case 16:return e.abrupt("return",(function(){return n.cancel("axios request cancelled")}));case 17:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){ye()}),[ye,ve]),Object(c.jsxs)(xe,{onMouseUp:function(){ue(!1)},children:[Object(c.jsxs)(ge,{children:[Object(c.jsxs)(Oe,{children:[Object(c.jsx)(me,{type:"radio",name:"radio",value:"true",checked:!0===t,onChange:he}),Object(c.jsx)("span",{children:"Display Range"})]}),Object(c.jsxs)(Oe,{children:[Object(c.jsx)(me,{type:"radio",name:"radio",value:"false",checked:!1===t,onChange:he}),Object(c.jsx)("span",{children:"Create Range"})]})]}),Object(c.jsxs)(ge,{children:[Object(c.jsx)(R,{range:z,currentCombo:s,setCombo:p,displayActive:t,handleFreqInput:function(e){if(!M&!K&!Q)return be.fire(Object(c.jsx)("div",{children:"No Action Selected"})).then(ue(!1));var n=Y.map((function(e){return parseInt(e||0)})),t=te.map((function(e){return parseFloat(e||0)}));if(0===n.reduce((function(e,n){return e+n})))return be.fire(Object(c.jsx)("div",{children:"No Frequency Selected"})).then(ue(!1));if(n.reduce((function(e,n){return e+n}))>100)return be.fire(Object(c.jsx)("div",{children:"Total Frequency Greater Than 100"})).then(ue(!1));var i=n.slice(2),r=f()(z.betRange[e]);r.foldFreq=M&&n[0]||0,r.callFreq=K&&n[1]||0,Q?(r.raise=[{freq:0,size:0}],i.forEach(function(){var e=Object(u.a)(d.a.mark((function e(n,c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===i[c]){e.next=2;break}return e.abrupt("return",r.raise[c]={freq:i[c],size:t[c]});case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())):r.raise=[{freq:0,size:0}],fe(r,z.betRange[e])&&(r.foldFreq=0,r.callFreq=0,r.raise={freq:0,size:0});var a=f()(z);a.betRange[e]=r,ae((function(e){return!e})),ve(a)},isMouseDown:de,setMouseDown:ue}),Object(c.jsx)(se,{range:z,currentCombo:s,displayActive:t,heroPosition:O,villainPosition:y,facingAction:F,handleHeroChange:function(e){var n=e.target.value;m(n),t&&pe(n,y,F)},handleVillainChange:function(e){var n=e.target.value;w(n),t&&pe(O,n,F)},handleActionChange:function(e){var n=e.target.value;_(n),t&&pe(O,y,n)},handleLoadClick:function(e){pe(O,y,F)},foldPicker:M,callPicker:K,raisePicker:Q,freqPicker:Y,sizePicker:te,handleFoldClick:function(e){E((function(e){return!e}))},handleCallClick:function(e){V((function(e){return!e}))},handleRaiseClick:function(e){W((function(e){return!e}))},handleFreqChange:function(e,n){var t=e.target.value,c=Object(l.a)(Y);c[n]=t,$(c)},handleSizeChange:function(e,n){var t=e.target.value,c=Object(l.a)(te);c[n]=t,ce(c)},handleSubmitClick:function(){be.fire({title:"Enter password to post range",input:"password",confirmButtonText:"Submit",showCancelButton:!0,reverseButtons:!0,preConfirm:function(e){"setNewRange"!==e?be.showValidationMessage("Incorrect Password"):we()}})},handleResetClick:function(e){var n=je;n.heroPos=O,n.vilPos=y,n.facing=F,ve(n)}})]})]})},Ce=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,169)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(ve,{})}),document.getElementById("root")),Ce()},76:function(e,n,t){}},[[168,1,2]]]);
//# sourceMappingURL=main.2f35c7d5.chunk.js.map