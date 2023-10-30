"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[1923],{34576:function(T,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(27424),c=e.n(r),t=e(67294),i=e(96707),d=e(64236),o=e(7925),p=e(90482),m=e(85893),u={};function h(){var g=(0,i.pC)(),v=(0,t.useState)(!1),l=c()(v,2),_=l[0],b=l[1],a=(0,t.useRef)(i.m8.location.pathname);return(0,t.useEffect)(function(){return i.m8.listen(function(s){s.location.pathname!==a.current&&(a.current=s.location.pathname,document.documentElement.scrollTo(0,0))})},[]),(0,m.jsx)(d.D.Provider,{value:{pkg:{name:"nocobase-docs",description:"A static site based on dumi",version:"0.0.1",license:"MIT",authors:[]},historyType:"browser",entryExports:u,demos:o.DE,components:o.wx,locales:p.k,loading:_,setLoading:b,hostname:void 0,themeConfig:{footer:"nocobase | Copyright \xA9 2022",prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,title:"NocoBase",logo:"https://www.nocobase.com/images/logo.png",nav:[{title:"Welcome","title.zh-CN":"\u6B22\u8FCE",link:"/welcome/introduction"},{title:"User manual","title.zh-CN":"\u4F7F\u7528\u624B\u518C",link:"/manual/quick-start/the-first-app"},{title:"Plugin Development","title.zh-CN":"\u63D2\u4EF6\u5F00\u53D1",link:"/development"},{title:"API reference","title.zh-CN":"API \u53C2\u8003",link:"/api"}],sidebarEnhance:{"/welcome":[{title:"Welcome","title.zh-CN":"\u6B22\u8FCE","title.tr-TR":"Ho\u015Fgeldiniz",type:"group",children:["/welcome/introduction","/welcome/introduction/features","/welcome/introduction/why"]},{title:"Getting started","title.zh-CN":"\u5FEB\u901F\u5F00\u59CB","title.tr-TR":"Ba\u015Flang\u0131\xE7",type:"group",children:[{title:"Installation","title.zh-CN":"\u5B89\u88C5","title.TR-TR":"Kurulum",children:["/welcome/getting-started/installation","/welcome/getting-started/installation/docker-compose","/welcome/getting-started/installation/create-nocobase-app","/welcome/getting-started/installation/git-clone"]},{title:"Upgrading","title.zh-CN":"\u5347\u7EA7","title.TR-TR":"G\xFCncelleme",children:["/welcome/getting-started/upgrading","/welcome/getting-started/upgrading/docker-compose","/welcome/getting-started/upgrading/create-nocobase-app","/welcome/getting-started/upgrading/git-clone"]}]},{title:"Releases","title.zh-CN":"\u4EA7\u54C1\u53D1\u5E03","title.TR-TR":"S\xFCr\xFCm",type:"group",children:[{type:"item",title:"Changelog","title.zh-CN":"\u66F4\u65B0\u65E5\u5FD7",link:"https://github.com/nocobase/nocobase/blob/main/CHANGELOG.md"},"/welcome/release/v14-changelog","/welcome/release/v13-changelog","/welcome/release/v12-changelog","/welcome/release/v11-changelog","/welcome/release/v10-changelog"]},{title:"Community","title.zh-CN":"\u793E\u533A","title.TR-TR":"Topluluk",type:"group",children:["/welcome/community/contributing","/welcome/community/translations","/welcome/community/thanks"]}],"/manual":[{title:"Quick Start","title.zh-CN":"\u5FEB\u901F\u4E0A\u624B","title.TR-TR":"H\u0131zl\u0131 Ba\u015Flang\u0131\xE7",type:"group",children:["/manual/quick-start/the-first-app","/manual/quick-start/functional-zoning","/manual/quick-start/ui-editor-mode"]},{title:"Core Concepts","title.zh-CN":"\u6838\u5FC3\u6982\u5FF5","title.TR-TR":"Temel Kavramlar",type:"group",children:["/manual/core-concepts/collections","/manual/core-concepts/blocks","/manual/core-concepts/actions","/manual/core-concepts/menus","/manual/core-concepts/containers"]}],"/development":[{title:"Getting started","title.zh-CN":"\u5FEB\u901F\u5F00\u59CB","title.TR-TR":"Ba\u015Flarken",type:"group",children:["/development","/development/your-fisrt-plugin","/development/app-ds","/development/plugin-ds","/development/life-cycle"]},{title:"Server","title.zh-CN":"\u670D\u52A1\u7AEF","title.TR-TR":"Sunucu",type:"group",children:["/development/server",{title:"Collections & Fields","title.zh-CN":"\u6570\u636E\u8868\u548C\u5B57\u6BB5","title.TR-TR":"Koleksiyonlar & Alanlar",children:["/development/server/collections","/development/server/collections/options","/development/server/collections/configure","/development/server/collections/association-fields","/development/server/collections/field-extension","/development/server/collections/collection-template"]},"/development/server/resources-actions","/development/server/middleware","/development/server/commands","/development/server/events","/development/server/i18n","/development/server/migration","/development/server/test"]},{title:"Client","title.zh-CN":"\u5BA2\u6237\u7AEF","title.TR-TR":"Ziyaret\xE7i(Client)",type:"group",children:["/development/client",{title:"UI designer","title.zh-CN":"UI \u8BBE\u8BA1\u5668","title.TR-TR":"Kullan\u0131c\u0131 Aray\xFCz Tasar\u0131mc\u0131s\u0131",children:["/development/client/ui-schema-designer/what-is-ui-schema","/development/client/ui-schema-designer/extending-schema-components","/development/client/ui-schema-designer/designable","/development/client/ui-schema-designer/component-library","/development/client/ui-schema-designer/x-designer","/development/client/ui-schema-designer/x-initializer"]},"/development/client/ui-router","/development/client/settings-center","/development/client/i18n","/development/client/test"]}],"/api":["/api","/api/env",{title:"HTTP API",type:"subMenu",children:["/api/http","/api/http/rest-api"]},{title:"@nocobase/server",type:"subMenu",children:["/api/server/application","/api/server/plugin"]},{title:"@nocobase/database",type:"subMenu",children:["/api/database","/api/database/collection","/api/database/field","/api/database/repository","/api/database/relation-repository/has-one-repository","/api/database/relation-repository/has-many-repository","/api/database/relation-repository/belongs-to-repository","/api/database/relation-repository/belongs-to-many-repository","/api/database/operators"]},{title:"@nocobase/resourcer",type:"subMenu",children:["/api/resourcer","/api/resourcer/resource","/api/resourcer/action","/api/resourcer/middleware"]},{title:"@nocobase/acl",type:"subMenu",children:["/api/acl/acl","/api/acl/acl-role","/api/acl/acl-resource"]},{title:"@nocobase/client",type:"subMenu",children:["/api/client/application","/api/client/router",{title:"SchemaDesigner","title.zh-CN":"SchemaDesigner","title.TR-TR":"\u015Eema Tasar\u0131mc\u0131s\u0131",children:["/api/client/schema-designer/schema-component","/api/client/schema-designer/schema-initializer","/api/client/schema-designer/schema-settings"]},{title:"Extensions","title.zh-CN":"Extensions","title.TR-TR":"Eklentiler",children:["/api/client/extensions/collection-manager","/api/client/extensions/block-provider","/api/client/extensions/acl"]}]},{title:"@nocobase/cli",link:"/api/cli"},{title:"@nocobase/actions",link:"/api/actions"},{title:"@nocobase/sdk",link:"/api/sdk"}]},github:"https://github.com/nocobase/nocobase",localesEnhance:[{id:"zh-CN",switchPrefix:"\u4E2D",hostname:"docs-cn.nocobase.com"},{id:"en-US",switchPrefix:"en",hostname:"docs.nocobase.com"}]},_2_level_nav_available:!0},children:g})}}}]);
