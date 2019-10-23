(function(t){function a(a){for(var s,c,n=a[0],o=a[1],r=a[2],d=0,v=[];d<n.length;d++)c=n[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&v.push(i[c][0]),i[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(a);while(v.length)v.shift()();return l.push.apply(l,r||[]),e()}function e(){for(var t,a=0;a<l.length;a++){for(var e=l[a],s=!0,n=1;n<e.length;n++){var o=e[n];0!==i[o]&&(s=!1)}s&&(l.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},i={app:0},l=[];function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=a,n=n.slice();for(var r=0;r<n.length;r++)a(n[r]);var u=o;l.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("4de4"),e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Index")],1)},l=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.isLoading?e("Loading"):t._e(),e("div",{staticClass:"container py-5"},[e("section",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("h1",{staticClass:"font-weight-bold"},[t._v("空氣品質指標 (AQI)")]),e("div",{staticClass:"citySelect-wrap"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.countySelected,expression:"countySelected"}],staticClass:"citySelect",attrs:{name:"city",id:"citySelect"},on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.countySelected=a.target.multiple?e:e[0]},function(a){return t.countyChange(t.countySelected)}]}},[e("option",{attrs:{value:"init",disabled:"init"!==t.countySelected}},[t._v("請選擇地區")]),t._l(t.county,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v(t._s(a))])}))],2)])]),t._m(0)]),e("div",{staticClass:"separate-wrap my-5"},[e("h2",{staticClass:"font-weight-bold"},[t._v(t._s(t.countySelected))]),t._m(1),e("div",{staticClass:"update-wrap font-weight-bold d-flex align-items-center"},[e("span",[t._v(t._s(t.fillterUpdateTime))]),e("span",{staticClass:"ml-3"},[t._v("update")])])]),e("section",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("div",{staticClass:"row no-gutters district-selected"},[e("div",{staticClass:"col-7 districtName"},[t._v(" "+t._s(t.siteSelectedData.SiteName)+" ")]),e("div",{staticClass:"col-5 districtAqi",class:t._f("juageColor")(t.siteSelectedData.Status)},[t._v(" "+t._s(t.siteSelectedData.AQI)+" ")]),e("div",{staticClass:"col-12 districtData "},[e("ul",[e("li",{staticClass:"data-items"},[e("b",[t._v("臭氧")]),e("span",{staticClass:"h6 ml-2"},[t._v("O3 (ppb)")]),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteSelectedData.O3))])]),e("li",{staticClass:"data-items"},[e("b",[t._v("懸浮微粒")]),e("span",{staticClass:"h6 ml-2"},[t._v("PM10 (μg/m³)")]),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteSelectedData.PM10))])]),e("li",{staticClass:"data-items"},[e("b",[t._v("細懸浮微粒")]),e("span",{staticClass:"h6 ml-2"},[t._v("PM2.5 (μg/m³)")]),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteSelectedData["PM2.5"]))])]),e("li",{staticClass:"data-items"},[e("b",[t._v("一氧化碳")]),e("span",{staticClass:"h6 ml-2"},[t._v("CO (ppm)")]),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteSelectedData.CO))])]),e("li",{staticClass:"data-items"},[e("b",[t._v("二氧化硫")]),e("span",{staticClass:"h6 ml-2"},[t._v("SO2 (ppb)")]),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteSelectedData.SO2))])]),e("li",{staticClass:"data-items"},[e("b",[t._v("二氧化氮")]),e("span",{staticClass:"h6 ml-2"},[t._v("NO2 (ppb)")]),e("b",{staticClass:"ml-auto"},[t._v(t._s(t.siteSelectedData.NO2))])])])])])]),e("div",{staticClass:"col-8"},[e("div",{staticClass:"row"},t._l(t.filterCountySelected,(function(a){return e("div",{key:a.SiteName,staticClass:"col-6 mb-5",on:{click:function(e){return t.selectSiteName(a)}}},[e("div",{staticClass:"row no-gutters district-items"},[e("div",{staticClass:"col-7 districtName"},[t._v(" "+t._s(a.SiteName)+" ")]),e("div",{staticClass:"col-5 districtAqi",class:t._f("juageColor")(a.Status)},[t._v(" "+t._s(a.AQI)+" ")])])])})),0)])])])],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-8"},[e("div",{staticClass:"row aqi-status-wrap no-gutters"},[e("div",{staticClass:"col aqi-status-item"},[e("div",{staticClass:"aqi-status-value status-color-level1"},[e("span",[t._v("0~50")])]),e("div",{staticClass:"aqi-status-caption"},[t._v("良好")])]),e("div",{staticClass:"col aqi-status-item"},[e("div",{staticClass:"aqi-status-value status-color-level2"},[e("span",[t._v("51~100")])]),e("div",{staticClass:"aqi-status-caption"},[t._v("普通")])]),e("div",{staticClass:"col aqi-status-item"},[e("div",{staticClass:"aqi-status-value status-color-level3"},[e("span",[t._v("101~150")])]),e("div",{staticClass:"aqi-status-caption"},[t._v("對敏感族群 不健康")])]),e("div",{staticClass:"col aqi-status-item"},[e("div",{staticClass:"aqi-status-value status-color-level4"},[e("span",[t._v("151~200")])]),e("div",{staticClass:"aqi-status-caption"},[t._v("對所有族群 不健康")])]),e("div",{staticClass:"col aqi-status-item"},[e("div",{staticClass:"aqi-status-value status-color-level5"},[e("span",[t._v("201~300")])]),e("div",{staticClass:"aqi-status-caption"},[t._v("非常不健康")])]),e("div",{staticClass:"col aqi-status-item"},[e("div",{staticClass:"aqi-status-value status-color-level6"},[e("span",[t._v("301~400")])]),e("div",{staticClass:"aqi-status-caption"},[t._v("危害")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"separate-line-wrap"},[e("div",{staticClass:"separate-line"})])}],o=(e("4160"),e("c975"),e("4e82"),e("d3b7"),e("159b"),e("e587")),r=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"loading-container"},[e("div",{staticClass:"loading-wrap"},[e("div",{staticClass:"line"}),e("div",{staticClass:"line"}),e("div",{staticClass:"line"})])])}],d=e("2877"),v={},p=Object(d["a"])(v,r,u,!1,null,null,null),f=p.exports,C={components:{Loading:f},computed:{filterCountySelected:function(){var t=this;return t.data.filter((function(a){return a.County===t.countySelected}))},fillterUpdateTime:function(){var t=this,a=t.data.filter((function(a){return a.County===t.countySelected})),e="";return a.forEach((function(t){t.PublishTime&&!e&&(e=t.PublishTime)})),e}},data:function(){return{data:[],county:[],countySelected:"高雄市",siteSelectedData:{},isLoading:!0}},methods:{getData:function(){var t="https://cors-anywhere.herokuapp.com/",a="http://opendata.epa.gov.tw/webapi/Data/REWIQA/?$orderby=SiteName&$skip=0&$top=1000&format=json",e=t+a,s=this;fetch(e).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()})).then((function(t){if(t){s.data=t,s.data.forEach((function(t){-1===s.county.indexOf(t.County)&&s.county.push(t.County)})),s.county.sort((function(t,a){return t<a?1:-1}));var a=s.data.filter((function(t){return t.County===s.countySelected})),e=Object(o["a"])(a,1);s.siteSelectedData=e[0],s.isLoading=!1}})).catch((function(t){return console.log(t)}))},selectSiteName:function(t){var a=this;a.siteSelectedData=t},countyChange:function(t){var a=this,e=a.data.filter((function(a){return a.County===t})),s=Object(o["a"])(e,1);a.siteSelectedData=s[0]}},created:function(){var t=this;t.getData()}},_=C,m=Object(d["a"])(_,c,n,!1,null,null,null),b=m.exports,h={name:"app",components:{Index:b}},y=h,S=(e("5c0b"),Object(d["a"])(y,i,l,!1,null,null,null)),g=S.exports,w=function(t){var a="";switch(t){case"良好":a="status-color-level1";break;case"普通":a="status-color-level2";break;case"對敏感族群不健康":a="status-color-level3";break;case"對所有族群不健康":a="status-color-level4";break;case"非常不健康":a="status-color-level5";break;case"危害":a="status-color-level6";break;default:a="status-color-none";break}return a};s["a"].filter("juageColor",w),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),i=e.n(s);i.a},"9c0c":function(t,a,e){}});
//# sourceMappingURL=app.30954dfc.js.map