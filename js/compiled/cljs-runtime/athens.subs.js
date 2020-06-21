goog.provide('athens.subs');
goog.require('cljs.core');
goog.require('athens.blocks');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('re_posh.core');
var G__73771_73876 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__73772_73880 = (function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__73771_73876,G__73772_73880) : re_frame.core.reg_sub.call(null,G__73771_73876,G__73772_73880));
var G__73773_73885 = new cljs.core.Keyword(null,"app-db","app-db",865606302);
var G__73774_73886 = (function (db,_){
return db;
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__73773_73885,G__73774_73886) : re_frame.core.reg_sub.call(null,G__73773_73885,G__73774_73886));
var G__73775_73887 = new cljs.core.Keyword(null,"errors","errors",-908790718);
var G__73776_73888 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__73775_73887,G__73776_73888) : re_frame.core.reg_sub.call(null,G__73775_73887,G__73776_73888));
var G__73777_73889 = new cljs.core.Keyword(null,"loading","loading",-737050189);
var G__73778_73890 = (function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__73777_73889,G__73778_73890) : re_frame.core.reg_sub.call(null,G__73777_73889,G__73778_73890));
var G__73779_73891 = new cljs.core.Keyword(null,"athena","athena",-1523991628);
var G__73780_73892 = (function (db,_){
return new cljs.core.Keyword(null,"athena","athena",-1523991628).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__73779_73891,G__73780_73892) : re_frame.core.reg_sub.call(null,G__73779_73891,G__73780_73892));
var G__73786_73893 = new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084);
var G__73787_73894 = (function (db,_){
return new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__73786_73893,G__73787_73894) : re_frame.core.reg_sub.call(null,G__73786_73893,G__73787_73894));
var G__73789_73895 = new cljs.core.Keyword(null,"nodes","nodes",-2099585805);
var G__73790_73896 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__73789_73895,G__73790_73896) : re_posh.core.reg_query_sub.call(null,G__73789_73895,G__73790_73896));
var G__73791_73897 = new cljs.core.Keyword("node","refs","node/refs",-1563406590);
var G__73792_73898 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__73791_73897,G__73792_73898) : re_posh.core.reg_query_sub.call(null,G__73791_73897,G__73792_73898));
var G__73793_73900 = new cljs.core.Keyword("page","sidebar","page/sidebar",32416927);
var G__73794_73901 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__73793_73900,G__73794_73901) : re_posh.core.reg_query_sub.call(null,G__73793_73900,G__73794_73901));
var G__73799_73902 = new cljs.core.Keyword(null,"node","node",581201198);
var G__73800_73903 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__73799_73902,G__73800_73903) : re_posh.core.reg_pull_sub.call(null,G__73799_73902,G__73800_73903));
var G__73801_73904 = new cljs.core.Keyword("block","uid","block/uid",-1623585167);
var G__73802_73905 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__73801_73904,G__73802_73905) : re_posh.core.reg_pull_sub.call(null,G__73801_73904,G__73802_73905));
var G__73803_73907 = new cljs.core.Keyword("block","string","block/string",-2066596447);
var G__73804_73908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__73803_73907,G__73804_73908) : re_posh.core.reg_pull_sub.call(null,G__73803_73907,G__73804_73908));
var G__73805_73909 = new cljs.core.Keyword(null,"blocks","blocks",-610462153);
var G__73806_73910 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__73805_73909,G__73806_73910) : re_posh.core.reg_pull_sub.call(null,G__73805_73909,G__73806_73910));
var G__73807_73911 = new cljs.core.Keyword("block","children","block/children",-1040716209);
var G__73808_73912 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__73807_73911,G__73808_73912) : re_posh.core.reg_pull_sub.call(null,G__73807_73911,G__73808_73912));
var G__73810_73913 = new cljs.core.Keyword("block","children-sorted","block/children-sorted",106153544);
var G__73811_73914 = (function (p__73818,_){
var vec__73821 = p__73818;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73821,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73821,(1),null);
var G__73824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","children","block/children",-1040716209),id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__73824) : re_posh.core.subscribe.call(null,G__73824));
});
var G__73812_73915 = (function (block,_){
return athens.blocks.sort_block(block);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__73810_73913,G__73811_73914,G__73812_73915) : re_frame.core.reg_sub.call(null,G__73810_73913,G__73811_73914,G__73812_73915));
var G__73825_73918 = new cljs.core.Keyword("block","_children","block/_children",1128070632);
var G__73826_73919 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__73825_73918,G__73826_73919) : re_posh.core.reg_pull_sub.call(null,G__73825_73918,G__73826_73919));
var G__73827_73920 = new cljs.core.Keyword("block","_children2","block/_children2",-1277243604);
var G__73828_73921 = (function (p__73830,_){
var vec__73831 = p__73830;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73831,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73831,(1),null);
var G__73835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_children","block/_children",1128070632),id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__73835) : re_posh.core.subscribe.call(null,G__73835));
});
var G__73829_73922 = (function (block,_){
return cljs.core.reverse(cljs.core.rest((function (){var b = block;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,b);
} else {
var G__73923 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
var G__73924 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword("block","_children","block/_children",1128070632)));
b = G__73923;
res = G__73924;
continue;
}
break;
}
})()));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__73827_73920,G__73828_73921,G__73829_73922) : re_frame.core.reg_sub.call(null,G__73827_73920,G__73828_73921,G__73829_73922));
var G__73841_73925 = new cljs.core.Keyword(null,"pull-nodes","pull-nodes",61183062);
var G__73842_73926 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__73843_73927 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null);
var G__73844_73928 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (nodes,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null));

var opts__69879__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69880__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),nodes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69880__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__69880__auto__;
}catch (e73846){var e = e73846;
throw e;
}}):(function (nodes,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),nodes], null);
}));
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__73841_73925,G__73842_73926,G__73843_73927,G__73844_73928) : re_posh.core.reg_sub.call(null,G__73841_73925,G__73842_73926,G__73843_73927,G__73844_73928));
var G__73851_73929 = new cljs.core.Keyword(null,"favorites","favorites",1740773480);
var G__73852_73930 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__73853_73931 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","sidebar","page/sidebar",32416927)], null);
var G__73854_73932 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (nodes,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"first","first",996428481,null))));

return debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"first","first",996428481,null)),(0),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (){var opts__69879__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69880__auto__ = cljs.core.first;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69880__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__69880__auto__;
})(),debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY),(1),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var opts__69879__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__69880__auto__ = cljs.core.PersistentVector.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__69880__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__69880__auto__;
})(),debux.common.util.spy_last(new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),(2),nodes)))));
}catch (e73875){var e = e73875;
throw e;
}}):(function (nodes,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,nodes));
}));
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__73851_73929,G__73852_73930,G__73853_73931,G__73854_73932) : re_frame.core.reg_sub.call(null,G__73851_73929,G__73852_73930,G__73853_73931,G__73854_73932));

//# sourceMappingURL=athens.subs.js.map
