(function(a){$CC("#adtech_takeover").available(function(){a("#newsticker2").parent().remove()});$CC("#tab3806778170916832").available(function(){a("#t3806778170916832").remove();var d=a("#tab3806778170916831");var b=a("#tab3806778170916832");d.find("p.sub, div.rssflyout").remove().end().find("div.bullet li").slice(8).remove();b.find("p.sub, div.rssflyout").remove().end().find("div.liste li").slice(8).remove();d.prev("br").remove();var f=a("#tab3806778170916831 div.bullet, #tab3806778170916832 div.liste");f.find("li a").each(function(j,i){var h=a(i);h.find("span").remove();var g=h.text().split(": ");if(g.length>1){h.html("<b>"+g[0]+":</b> "+g[1])}else{h.html("<b>"+g[0]+"</b>")}});var e=a("#t3806778170916831");e.find("a").attr("href","http://www.chip.de/News_29559209.html?of=0");f.find("p a").attr("href","http://www.chip.de/News_29559209.html?of=0");e.find(":first").removeAttr("onclick");e.append(a('<a href="http://www.chip.de/rss/rss_topnews.xml" title="News-Ticker RSS-Feed (neue)" class="rss-icon"><b>RSS-Feed</b></a>'));var c=e.parent();c.append(a('<li class="proto_nt_switch"><div><a class="proto_nt_new proto_nt_new_active"></a><a class="proto_nt_popular"></a></div></li>'));c.find("li.proto_nt_switch a").click(function(){var g=a(this);if(g.is("[class*=_active]")){return}if(g.next().length===0){g.addClass("proto_nt_popular_active");g.prev().removeClass("proto_nt_new_active");d.addClass("x");b.removeClass("x")}else{g.addClass("proto_nt_new_active");g.next().removeClass("proto_nt_popular_active");d.removeClass("x");b.addClass("x")}})})})($CC);