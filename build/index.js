!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.React}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.apiFetch}()},function(e,t,n){"use strict";n.r(t);var i=n(0),r=(n(3),n(4)),a=n(5),c=n.n(a),o=n(2),s=n(1),l=(wp.i18n.__,function(e){var t=e.attributes,n=e.gifResults,r=e.setGif,a=e.setGifSearch,c=e.pagePos,o=e.searchTerm,l=e.hasNextPage,u=e.isLoading;t.currentGif,t.currentGifWidth,t.currentGifHeight,t.altText;if(u)return Object(i.createElement)("div",{class:"centercontent"},Object(i.createElement)(s.Spinner,null));var g=!0;(c>0||0==l)&&(g=!1);var f=Object(i.createElement)(s.Button,{className:"is-primary",onClick:function(e){a(o,"prev")},disabled:g},"Previous"),p=!0;null!=c&&0!=l&&(p=!1);var h=Object(i.createElement)(s.Button,{className:"is-primary",onClick:function(e){a(o,"next")},disabled:p},"Next");return n?n.length?Object(i.createElement)("div",null,Object(i.createElement)("div",{class:"gifresults"},n.map((function(e){return Object(i.createElement)("img",{src:e.preview,width:e.width,height:e.height,url:e.url,onClick:function(){return r(e)}})}))),Object(i.createElement)("div",{class:"gif-navigation"},f,h)):"":Object(i.createElement)("div",null,Object(i.createElement)("div",{class:"gifresults"}),Object(i.createElement)("div",{class:"gif-navigation"},f,h))}),u=wp.element.Fragment,g=wp.editor.InspectorControls,f=wp.components,p=f.PanelBody,h=(f.Text,wp.i18n.__),m=Object(r.withState)()((function(e){var t=e.attributes,n=e.setAttributes,r=e.searchTerm,a=e.setGifSearch,c=e.gifResults,f=e.pagePos,m=e.hasNextPage,b=e.isLoading,d=e.setGif,x=e.plugin_settings,j=t.altText,O=t.currentGif,v=sprintf(h('Please enter your Tenor API key on the <a href="%s">settings page</a>.',"tfg"),x.tfg_settings_page),E=Object(i.createElement)(s.TextControl,{label:h("Alt text (alternative text)"),value:j,help:Object(i.createElement)(s.ExternalLink,{href:"https://www.w3.org/WAI/tutorials/images/decision-tree"},"Describe the purpose of the image"),onChange:function(e){return n({altText:e})}});O||""!=x.tenor_api_key||(E="");var T=Object(i.createElement)(u,null,Object(i.createElement)("div",{class:"powered-by"},h("Powered by Tenor")),Object(i.createElement)(s.__experimentalInputControl,{label:h("Set Gif"),placeholder:h("Search Tenor"),value:r,isPressEnterToChange:"true",suffix:Object(i.createElement)(s.Button,{className:"is-primary"},h("Search")),onChange:function(e){return a(e,"reset")}}));return""==x.tenor_api_key&&(T=Object(i.createElement)(u,null,Object(i.createElement)(o.RichText.Content,{tagName:"p",value:v}),Object(i.createElement)(s.Button,{className:"components-button is-secondary",href:x.tfg_settings_page},h("Visit Settings Page")))),Object(i.createElement)(u,null,Object(i.createElement)(g,null,Object(i.createElement)(p,{title:h("Settings")},E,T,Object(i.createElement)(l,{attributes:t,gifResults:c,pagePos:f,setGifSearch:a,searchTerm:r,hasNextPage:m,isLoading:b,setGif:d}))))})),b=wp.i18n.__,d=function(e){var t=e.attributes,n=e.setCaption,r=e.setAttributes,a=e.plugin_settings,c=t.currentGif,l=t.currentGifWidth,u=t.currentGifHeight,g=t.align,f=t.captionText,p=t.altText,h=t.gifBoxWidth,m=t.gifBoxHeight;if(!c&&""==a.tenor_api_key)return Object(i.createElement)(o.RichText.Content,{tagName:"p",value:sprintf(b('Please enter your Tenor API key on the <a href="%s">settings page</a>.',"tfg"),a.tfg_settings_page)});if(!c)return Object(i.createElement)("div",{className:"nogif"},Object(i.createElement)(o.RichText.Content,{tagName:"p",value:b("Use the search to find a gif from Tenor","tfg")}));var d="align"+g;return Object(i.createElement)("div",{className:"wp-block-image tfg-gif-block"},Object(i.createElement)("figure",{className:d},Object(i.createElement)(s.ResizableBox,{size:{height:m,width:h},minHeight:"50",minWidth:"50",enable:{top:!1,right:!0,bottom:!1,left:!0,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},lockAspectRatio:"true",onResizeStop:function(e,t,n,i){r({gifBoxHeight:parseInt(m+i.height,10),gifBoxWidth:parseInt(h+i.width,10)})},onResizeStart:function(){}},Object(i.createElement)("img",{src:c,width:l,height:u,alt:p})),Object(i.createElement)("figcaption",null,Object(i.createElement)(o.RichText,{tagName:"span",value:f,onChange:function(e){return n(e)},placeholder:b("Enter a caption. Via Tenor")}))))},x=wp.i18n.__,j=wp.blocks.registerBlockType,O=wp.element.Fragment,v=tfg_settings;j("tfg/tenor-for-gutenberg",{title:x("Tenor Gif"),description:x("Search and embed gifs directly from Tenor.","tfg"),icon:"format-image",category:"media",keywords:[x("Tenor"),x("Gif")],supports:{},attributes:{currentGif:{type:"string"},currentGifWidth:{type:"number"},currentGifHeight:{type:"number"},altText:{type:"string"},captionText:{type:"string"},align:{type:"string",default:"center"},gifBoxWidth:{type:"number"},gifBoxHeight:{type:"number"}},example:{attributes:{currentGif:"https://media.tenor.com/images/a8e4ceb0e6e1eaa33da1233bad36bd98/tenor.gif",currentGifWidth:500,currentGifHeight:280,gifBoxWidth:500,gifBoxHeight:280,captionText:"Via Tenor"}},edit:Object(r.withState)({gifResults:[]})((function(e){var t=e.gifResults,n=e.setState,r=e.attributes,a=e.setAttributes,s=e.searchTerm,l=e.pagePos,u=e.hasNextPage,g=e.isLoading;e.hasPreviousGif;return Object(i.createElement)(O,null,Object(i.createElement)(o.BlockControls,null,Object(i.createElement)(o.BlockAlignmentToolbar,{value:r.align,onChange:function(e){a({align:e})}})),Object(i.createElement)(m,{attributes:r,gifResults:t,setAttributes:a,setGifSearch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;"reset"==t?l=0:"prev"==t?l-=1:l+=1,e&&(n({isLoading:!0}),c()({path:"/tfg/v1/search/"+e+"/pos/"+l}).then((function(t){u=!0,1==t.last_page&&(u=!1),n({gifResults:t.options,pagePos:l,searchTerm:e,hasNextPage:u,isLoading:!1})})))},searchTerm:s,pagePos:l,hasNextPage:u,isLoading:g,setGif:function(e){a({currentGif:e.url,currentGifWidth:e.width,currentGifHeight:e.height,gifBoxWidth:e.width,gifBoxHeight:e.height})},plugin_settings:v}),Object(i.createElement)(d,{attributes:r,setCaption:function(e){e.includes("Via Tenor")||(e+=" Via Tenor"),a({captionText:e})},setAttributes:a,plugin_settings:v}))})),save:function(e){var t=e.attributes,n=t.currentGif,r=t.currentGifWidth,a=t.currentGifHeight,c=t.align,s=t.captionText,l=t.altText,u=t.gifBoxWidth;t.gifBoxHeight;if(!n)return"";var g="align"+c,f="Via Tenor";return s&&(f=s),Object(i.createElement)(O,null,Object(i.createElement)("div",{className:"wp-block-image tfg-gif-block"},Object(i.createElement)("figure",{className:g},Object(i.createElement)("div",{className:"components-resizable-box__container",style:{width:u}},Object(i.createElement)("img",{src:n,width:r,height:a,alt:l})),Object(i.createElement)("figcaption",null,Object(i.createElement)(o.RichText.Content,{tagName:"span",value:f})))))}})}]);