(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(82)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},68:function(e,t,a){e.exports=a.p+"static/media/logo.20fd82a0.png"},69:function(e,t,a){e.exports=a.p+"static/media/PROGRESS.e6e3a5e4.png"},70:function(e,t,a){e.exports=a.p+"static/media/movie-gallery.8b37bdcd.png"},76:function(e,t,a){e.exports=a.p+"static/media/self.ec28e305.png"},78:function(e,t,a){e.exports=a.p+"static/media/CressLogo.c369bdf5.png"},79:function(e,t,a){e.exports=a.p+"static/media/ets-logo.6995e7ec.png"},80:function(e,t,a){e.exports=a.p+"static/media/akpsi-logo.7476f976.png"},81:function(e,t,a){e.exports=a.p+"static/media/bbvr-logo.af63589f.png"},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),l=(a(36),a(2)),o=a(3),s=a(5),m=a(4),p=(a(37),a(38),a(39),a(40),a(41),a(42),a(43),a(7));a(27);var d=a(8),u=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).scrollToTop=n.scrollToTop.bind(Object(p.a)(n)),n}return Object(o.a)(a,[{key:"scrollToTop",value:function(){d.animateScroll.scrollToTop()}},{key:"scrollToAboutMe",value:function(){d.scroller.scrollTo("about-me-section-spacer",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"scrollToExperience",value:function(){d.scroller.scrollTo("experience-section-spacer",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"scrollToProjects",value:function(){d.scroller.scrollTo("project-section-spacer",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement("a",{className:"about-me-link",to:"about-me-section-header",onClick:this.scrollToAboutMe},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"experience-link",to:"experience-section-header",onClick:this.scrollToExperience},"Experience")),r.a.createElement("li",null,r.a.createElement("a",{className:"project-link",to:"project-section-header",onClick:this.scrollToProjects},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://docs.google.com/document/d/1oVQIX9M9sUgiY9tINFhgZ-vgE2iDG0FAiQSON26Zxuo//export?format=pdf&attachment=false",target:"_blank"},"Resume")))))}}]),a}(n.Component),h=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={width:"",height:"",showBurger:!1},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(p.a)(a)),a.burgerVisibility=a.burgerVisibility.bind(Object(p.a)(a)),a.scrollToTop=a.scrollToTop.bind(Object(p.a)(a)),a}return Object(o.a)(n,[{key:"showSettings",value:function(e){e.preventDefault()}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight}),this.burgerVisibility()}},{key:"burgerVisibility",value:function(){this.state.width<650?this.setState({showBurger:!0}):this.setState({showBurger:!1})}},{key:"scrollToTop",value:function(){d.animateScroll.scrollToTop()}},{key:"render",value:function(){var e;return this.state.showBurger?(console.log("burger is visible"),e=r.a.createElement(u,null)):(console.log("no burger"),e=r.a.createElement(u,null)),r.a.createElement("div",{className:"header-bar"},r.a.createElement("div",{className:"title"},r.a.createElement("a",{onClick:this.scrollToTop},r.a.createElement("img",{src:a(68),id:"name-logo"}))),r.a.createElement("div",{className:"nav-center"}),r.a.createElement("div",{className:"navigation-menu"},e))}}]),n}(n.Component),E=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"projects-page"},r.a.createElement("div",{className:"section-spacer",id:"project-section-spacer"}),r.a.createElement("div",{className:"section-header",id:"project-section-header"},r.a.createElement("p",{className:"project-header"},"Projects")),r.a.createElement("div",{className:"section-content",id:"project-section-content"},r.a.createElement("div",{className:"project-row"},r.a.createElement("div",{className:"project-item"},r.a.createElement("div",{className:"project-media"},r.a.createElement("a",{href:""},r.a.createElement("img",{src:a(69),style:{width:"250px"},alt:"in-progress"}))),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,"LIFT"),r.a.createElement("p",null,"Designing and developing a workout tracking mobile application and educates users how to maximize strength training results."))),r.a.createElement("div",{className:"project-item"},r.a.createElement("div",{className:"project-media"},r.a.createElement("a",{href:"https://reneelabutay.github.io/react_portfolio/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:a(70),style:{width:"400px"},alt:"movie-gallery-display"}))),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,"Personalized Movie Gallery"),r.a.createElement("p",null,"Built a website that allows users to create their own movie gallery and customized movie lists. Includes an integration of the OMDb API and the D3 library to make an interactive visualization that models movie relations.")))),r.a.createElement("div",{className:"project-row"},r.a.createElement("div",{className:"project-item"},r.a.createElement("div",{className:"project-media"},r.a.createElement("a",{href:"https://github.com/reneelabutay/cs154_CPU",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/cotton/250/000000/smartphone-cpu.png",alt:"cpu-img"}))),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,"Single Cycle CPU"),r.a.createElement("p",null,"Implemented a 32-bit single cycle MIPS CPU using PyRTL."))),r.a.createElement("div",{className:"project-item"},r.a.createElement("div",{className:"project-media"},r.a.createElement("a",{href:"https://github.com/reneelabutay/CS165_AI_Pacman",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://img.icons8.com/cotton/250/000000/pacman.png",alt:"pacman-img"}))),r.a.createElement("div",{className:"project-text"},r.a.createElement("h3",null,"Pacman AI"),r.a.createElement("p",null,"Engineered AI-driven PacMan agents using machine learning, A* search, minimax with alpha-beta pruning, expectimax, and reinforcement learning models that assisted the agent in independently completing the game."))))))}}]),n}(n.Component),g=a(14),v=a(74),b=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"home-spacer"}),r.a.createElement("div",{className:"home-body"},r.a.createElement("div",{className:"left-side"},r.a.createElement("img",{src:a(76),alt:"self"}),r.a.createElement("div",{className:"resume-section-spacer"})),r.a.createElement("div",{className:"right-side"},r.a.createElement("div",{className:"welcome-text"},r.a.createElement("p",{id:"hello"},"Hello."),r.a.createElement("div",{className:"intro-container"},r.a.createElement("p",{id:"intro"},"I'm"),r.a.createElement(v,{id:"rotating-text",items:["Renee.","a CS and Technology Management student.","a software developer.","an entrepreneur.","a foodie."]}))),r.a.createElement("div",{className:"external-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/reneelabutay",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{icon:["fab","linkedin"],size:"3x"})),r.a.createElement("a",{href:"https://github.com/reneelabutay",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(g.a,{icon:["fab","github-square"],size:"3x"})),r.a.createElement("a",{href:"mailto: reneelabutay@ucsb.edu"},r.a.createElement(g.a,{icon:"envelope-square",size:"3x"}))))))}}]),n}(n.Component),f=a(28),y=a.n(f),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-me-page"},r.a.createElement("div",{className:"section-spacer",id:"about-me-section-spacer"}),r.a.createElement("div",{className:"section-header",id:"about-me-section-header"},r.a.createElement("p",null,"About Me")),r.a.createElement("div",{className:"about-container"},r.a.createElement(y.a,{fraction:"0.7"},r.a.createElement("div",{className:"about-description"},r.a.createElement("p",null,"Welcome to my website! My name is Renee and I am a senior undergrad studying Computer Science and Technology Management at UC Santa Barbara. I strive to develop and manage products that promote social good. This summer I will be joining the Product Engineering team at Cress Health to create online platforms that help individuals improve their personal mental wellness.",r.a.createElement("br",null),r.a.createElement("br",null),"Outside of academics, I spend my free time at the gym bodybuilding, powerlifting, and enhancing my knowledge about fitness and nutrition. I also enjoy baking, food blogging, and drinking matcha lattes.",r.a.createElement("br",null),r.a.createElement("br",null),"I am a dedicated team player, a passionate problem solver, and a lifelong learner. As you navigate through my website, I hope that you have a better understanding of who I am and how I've added value to society through my experiences. I will continue to further my knowledge and will be seeking opportunities in software development and/or product management.")))))}}]),a}(n.Component),w=a(29),x=a.n(w),j=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"experience-page"},r.a.createElement("div",{className:"section-spacer",id:"experience-section-spacer"}),r.a.createElement("div",{className:"section-header",id:"resume-section-header"},r.a.createElement("p",null,"Experience")),r.a.createElement("div",{className:"section-content"},r.a.createElement(x.a,{top:!0,cascade:!0},r.a.createElement("ul",{className:"experience-list"},r.a.createElement("li",{id:"cress-health"},r.a.createElement("div",{className:"experience-container"},r.a.createElement("div",{className:"experience-image"},r.a.createElement("a",{href:"https://www.cresshealth.com/why",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:a(78),alt:"cress-logo"}))),r.a.createElement("div",{className:"experience-text"},r.a.createElement("p",{className:"experience-title"},"Software Engineer Intern"),r.a.createElement("p",{className:"experience-company"},"Cress Health"),r.a.createElement("p",{className:"experience-description"},"I am building the Cress Brand Representative Web Portal with the Frontend Engineering team and optimizing the peer support feature on the Cress mobile application.")))),r.a.createElement("li",{id:"ets"},r.a.createElement("div",{className:"experience-container"},r.a.createElement("div",{className:"experience-image"},r.a.createElement("a",{href:"https://www.it.ucsb.edu/campus-it-organizations-departments/enterprise-technology-services",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:a(79),alt:"ets-logo"}))),r.a.createElement("div",{className:"experience-text"},r.a.createElement("p",{className:"experience-title"},"Student Engineer"),r.a.createElement("p",{className:"experience-company"},"UCSB Enterprise Technology Services"),r.a.createElement("p",{className:"experience-description"},"I provide IT technical support services and account maintenance tasks for 30,000+ end users. I am responsible for generating scripts to automate processes and conducting data manipulation to identify key metrics in the Learning Management System, which is then visualized in PowerBI.")))),r.a.createElement("li",{id:"akpsi"},r.a.createElement("div",{className:"experience-container"},r.a.createElement("div",{className:"experience-image"},r.a.createElement("a",{href:"https://www.ucsb-akpsi.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:a(80),alt:"akpsi-logo"}))),r.a.createElement("div",{className:"experience-text"},r.a.createElement("p",{className:"experience-title"},"Vice President of Professional Affairs"),r.a.createElement("p",{className:"experience-company"},"Alpha Kappa Psi"),r.a.createElement("p",{className:"experience-description"},"I am collaborating with other Executive Board Members to provide the fraternity with career-advancing opportunities and to implement professional development workshops.")))),r.a.createElement("li",{id:"bbvr"},r.a.createElement("div",{className:"experience-container"},r.a.createElement("div",{className:"experience-image"},r.a.createElement("img",{src:a(81),alt:"bbvr-icon"})),r.a.createElement("div",{className:"experience-text"},r.a.createElement("p",{className:"experience-title"},"Undergraduate Research Assistant"),r.a.createElement("p",{className:"experience-company"},"UCSB Gevirtz School of Education"),r.a.createElement("p",{className:"experience-description"},"I co-developed BlockBased VR, a virtual reality game that reflects fundamental coding concepts through visual programming. I designed a new game environment in Unity and Blender to enhance the UI, and colalborated in an agile environment to restructure the code into a MVC framework."))))))))}}]),n}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",null,r.a.createElement("p",null,"\xa9 2020 Renee Labutay. All Rights Reserved.")),r.a.createElement("div",{className:"contact-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/reneelabutay"},"LinkedIn"),r.a.createElement("a",{href:"https://github.com/reneelabutay"},"Github"),r.a.createElement("a",{href:"mailto: reneelabutay@ucsb.edu"},"Email")))}}]),a}(n.Component),O=a(11),I=a(20),T=a(30);O.b.add(I.b,I.a,T.a);var C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"navigation-bar"},r.a.createElement(h,null)),r.a.createElement("div",{className:"home-page",id:"home"},r.a.createElement(b,null)),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"about-me"},r.a.createElement(N,null)),r.a.createElement("div",{className:"experience",id:"experience"},r.a.createElement(j,null)),r.a.createElement("div",{className:"projects"},r.a.createElement(E,null))),r.a.createElement("div",{className:"footer"},r.a.createElement(k,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.81c7a224.chunk.js.map