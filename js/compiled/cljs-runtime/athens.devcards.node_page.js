goog.provide('athens.devcards.node_page');
goog.require('cljs.core');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
goog.require('athens.db');
goog.require('athens.devcards.blocks');
goog.require('athens.devcards.breadcrumbs');
goog.require('athens.devcards.buttons');
goog.require('athens.patterns');
goog.require('athens.router');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('garden.selectors');
goog.require('goog.functions');
goog.require('komponentit.autosize');
goog.require('posh.reagent');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('stylefy.core');
athens.devcards.node_page.page_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2rem auto",new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 2rem",new cljs.core.Keyword(null,"flex-basis","flex-basis",983188475),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"55rem"], null);
athens.devcards.node_page.title_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.2em 0",new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),"-0.03em",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-word",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"-webkit-appearance","-webkit-appearance",375531635),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"caret-color","caret-color",997187317),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin","margin",-995903681)],["inherit","translate3d(0,0,0)","inherit","100%","inherit","opacity 0.15s ease","0","inherit","100%","transparent","text","none","none","0","0",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),"0","absolute","inherit","0","4px","inherit","0","0"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea:focus","textarea:focus",117113075),new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(new cljs.core.Keyword(null,".is-editing",".is-editing",-747838493),new cljs.core.Keyword(null,"span","span",1394872991)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null)], null)], null);
athens.devcards.node_page.references_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-block","margin-block",1690397674),"3em"], null);
athens.devcards.node_page.references_heading_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2rem",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.25em",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 100%"], null)], null)], null)], null);
athens.devcards.node_page.references_list_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null);
athens.devcards.node_page.references_group_title_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"margin","margin",-995903681),"0 1.5rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null)], null);
athens.devcards.node_page.references_group_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),athens.style.color.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971)),new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem 0.5rem",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.5em 0"], null);
athens.devcards.node_page.reference_breadcrumbs_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.25rem calc(2rem - 0.5em)"], null);
athens.devcards.node_page.references_group_block_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1px solid ",athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"panel-color","panel-color",-1537070527))], null)], null),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),"1em",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"1em",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-of-type","&:first-of-type",1836617087),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),"0"], null)], null)], null)], null);
athens.devcards.node_page.handler = (function athens$devcards$node_page$handler(val,uid){
var G__58361 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transact-event","transact-event",1188240621),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),uid], null),new cljs.core.Keyword("node","title","node/title",628940777),val], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__58361) : re_frame.core.dispatch.call(null,G__58361));
});
athens.devcards.node_page.db_handler = goog.functions.debounce(athens.devcards.node_page.handler,(500));
athens.devcards.node_page.get_ref_ids = (function athens$devcards$node_page$get_ref_ids(pattern){
return cljs.core.deref((function (){var G__58362 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__58363 = athens.db.dsdb;
var G__58364 = pattern;
return (posh.reagent.q.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.q.cljs$core$IFn$_invoke$arity$3(G__58362,G__58363,G__58364) : posh.reagent.q.call(null,G__58362,G__58363,G__58364));
})());
});
athens.devcards.node_page.get_block = (function athens$devcards$node_page$get_block(id){
return cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.block_pull_pattern,id) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.block_pull_pattern,id)));
});
athens.devcards.node_page.get_parents = (function athens$devcards$node_page$get_parents(id){
return athens.db.shape_parent_query(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.parents_pull_pattern,id) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.parents_pull_pattern,id))));
});
athens.devcards.node_page.merge_parents_and_block = (function athens$devcards$node_page$merge_parents_and_block(ref_ids){
var parents = cljs.core.reduce_kv((function (m,_,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,athens.devcards.node_page.get_parents(v));
}),cljs.core.PersistentArrayMap.EMPTY,ref_ids);
var blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return athens.devcards.node_page.get_block(id);
}),ref_ids);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","parents","block/parents",-1954648902),cljs.core.get.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(block))], null)], 0));
}),blocks);
});
athens.devcards.node_page.group_by_parent = (function athens$devcards$node_page$group_by_parent(blocks){
return cljs.core.group_by((function (x){
return new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword("block","parents","block/parents",-1954648902).cljs$core$IFn$_invoke$arity$1(x)));
}),blocks);
});
athens.devcards.node_page.get_data = (function athens$devcards$node_page$get_data(pattern){
return cljs.core.seq(athens.devcards.node_page.group_by_parent(athens.devcards.node_page.merge_parents_and_block(athens.devcards.node_page.get_ref_ids(pattern))));
});
athens.devcards.node_page.node_page_el = (function athens$devcards$node_page$node_page_el(p__58365,editing_uid,ref_groups){
var map__58366 = p__58365;
var map__58366__$1 = (((((!((map__58366 == null))))?(((((map__58366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58366):map__58366);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58366__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58366__$1,new cljs.core.Keyword("block","children","block/children",-1040716209));
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58366__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.page_style),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.title_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-uid","data-uid",-1822995373),uid,new cljs.core.Keyword(null,"class","class",-2030961996),"page-header"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.autosize.textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(editing_uid,uid))?"is-editing":null),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__58368 = e.target.value;
var G__58369 = uid;
return (athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2 ? athens.devcards.node_page.db_handler.cljs$core$IFn$_invoke$arity$2(G__58368,G__58369) : athens.devcards.node_page.db_handler.call(null,G__58368,G__58369));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58370(s__58371){
return (new cljs.core.LazySeq(null,(function (){
var s__58371__$1 = s__58371;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58371__$1);
if(temp__5735__auto__){
var s__58371__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58371__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58371__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58373 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58372 = (0);
while(true){
if((i__58372 < size__4581__auto__)){
var map__58374 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58372);
var map__58374__$1 = (((((!((map__58374 == null))))?(((((map__58374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58374):map__58374);
var child = map__58374__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58374__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58373,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)));

var G__58510 = (i__58372 + (1));
i__58372 = G__58510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58373),athens$devcards$node_page$node_page_el_$_iter__58370(cljs.core.chunk_rest(s__58371__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58373),null);
}
} else {
var map__58376 = cljs.core.first(s__58371__$2);
var map__58376__$1 = (((((!((map__58376 == null))))?(((((map__58376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58376):map__58376);
var child = map__58376__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58376__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,child], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),athens$devcards$node_page$node_page_el_$_iter__58370(cljs.core.rest(s__58371__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(children);
})()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function athens$devcards$node_page$node_page_el_$_iter__58378(s__58379){
return (new cljs.core.LazySeq(null,(function (){
var s__58379__$1 = s__58379;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__58379__$1);
if(temp__5735__auto__){
var s__58379__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58379__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58379__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58381 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58380 = (0);
while(true){
if((i__58380 < size__4581__auto__)){
var vec__58382 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58380);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58382,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58382,(1),null);
cljs.core.chunk_append(b__58381,(cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (i__58380,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385(s__58386){
return (new cljs.core.LazySeq(null,((function (i__58380,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58386__$1 = s__58386;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58386__$1);
if(temp__5735__auto____$1){
var s__58386__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58386__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58386__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58388 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58387 = (0);
while(true){
if((i__58387 < size__4581__auto____$1)){
var vec__58389 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58387);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58389,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58389,(1),null);
cljs.core.chunk_append(b__58388,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58387,i__58380,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58387,i__58380,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58387,i__58380,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58392(s__58393){
return (new cljs.core.LazySeq(null,((function (i__58387,i__58380,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58393__$1 = s__58393;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58393__$1);
if(temp__5735__auto____$2){
var s__58393__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58393__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58393__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58395 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58394 = (0);
while(true){
if((i__58394 < size__4581__auto____$2)){
var map__58396 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58394);
var map__58396__$1 = (((((!((map__58396 == null))))?(((((map__58396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58396):map__58396);
var block = map__58396__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58396__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58396__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58395,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58394,i__58387,i__58380,map__58396,map__58396__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58395,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58392_$_iter__58398(s__58399){
return (new cljs.core.LazySeq(null,((function (i__58394,i__58387,i__58380,map__58396,map__58396__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58395,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58399__$1 = s__58399;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58399__$1);
if(temp__5735__auto____$3){
var s__58399__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58399__$2)){
var c__4580__auto____$3 = cljs.core.chunk_first(s__58399__$2);
var size__4581__auto____$3 = cljs.core.count(c__4580__auto____$3);
var b__58401 = cljs.core.chunk_buffer(size__4581__auto____$3);
if((function (){var i__58400 = (0);
while(true){
if((i__58400 < size__4581__auto____$3)){
var map__58402 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$3,i__58400);
var map__58402__$1 = (((((!((map__58402 == null))))?(((((map__58402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58402):map__58402);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58402__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58402__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58402__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58401,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58400,i__58394,i__58387,i__58380,map__58402,map__58402__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58401,s__58399__$2,temp__5735__auto____$3,map__58396,map__58396__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58395,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58400,i__58394,i__58387,i__58380,map__58402,map__58402__$1,title__$1,string,uid__$2,c__4580__auto____$3,size__4581__auto____$3,b__58401,s__58399__$2,temp__5735__auto____$3,map__58396,map__58396__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58395,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58528 = (i__58400 + (1));
i__58400 = G__58528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58401),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58392_$_iter__58398(cljs.core.chunk_rest(s__58399__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58401),null);
}
} else {
var map__58404 = cljs.core.first(s__58399__$2);
var map__58404__$1 = (((((!((map__58404 == null))))?(((((map__58404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58404):map__58404);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58404__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58404__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58404__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58394,i__58387,i__58380,map__58404,map__58404__$1,title__$1,string,uid__$2,s__58399__$2,temp__5735__auto____$3,map__58396,map__58396__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58395,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58394,i__58387,i__58380,map__58404,map__58404__$1,title__$1,string,uid__$2,s__58399__$2,temp__5735__auto____$3,map__58396,map__58396__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58395,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58392_$_iter__58398(cljs.core.rest(s__58399__$2)));
}
} else {
return null;
}
break;
}
});})(i__58394,i__58387,i__58380,map__58396,map__58396__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58395,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58394,i__58387,i__58380,map__58396,map__58396__$1,block,uid__$1,parents,c__4580__auto____$2,size__4581__auto____$2,b__58395,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58530 = (i__58394 + (1));
i__58394 = G__58530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58395),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58392(cljs.core.chunk_rest(s__58393__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58395),null);
}
} else {
var map__58406 = cljs.core.first(s__58393__$2);
var map__58406__$1 = (((((!((map__58406 == null))))?(((((map__58406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58406):map__58406);
var block = map__58406__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58406__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58387,i__58380,map__58406,map__58406__$1,block,uid__$1,parents,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58392_$_iter__58408(s__58409){
return (new cljs.core.LazySeq(null,((function (i__58387,i__58380,map__58406,map__58406__$1,block,uid__$1,parents,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58409__$1 = s__58409;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58409__$1);
if(temp__5735__auto____$3){
var s__58409__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58409__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58409__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58411 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58410 = (0);
while(true){
if((i__58410 < size__4581__auto____$2)){
var map__58412 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58410);
var map__58412__$1 = (((((!((map__58412 == null))))?(((((map__58412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58412):map__58412);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58411,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58410,i__58387,i__58380,map__58412,map__58412__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58411,s__58409__$2,temp__5735__auto____$3,map__58406,map__58406__$1,block,uid__$1,parents,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58410,i__58387,i__58380,map__58412,map__58412__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58411,s__58409__$2,temp__5735__auto____$3,map__58406,map__58406__$1,block,uid__$1,parents,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58531 = (i__58410 + (1));
i__58410 = G__58531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58411),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58392_$_iter__58408(cljs.core.chunk_rest(s__58409__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58411),null);
}
} else {
var map__58414 = cljs.core.first(s__58409__$2);
var map__58414__$1 = (((((!((map__58414 == null))))?(((((map__58414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58414):map__58414);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58414__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58414__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58414__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58387,i__58380,map__58414,map__58414__$1,title__$1,string,uid__$2,s__58409__$2,temp__5735__auto____$3,map__58406,map__58406__$1,block,uid__$1,parents,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58387,i__58380,map__58414,map__58414__$1,title__$1,string,uid__$2,s__58409__$2,temp__5735__auto____$3,map__58406,map__58406__$1,block,uid__$1,parents,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58392_$_iter__58408(cljs.core.rest(s__58409__$2)));
}
} else {
return null;
}
break;
}
});})(i__58387,i__58380,map__58406,map__58406__$1,block,uid__$1,parents,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58387,i__58380,map__58406,map__58406__$1,block,uid__$1,parents,s__58393__$2,temp__5735__auto____$2,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58392(cljs.core.rest(s__58393__$2)));
}
} else {
return null;
}
break;
}
});})(i__58387,i__58380,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58387,i__58380,vec__58389,group_title,group,c__4580__auto____$1,size__4581__auto____$1,b__58388,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58532 = (i__58387 + (1));
i__58387 = G__58532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58388),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385(cljs.core.chunk_rest(s__58386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58388),null);
}
} else {
var vec__58416 = cljs.core.first(s__58386__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58416,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58416,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58380,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58380,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58380,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58419(s__58420){
return (new cljs.core.LazySeq(null,((function (i__58380,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58420__$1 = s__58420;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58420__$1);
if(temp__5735__auto____$2){
var s__58420__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58420__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58420__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58422 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58421 = (0);
while(true){
if((i__58421 < size__4581__auto____$1)){
var map__58423 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58421);
var map__58423__$1 = (((((!((map__58423 == null))))?(((((map__58423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58423):map__58423);
var block = map__58423__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58423__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58423__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58422,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58421,i__58380,map__58423,map__58423__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58422,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58419_$_iter__58425(s__58426){
return (new cljs.core.LazySeq(null,((function (i__58421,i__58380,map__58423,map__58423__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58422,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58426__$1 = s__58426;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58426__$1);
if(temp__5735__auto____$3){
var s__58426__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58426__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58426__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58428 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58427 = (0);
while(true){
if((i__58427 < size__4581__auto____$2)){
var map__58429 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58427);
var map__58429__$1 = (((((!((map__58429 == null))))?(((((map__58429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58429):map__58429);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58429__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58429__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58429__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58428,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58427,i__58421,i__58380,map__58429,map__58429__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58428,s__58426__$2,temp__5735__auto____$3,map__58423,map__58423__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58422,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58427,i__58421,i__58380,map__58429,map__58429__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58428,s__58426__$2,temp__5735__auto____$3,map__58423,map__58423__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58422,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58533 = (i__58427 + (1));
i__58427 = G__58533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58428),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58419_$_iter__58425(cljs.core.chunk_rest(s__58426__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58428),null);
}
} else {
var map__58431 = cljs.core.first(s__58426__$2);
var map__58431__$1 = (((((!((map__58431 == null))))?(((((map__58431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58431):map__58431);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58431__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58431__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58431__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58421,i__58380,map__58431,map__58431__$1,title__$1,string,uid__$2,s__58426__$2,temp__5735__auto____$3,map__58423,map__58423__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58422,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58421,i__58380,map__58431,map__58431__$1,title__$1,string,uid__$2,s__58426__$2,temp__5735__auto____$3,map__58423,map__58423__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58422,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58419_$_iter__58425(cljs.core.rest(s__58426__$2)));
}
} else {
return null;
}
break;
}
});})(i__58421,i__58380,map__58423,map__58423__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58422,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58421,i__58380,map__58423,map__58423__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58422,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58534 = (i__58421 + (1));
i__58421 = G__58534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58422),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58419(cljs.core.chunk_rest(s__58420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58422),null);
}
} else {
var map__58433 = cljs.core.first(s__58420__$2);
var map__58433__$1 = (((((!((map__58433 == null))))?(((((map__58433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58433):map__58433);
var block = map__58433__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58380,map__58433,map__58433__$1,block,uid__$1,parents,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58419_$_iter__58435(s__58436){
return (new cljs.core.LazySeq(null,((function (i__58380,map__58433,map__58433__$1,block,uid__$1,parents,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58436__$1 = s__58436;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58436__$1);
if(temp__5735__auto____$3){
var s__58436__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58436__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58436__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58438 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58437 = (0);
while(true){
if((i__58437 < size__4581__auto____$1)){
var map__58439 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58437);
var map__58439__$1 = (((((!((map__58439 == null))))?(((((map__58439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58439):map__58439);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58439__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58439__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58439__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58438,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58437,i__58380,map__58439,map__58439__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58438,s__58436__$2,temp__5735__auto____$3,map__58433,map__58433__$1,block,uid__$1,parents,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58437,i__58380,map__58439,map__58439__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58438,s__58436__$2,temp__5735__auto____$3,map__58433,map__58433__$1,block,uid__$1,parents,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58535 = (i__58437 + (1));
i__58437 = G__58535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58438),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58419_$_iter__58435(cljs.core.chunk_rest(s__58436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58438),null);
}
} else {
var map__58441 = cljs.core.first(s__58436__$2);
var map__58441__$1 = (((((!((map__58441 == null))))?(((((map__58441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58441):map__58441);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58441__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58441__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58441__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58380,map__58441,map__58441__$1,title__$1,string,uid__$2,s__58436__$2,temp__5735__auto____$3,map__58433,map__58433__$1,block,uid__$1,parents,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58380,map__58441,map__58441__$1,title__$1,string,uid__$2,s__58436__$2,temp__5735__auto____$3,map__58433,map__58433__$1,block,uid__$1,parents,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58419_$_iter__58435(cljs.core.rest(s__58436__$2)));
}
} else {
return null;
}
break;
}
});})(i__58380,map__58433,map__58433__$1,block,uid__$1,parents,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58380,map__58433,map__58433__$1,block,uid__$1,parents,s__58420__$2,temp__5735__auto____$2,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385_$_iter__58419(cljs.core.rest(s__58420__$2)));
}
} else {
return null;
}
break;
}
});})(i__58380,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58380,vec__58416,group_title,group,s__58386__$2,temp__5735__auto____$1,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58385(cljs.core.rest(s__58386__$2)));
}
} else {
return null;
}
break;
}
});})(i__58380,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58380,vec__58382,linked_or_unlinked,refs,c__4580__auto__,size__4581__auto__,b__58381,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null));

var G__58536 = (i__58380 + (1));
i__58380 = G__58536;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58381),athens$devcards$node_page$node_page_el_$_iter__58378(cljs.core.chunk_rest(s__58379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58381),null);
}
} else {
var vec__58443 = cljs.core.first(s__58379__$2);
var linked_or_unlinked = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58443,(0),null);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58443,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.not_empty(refs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linked_or_unlinked], null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_heading_style),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.Link)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),linked_or_unlinked], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.FilterList)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_list_style),(function (){var iter__4582__auto__ = ((function (vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446(s__58447){
return (new cljs.core.LazySeq(null,(function (){
var s__58447__$1 = s__58447;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__58447__$1);
if(temp__5735__auto____$1){
var s__58447__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__58447__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58447__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58449 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58448 = (0);
while(true){
if((i__58448 < size__4581__auto__)){
var vec__58450 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58448);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58450,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58450,(1),null);
cljs.core.chunk_append(b__58449,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58448,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(i__58448,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (i__58448,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58453(s__58454){
return (new cljs.core.LazySeq(null,((function (i__58448,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58454__$1 = s__58454;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58454__$1);
if(temp__5735__auto____$2){
var s__58454__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58454__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58454__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58456 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58455 = (0);
while(true){
if((i__58455 < size__4581__auto____$1)){
var map__58457 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58455);
var map__58457__$1 = (((((!((map__58457 == null))))?(((((map__58457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58457):map__58457);
var block = map__58457__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58457__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58457__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58456,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58455,i__58448,map__58457,map__58457__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58456,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58453_$_iter__58459(s__58460){
return (new cljs.core.LazySeq(null,((function (i__58455,i__58448,map__58457,map__58457__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58456,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58460__$1 = s__58460;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58460__$1);
if(temp__5735__auto____$3){
var s__58460__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58460__$2)){
var c__4580__auto____$2 = cljs.core.chunk_first(s__58460__$2);
var size__4581__auto____$2 = cljs.core.count(c__4580__auto____$2);
var b__58462 = cljs.core.chunk_buffer(size__4581__auto____$2);
if((function (){var i__58461 = (0);
while(true){
if((i__58461 < size__4581__auto____$2)){
var map__58463 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$2,i__58461);
var map__58463__$1 = (((((!((map__58463 == null))))?(((((map__58463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58463):map__58463);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58463__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58463__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58463__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58462,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58461,i__58455,i__58448,map__58463,map__58463__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58462,s__58460__$2,temp__5735__auto____$3,map__58457,map__58457__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58456,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58461,i__58455,i__58448,map__58463,map__58463__$1,title__$1,string,uid__$2,c__4580__auto____$2,size__4581__auto____$2,b__58462,s__58460__$2,temp__5735__auto____$3,map__58457,map__58457__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58456,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58537 = (i__58461 + (1));
i__58461 = G__58537;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58462),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58453_$_iter__58459(cljs.core.chunk_rest(s__58460__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58462),null);
}
} else {
var map__58465 = cljs.core.first(s__58460__$2);
var map__58465__$1 = (((((!((map__58465 == null))))?(((((map__58465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58465):map__58465);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58465__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58465__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58465__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58455,i__58448,map__58465,map__58465__$1,title__$1,string,uid__$2,s__58460__$2,temp__5735__auto____$3,map__58457,map__58457__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58456,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58455,i__58448,map__58465,map__58465__$1,title__$1,string,uid__$2,s__58460__$2,temp__5735__auto____$3,map__58457,map__58457__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58456,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58453_$_iter__58459(cljs.core.rest(s__58460__$2)));
}
} else {
return null;
}
break;
}
});})(i__58455,i__58448,map__58457,map__58457__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58456,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58455,i__58448,map__58457,map__58457__$1,block,uid__$1,parents,c__4580__auto____$1,size__4581__auto____$1,b__58456,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58538 = (i__58455 + (1));
i__58455 = G__58538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58456),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58453(cljs.core.chunk_rest(s__58454__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58456),null);
}
} else {
var map__58467 = cljs.core.first(s__58454__$2);
var map__58467__$1 = (((((!((map__58467 == null))))?(((((map__58467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58467):map__58467);
var block = map__58467__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58467__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58467__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58448,map__58467,map__58467__$1,block,uid__$1,parents,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58453_$_iter__58469(s__58470){
return (new cljs.core.LazySeq(null,((function (i__58448,map__58467,map__58467__$1,block,uid__$1,parents,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58470__$1 = s__58470;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58470__$1);
if(temp__5735__auto____$3){
var s__58470__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58470__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58470__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58472 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58471 = (0);
while(true){
if((i__58471 < size__4581__auto____$1)){
var map__58473 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58471);
var map__58473__$1 = (((((!((map__58473 == null))))?(((((map__58473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58473):map__58473);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58473__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58472,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58471,i__58448,map__58473,map__58473__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58472,s__58470__$2,temp__5735__auto____$3,map__58467,map__58467__$1,block,uid__$1,parents,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58471,i__58448,map__58473,map__58473__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58472,s__58470__$2,temp__5735__auto____$3,map__58467,map__58467__$1,block,uid__$1,parents,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58539 = (i__58471 + (1));
i__58471 = G__58539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58472),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58453_$_iter__58469(cljs.core.chunk_rest(s__58470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58472),null);
}
} else {
var map__58475 = cljs.core.first(s__58470__$2);
var map__58475__$1 = (((((!((map__58475 == null))))?(((((map__58475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58475):map__58475);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58475__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58448,map__58475,map__58475__$1,title__$1,string,uid__$2,s__58470__$2,temp__5735__auto____$3,map__58467,map__58467__$1,block,uid__$1,parents,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58448,map__58475,map__58475__$1,title__$1,string,uid__$2,s__58470__$2,temp__5735__auto____$3,map__58467,map__58467__$1,block,uid__$1,parents,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58453_$_iter__58469(cljs.core.rest(s__58470__$2)));
}
} else {
return null;
}
break;
}
});})(i__58448,map__58467,map__58467__$1,block,uid__$1,parents,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58448,map__58467,map__58467__$1,block,uid__$1,parents,s__58454__$2,temp__5735__auto____$2,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58453(cljs.core.rest(s__58454__$2)));
}
} else {
return null;
}
break;
}
});})(i__58448,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58448,vec__58450,group_title,group,c__4580__auto__,size__4581__auto__,b__58449,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null));

var G__58540 = (i__58448 + (1));
i__58448 = G__58540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58449),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446(cljs.core.chunk_rest(s__58447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58449),null);
}
} else {
var vec__58477 = cljs.core.first(s__58447__$2);
var group_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58477,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58477,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),group_title], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.node_page.references_group_title_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid);
});})(vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),group_title], null)], null),(function (){var iter__4582__auto__ = ((function (vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58480(s__58481){
return (new cljs.core.LazySeq(null,(function (){
var s__58481__$1 = s__58481;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__58481__$1);
if(temp__5735__auto____$2){
var s__58481__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__58481__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58481__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58483 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58482 = (0);
while(true){
if((i__58482 < size__4581__auto__)){
var map__58484 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58482);
var map__58484__$1 = (((((!((map__58484 == null))))?(((((map__58484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58484):map__58484);
var block = map__58484__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58484__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
cljs.core.chunk_append(b__58483,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (i__58482,map__58484,map__58484__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58483,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58480_$_iter__58486(s__58487){
return (new cljs.core.LazySeq(null,((function (i__58482,map__58484,map__58484__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58483,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
var s__58487__$1 = s__58487;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58487__$1);
if(temp__5735__auto____$3){
var s__58487__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58487__$2)){
var c__4580__auto____$1 = cljs.core.chunk_first(s__58487__$2);
var size__4581__auto____$1 = cljs.core.count(c__4580__auto____$1);
var b__58489 = cljs.core.chunk_buffer(size__4581__auto____$1);
if((function (){var i__58488 = (0);
while(true){
if((i__58488 < size__4581__auto____$1)){
var map__58490 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto____$1,i__58488);
var map__58490__$1 = (((((!((map__58490 == null))))?(((((map__58490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58490):map__58490);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58490__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58489,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58488,i__58482,map__58490,map__58490__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58489,s__58487__$2,temp__5735__auto____$3,map__58484,map__58484__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58483,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58488,i__58482,map__58490,map__58490__$1,title__$1,string,uid__$2,c__4580__auto____$1,size__4581__auto____$1,b__58489,s__58487__$2,temp__5735__auto____$3,map__58484,map__58484__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58483,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58541 = (i__58488 + (1));
i__58488 = G__58541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58489),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58480_$_iter__58486(cljs.core.chunk_rest(s__58487__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58489),null);
}
} else {
var map__58492 = cljs.core.first(s__58487__$2);
var map__58492__$1 = (((((!((map__58492 == null))))?(((((map__58492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58492):map__58492);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58492__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58492__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58492__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58482,map__58492,map__58492__$1,title__$1,string,uid__$2,s__58487__$2,temp__5735__auto____$3,map__58484,map__58484__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58483,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58482,map__58492,map__58492__$1,title__$1,string,uid__$2,s__58487__$2,temp__5735__auto____$3,map__58484,map__58484__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58483,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58480_$_iter__58486(cljs.core.rest(s__58487__$2)));
}
} else {
return null;
}
break;
}
});})(i__58482,map__58484,map__58484__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58483,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
,null,null));
});})(i__58482,map__58484,map__58484__$1,block,uid__$1,parents,c__4580__auto__,size__4581__auto__,b__58483,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null));

var G__58542 = (i__58482 + (1));
i__58482 = G__58542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58483),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58480(cljs.core.chunk_rest(s__58481__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58483),null);
}
} else {
var map__58494 = cljs.core.first(s__58481__$2);
var map__58494__$1 = (((((!((map__58494 == null))))?(((((map__58494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58494):map__58494);
var block = map__58494__$1;
var uid__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58494__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var parents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58494__$1,new cljs.core.Keyword("block","parents","block/parents",-1954648902));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.node_page.references_group_block_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$1], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.blocks.block_el,block], null),(((cljs.core.count(parents) > (1)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),athens.devcards.node_page.reference_breadcrumbs_style], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(module$node_modules$$material_ui$icons$index.LocationOn)], null),(function (){var iter__4582__auto__ = ((function (map__58494,map__58494__$1,block,uid__$1,parents,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58480_$_iter__58496(s__58497){
return (new cljs.core.LazySeq(null,(function (){
var s__58497__$1 = s__58497;
while(true){
var temp__5735__auto____$3 = cljs.core.seq(s__58497__$1);
if(temp__5735__auto____$3){
var s__58497__$2 = temp__5735__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__58497__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__58497__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__58499 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__58498 = (0);
while(true){
if((i__58498 < size__4581__auto__)){
var map__58500 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__58498);
var map__58500__$1 = (((((!((map__58500 == null))))?(((((map__58500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58500):map__58500);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58500__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58500__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58500__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
cljs.core.chunk_append(b__58499,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58498,map__58500,map__58500__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58499,s__58497__$2,temp__5735__auto____$3,map__58494,map__58494__$1,block,uid__$1,parents,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(i__58498,map__58500,map__58500__$1,title__$1,string,uid__$2,c__4580__auto__,size__4581__auto__,b__58499,s__58497__$2,temp__5735__auto____$3,map__58494,map__58494__$1,block,uid__$1,parents,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null));

var G__58543 = (i__58498 + (1));
i__58498 = G__58543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58499),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58480_$_iter__58496(cljs.core.chunk_rest(s__58497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58499),null);
}
} else {
var map__58502 = cljs.core.first(s__58497__$2);
var map__58502__$1 = (((((!((map__58502 == null))))?(((((map__58502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58502):map__58502);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword("block","string","block/string",-2066596447));
var uid__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),uid__$2,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__58502,map__58502__$1,title__$1,string,uid__$2,s__58497__$2,temp__5735__auto____$3,map__58494,map__58494__$1,block,uid__$1,parents,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid){
return (function (){
return athens.router.navigate_uid.cljs$core$IFn$_invoke$arity$1(uid__$2);
});})(map__58502,map__58502__$1,title__$1,string,uid__$2,s__58497__$2,temp__5735__auto____$3,map__58494,map__58494__$1,block,uid__$1,parents,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
], null),(function (){var or__4185__auto__ = title__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return string;
}
})()], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58480_$_iter__58496(cljs.core.rest(s__58497__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__58494,map__58494__$1,block,uid__$1,parents,s__58481__$2,temp__5735__auto____$2,vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(parents);
})()], null):null)], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446_$_iter__58480(cljs.core.rest(s__58481__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58477,group_title,group,s__58447__$2,temp__5735__auto____$1,vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(group);
})()], null),athens$devcards$node_page$node_page_el_$_iter__58378_$_iter__58446(cljs.core.rest(s__58447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__58443,linked_or_unlinked,refs,s__58379__$2,temp__5735__auto__,map__58366,map__58366__$1,title,children,uid))
;
return iter__4582__auto__(refs);
})()], null)], null):null),athens$devcards$node_page$node_page_el_$_iter__58378(cljs.core.rest(s__58379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(ref_groups);
})())], null);
});
/**
 * One diff between datascript and posh: we don't have pull in q for posh
 *   https://github.com/mpdairy/posh/issues/21
 */
athens.devcards.node_page.node_page_component = (function athens$devcards$node_page$node_page_component(ident){
var node = athens.db.sort_block(cljs.core.deref((posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 ? posh.reagent.pull.cljs$core$IFn$_invoke$arity$3(athens.db.dsdb,athens.db.node_pull_pattern,ident) : posh.reagent.pull.call(null,athens.db.dsdb,athens.db.node_pull_pattern,ident))));
var title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(node);
var editing_uid = cljs.core.deref((function (){var G__58504 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-uid","editing-uid",1372614377)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__58504) : re_frame.core.subscribe.call(null,G__58504));
})());
if(clojure.string.blank_QMARK_(title)){
return null;
} else {
var ref_groups = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Linked References",athens.devcards.node_page.get_data(athens.patterns.linked(title))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unlinked References",athens.devcards.node_page.get_data(athens.patterns.unlinked(title))], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.node_page.node_page_el,node,editing_uid,ref_groups], null);
}
});

//# sourceMappingURL=athens.devcards.node_page.js.map
