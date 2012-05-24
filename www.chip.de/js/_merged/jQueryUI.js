jQuery=$CC;
/*
 * jQuery UI 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(a,d){a.ui=a.ui||{};if(a.ui.version){return}a.extend(a.ui,{version:"1.8.13",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(e,f){return typeof e==="number"?this.each(function(){var g=this;setTimeout(function(){a(g).focus();if(f){f.call(g)}},e)}):this._focus.apply(this,arguments)},scrollParent:function(){var e;if((a.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){e=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(a.curCSS(this,"position",1))&&(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0)}else{e=this.parents().filter(function(){return(/(auto|scroll)/).test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!e.length?a(document):e},zIndex:function(h){if(h!==d){return this.css("zIndex",h)}if(this.length){var f=a(this[0]),e,g;while(f.length&&f[0]!==document){e=f.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){g=parseInt(f.css("zIndex"),10);if(!isNaN(g)&&g!==0){return g}}f=f.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.each(["Width","Height"],function(g,e){var f=e==="Width"?["Left","Right"]:["Top","Bottom"],h=e.toLowerCase(),k={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};function j(m,l,i,n){a.each(f,function(){l-=parseFloat(a.curCSS(m,"padding"+this,true))||0;if(i){l-=parseFloat(a.curCSS(m,"border"+this+"Width",true))||0}if(n){l-=parseFloat(a.curCSS(m,"margin"+this,true))||0}});return l}a.fn["inner"+e]=function(i){if(i===d){return k["inner"+e].call(this)}return this.each(function(){a(this).css(h,j(this,i)+"px")})};a.fn["outer"+e]=function(i,l){if(typeof i!=="number"){return k["outer"+e].call(this,i)}return this.each(function(){a(this).css(h,j(this,i,true,l)+"px")})}});function c(g,e){var j=g.nodeName.toLowerCase();if("area"===j){var i=g.parentNode,h=i.name,f;if(!g.href||!h||i.nodeName.toLowerCase()!=="map"){return false}f=a("img[usemap=#"+h+"]")[0];return !!f&&b(f)}return(/input|select|textarea|button|object/.test(j)?!g.disabled:"a"==j?g.href||e:e)&&b(g)}function b(e){return !a(e).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.extend(a.expr[":"],{data:function(g,f,e){return !!a.data(g,e[3])},focusable:function(e){return c(e,!isNaN(a.attr(e,"tabindex")))},tabbable:function(g){var e=a.attr(g,"tabindex"),f=isNaN(e);return(f||e>=0)&&c(g,!f)}});a(function(){var e=document.body,f=e.appendChild(f=document.createElement("div"));a.extend(f.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=f.offsetHeight===100;a.support.selectstart="onselectstart" in f;e.removeChild(f).style.display="none"});a.extend(a.ui,{plugin:{add:function(f,g,j){var h=a.ui[f].prototype;for(var e in j){h.plugins[e]=h.plugins[e]||[];h.plugins[e].push([g,j[e]])}},call:function(e,g,f){var j=e.plugins[g];if(!j||!e.element[0].parentNode){return}for(var h=0;h<j.length;h++){if(e.options[j[h][0]]){j[h][1].apply(e.element,f)}}}},contains:function(f,e){return document.compareDocumentPosition?f.compareDocumentPosition(e)&16:f!==e&&f.contains(e)},hasScroll:function(h,f){if(a(h).css("overflow")==="hidden"){return false}var e=(f&&f==="left")?"scrollLeft":"scrollTop",g=false;if(h[e]>0){return true}h[e]=1;g=(h[e]>0);h[e]=0;return g},isOverAxis:function(f,e,g){return(f>e)&&(f<(e+g))},isOver:function(j,f,i,h,e,g){return a.ui.isOverAxis(j,i,e)&&a.ui.isOverAxis(f,h,g)}})})(jQuery);
/*
 * jQuery UI Widget 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,d){if(b.cleanData){var c=b.cleanData;b.cleanData=function(e){for(var f=0,g;(g=e[f])!=null;f++){b(g).triggerHandler("remove")}c(e)}}else{var a=b.fn.remove;b.fn.remove=function(e,f){return this.each(function(){if(!f){if(!e||b.filter(e,[this]).length){b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")})}}return a.call(b(this),e,f)})}}b.widget=function(f,h,e){var g=f.split(".")[0],j;f=f.split(".")[1];j=g+"-"+f;if(!e){e=h;h=b.Widget}b.expr[":"][j]=function(k){return !!b.data(k,f)};b[g]=b[g]||{};b[g][f]=function(k,l){if(arguments.length){this._createWidget(k,l)}};var i=new h();i.options=b.extend(true,{},i.options);b[g][f].prototype=b.extend(true,i,{namespace:g,widgetName:f,widgetEventPrefix:b[g][f].prototype.widgetEventPrefix||f,widgetBaseClass:j},e);b.widget.bridge(f,b[g][f])};b.widget.bridge=function(f,e){b.fn[f]=function(i){var g=typeof i==="string",h=Array.prototype.slice.call(arguments,1),j=this;i=!g&&h.length?b.extend.apply(null,[true,i].concat(h)):i;if(g&&i.charAt(0)==="_"){return j}if(g){this.each(function(){var k=b.data(this,f),l=k&&b.isFunction(k[i])?k[i].apply(k,h):k;if(l!==k&&l!==d){j=l;return false}})}else{this.each(function(){var k=b.data(this,f);if(k){k.option(i||{})._init()}else{b.data(this,f,new e(i,this))}})}return j}};b.Widget=function(e,f){if(arguments.length){this._createWidget(e,f)}};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(f,g){b.data(g,this.widgetName,this);this.element=b(g);this.options=b.extend(true,{},this.options,this._getCreateOptions(),f);var e=this;this.element.bind("remove."+this.widgetName,function(){e.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(f,g){var e=f;if(arguments.length===0){return b.extend({},this.options)}if(typeof f==="string"){if(g===d){return this.options[f]}e={};e[f]=g}this._setOptions(e);return this},_setOptions:function(f){var e=this;b.each(f,function(g,h){e._setOption(g,h)});return this},_setOption:function(e,f){this.options[e]=f;if(e==="disabled"){this.widget()[f?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",f)}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(f,g,h){var k=this.options[f];g=b.Event(g);g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();h=h||{};if(g.originalEvent){for(var e=b.event.props.length,j;e;){j=b.event.props[--e];g[j]=g.originalEvent[j]}}this.element.trigger(g,h);return !(b.isFunction(k)&&k.call(this.element[0],g,h)===false||g.isDefaultPrevented())}}})(jQuery);(function(f,g){f.ui=f.ui||{};var d=/left|center|right/,e=/top|center|bottom/,a="center",b=f.fn.position,c=f.fn.offset;f.fn.position=function(i){if(!i||!i.of){return b.apply(this,arguments)}i=f.extend({},i);var m=f(i.of),l=m[0],o=(i.collision||"flip").split(" "),n=i.offset?i.offset.split(" "):[0,0],k,h,j;if(l.nodeType===9){k=m.width();h=m.height();j={top:0,left:0}}else{if(l.setTimeout){k=m.width();h=m.height();j={top:m.scrollTop(),left:m.scrollLeft()}}else{if(l.preventDefault){i.at="left top";k=h=0;j={top:i.of.pageY,left:i.of.pageX}}else{k=m.outerWidth();h=m.outerHeight();j=m.offset()}}}f.each(["my","at"],function(){var p=(i[this]||"").split(" ");if(p.length===1){p=d.test(p[0])?p.concat([a]):e.test(p[0])?[a].concat(p):[a,a]}p[0]=d.test(p[0])?p[0]:a;p[1]=e.test(p[1])?p[1]:a;i[this]=p});if(o.length===1){o[1]=o[0]}n[0]=parseInt(n[0],10)||0;if(n.length===1){n[1]=n[0]}n[1]=parseInt(n[1],10)||0;if(i.at[0]==="right"){j.left+=k}else{if(i.at[0]===a){j.left+=k/2}}if(i.at[1]==="bottom"){j.top+=h}else{if(i.at[1]===a){j.top+=h/2}}j.left+=n[0];j.top+=n[1];return this.each(function(){var s=f(this),v=s.outerWidth(),r=s.outerHeight(),u=parseInt(f.curCSS(this,"marginLeft",true))||0,q=parseInt(f.curCSS(this,"marginTop",true))||0,x=v+u+(parseInt(f.curCSS(this,"marginRight",true))||0),y=r+q+(parseInt(f.curCSS(this,"marginBottom",true))||0),w=f.extend({},j),p;if(i.my[0]==="right"){w.left-=v}else{if(i.my[0]===a){w.left-=v/2}}if(i.my[1]==="bottom"){w.top-=r}else{if(i.my[1]===a){w.top-=r/2}}w.left=Math.round(w.left);w.top=Math.round(w.top);p={left:w.left-u,top:w.top-q};f.each(["left","top"],function(A,z){if(f.ui.position[o[A]]){f.ui.position[o[A]][z](w,{targetWidth:k,targetHeight:h,elemWidth:v,elemHeight:r,collisionPosition:p,collisionWidth:x,collisionHeight:y,offset:n,my:i.my,at:i.at})}});if(f.fn.bgiframe){s.bgiframe()}s.offset(f.extend(w,{using:i.using}))})};f.ui.position={fit:{left:function(h,i){var k=f(window),j=i.collisionPosition.left+i.collisionWidth-k.width()-k.scrollLeft();h.left=j>0?h.left-j:Math.max(h.left-i.collisionPosition.left,h.left)},top:function(h,i){var k=f(window),j=i.collisionPosition.top+i.collisionHeight-k.height()-k.scrollTop();h.top=j>0?h.top-j:Math.max(h.top-i.collisionPosition.top,h.top)}},flip:{left:function(i,k){if(k.at[0]===a){return}var m=f(window),l=k.collisionPosition.left+k.collisionWidth-m.width()-m.scrollLeft(),h=k.my[0]==="left"?-k.elemWidth:k.my[0]==="right"?k.elemWidth:0,j=k.at[0]==="left"?k.targetWidth:-k.targetWidth,n=-2*k.offset[0];i.left+=k.collisionPosition.left<0?h+j+n:l>0?h+j+n:0},top:function(i,k){if(k.at[1]===a){return}var m=f(window),l=k.collisionPosition.top+k.collisionHeight-m.height()-m.scrollTop(),h=k.my[1]==="top"?-k.elemHeight:k.my[1]==="bottom"?k.elemHeight:0,j=k.at[1]==="top"?k.targetHeight:-k.targetHeight,n=-2*k.offset[1];i.top+=k.collisionPosition.top<0?h+j+n:l>0?h+j+n:0}}};if(!f.offset.setOffset){f.offset.setOffset=function(l,i){if(/static/.test(f.curCSS(l,"position"))){l.style.position="relative"}var k=f(l),n=k.offset(),h=parseInt(f.curCSS(l,"top",true),10)||0,m=parseInt(f.curCSS(l,"left",true),10)||0,j={top:(i.top-n.top)+h,left:(i.left-n.left)+m};if("using" in i){i.using.call(l,j)}else{k.css(j)}};f.fn.offset=function(h){var i=this[0];if(!i||!i.ownerDocument){return null}if(h){return this.each(function(){f.offset.setOffset(this,h)})}return c.call(this)}}}(jQuery));(function(a,b){var c=0;a.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var d=this,f=this.element[0].ownerDocument,e;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(g){if(d.options.disabled||d.element.attr("readonly")){return}e=false;var h=a.ui.keyCode;switch(g.keyCode){case h.PAGE_UP:d._move("previousPage",g);break;case h.PAGE_DOWN:d._move("nextPage",g);break;case h.UP:d._move("previous",g);g.preventDefault();break;case h.DOWN:d._move("next",g);g.preventDefault();break;case h.ENTER:case h.NUMPAD_ENTER:if(d.menu.active){e=true;g.preventDefault()}case h.TAB:if(!d.menu.active){return}d.menu.select(g);break;case h.ESCAPE:d.element.val(d.term);d.close(g);break;default:clearTimeout(d.searching);d.searching=setTimeout(function(){if(d.term!=d.element.val()){d.selectedItem=null;d.search(null,g)}},d.options.delay);break}}).bind("keypress.autocomplete",function(g){if(e){e=false;g.preventDefault()}}).bind("focus.autocomplete",function(){if(d.options.disabled){return}d.selectedItem=null;d.previous=d.element.val()}).bind("blur.autocomplete",function(g){if(d.options.disabled){return}clearTimeout(d.searching);d.closing=setTimeout(function(){d.close(g);d._change(g)},150)});this._initSource();this.response=function(){return d._response.apply(d,arguments)};this.menu=a("<ul></ul>").addClass("ui-autocomplete").appendTo(a(this.options.appendTo||"body",f)[0]).mousedown(function(g){var h=d.menu.element[0];if(!a(g.target).closest(".ui-menu-item").length){setTimeout(function(){a(document).one("mousedown",function(i){if(i.target!==d.element[0]&&i.target!==h&&!a.ui.contains(h,i.target)){d.close()}})},1)}setTimeout(function(){clearTimeout(d.closing)},13)}).menu({focus:function(h,i){var g=i.item.data("item.autocomplete");if(false!==d._trigger("focus",h,{item:g})){if(/^key/.test(h.originalEvent.type)){d.element.val(g.value)}}},selected:function(i,j){var h=j.item.data("item.autocomplete"),g=d.previous;if(d.element[0]!==f.activeElement){d.element.focus();d.previous=g;setTimeout(function(){d.previous=g;d.selectedItem=h},1)}if(false!==d._trigger("select",i,{item:h})){d.element.val(h.value)}d.term=d.element.val();d.close(i);d.selectedItem=h},blur:function(g,h){if(d.menu.element.is(":visible")&&(d.element.val()!==d.term)){d.element.val(d.term)}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if(a.fn.bgiframe){this.menu.element.bgiframe()}},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();a.Widget.prototype.destroy.call(this)},_setOption:function(d,e){a.Widget.prototype._setOption.apply(this,arguments);if(d==="source"){this._initSource()}if(d==="appendTo"){this.menu.element.appendTo(a(e||"body",this.element[0].ownerDocument)[0])}if(d==="disabled"&&e&&this.xhr){this.xhr.abort()}},_initSource:function(){var d=this,f,e;if(a.isArray(this.options.source)){f=this.options.source;this.source=function(h,g){g(a.ui.autocomplete.filter(f,h.term))}}else{if(typeof this.options.source==="string"){e=this.options.source;this.source=function(h,g){if(d.xhr){d.xhr.abort()}d.xhr=a.ajax({url:e,data:h,dataType:"json",autocompleteRequest:++c,success:function(j,i){if(this.autocompleteRequest===c){g(j)}},error:function(){if(this.autocompleteRequest===c){g([])}}})}}else{this.source=this.options.source}}},search:function(e,d){e=e!=null?e:this.element.val();this.term=this.element.val();if(e.length<this.options.minLength){return this.close(d)}clearTimeout(this.closing);if(this._trigger("search",d)===false){return}return this._search(e)},_search:function(d){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:d},this.response)},_response:function(d){if(!this.options.disabled&&d&&d.length){d=this._normalize(d);this._suggest(d);this._trigger("open")}else{this.close()}this.pending--;if(!this.pending){this.element.removeClass("ui-autocomplete-loading")}},close:function(d){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",d)}},_change:function(d){if(this.previous!==this.element.val()){this._trigger("change",d,{item:this.selectedItem})}},_normalize:function(d){if(d.length&&d[0].label&&d[0].value){return d}return a.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}}return a.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(d){var e=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(e,d);this.menu.deactivate();this.menu.refresh();e.show();this._resizeMenu();e.position(a.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next(new a.Event("mouseover"))}},_resizeMenu:function(){var d=this.menu.element;d.outerWidth(Math.max(d.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(f,e){var d=this;a.each(e,function(g,h){d._renderItem(f,h)})},_renderItem:function(d,e){return a("<li></li>").data("item.autocomplete",e).append(a("<a></a>").text(e.label)).appendTo(d)},_move:function(e,d){if(!this.menu.element.is(":visible")){this.search(null,d);return}if(this.menu.first()&&/^previous/.test(e)||this.menu.last()&&/^next/.test(e)){this.element.val(this.term);this.menu.deactivate();return}this.menu[e](d)},widget:function(){return this.menu.element}});a.extend(a.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(f,d){var e=new RegExp(a.ui.autocomplete.escapeRegex(d),"i");return a.grep(f,function(g){return e.test(g.label||g.value||g)})}})}(jQuery));(function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){if(!a(c.target).closest(".ui-menu-item a").length){return}c.preventDefault();b.select(c)});this.refresh()},refresh:function(){var c=this;var b=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");b.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(d){c.activate(d,a(this).parent())}).mouseleave(function(){c.deactivate()})},activate:function(e,d){this.deactivate();if(this.hasScroll()){var f=d.offset().top-this.element.offset().top,b=this.element.scrollTop(),c=this.element.height();if(f<0){this.element.scrollTop(b+f)}else{if(f>=c){this.element.scrollTop(b+f-c+d.height())}}}this.active=d.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",e,{item:d})},deactivate:function(){if(!this.active){return}this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(b){this.move("next",".ui-menu-item:first",b)},previous:function(b){this.move("prev",".ui-menu-item:last",b)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(e,d,c){if(!this.active){this.activate(c,this.element.children(d));return}var b=this.active[e+"All"](".ui-menu-item").eq(0);if(b.length){this.activate(c,b)}else{this.activate(c,this.element.children(d))}},nextPage:function(d){if(this.hasScroll()){if(!this.active||this.last()){this.activate(d,this.element.children(".ui-menu-item:first"));return}var e=this.active.offset().top,c=this.element.height(),b=this.element.children(".ui-menu-item").filter(function(){var f=a(this).offset().top-e-c+a(this).height();return f<10&&f>-10});if(!b.length){b=this.element.children(".ui-menu-item:last")}this.activate(d,b)}else{this.activate(d,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))}},previousPage:function(c){if(this.hasScroll()){if(!this.active||this.first()){this.activate(c,this.element.children(".ui-menu-item:last"));return}var d=this.active.offset().top,b=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var e=a(this).offset().top-d+b-a(this).height();return e<10&&e>-10});if(!result.length){result=this.element.children(".ui-menu-item:first")}this.activate(c,result)}else{this.activate(c,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element[a.fn.prop?"prop":"attr"]("scrollHeight")},select:function(b){this._trigger("selected",b,{item:this.active})}})}(jQuery));(function(d,f){var c=0,b=0;function e(){return ++c}function a(){return ++b}d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(g,h){if(g=="selected"){if(this.options.collapsible&&h==this.options.selected){return}this.select(h)}else{this.options[g]=h;this._tabify()}},_tabId:function(g){return g.title&&g.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+e()},_sanitizeSelector:function(g){return g.replace(/:/g,"\\:")},_cookie:function(){var g=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+a());return d.cookie.apply(null,[g].concat(d.makeArray(arguments)))},_ui:function(h,g){return{tab:h,panel:g,index:this.anchors.index(h)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var g=d(this);g.html(g.data("label.tabs")).removeData("label.tabs")})},_tabify:function(u){var v=this,j=this.options,h=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(x,o){var w=d(o).attr("href");var y=w.split("#")[0],z;if(y&&(y===location.toString().split("#")[0]||(z=d("base")[0])&&y===z.href)){w=o.hash;o.href=w}if(h.test(w)){v.panels=v.panels.add(v.element.find(v._sanitizeSelector(w)))}else{if(w&&w!=="#"){d.data(o,"href.tabs",w);d.data(o,"load.tabs",w.replace(/#.*$/,""));var B=v._tabId(o);o.href="#"+B;var A=v.element.find("#"+B);if(!A.length){A=d(j.panelTemplate).attr("id",B).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(v.panels[x-1]||v.list);A.data("destroy.tabs",true)}v.panels=v.panels.add(A)}else{j.disabled.push(x)}}});if(u){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(j.selected===f){if(location.hash){this.anchors.each(function(w,o){if(o.hash==location.hash){j.selected=w;return false}})}if(typeof j.selected!=="number"&&j.cookie){j.selected=parseInt(v._cookie(),10)}if(typeof j.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){j.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}j.selected=j.selected||(this.lis.length?0:-1)}else{if(j.selected===null){j.selected=-1}}j.selected=((j.selected>=0&&this.anchors[j.selected])||j.selected<0)?j.selected:0;j.disabled=d.unique(j.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(w,o){return v.lis.index(w)}))).sort();if(d.inArray(j.selected,j.disabled)!=-1){j.disabled.splice(d.inArray(j.selected,j.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(j.selected>=0&&this.anchors.length){v.element.find(v._sanitizeSelector(v.anchors[j.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(j.selected).addClass("ui-tabs-selected ui-state-active");v.element.queue("tabs",function(){v._trigger("show",null,v._ui(v.anchors[j.selected],v.element.find(v._sanitizeSelector(v.anchors[j.selected].hash))[0]))});this.load(j.selected)}d(window).bind("unload",function(){v.lis.add(v.anchors).unbind(".tabs");v.lis=v.anchors=v.panels=null})}else{j.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[j.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(j.cookie){this._cookie(j.selected,j.cookie)}for(var m=0,s;(s=this.lis[m]);m++){d(s)[d.inArray(m,j.disabled)!=-1&&!d(s).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(j.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(j.event!=="mouseover"){var l=function(o,i){if(i.is(":not(.ui-state-disabled)")){i.addClass("ui-state-"+o)}};var p=function(o,i){i.removeClass("ui-state-"+o)};this.lis.bind("mouseover.tabs",function(){l("hover",d(this))});this.lis.bind("mouseout.tabs",function(){p("hover",d(this))});this.anchors.bind("focus.tabs",function(){l("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){p("focus",d(this).closest("li"))})}var g,n;if(j.fx){if(d.isArray(j.fx)){g=j.fx[0];n=j.fx[1]}else{g=n=j.fx}}function k(i,o){i.css("display","");if(!d.support.opacity&&o.opacity){i[0].style.removeAttribute("filter")}}var q=n?function(i,o){d(i).closest("li").addClass("ui-tabs-selected ui-state-active");o.hide().removeClass("ui-tabs-hide").animate(n,n.duration||"normal",function(){k(o,n);v._trigger("show",null,v._ui(i,o[0]))})}:function(i,o){d(i).closest("li").addClass("ui-tabs-selected ui-state-active");o.removeClass("ui-tabs-hide");v._trigger("show",null,v._ui(i,o[0]))};var r=g?function(o,i){i.animate(g,g.duration||"normal",function(){v.lis.removeClass("ui-tabs-selected ui-state-active");i.addClass("ui-tabs-hide");k(i,g);v.element.dequeue("tabs")})}:function(o,i,w){v.lis.removeClass("ui-tabs-selected ui-state-active");i.addClass("ui-tabs-hide");v.element.dequeue("tabs")};this.anchors.bind(j.event+".tabs",function(){var o=this,x=d(o).closest("li"),i=v.panels.filter(":not(.ui-tabs-hide)"),w=v.element.find(v._sanitizeSelector(o.hash));if((x.hasClass("ui-tabs-selected")&&!j.collapsible)||x.hasClass("ui-state-disabled")||x.hasClass("ui-state-processing")||v.panels.filter(":animated").length||v._trigger("select",null,v._ui(this,w[0]))===false){this.blur();return false}j.selected=v.anchors.index(this);v.abort();if(j.collapsible){if(x.hasClass("ui-tabs-selected")){j.selected=-1;if(j.cookie){v._cookie(j.selected,j.cookie)}v.element.queue("tabs",function(){r(o,i)}).dequeue("tabs");this.blur();return false}else{if(!i.length){if(j.cookie){v._cookie(j.selected,j.cookie)}v.element.queue("tabs",function(){q(o,w)});v.load(v.anchors.index(this));this.blur();return false}}}if(j.cookie){v._cookie(j.selected,j.cookie)}if(w.length){if(i.length){v.element.queue("tabs",function(){r(o,i)})}v.element.queue("tabs",function(){q(o,w)});v.load(v.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(d.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(g){if(typeof g=="string"){g=this.anchors.index(this.anchors.filter("[href$="+g+"]"))}return g},destroy:function(){var g=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var h=d.data(this,"href.tabs");if(h){this.href=h}var i=d(this).unbind(".tabs");d.each(["href","load","cache"],function(j,k){i.removeData(k+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(d.data(this,"destroy.tabs")){d(this).remove()}else{d(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(g.cookie){this._cookie(null,g.cookie)}return this},add:function(j,i,h){if(h===f){h=this.anchors.length}var g=this,l=this.options,n=d(l.tabTemplate.replace(/#\{href\}/g,j).replace(/#\{label\}/g,i)),m=!j.indexOf("#")?j.replace("#",""):this._tabId(d("a",n)[0]);n.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var k=g.element.find("#"+m);if(!k.length){k=d(l.panelTemplate).attr("id",m).data("destroy.tabs",true)}k.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(h>=this.lis.length){n.appendTo(this.list);k.appendTo(this.list[0].parentNode)}else{n.insertBefore(this.lis[h]);k.insertBefore(this.panels[h])}l.disabled=d.map(l.disabled,function(p,o){return p>=h?++p:p});this._tabify();if(this.anchors.length==1){l.selected=0;n.addClass("ui-tabs-selected ui-state-active");k.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){g._trigger("show",null,g._ui(g.anchors[0],g.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[h],this.panels[h]));return this},remove:function(g){g=this._getIndex(g);var i=this.options,j=this.lis.eq(g).remove(),h=this.panels.eq(g).remove();if(j.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(g+(g+1<this.anchors.length?1:-1))}i.disabled=d.map(d.grep(i.disabled,function(l,k){return l!=g}),function(l,k){return l>=g?--l:l});this._tabify();this._trigger("remove",null,this._ui(j.find("a")[0],h[0]));return this},enable:function(g){g=this._getIndex(g);var h=this.options;if(d.inArray(g,h.disabled)==-1){return}this.lis.eq(g).removeClass("ui-state-disabled");h.disabled=d.grep(h.disabled,function(k,j){return k!=g});this._trigger("enable",null,this._ui(this.anchors[g],this.panels[g]));return this},disable:function(h){h=this._getIndex(h);var g=this,i=this.options;if(h!=i.selected){this.lis.eq(h).addClass("ui-state-disabled");i.disabled.push(h);i.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[h],this.panels[h]))}return this},select:function(g){g=this._getIndex(g);if(g==-1){if(this.options.collapsible&&this.options.selected!=-1){g=this.options.selected}else{return this}}this.anchors.eq(g).trigger(this.options.event+".tabs");return this},load:function(j){j=this._getIndex(j);var h=this,l=this.options,g=this.anchors.eq(j)[0],i=d.data(g,"load.tabs");this.abort();if(!i||this.element.queue("tabs").length!==0&&d.data(g,"cache.tabs")){this.element.dequeue("tabs");return}this.lis.eq(j).addClass("ui-state-processing");if(l.spinner){var k=d("span",g);k.data("label.tabs",k.html()).html(l.spinner)}this.xhr=d.ajax(d.extend({},l.ajaxOptions,{url:i,success:function(n,m){h.element.find(h._sanitizeSelector(g.hash)).html(n);h._cleanup();if(l.cache){d.data(g,"cache.tabs",true)}h._trigger("load",null,h._ui(h.anchors[j],h.panels[j]));try{l.ajaxOptions.success(n,m)}catch(o){}},error:function(o,m,n){h._cleanup();h._trigger("load",null,h._ui(h.anchors[j],h.panels[j]));try{l.ajaxOptions.error(o,m,j,g)}catch(n){}}}));h.element.dequeue("tabs");return this},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},url:function(h,g){this.anchors.eq(h).removeData("cache.tabs").data("load.tabs",g);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.13"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(i,k){var g=this,l=this.options;var h=g._rotate||(g._rotate=function(m){clearTimeout(g.rotation);g.rotation=setTimeout(function(){var n=l.selected;g.select(++n<g.anchors.length?n:0)},i);if(m){m.stopPropagation()}});var j=g._unrotate||(g._unrotate=!k?function(m){if(m.clientX){g.rotate(null)}}:function(m){t=l.selected;h()});if(i){this.element.bind("tabsshow",h);this.anchors.bind(l.event+".tabs",j);h()}else{clearTimeout(g.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(l.event+".tabs",j);delete this._rotate;delete this._unrotate}return this}})})(jQuery);