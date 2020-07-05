goog.provide('shadow.remote.runtime.tap_support');
goog.require('cljs.core');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.obj_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60686,p__60687){
var map__60688 = p__60686;
var map__60688__$1 = (((((!((map__60688 == null))))?(((((map__60688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60688):map__60688);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60688__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60689 = p__60687;
var map__60689__$1 = (((((!((map__60689 == null))))?(((((map__60689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60689):map__60689);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60689__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.conj,tid);
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60692,p__60693){
var map__60694 = p__60692;
var map__60694__$1 = (((((!((map__60694 == null))))?(((((map__60694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60694):map__60694);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60694__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60695 = p__60693;
var map__60695__$1 = (((((!((map__60695 == null))))?(((((map__60695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60695):map__60695);
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60695__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60700,p__60701){
var map__60702 = p__60700;
var map__60702__$1 = (((((!((map__60702 == null))))?(((((map__60702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60702):map__60702);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60702__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60702__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60703 = p__60701;
var map__60703__$1 = (((((!((map__60703 == null))))?(((((map__60703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60703):map__60703);
var msg = map__60703__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60703__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var map__60706 = obj_support;
var map__60706__$1 = (((((!((map__60706 == null))))?(((((map__60706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60706):map__60706);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60706__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var tap_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"oid","oid",-768692334),cljs.core.take.cljs$core$IFn$_invoke$arity$2(num,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__60699_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60699_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"added-at","added-at",-352499434)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__60698_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tap","tap",-1086702463),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__60698_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj-info","obj-info",-373842651),new cljs.core.Keyword(null,"from","from",1815293044)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))))))));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60708,tid){
var map__60709 = p__60708;
var map__60709__$1 = (((((!((map__60709 == null))))?(((((map__60709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60709):map__60709);
var svc = map__60709__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60709__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.disj,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60715 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60716 = null;
var count__60717 = (0);
var i__60718 = (0);
while(true){
if((i__60718 < count__60717)){
var tid = chunk__60716.cljs$core$IIndexed$_nth$arity$2(null,i__60718);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60725 = seq__60715;
var G__60726 = chunk__60716;
var G__60727 = count__60717;
var G__60728 = (i__60718 + (1));
seq__60715 = G__60725;
chunk__60716 = G__60726;
count__60717 = G__60727;
i__60718 = G__60728;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60715);
if(temp__5735__auto__){
var seq__60715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60715__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60715__$1);
var G__60729 = cljs.core.chunk_rest(seq__60715__$1);
var G__60730 = c__4609__auto__;
var G__60731 = cljs.core.count(c__4609__auto__);
var G__60732 = (0);
seq__60715 = G__60729;
chunk__60716 = G__60730;
count__60717 = G__60731;
i__60718 = G__60732;
continue;
} else {
var tid = cljs.core.first(seq__60715__$1);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"tid","tid",-901350880),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60733 = cljs.core.next(seq__60715__$1);
var G__60734 = null;
var G__60735 = (0);
var G__60736 = (0);
seq__60715 = G__60733;
chunk__60716 = G__60734;
count__60717 = G__60735;
i__60718 = G__60736;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60711_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60711_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60712_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60712_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60713_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60713_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60714_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60714_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60719){
var map__60720 = p__60719;
var map__60720__$1 = (((((!((map__60720 == null))))?(((((map__60720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60720):map__60720);
var svc = map__60720__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60720__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60720__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
