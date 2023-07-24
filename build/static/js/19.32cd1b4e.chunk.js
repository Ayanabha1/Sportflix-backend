"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[19],{4019:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var s=t(4165),i=t(1413),r=t(5861),a=t(9439),l=t(1491),o=t(2791),d=t(7689),c=t(3093),v=t(7788),u=t(7022),h=t(184);var g=function(){var e,n,t,g,p,f,m=(0,d.s0)(),x=(0,v.F7)(),j=(0,a.Z)(x,2),N=(j[0].loading,j[1]),Z=(0,o.useState)([]),E=(0,a.Z)(Z,2),y=E[0],w=E[1],S=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var n,t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N({type:"SET_LOADING",loading:!0}),r=new Date,e.next=4,c.V.get("/events/get-registered-events").then((function(e){var s,i;n=null===(s=e.data.events)||void 0===s?void 0:s.filter((function(e){return new Date(e.date)>=r})),t=null===(i=e.data.events)||void 0===i?void 0:i.filter((function(e){return new Date(e.date)<r})),w({upcoming:n,past:t})})).catch((function(e){var n,t;N({type:"SET_RESPONSE_DATA",responseData:{message:(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Something went wrong ... please try again",type:"error"}})}));case 4:return e.next=6,c.V.get("/events/get-hosted-events").then((function(e){w((function(n){var t;return(0,i.Z)((0,i.Z)({},n),{},{hosted:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.hostedEvents})}))})).catch((function(e){var n,t;N({type:"SET_RESPONSE_DATA",responseData:{message:(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"No event hosted by you",type:"error"}})}));case 6:N({type:"SET_LOADING",loading:!1});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){S()}),[]),(0,h.jsxs)("div",{className:"RegEvents",children:[(0,h.jsxs)("h2",{className:"reg-head",children:[(0,h.jsx)("div",{className:"reg-back-container",onClick:function(){return m(-1)},children:(0,h.jsx)(l.Z,{})}),(0,h.jsx)("span",{children:"Registered Events"})]}),(0,h.jsxs)("div",{className:"reg-events-container",children:[0!==(null===y||void 0===y||null===(e=y.hosted)||void 0===e?void 0:e.length)&&(0,h.jsxs)("div",{className:"reg-events-inner-container",children:[(0,h.jsx)("span",{children:"Hosted events"}),(0,h.jsx)("div",{className:"reg-events-container-main",children:null===y||void 0===y||null===(n=y.hosted)||void 0===n?void 0:n.map((function(e,n){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,{event:e})})}))})]}),0!==(null===y||void 0===y||null===(t=y.upcoming)||void 0===t?void 0:t.length)&&(0,h.jsxs)("div",{className:"reg-events-inner-container",children:[(0,h.jsx)("span",{children:"Upcoming events"}),(0,h.jsx)("div",{className:"reg-events-container-main",children:null===y||void 0===y||null===(g=y.upcoming)||void 0===g?void 0:g.map((function(e,n){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,{event:e})})}))})]}),0!==(null===y||void 0===y||null===(p=y.past)||void 0===p?void 0:p.length)&&(0,h.jsxs)("div",{className:"reg-events-inner-container",children:[(0,h.jsx)("span",{children:"Past events"}),(0,h.jsx)("div",{className:"reg-events-container-main",children:null===y||void 0===y||null===(f=y.past)||void 0===f?void 0:f.map((function(e,n){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,{event:e})})}))})]})]})]})}},1491:function(e,n,t){var s=t(1245),i=t(184);n.Z=(0,s.Z)((0,i.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeftOutlined")}}]);
//# sourceMappingURL=19.32cd1b4e.chunk.js.map