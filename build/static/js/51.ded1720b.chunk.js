"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[51],{1051:function(e,i,l){l.r(i),l.d(i,{default:function(){return h}});var n=l(4165),s=l(5861),a=l(9439),d=l(1491),r=l(1245),o=l(184),c=(0,r.Z)((0,o.jsx)("path",{d:"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 5.63l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"}),"ModeEditRounded"),t=(0,r.Z)((0,o.jsx)("path",{d:"M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"}),"ArrowForwardRounded"),f=l(2791),p=l(7689),v=l(3093),u=l(7788);var h=function(){var e,i,l=(0,u.F7)(),r=(0,a.Z)(l,2),h=r[0],m=(h.loading,h.loggedIn),x=h.userData,j=r[1],N=(0,p.s0)(),g=(0,p.s0)(),S=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j({type:"SET_LOADING",loading:!0}),!localStorage.getItem("AUTH_TOKEN")){e.next=7;break}return e.next=5,v.V.get("/auth/getUser").then((function(e){j({type:"SET_USER_DATA",userData:e.data}),j({type:"SET_LOGIN_STATUS",loggedIn:!0})})).catch((function(e){localStorage.removeItem("AUTH_TOKEN"),j({type:"SET_LOGIN_STATUS",loggedIn:!1}),j({type:"SET_USER_DATA",userData:{}})}));case 5:e.next=8;break;case 7:j({type:"SET_LOGIN_STATUS",loggedIn:!1});case 8:j({type:"SET_LOADING",loading:!1});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.useEffect)((function(){m?S():N("/")}),[m]),(0,o.jsx)("div",{className:"profile",children:(0,o.jsxs)("div",{className:"profile-container",children:[(0,o.jsxs)("div",{className:"profile-header-container",children:[(0,o.jsx)("div",{className:"profile-back-container",onClick:function(){return g(-1)},children:(0,o.jsx)(d.Z,{})}),(0,o.jsx)("span",{children:"My Profile"})]}),(0,o.jsxs)("div",{className:"profile-main-container",children:[(0,o.jsxs)("div",{className:"profile-top",children:[(0,o.jsx)("div",{className:"profile-picture-container",children:(0,o.jsx)(c,{sx:{fontSize:"15px",background:"rgba(0,0,0,0.5)",padding:"3px",borderRadius:"50%"},className:"profile-picture-edit-btn"})}),(0,o.jsxs)("div",{className:"profile-top-info",children:[(0,o.jsx)("span",{children:null===x||void 0===x?void 0:x.name}),(0,o.jsx)("span",{children:null===x||void 0===x?void 0:x.age})]})]}),(0,o.jsx)("div",{className:"profile-box profile-mid",children:(0,o.jsx)("div",{className:"profile-mid-container",children:(0,o.jsxs)("div",{className:"profile-info-container",children:[(0,o.jsxs)("div",{className:"profile-mid-info",children:[(0,o.jsx)("div",{className:"profile-field-name",children:"Display Name"}),(0,o.jsxs)("div",{className:"profile-field-value",children:[(0,o.jsx)("span",{children:null===x||void 0===x?void 0:x.name}),(0,o.jsx)("button",{children:"Edit"})]})]}),(0,o.jsxs)("div",{className:"profile-mid-info",children:[(0,o.jsx)("div",{className:"profile-field-name",children:"Date of birth"}),(0,o.jsxs)("div",{className:"profile-field-value",children:[(0,o.jsx)("span",{children:function(e){var i=new Date(e),l=i.getDate(),n=i.getMonth()+1,s=i.getFullYear();return l<10&&(l="0".concat(l)),n<10&&(n="0".concat(n)),"".concat(l,"-").concat(n,"-").concat(s)}(null===x||void 0===x?void 0:x.dob)}),(0,o.jsx)("button",{children:"Edit"})]})]}),(0,o.jsxs)("div",{className:"profile-mid-info",children:[(0,o.jsx)("div",{className:"profile-field-name",children:"Email"}),(0,o.jsxs)("div",{className:"profile-field-value",children:[(0,o.jsx)("span",{children:null===x||void 0===x?void 0:x.email}),(0,o.jsx)("button",{children:"Edit"})]})]})]})})}),(0,o.jsxs)("div",{className:"profile-bottom",children:[(0,o.jsxs)("div",{className:"profile-bottom-main-container",children:[(0,o.jsxs)("div",{className:"profile-field",children:[(0,o.jsx)("div",{className:"profile-field-name",children:"Events registered"}),(0,o.jsx)("div",{className:"profile-field-value",children:null!==x&&void 0!==x&&x.events?null===x||void 0===x||null===(e=x.events)||void 0===e?void 0:e.length:0})]}),(0,o.jsxs)("div",{className:"profile-field",children:[(0,o.jsx)("div",{className:"profile-field-name",children:"Events hosted"}),(0,o.jsx)("div",{className:"profile-field-value",children:null!==x&&void 0!==x&&x.events_hosted?null===x||void 0===x||null===(i=x.events_hosted)||void 0===i?void 0:i.length:0})]})]}),(0,o.jsxs)("div",{className:"profile-bottom-more",onClick:function(){return N("/registered-events")},children:[(0,o.jsx)("span",{children:"See All Participated Events"}),(0,o.jsx)(t,{sx:{fontSize:"17px"}})]})]}),(0,o.jsx)("div",{className:"profile-logout",onClick:function(){j({type:"SET_LOADING",loading:!0}),localStorage.removeItem("AUTH_TOKEN"),j({type:"SET_LOGIN_STATUS",loggedIn:!1}),j({type:"SET_USER_DATA",userData:{}}),j({type:"SET_LOADING",loading:!1}),(0,v.B)(""),N("/")},children:(0,o.jsx)("span",{children:"Sign out"})})]})]})})}},1491:function(e,i,l){var n=l(1245),s=l(184);i.Z=(0,n.Z)((0,s.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeftOutlined")}}]);
//# sourceMappingURL=51.ded1720b.chunk.js.map