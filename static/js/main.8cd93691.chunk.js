(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{13:function(e,t,o){e.exports=o(26)},24:function(e,t,o){},25:function(e,t,o){},26:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(5),s=o.n(a),c=o(2),i=o(3),l=o(1),u=o(4),d=o(11),p={todosList:[],isLoading:!1,isAlphabSortedName:!1,isAlphabSortedTitle:!1,isCompletedTodo:!1,sortValue:null},m=function(e){return{type:"DELETE",idTodo:e}},b=function(e){switch(e.sortValue){case"SORTED_NAME":return e.isAlphabSortedName?Object(i.a)(e.todosList).sort((function(e,t){return t.user.name.localeCompare(e.user.name)})):Object(i.a)(e.todosList).sort((function(e,t){return e.user.name.localeCompare(t.user.name)}));case"SORTED_TITLE":return e.isAlphabSortedTitle?Object(i.a)(e.todosList).sort((function(e,t){return t.title.localeCompare(e.title)})):Object(i.a)(e.todosList).sort((function(e,t){return e.title.localeCompare(t.title)}));case"SORTED_COMPLETED":return e.isCompletedTodo?Object(i.a)(e.todosList).sort((function(e,t){return Number(t.completed)-Number(e.completed)})):Object(i.a)(e.todosList).sort((function(e,t){return Number(e.completed)-Number(t.completed)}));default:return e.todosList}},E=Object(u.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_LOADING":return Object(l.a)(Object(l.a)({},e),{},{isLoading:t.loadingStatus});case"SET_STATE":return Object(l.a)(Object(l.a)({},e),{},{todosList:t.todosList,isLoading:t.loadingStatus,sortedTodos:t.todosList});case"DELETE":return Object(l.a)(Object(l.a)({},e),{},{todosList:e.todosList.filter((function(e){return e.id!==t.idTodo}))});case"SORTED_NAME":return Object(l.a)(Object(l.a)({},e),{},{sortValue:t.sortValue,isAlphabSortedName:!t.isAlphabSortedName,isAlphabSortedTitle:!1,isCompletedTodo:!1});case"SORTED_TITLE":return Object(l.a)(Object(l.a)({},e),{},{sortValue:t.sortValue,isAlphabSortedTitle:!t.isAlphabSortedTitle,isAlphabSortedName:!1,isCompletedTodo:!1});case"SORTED_COMPLETED":return Object(l.a)(Object(l.a)({},e),{},{sortValue:t.sortValue,isCompletedTodo:!t.isCompleted,isAlphabSortedTitle:!1,isAlphabSortedName:!1});default:return e}}),Object(d.composeWithDevTools)()),T=o(12),O=o.n(T),f=(o(24),function(e){var t=Object(c.b)(),o=e.newTodos,n=e.deleteTodo;return r.a.createElement("div",{className:"todo"},o.map((function(e){return r.a.createElement("div",{key:e.id,className:"todo__wrapper"},r.a.createElement("p",{className:"todo__body"},r.a.createElement("span",{className:"todo__user"},r.a.createElement("strong",null,e.user.name)),":"," ",e.title),r.a.createElement("div",{className:O()("todo__process",{todo__done:e.completed})},"Completed:"," ",e.completed?"Done":"In the process"),r.a.createElement("button",{type:"button",onClick:function(){t(n(e.id))}},"delete"))})))});o(25);function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"This value was promised to be there.";if(void 0===e||null===e)throw new TypeError(t);return e}var _=fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json().then((function(e){return e}))})),S=fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json().then((function(e){return e}))})),j=Promise.all([_,S]).then((function(e){return e[1].map((function(t){return Object(l.a)(Object(l.a)({},t),{},{user:h(e[0].find((function(e){return e.id===t.userId})))})}))})),L=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.todosList})),o=Object(c.c)(b),n=Object(c.c)((function(e){return e.isLoading})),a=Object(c.c)((function(e){return e.isAlphabSortedName})),s=Object(c.c)((function(e){return e.isAlphabSortedTitle})),i=Object(c.c)((function(e){return e.isCompletedTodo}));return r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"app__header"},"Dynamic list of TODOs"),t.length>0&&r.a.createElement("div",{className:"app__button-filter"},r.a.createElement("button",{type:"button",onClick:function(){return e({type:"SORTED_NAME",sortValue:"SORTED_NAME",isAlphabSortedName:a})},className:"app__button"},"Filter by name"),r.a.createElement("button",{type:"button",onClick:function(){return e({type:"SORTED_TITLE",sortValue:"SORTED_TITLE",isAlphabSortedTitle:s})},className:"app__button"},"Filter by title"),r.a.createElement("button",{type:"button",onClick:function(){return e({type:"SORTED_COMPLETED",sortValue:"SORTED_COMPLETED",isCompleted:i})},className:"app__button"},"Filter by complete")),r.a.createElement(f,{newTodos:o,deleteTodo:m}),0===t.length&&r.a.createElement("button",{type:"button",onClick:function(){e({type:"SET_IS_LOADING",loadingStatus:!0}),j.then((function(t){e(function(e,t){return{type:"SET_STATE",todosList:e,loadingStatus:t}}(t,!1))}))},className:"app__button"},n?"Loading...":"Get Todo"))},N=function(){return r.a.createElement(c.a,{store:E},r.a.createElement(L,null))};s.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.8cd93691.chunk.js.map