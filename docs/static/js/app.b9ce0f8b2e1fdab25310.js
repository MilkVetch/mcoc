webpackJsonp([1],{"4ZoW":function(e,n){},"4gln":function(e,n){},NHnr:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=s("7+uW"),d={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},d,!1,function(e){s("4ZoW")},null,null).exports,c=s("/ocq"),r={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",[s("h1",[e._v("一线")]),e._v(" "),s("div",{staticClass:"rank"},e._l(e.championsR1,function(n){return s("div",{key:n.name,staticClass:"card"},[s("img",{class:n.class,attrs:{src:"/static/img/champion/"+n.class+"/"+n.name+".png",alt:n.showname}}),e._v(" "),s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:n.isAwakened,expression:"hero.isAwakened"}],staticClass:"isAwakened"},[e._v("★")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:n.needHSL,expression:"hero.needHSL"}],staticClass:"needHSL"},[e._v("❖")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:n.needSynergy,expression:"hero.needSynergy"}],staticClass:"needSynergy"},[e._v("❤")])])])})),e._v(" "),s("h1",[e._v("二线")]),e._v(" "),s("div",{staticClass:"rank"},e._l(e.championsR2,function(n){return s("div",{key:n.name,staticClass:"card"},[s("img",{class:n.class,attrs:{src:"/static/img/champion/"+n.class+"/"+n.name+".png",alt:n.showname}}),e._v(" "),s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:n.isAwakened,expression:"hero.isAwakened"}],staticClass:"isAwakened"},[e._v("★")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:n.needHSL,expression:"hero.needHSL"}],staticClass:"needHSL"},[e._v("❖")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:n.needSynergy,expression:"hero.needSynergy"}],staticClass:"needSynergy"},[e._v("❤")])])])})),e._v(" "),s("h1",[e._v("三线")]),e._v(" "),s("div",{staticClass:"rank"},e._l(e.championsR3,function(n){return s("div",{key:n.name,staticClass:"card"},[s("img",{class:n.class,attrs:{src:"/static/img/champion/"+n.class+"/"+n.name+".png",alt:n.showname}}),e._v(" "),s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:n.isAwakened,expression:"hero.isAwakened"}],staticClass:"isAwakened"},[e._v("★")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:n.needHSL,expression:"hero.needHSL"}],staticClass:"needHSL"},[e._v("❖")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:n.needSynergy,expression:"hero.needSynergy"}],staticClass:"needSynergy"},[e._v("❤")])])])}))])},staticRenderFns:[]};var o=s("VU/8")({name:"HelloWorld",data:function(){return{championsR1:[{name:"Iceman",showname:"冰人",class:"mutant",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Archangel",showname:"大天使",class:"mutant",isAwakened:!0,needHSL:!1,needSynergy:!1},{name:"Magik",showname:"魔术女",class:"mystic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"GhostRider",showname:"恶灵骑士",class:"mystic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"DoctorVoodoo",showname:"巫毒博士",class:"mystic",isAwakened:!0,needHSL:!1,needSynergy:!1},{name:"Gwenpool",showname:"格温侍",class:"skill",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Blade",showname:"刀锋战士",class:"skill",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Medusa",showname:"美杜莎",class:"cosmic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Hyperion",showname:"亥伯龙",class:"cosmic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"SpiderMan(Stark)",showname:"蜘蛛侠（史塔克加强版）",class:"tech",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"StarLord",showname:"星爵",class:"tech",isAwakened:!0,needHSL:!1,needSynergy:!1},{name:"Void",showname:"虚无",class:"science",isAwakened:!0,needHSL:!0,needSynergy:!1}],championsR2:[{name:"Sabretooth",showname:"剑齿虎",class:"mutant",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Wolverine",showname:"金刚狼",class:"mutant",isAwakened:!0,needHSL:!1,needSynergy:!1},{name:"ScarletWitch",showname:"猩红女巫",class:"mystic",isAwakened:!0,needHSL:!0,needSynergy:!1},{name:"Morningstar",showname:"晨星",class:"mystic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"BlackPanther(CivilWar)",showname:"黑豹（内战）",class:"skill",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Taskmaster",showname:"模仿大师",class:"skill",isAwakened:!0,needHSL:!0,needSynergy:!1},{name:"Hawkeye",showname:"鹰眼",class:"skill",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"CorvusGlaive",showname:"亡刃",class:"cosmic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"ProximaMidnight",showname:"暗夜比邻星",class:"cosmic",isAwakened:!0,needHSL:!1,needSynergy:!1},{name:"DoctorOctopus",showname:"章鱼博士",class:"tech",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Vision",showname:"幻视",class:"tech",isAwakened:!0,needHSL:!1,needSynergy:!1},{name:"Vision(AOU)",showname:"幻视（奥创纪元）",class:"tech",isAwakened:!0,needHSL:!1,needSynergy:!1},{name:"IronMan(IW)",showname:"钢铁侠（无限之战）",class:"tech",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Quake",showname:"震波女",class:"science",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"LukeCage",showname:"卢克·凯吉",class:"science",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"CaptainAmerica(IW)",showname:"美国队长（无尽之战）",class:"science",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Hulk(Ragnarok)",showname:"浩克（诸神黄昏）",class:"science",isAwakened:!1,needHSL:!1,needSynergy:!1}],championsR3:[{name:"Wolverine(X23)",showname:"金刚狼（X-23）",class:"mutant",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Rogue",showname:"罗刹女",class:"mutant",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Dormammu",showname:"多玛姆",class:"mystic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"TheHood",showname:"红帽兜",class:"mystic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Elektra",showname:"艾丽卡",class:"skill",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Daredevil(Classic)",showname:"夜魔侠（经典）",class:"skill",isAwakened:!0,needHSL:!0,needSynergy:!1},{name:"Thor(Ragnarok)",showname:"雷神索尔（诸神黄昏）",class:"skill",isAwakened:!0,needHSL:!0,needSynergy:!0},{name:"Crossbones",showname:"交叉骨",class:"skill",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"BlackWidow",showname:"黑寡妇",class:"skill",isAwakened:!0,needHSL:!0,needSynergy:!1},{name:"Drax",showname:"德拉克斯",class:"cosmic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Thor",showname:"雷神索尔",class:"cosmic",isAwakened:!0,needHSL:!1,needSynergy:!1},{name:"Angela",showname:"安吉尔",class:"cosmic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Hela",showname:"海拉",class:"cosmic",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Ultron",showname:"奥创",class:"tech",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Sentinel",showname:"步哨",class:"tech",isAwakened:!1,needHSL:!1,needSynergy:!1},{name:"Hulk",showname:"浩克",class:"science",isAwakened:!0,needHSL:!1,needSynergy:!1},{name:"RedHulk",showname:"红巨人",class:"science",isAwakened:!1,needHSL:!1,needSynergy:!1}],championsR4:[]}}},r,!1,function(e){s("4gln")},"data-v-3da2db24",null).exports;a.a.use(c.a);var m=new c.a({routes:[{path:"/",name:"HelloWorld",component:o}]});s("uMhA");a.a.config.productionTip=!1,new a.a({el:"#app",router:m,components:{App:i},template:"<App/>"})},uMhA:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.b9ce0f8b2e1fdab25310.js.map