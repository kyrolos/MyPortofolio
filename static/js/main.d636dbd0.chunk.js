(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/myphoto.f2ff1d64.jpg"},function(e,a,t){e.exports=t.p+"static/media/MyProtofolio.e4643144.PNG"},function(e,a,t){e.exports=t.p+"static/media/RopoFriend.74a63616.PNG"},function(e,a,t){e.exports=t.p+"static/media/SmartBrain.48499d57.PNG"},function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){},,function(e,a,t){},,,,function(e,a,t){},,function(e,a,t){},,,,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),i=t(18),n=t.n(i),c=(t(28),t(5)),r=t(6),m=t(8),o=t(7),d=t(9),h=(t(30),t(11)),u=t(10),p=t(3),E=(t(34),function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).state={className:"navbar-burger burger",classNameItems:"navbar-menu"},e}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this,a=function(){"navbar-burger burger is-active"===e.state.className?(e.setState({className:"navbar-burger burger"}),"navbar-menu is-active"===e.state.classNameItems&&e.setState({classNameItems:"navbar-menu"})):"navbar-burger burger"===e.state.className&&(e.setState({className:"navbar-burger burger is-active"}),"navbar-menu"===e.state.classNameItems&&e.setState({classNameItems:"navbar-menu is-active"}))};return l.a.createElement("nav",{className:"navbar is-fixed-top is-info",role:"navigation","aria-label":"main navigation"},l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("a",{className:"navbar-item",href:"/"},l.a.createElement("div",{className:"fa-3x is-mobile"},l.a.createElement(p.a,{className:"is-mobile",icon:"code","data-fa-transform":"shrink-8"}))),l.a.createElement("a",{role:"button",className:this.state.className,"aria-label":"menu",onClick:a,"aria-expanded":"false","data-target":"navbarBasicExample"},l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}),l.a.createElement("span",{"aria-hidden":"true"}))),l.a.createElement("div",{id:"navbarBasicExample",className:this.state.classNameItems,onClick:a},l.a.createElement("div",{className:"navbar-end is-active"},l.a.createElement("a",{className:"navbar-item is-active",style:{fontWeight:"bold",paddingRight:"15%"},href:"#projects"},"Projects"),l.a.createElement("a",{className:"navbar-item is-active",style:{fontWeight:"bold",paddingRight:"15%"},href:"#skills"},"Skills"),l.a.createElement("a",{className:"navbar-item is-active",style:{fontWeight:"bold"},href:"#footer"},"Contact Me"))))}}]),a}(s.Component)),b=(t(36),t(19)),N=t.n(b),f=t(2),g=t.n(f),v=function(){return l.a.createElement("div",{className:"hero is-spaced centered justified is-mobile"},l.a.createElement("div",{className:"tile is-ancestor  "},l.a.createElement("div",{className:"tile is-vertical is-8"},l.a.createElement("div",{className:"tile"},l.a.createElement("div",{className:"tile is-parent is-vertical "},l.a.createElement(g.a,{left:!0},l.a.createElement("article",{className:"tile is-child notification is-primary"},l.a.createElement("p",{className:"title"},"Hi I 'm JS web-Dev"),l.a.createElement("p",{className:"subtitle"}," Currently looking for a new cooding adventure")),l.a.createElement("article",{className:"tile is-child notification is-warning "},l.a.createElement("p",{className:"title"},"What am I capable of ?"),l.a.createElement("p",{className:"subtitle"},"isn't that your question ?\n\t\t\t\t\t         \t\tdon't worry you will find the answer below ",l.a.createElement(p.a,{icon:"angle-double-down"}))))),l.a.createElement(g.a,{top:!0},l.a.createElement("div",{className:"tile is-parent"},l.a.createElement("article",{className:"tile is-child notification is-info"},l.a.createElement("p",{className:"title"},"Kyrolos Magdy"),l.a.createElement("p",{className:"subtitle"},"a full-Stack Web Developer"),l.a.createElement("figure",{className:"image is-4by3"},l.a.createElement("img",{className:"is-rounded",src:"".concat(N.a),alt:"Your browser dosen't support this Img"})))))),l.a.createElement(g.a,{bottom:!0},l.a.createElement("div",{className:"tile is-parent"},l.a.createElement("article",{className:"tile is-child notification is-danger"},l.a.createElement("p",{className:"title"},"our quote for today"),l.a.createElement("p",{className:"subtitle"}," you only stop learning when you Die"),l.a.createElement("div",{className:"content"},"Albert Einstein"))))),l.a.createElement(g.a,{right:!0},l.a.createElement("div",{className:"tile is-parent"},l.a.createElement("article",{className:"tile is-child notification is-success"},l.a.createElement("div",{className:"content"},l.a.createElement("p",{className:"title"},"preferres remotely jobs"),l.a.createElement("p",{className:"subtitle"},"I 'm using Git so I can deals with teams remotly, you know in 2019 most programers dosen't go to work like office and all these traditional stuff they just working from there own office there own home there own country that's one reason why I prefers working remotly"),l.a.createElement("div",{className:"content"})))))))},w=(t(4),t(16),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).flipCard=function(){t.setState({flip:!0})},t.flipCardBack=function(){t.setState({flip:!1})},t.state={flip:!1},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"column card box is-two-thirds-mobile is-one-quarter-tablet cardContainer individual-project-container ".concat(this.state.flip?" cardFlipped":""),style:{backgroundImage:!1===this.state.flip?"url(".concat(this.props.backgroundImage,")"):""},onMouseEnter:this.flipCard,onMouseLeave:this.flipCardBack,onClick:this.state.flip?this.flipCardBack:this.flipCard,key:""},l.a.createElement("header",{className:"box"},l.a.createElement("p",{className:"title is-4 is-centered"},l.a.createElement("a",{href:this.props.link},this.props.title))),l.a.createElement("div",{className:"card__side front-card card__side--front".concat(this.state.flip?"cardFlipped":"")},l.a.createElement("div",{className:"card-content is-centered is-paddingless card__side card__side--back ".concat(this.state.flip?" cardBack cardFlipped":" back")},l.a.createElement("div",{className:"content is-centered"},this.props.description),l.a.createElement("div",{className:"columns is-mobile is-centered"},l.a.createElement("footer",{className:"box column is-paddingless is-three-quarters"},l.a.createElement("ul",{className:"columns is-multiline is-mobile is-marginless"},this.props.techStack.map(function(e){return l.a.createElement("li",{key:"li1",className:"column is-half is-paddingless is-marginless is-size-7 has-text-weight-light"},e)})))))))}}]),a}(s.Component)),_=t(20),y=t.n(_),k=t(21),x=t.n(k),j=t(22),S=t.n(j),I=function(){return l.a.createElement("section",{className:"section content has-text-centered is-marginless project-section",id:"projects"},l.a.createElement(g.a,{left:!0},l.a.createElement("h1",{className:"title is-1 has-text-white"},"Projects")),l.a.createElement(g.a,{right:!0},l.a.createElement("h4",{className:"subtitle is-4 has-text-white has-text-weight-light"},"Currently, I am working on a site for a smaller automotive business that is local to me. Really enjoying the experience.")),l.a.createElement(g.a,{left:!0},l.a.createElement("h4",{className:"subtitle is-4 has-text-white has-text-weight-light"},"Here are some recent projects I have completed.")),l.a.createElement(g.a,{right:!0},l.a.createElement("div",{className:"columns is-mobile is-multiline is-variable is-3 is-centered projects-container"},l.a.createElement(w,{title:"RopoFriendsApp",link:"https://kyrolos.github.io/Robofriend-app/",backgroundImage:x.a,description:"as a problem solver this app with quite entertainment it's my RopoFriendsApp try it you woll find it quite entertaining",techStack:["React","Redux","Node.js","Express.js","Tachyons (css framework)"]}),l.a.createElement(w,{title:"MyPortofolio",link:"/",backgroundImage:y.a,description:"Similar to Jeopardy app. Set up for three teams to go head to head in full rounds of questions with a final Jeopardy round. Great for family and friends.",techStack:["React","Bulma(css framework)"]}),l.a.createElement(w,{title:"Smart-brain",link:"https://github.com/kyrolos/faceRecognition",backgroundImage:S.a,description:"The Smart-brain App is gonna daetect you face give it a try",techStack:["React","Redux","express","postgresql","Heroku","node.js","jest(still under deploying)"]}))))},C=(t(17),function(){return l.a.createElement("div",{className:"container skills column is-full-mobile"},l.a.createElement("ul",{className:"lines"},l.a.createElement("li",{className:"line l--0"},l.a.createElement("span",{className:"line__label has-text-white"},"What??")),l.a.createElement("li",{className:"line l--25"},l.a.createElement("span",{className:"line__label has-text-white"},"The Basics")),l.a.createElement("li",{className:"line l--50"},l.a.createElement("span",{className:"line__label has-text-white"},"Intermediate")),l.a.createElement("li",{className:"line l--75"},l.a.createElement("span",{className:"line__label has-text-white"},"Advanced")),l.a.createElement("li",{className:"line l--100"},l.a.createElement("span",{className:"line__label has-text-white"},"Expert"))),l.a.createElement("div",{className:"charts"},l.a.createElement("div",{className:"chart chart--dev"},l.a.createElement("span",{className:"chart__title"},"Development"),l.a.createElement("ul",{className:"chart--horiz"},l.a.createElement("li",{className:"chart__bar list-item",style:{width:"70%"}},l.a.createElement("span",{className:"chart__label item"},"HTML5")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"60%"}},l.a.createElement("span",{className:"chart__label item"},"CSS3")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"70%"}},l.a.createElement("span",{className:"chart__label item"},"Javascript")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"65%"}},l.a.createElement("span",{className:"chart__label item"},"React / Redux")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"52%"}},l.a.createElement("span",{className:"chart__label item"},"Next.js")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"60%"}},l.a.createElement("span",{className:"chart__label item"},"Node.js / NPM ")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"55%"}},l.a.createElement("span",{className:"chart__label item"},"Express")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"53%"}},l.a.createElement("span",{className:"chart__label item"},"POSTGRESQL")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"35%"}},l.a.createElement("span",{className:"chart__label item"},"Docker")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"85%"}},l.a.createElement("span",{className:"chart__label item"},"Git")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"52%"}},l.a.createElement("span",{className:"chart__label item"},"Redis")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"45%"}},l.a.createElement("span",{className:"chart__label item"},"Jest")),l.a.createElement("li",{className:"chart__bar list-item",style:{width:"50%"}},l.a.createElement("span",{className:"chart__label item"},"TypeScript"))))))}),R=function(){return l.a.createElement("section",{className:"section content has-text-centered clipBackground skill-section is-marginless",id:"skills"},l.a.createElement(g.a,{left:!0},l.a.createElement("h1",{className:"title is-1 has-text-white"},"Skills")),l.a.createElement(g.a,{right:!0},l.a.createElement("h4",{className:"subtitle is-4 has-text-white has-text-weight-light"},"Get ready here comes another skills graph. But how well do you really know a person without talking to them?")),l.a.createElement(g.a,{left:!0},l.a.createElement("div",{className:"columns is-mobile skill-graph"},l.a.createElement(C,null))))},O=(t(43),t(12)),B=function(){return l.a.createElement("footer",{className:"footer is-paddingless",id:"footer"},l.a.createElement("div",{className:"hero has-text-centered has-text-success margined"},l.a.createElement("h1",{className:"title has-text-success"},"Get To Know Me")),l.a.createElement("div",{className:"content has-text-centered"},l.a.createElement("div",{className:"columns is-centered is-mobile"},l.a.createElement("a",{className:"column is-narrow",href:"https://github.com/kyrolos?tab=repositories"},l.a.createElement(p.a,{icon:O.a,className:"fa-2x has-text-success"})),l.a.createElement("a",{className:"column is-narrow",href:"https://www.linkedin.com/in/kyrolos-magdy-575055163/"},l.a.createElement(p.a,{icon:O.b,className:"fa-2x has-text-success"})))))};h.b.add(u.b,u.a,u.c,u.d);var G=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"hiro"},l.a.createElement(E,null),l.a.createElement(v,null),l.a.createElement(I,null),l.a.createElement(R,null),l.a.createElement(B,null))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[23,2,1]]]);
//# sourceMappingURL=main.d636dbd0.chunk.js.map