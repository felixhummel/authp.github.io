"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4013,4537],{8665:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(3366),r=a(7294),l=a(6010),c=a(4922),i=a(9960),s="sidebar_q+wC",m="sidebarItemTitle_9G5K",o="sidebarItemList_6T4b",u="sidebarItem_cjdF",g="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs",b=a(5999);function E(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var v=["sidebar","toc","children"];var p=function(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,n.Z)(e,v),m=t&&t.items.length>0;return r.createElement(c.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(E,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},a))))}},497:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),r=a(8665),l=a(7774),c=a(2822),i="tag_7kA+";function s(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:i},n.createElement(l.Z,e))}))),n.createElement("hr",null))}var m=function(e){var t=e.tags,a=(0,c.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(s,{key:e.letter,letterEntry:e})})))};var o=function(e){var t=e.tags,a=e.sidebar,l=(0,c.MA)();return n.createElement(r.Z,{title:l,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,l),n.createElement(m,{tags:Object.values(t)}))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(9960),c="tag_WK-t",i="tagRegular_LXbV",s="tagWithCount_S5Zl";var m=function(e){var t,a=e.permalink,m=e.name,o=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(c,(t={},t[i]=!o,t[s]=o,t))},m,o&&n.createElement("span",null,o))}},4922:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(1287),l=a(2859),c=a(6775);function i(e){(0,c.TH)();return n.createElement(n.Fragment,null,n.createElement(l.Z,null,n.createElement("meta",{property:"google-site-verification",content:"VnGnUPzlKD0BatpTv3Ik0ax09Ph7WOggw6Fu_OF_2M0"})),n.createElement(r.Z,e))}}}]);