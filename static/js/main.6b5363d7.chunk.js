(this.webpackJsonptrelloclone=this.webpackJsonptrelloclone||[]).push([[0],{19:function(e,t,a){e.exports={card:"TrelloList_card__vsHy9",cardsDisplay:"TrelloList_cardsDisplay__3hWB7"}},20:function(e,t,a){e.exports={card:"TrelloActionButton_card__u_MbO",Button:"TrelloActionButton_Button__1PYG2"}},25:function(e,t,a){e.exports={App:"App_App__1uZfD",home:"App_home__29bxK"}},26:function(e,t,a){e.exports={card:"Card_card__rEv4x"}},31:function(e,t,a){e.exports=a(44)},41:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),l=a(2),d=a(4),o=a(22),s=a(7),p=2,u=6,f=[{title:"today",id:"list-".concat(0),cards:[{id:"card-".concat(0),text:"wake up"},{id:"card-".concat(1),text:"have breakfast"}]},{title:"learning",id:"list-".concat(1),cards:[{id:"card-".concat(2),text:"html"},{id:"card-".concat(3),text:"css"},{id:"card-".concat(4),text:"javascript"},{id:"card-".concat(5),text:"react"}]}],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":var a={title:t.payload.title,id:"list-".concat(p),cards:[]};return p+=1,[].concat(Object(s.a)(e),[a]);case"ADD_CARD":var n={id:"card-".concat(u),text:t.payload.text};u+=1;var r=e.map((function(e){return e.id===t.payload.id?Object(o.a)(Object(o.a)({},e),{},{cards:[].concat(Object(s.a)(e.cards),[n])}):e}));return r;case"DRAG_HAPPENED":var c=t.payload,i=c.droppableIdStart,l=c.droppableIdEnd,d=c.droppableIndexStart,m=c.droppableIndexEnd,E=c.type,y=Object(s.a)(e);if("list"===E){var b=y.splice(d,1);return y.splice.apply(y,[m,0].concat(Object(s.a)(b))),y}if(i===l){var v,x=e.find((function(e){return i===e.id})),g=x.cards.splice(d,1);(v=x.cards).splice.apply(v,[m,0].concat(Object(s.a)(g)))}if(i!==l){var h,I=e.find((function(e){return i===e.id})),_=I.cards.splice(d,1),D=e.find((function(e){return l===e.id}));(h=D.cards).splice.apply(h,[m,0].concat(Object(s.a)(_)))}return y;case"DELETE_CARD":var j=t.payload,A=j.listId,O=j.cardId,w=Object(s.a)(e),C=e.find((function(e){return e.id===A})),S=C.cards.filter((function(e){return e.id!==O}));return C.cards=S,w;case"DELETE_LIST":var T=t.payload.listId,k=e.filter((function(e){return e.id!==T}));return k;default:return e}},E=(a(41),a(6)),y=a(25),b=a(15),v=a.n(b),x=a(19),g=a(27),h=a.n(g),I=a(26),_=function(e){var t=Object(l.c)();return r.a.createElement(E.b,{draggableId:String(e.id),index:e.index},(function(a){return r.a.createElement("div",Object.assign({ref:a.innerRef},a.draggableProps,a.dragHandleProps,{className:I.card}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("p",null,e.content),r.a.createElement("div",{onClick:function(){return t((a=e.listId,n=e.id,{type:"DELETE_CARD",payload:{listId:a,cardId:n}}));var a,n},style:{}},r.a.createElement(h.a,null))))}))},D=a(21),j=a(28),A=a.n(j),O=a(29),w=a(20),C=function(e){var t=Object(n.useState)(!1),a=Object(D.a)(t,2),c=a[0],i=a[1],d=Object(n.useState)(),o=Object(D.a)(d,2),s=o[0],p=o[1],u=Object(l.c)(),f=function(){i(!c)},m=e.list?"Add another list":"Add another card",E=e.list?1:.5,y=e.list?"white":"inherit",b=e.list?"rgba(0,0,0,0.15)":"inherit",x=r.a.createElement("div",{onClick:f,style:{display:"flex",flexDirection:"row",opacity:E,color:y,backgroundColor:b,paddingLeft:"10px",width:"240px",cursor:"pointer",height:"35px"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(A.a,{fontSize:"small"})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("p",{style:{margin:0,width:"220px"}},m))),g=e.list?"Add list":"Enter the title for your card",h=e.list?"Add List":"Add Card",I=r.a.createElement("div",null,r.a.createElement("div",{className:w.card,style:{minHeight:"85px"}},r.a.createElement(O.a,{placeholder:g,autoFocus:!0,onBlur:f,value:s,onChange:function(e){p(e.target.value)},style:{resize:"none",width:"100%",outline:"none",border:"none"}})),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("button",{onMouseDown:e.list?function(){s&&u({type:"ADD_LIST",payload:{title:s}}),p()}:function(){return t=e.id,s&&u({type:"ADD_CARD",payload:{id:t,text:s}}),void p();var t},className:w.Button},h),r.a.createElement("div",{style:{display:"flex",flexDirection:"center",alignItems:"center"}},r.a.createElement(v.a,null))));return r.a.createElement(r.a.Fragment,null,c?I:x)},S=function(e){var t=Object(l.c)(),a=e.list;return r.a.createElement(E.b,{draggableId:String(a.id),index:e.index},(function(n){return r.a.createElement("div",Object.assign({},n.draggableProps,{ref:n.innerRef},n.dragHandleProps,{className:x.card}),r.a.createElement(E.c,{droppableId:String(a.id)},(function(n){return r.a.createElement("div",Object.assign({},n.droppableProps,{ref:n.innerRef}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("h4",null,a.title),r.a.createElement("div",{onClick:function(){return t((a=e.listId,console.log("delete list"),{type:"DELETE_LIST",payload:{listId:a}}));var a}},r.a.createElement(v.a,null))),r.a.createElement("div",{className:x.cardsDisplay},a.cards.map((function(e,t){return r.a.createElement(_,{key:e.id,content:e.text,listId:a.id,id:e.id,index:t})})),n.placeholder),r.a.createElement(C,{id:a.id}))})))}))};var T=function(){var e=Object(l.d)((function(e){return e})),t=Object(l.c)();return r.a.createElement(E.a,{onDragEnd:function(e){var a=e.destination,n=e.source,r=e.draggableId,c=e.type;a&&t(function(e,t,a,n,r,c){return{type:"DRAG_HAPPENED",payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexStart:a,droppableIndexEnd:n,draggableId:r,type:c}}}(n.droppableId,a.droppableId,n.index,a.index,r,c))}},r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center",margin:0}},"Trello Clone"),r.a.createElement(E.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(t){return r.a.createElement("div",Object.assign({},t.droppableProps,{ref:t.innerRef,className:y.home}),e.map((function(e,t){return r.a.createElement(S,{key:e.id,list:e,listId:e.id,index:t})})),t.placeholder,r.a.createElement(C,{list:!0}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=d.c,L=Object(d.d)(m,k());i.a.render(r.a.createElement(l.a,{store:L},r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.6b5363d7.chunk.js.map