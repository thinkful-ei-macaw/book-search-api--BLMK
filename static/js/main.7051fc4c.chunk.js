(this["webpackJsonpbooksearch-api"]=this["webpackJsonpbooksearch-api"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),l=n.n(o),c=(n(14),n(1)),i=n(2),s=n(4),u=n(3),h=n(5),p=(n(15),n(8)),m=(n(16),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=e.target.name,a=e.target.value;n.props.onFilterChange(t,a)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"filters"},r.a.createElement("label",{htmlFor:"printType"},"Print Type: "),r.a.createElement("select",{id:"printType",name:"printType",onChange:this.handleChange},r.a.createElement("option",{value:"all"}," All"),r.a.createElement("option",{value:"books"},"Books"),r.a.createElement("option",{value:"magazines"},"Magazines")),r.a.createElement("label",{htmlFor:"filter"},"Book Type"),r.a.createElement("select",{id:"filter",name:"filter",onChange:this.handleChange},r.a.createElement("option",{value:"ebooks"},"No Filter"),r.a.createElement("option",{value:"free-ebooks"},"Free E-Book"),r.a.createElement("option",{value:"paid-ebooks"},"Paid E-Book")))}}]),t}(r.a.Component));var f={getBooks:function(e){return fetch("https://www.googleapis.com/books/v1/volumes?"+e).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){alert("Error: ".concat(e))}))}},b=(n(17),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={printType:"all",filter:"ebooks"},n.handleSubmit=function(e){e.preventDefault();var t="q=";t+=document.querySelector("#query").value,Object.keys(n.state).forEach((function(e){t+="&".concat(e,"=").concat(n.state[e])})),f.getBooks(t).then((function(e){return n.props.onGetResults(e)}))},n.handleFilterChange=function(e,t){n.setState(Object(p.a)({},e,t))},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"search"},r.a.createElement("label",{htmlFor:"query"},"Search:"),r.a.createElement("input",{required:!0,type:"text",name:"query",id:"query",placeholder:"ex, Harry Potter"}),r.a.createElement("input",{type:"submit",value:"Search"})),r.a.createElement(m,{onFilterChange:this.handleFilterChange}))}}]),t}(r.a.Component)),d=(n(18),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"book"},r.a.createElement("img",{src:this.props.imageUrl,alt:this.props.title}),r.a.createElement("div",null,r.a.createElement("h2",null," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.props.url}," ",this.props.title," ")),r.a.createElement("p",null,"Author: ",this.props.author),r.a.createElement("p",null,"Price: ",this.props.price),r.a.createElement("p",null,this.props.description)))}}]),t}(r.a.Component)),v=(n(19),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.list.length>0?this.props.list.map((function(e){var t="FREE";return e.saleInfo.retailPrice&&e.saleInfo.retailPrice.amount>0&&(t=e.saleInfo.retailPrice.amount+e.saleInfo.retailPrice.currencyCode),r.a.createElement(d,{key:e.id,imageUrl:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,author:e.volumeInfo.authors?e.volumeInfo.authors[0]:"Unkown",price:t,url:e.volumeInfo.previewLink,description:e.volumeInfo.description})})):this.props.searched?r.a.createElement("p",{className:"noresults"}," No results found! "):"";return r.a.createElement("ul",{className:"results"},e)}}]),t}(r.a.Component)),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={results:[],searched:!1},n.handleGetResults=function(e){n.setState({results:e.items||[],searched:!0})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{onGetResults:this.handleGetResults}),r.a.createElement(v,{searched:this.state.searched,list:this.state.results}))}}]),t}(r.a.Component);l.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.7051fc4c.chunk.js.map