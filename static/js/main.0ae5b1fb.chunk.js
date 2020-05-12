(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{40:function(e,t,n){e.exports=n(54)},45:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),o=(n(45),n(4)),i=n(5),u=n(7),s=n(6),m=n(22),h=n(14),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},r.a.createElement("a",{className:"navbar-brand col-sm-3 col-md-2 mr-0",href:"/"},this.props.children)))}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"col-md-2 d-none d-md-block bg-light sidebar"},r.a.createElement("div",{className:"sidebar-sticky"},r.a.createElement("ul",{className:"nav flex-column"},this.props.children))))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:this.props.goTo?"/".concat(this.props.goTo):"/".concat(this.props.children)},r.a.createElement("span",{"data-feather":"file"}),this.props.children)))}}]),n}(a.Component),b=n(38),v=n(60),E=n(59),j=r.a.forwardRef((function(e,t){var n=e.children,a=e.onClick;return r.a.createElement("a",{href:null,ref:t,onClick:function(e){e.preventDefault(),a(e)}},n," ","\u25bc")})),O=r.a.forwardRef((function(e,t){var n=e.children,c=e.style,l=e.className,o=e["aria-labelledby"],i=Object(a.useState)(""),u=Object(b.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",{ref:t,style:c,className:l,"aria-labelledby":o},r.a.createElement(v.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type to filter...",onChange:function(e){return m(e.target.value)},value:s}),r.a.createElement("ul",{className:"list-unstyled"},r.a.Children.toArray(n).filter((function(e){return!s||e.props.children.toLowerCase().startsWith(s)}))))})),y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={error:null,countries:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(t){e.setState({countries:Object.keys(t)})}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.countries;return t?r.a.createElement("div",null,t.message):r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement(E.a.Toggle,{as:j,id:"dropdown-custom-components"},"Countries"),r.a.createElement(E.a.Menu,{as:O},n.map((function(e){return r.a.createElement(E.a.Item,{href:e},e)})))))}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-4"},this.props.children)}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},r.a.createElement("h1",{className:"h2"}," ",this.props.children," "))}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={error:null,countries:[],statistics:{}},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(t){var n=[];for(var a in t){var r=t[a][t[a].length-1].confirmed,c=t[a][t[a].length-1].recovered,l=t[a][t[a].length-1].deaths,o=[r,c,l],i=r-c-l;n.push([a,o,i])}n.sort((function(e,t){return t[2]-e[2]}));var u={};n.forEach((function(e){u[e[0]]=e[1]})),e.setState({statistics:u,countries:Object.keys(u).slice(0,10)})}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.countries,a=e.statistics;return t?r.a.createElement("div",null,t.message):r.a.createElement(C,null,r.a.createElement(N,null,r.a.createElement(S,null,["Country","Confirmed","Recovered","Deaths"].map((function(e){return r.a.createElement(T,null," ",r.a.createElement("h6",null," ",e," ")," ")})))),r.a.createElement(x,null,n.map((function(e){return r.a.createElement(S,null,r.a.createElement(T,null," ",e," "),[0,1,2].map((function(t){return r.a.createElement(T,null," ",a[e][t]," ")})))}))))}}]),n}(a.Component),C=function(e){return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-striped table-sm"},e.children))},N=function(e){return r.a.createElement("thead",null,e.children)},x=function(e){return r.a.createElement("tbody",null,e.children)},S=function(e){return r.a.createElement("tr",null,e.children)},T=function(e){return r.a.createElement("td",null,e.children)},D=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{className:"my-4 w-100",id:this.props.id,width:this.props.width,height:this.props.height}))}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{className:"my-4 w-100",id:this.props.id,width:this.props.width,height:this.props.height}))}}]),n}(a.Component),A=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={error:null,statistics:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(t){e.setState({statistics:t[window.location.pathname.substring(1)].reverse()})}),(function(t){e.setState({error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.statistics;return t?r.a.createElement("div",null,t.message):r.a.createElement("table",{class:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"}," Confirmed "),r.a.createElement("th",{scope:"col"}," Recovered "),r.a.createElement("th",{scope:"col"}," Deaths "))),r.a.createElement("tbody",null,n.map((function(e){var t=e.date,n=e.confirmed,a=e.recovered,c=e.deaths;return r.a.createElement("tr",null,r.a.createElement("td",null," ",t," "),r.a.createElement("td",null," ",n," "),r.a.createElement("td",null," ",a," "),r.a.createElement("td",null," ",c," "))}))))}}]),n}(a.Component),F=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null," Covid-19 "),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(p,null,r.a.createElement(f,{goTo:"/gaponukz.github.io/covid-19/"},"All statistics"),r.a.createElement(f,{goTo:"/"},r.a.createElement(y,null)),r.a.createElement(f,{goTo:"/github.com/pomber/covid19"},"Covid-19 API"),r.a.createElement(f,{goTo:"/www.instagram.com/__zhenyagaponyuk/"},"Author")),r.a.createElement(g,null,r.a.createElement(m.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:R}),r.a.createElement(h.a,{exact:!0,path:"/:country",component:I}),r.a.createElement(h.a,{component:function(){return r.a.createElement("div",null,"404 Not found ")}})))))))}}]),n}(a.Component),R=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null," Statistics "),r.a.createElement(D,{id:"myChart",width:900,height:380}),r.a.createElement("h2",null,"Most infected"),r.a.createElement(k,null))}}]),n}(a.Component),I=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null,"Statistics in",r.a.createElement(h.a,{path:"/:country",component:W})),r.a.createElement(M,{id:"countyCanvas",width:900,height:380}),r.a.createElement("h2",null," Coronavirus progress "),r.a.createElement(A,null))}}]),n}(a.Component),W=function(){var e=Object(h.f)().country;return r.a.createElement(r.a.Fragment,null," ",e," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.0ae5b1fb.chunk.js.map