(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},32:function(t,e,n){t.exports=n(44)},37:function(t,e,n){},42:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(18),r=n.n(c),i=n(15),l=n(2),s=(n(37),n(7)),u=n(8),p=n(10),d=n(9),m=n(4),h=n(24),f=n(12),O={dateToDo:"",title:"",activeToDOList:[]},v=function(){return function(t){fetch("http://localhost:3001/api/v1/tasks").then((function(t){return t.json()})).then((function(e){t({type:"FETCH_TO_DO_LISTS",payload:{activeToDOList:e}})}))}};var T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_TO_DO_LISTS":return Object(f.a)(Object(f.a)({},t),{},{activeToDOList:e.payload.activeToDOList});case"CREATE_TODO":return console.log("*****  payload create new todo  *****",e.payload),Object(f.a)(Object(f.a)({},t),{},{activeToDOList:[].concat(Object(h.a)(t.activeToDOList),[e.payload])});case"COMPLETE_TODO":return console.log("***** id  payload completed todo  *****",e.payload.id),Object(f.a)(Object(f.a)({},t),{},{activeToDOList:t.activeToDOList.map((function(t){return t.id===e.payload.id?e.payload:t}))});case"REMOVE_TODO":return console.log("***** id payload delete todo  *****",e.payload.id),Object(f.a)(Object(f.a)({},t),{},{activeToDOList:Object(h.a)(t.activeToDOList.filter((function(t){return t.id!==e.payload.id})))});default:return t}},b=n(14),E=(n(42),function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={user_id:1,title:"",status:!1,dateToDo:""},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.handleAddNewTask=function(){var e={user_id:1,title:t.state.title,status:!1,dateToDo:t.state.dateToDo};console.log("** new task",e),fetch("http://localhost:3001/api/v1/tasks",{method:"Post",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(e){e.errors?alert(e.errors):alert("Successfully added to watchlist"),t.props.createNewTodo(e)}))},t}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"new-todo-form",onSubmit:this.handleAddNewTask},o.a.createElement("input",{className:"new-todo-input",type:"text",name:"title",placeholder:"Type your new todo here",value:this.state.title,onChange:this.handleChange}),o.a.createElement("input",{className:"new-todo-date-input",type:"date",name:"dateToDo",value:this.state.dateToDo,onChange:this.handleChange}),o.a.createElement("button",{className:"new-todo-button",type:"Submit",value:"Submit"},"Create Todo")))}}]),n}(a.Component)),j=Object(m.b)(null,(function(t){return{createNewTodo:function(e){return t({type:"CREATE_TODO",payload:{text:e}})}}}))(E),y=(n(27),function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).handleDelete=function(){var e=t.props.id;fetch("http://localhost:3000/api/v1/tasks/".concat(e),{method:"DELETE"}).then((function(t){return t.json()})).then((function(e){console.log("delete data id",e.id),t.props.deleteTodo(e)}))},t.markAsCompleted=function(e){e.preventDefault();var n=t.props.id;fetch("http://localhost:3000/api/v1/tasks/".concat(n),{method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({status:!0})}).then((function(t){return t.json()})).then((function(e){t.props.completedTask(e)})),t.setState({targetItem:{}})},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-item-container"},o.a.createElement("h3",null,this.props.title),o.a.createElement("h3",null,this.props.dateToDo),o.a.createElement("div",{className:"buttons-container"},o.a.createElement("button",{className:"completed-button",onClick:this.markAsCompleted},"Mark As Completed"),o.a.createElement("button",{className:"remove-button",onClick:this.handleDelete},"Remove")))}}]),n}(a.Component)),D=Object(m.b)(null,(function(t){return{deleteTodo:function(e){return t({type:"REMOVE_TODO",payload:e})},completedTask:function(e){return t({type:"COMPLETE_TODO",payload:e})}}}))(y),C=(n(28),function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTodos()}},{key:"render",value:function(){return console.log("****************todolist********",this.props.activeToDOList),o.a.createElement("div",{className:"list-wrapper"},o.a.createElement(j,null),this.props.activeToDOList.filter((function(t){return!1===t.status})).map((function(t){return o.a.createElement(D,t)})))}}]),n}(a.Component)),L=Object(m.b)((function(t){return{activeToDOList:t.activeToDOList}}),(function(t){return{fetchTodos:function(){return t(v())}}}))(C),g=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"complete-todo-item-container"},o.a.createElement("h3",null," THIS TASK HAS BEEN COMPLETED"),o.a.createElement("h3",null,"TITLE: ",this.props.title),o.a.createElement("h3",null,"COMPLETE DATE: ",this.props.dateToDo))}}]),n}(a.Component),k=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTodos()}},{key:"render",value:function(){return o.a.createElement("div",{className:"list-wrapper"},this.props.activeToDOList.filter((function(t){return!0===t.status})).map((function(t){return o.a.createElement(g,t)})))}}]),n}(a.Component),N=Object(m.b)((function(t){return{activeToDOList:t.activeToDOList}}),(function(t){return{fetchTodos:function(){return t(v())}}}))(k);n(29);var w=function(t){return o.a.createElement("div",{className:"  fixed-top navbar"},o.a.createElement(i.b,{to:"/"},o.a.createElement("div",{className:"navCLass "},"Home")),o.a.createElement(i.b,{to:"/complete"},o.a.createElement("div",{className:"navCLass "},"Complete Tasks")))},A=function(t){Object(p.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchAllTodos()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(w,{fixed:"top",logout:this.logout}),o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/todolist",component:L}),o.a.createElement(l.a,{path:"/complete",component:N}),o.a.createElement(l.a,{path:"/",component:L})))}}]),n}(a.Component);var S=Object(m.b)((function(t){return{todolist:t.activeToDOList}}),(function(t){return{fetchAllTodos:function(){return t(v())}}}))(A),_=n(17),M=n(31),H=Object(_.c)(T,Object(_.a)(M.a));r.a.render(o.a.createElement(m.a,{store:H},o.a.createElement(i.a,null,o.a.createElement(l.a,{path:"/",component:S}))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1c6d3579.chunk.js.map