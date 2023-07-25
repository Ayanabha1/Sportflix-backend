"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[97],{2097:function(e,n,i){i.r(n),i.d(n,{default:function(){return j}});var s=i(4165),t=i(5861),a=i(9439),o=i(1245),l=i(184),c=(0,o.Z)((0,l.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),r=i(118),d=i(2791),v=i(7689),u=i(7788),m=i(2210),p=i(7988),h=i(5279),x=i(3093);var j=function(){var e,n=(0,v.UO)(),i=(0,v.s0)(),o=(0,d.useState)(0),j=(0,a.Z)(o,2),N=(j[0],j[1],(0,u.F7)()),f=(0,a.Z)(N,2),g=f[0],y=g.loggedIn,_=g.userData,b=(g.homeHidden,f[1]),k=(0,d.useState)({}),D=(0,a.Z)(k,2),E=D[0],S=D[1],A=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b({type:"SET_LOADING",loading:!0}),e.next=3,x.V.get("/events/get-event-by-id",{params:{eventId:n}}).then((function(e){var n;S(null===(n=e.data)||void 0===n?void 0:n.event)})).catch((function(e){var n,i;b({type:"SET_RESPONSE_DATA",responseData:{message:null===e||void 0===e||null===(n=e.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.message,type:"error"}})}));case 3:b({type:"SET_LOADING",loading:!1});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b({type:"SET_LOADING",loading:!0}),n=null===E||void 0===E?void 0:E._id,e.next=4,x.V.post("/events/join-event",{eventId:n}).then((function(e){var n;b({type:"SET_RESPONSE_DATA",responseData:{message:null===(n=e.data)||void 0===n?void 0:n.message,type:"success"}}),i("/")})).catch((function(e){var n,i;b({type:"SET_RESPONSE_DATA",responseData:{message:null===e||void 0===e||null===(n=e.response)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.message,type:"error"}})}));case 4:b({type:"SET_LOADING",loading:!1});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){var e=n.id;A(e)}),[null===n||void 0===n?void 0:n.id]),(0,l.jsxs)("div",{className:"event-container",children:[(0,l.jsxs)("div",{className:"event-back",onClick:function(){i("/")},children:[(0,l.jsx)(c,{sx:{color:"rgb(162 161 161)",fontSize:"17px"}})," ",(0,l.jsx)("span",{children:"Back"})]}),(0,l.jsx)("div",{className:"event-main-container",children:(0,l.jsxs)("div",{className:"event-top",children:[(0,l.jsxs)("div",{className:"event-main-img-continer",children:[(0,l.jsx)("div",{className:"event-main-image-container",children:(0,l.jsx)("img",{className:"event-main-img",src:p})}),(0,l.jsxs)("div",{className:"event-more-img-container",children:[(0,l.jsx)("img",{className:"event-more-img",src:p}),(0,l.jsx)("img",{className:"event-more-img",src:m})]})]}),(0,l.jsx)("div",{className:"event-more-images-mobile",children:(0,l.jsxs)("div",{className:"event-more-images-container-mobile",children:[(0,l.jsx)("img",{className:"event-more-img-mobile",src:p}),(0,l.jsx)("img",{className:"event-more-img-mobile",src:m})]})}),(0,l.jsx)("div",{className:"event-info event-host",children:(0,l.jsxs)("span",{children:["Hosted by ",null===E||void 0===E?void 0:E.host," "]})}),(0,l.jsxs)("div",{className:"event-stickers",children:[y&&(null===_||void 0===_?void 0:_._id)===(null===E||void 0===E?void 0:E.host_id)&&(0,l.jsx)("div",{className:"card-sticker host-sticker",children:"Hosted by you"}),y&&function(){var e;return null===E||void 0===E||null===(e=E.participants)||void 0===e?void 0:e.includes(null===_||void 0===_?void 0:_._id)}()&&(0,l.jsx)("div",{className:"card-sticker participant-sticker",children:"Participant"}),new Date>new Date(null===E||void 0===E?void 0:E.date)&&(0,l.jsx)("div",{className:"card-sticker past-sticker",children:"Closed"})]}),(0,l.jsxs)("div",{className:"event-top-container",children:[(0,l.jsx)("div",{className:"event-info event-location",children:(0,l.jsxs)("h3",{children:[null===E||void 0===E?void 0:E.location," , ",null===E||void 0===E?void 0:E.city,", ",null===E||void 0===E?void 0:E.state,","," ",null===E||void 0===E?void 0:E.country]})}),(0,l.jsxs)("div",{className:"event-info-date-participants",children:[(0,l.jsx)("div",{className:"event-info event-date",children:function(e){var n=new Date(e),i=["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()],s=n.getDate(),t=n.getFullYear();return"".concat(i," ").concat(s," , ").concat(t)}(null===E||void 0===E?void 0:E.date)}),(0,l.jsxs)("div",{className:"event-people-info",children:[(0,l.jsxs)("div",{className:"event-info event-people",children:[(0,l.jsx)(r.Z,{className:"event-people-icon",sx:{marginRight:"3px"}}),(0,l.jsx)("span",{children:null===E||void 0===E||null===(e=E.participants)||void 0===e?void 0:e.length})]}),(null===E||void 0===E?void 0:E.max_players)&&(0,l.jsx)("div",{className:"event-info event-people",children:(0,l.jsxs)("span",{children:["Max players: ",null===E||void 0===E?void 0:E.max_players]})})]}),(null===E||void 0===E?void 0:E.min_age)&&(0,l.jsx)("div",{className:"event-info event-people",children:(0,l.jsxs)("span",{children:["Minimum age : ",null===E||void 0===E?void 0:E.min_age]})})]}),(null===E||void 0===E?void 0:E.description)&&(0,l.jsxs)("div",{className:"event-info event-desc",children:[(0,l.jsx)("p",{children:"Event details"}),null===E||void 0===E?void 0:E.description]}),(0,l.jsxs)("div",{className:"event-interaction-btns",children:[y&&function(){var e,n=null===_||void 0===_?void 0:_._id;return null===E||void 0===E||null===(e=E.participants)||void 0===e?void 0:e.includes(n)}()?(0,l.jsx)(h.Z,{variant:"contained",className:"event-join-btn",onClick:function(){return i("/chat")},children:"Chat"}):(0,l.jsx)(h.Z,{variant:"contained",className:"event-join-btn",onClick:function(){return Z()},children:"Participate"}),(0,l.jsx)(h.Z,{variant:"contained",className:"event-join-btn",onClick:function(){return b({type:"FLY_TO_LOCATION",id:E._id}),void b({type:"SET_HOME_HIDDEN",homeHidden:!0})},children:"Location"})]})]})]})})]})}}}]);
//# sourceMappingURL=97.67af0ed7.chunk.js.map