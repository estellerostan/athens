goog.provide('shadow.remote.runtime.shared');
goog.require('cljs.core');
goog.require('clojure.datafy');
goog.require('cljs.pprint');
goog.require('shadow.remote.runtime.api');
goog.require('shadow.remote.runtime.writer');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59701,p__59702){
var map__59703 = p__59701;
var map__59703__$1 = (((((!((map__59703 == null))))?(((((map__59703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59703):map__59703);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59703__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59704 = p__59702;
var map__59704__$1 = (((((!((map__59704 == null))))?(((((map__59704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59704):map__59704);
var msg = map__59704__$1;
var rid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59704__$1,new cljs.core.Keyword(null,"rid","rid",801761275));
console.log("shadow.remote - runtime-id:",rid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"runtime-id","runtime-id",2075495517),rid);
});
shadow.remote.runtime.shared.tool_disconnect = (function shadow$remote$runtime$shared$tool_disconnect(p__59712,p__59713){
var map__59714 = p__59712;
var map__59714__$1 = (((((!((map__59714 == null))))?(((((map__59714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59714):map__59714);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59714__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59715 = p__59713;
var map__59715__$1 = (((((!((map__59715 == null))))?(((((map__59715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59715):map__59715);
var msg = map__59715__$1;
var tid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59715__$1,new cljs.core.Keyword(null,"tid","tid",-901350880));
var seq__59723 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59725 = null;
var count__59726 = (0);
var i__59727 = (0);
while(true){
if((i__59727 < count__59726)){
var map__59754 = chunk__59725.cljs$core$IIndexed$_nth$arity$2(null,i__59727);
var map__59754__$1 = (((((!((map__59754 == null))))?(((((map__59754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59754):map__59754);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59754__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60104 = seq__59723;
var G__60105 = chunk__59725;
var G__60106 = count__59726;
var G__60107 = (i__59727 + (1));
seq__59723 = G__60104;
chunk__59725 = G__60105;
count__59726 = G__60106;
i__59727 = G__60107;
continue;
} else {
var G__60108 = seq__59723;
var G__60109 = chunk__59725;
var G__60110 = count__59726;
var G__60111 = (i__59727 + (1));
seq__59723 = G__60108;
chunk__59725 = G__60109;
count__59726 = G__60110;
i__59727 = G__60111;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59723);
if(temp__5735__auto__){
var seq__59723__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59723__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59723__$1);
var G__60114 = cljs.core.chunk_rest(seq__59723__$1);
var G__60115 = c__4609__auto__;
var G__60116 = cljs.core.count(c__4609__auto__);
var G__60117 = (0);
seq__59723 = G__60114;
chunk__59725 = G__60115;
count__59726 = G__60116;
i__59727 = G__60117;
continue;
} else {
var map__59760 = cljs.core.first(seq__59723__$1);
var map__59760__$1 = (((((!((map__59760 == null))))?(((((map__59760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59760):map__59760);
var on_tool_disconnect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59760__$1,new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366));
if(cljs.core.truth_(on_tool_disconnect)){
(on_tool_disconnect.cljs$core$IFn$_invoke$arity$1 ? on_tool_disconnect.cljs$core$IFn$_invoke$arity$1(tid) : on_tool_disconnect.call(null,tid));


var G__60118 = cljs.core.next(seq__59723__$1);
var G__60119 = null;
var G__60120 = (0);
var G__60121 = (0);
seq__59723 = G__60118;
chunk__59725 = G__60119;
count__59726 = G__60120;
i__59727 = G__60121;
continue;
} else {
var G__60122 = cljs.core.next(seq__59723__$1);
var G__60123 = null;
var G__60124 = (0);
var G__60125 = (0);
seq__59723 = G__60122;
chunk__59725 = G__60123;
count__59726 = G__60124;
i__59727 = G__60125;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59770,msg){
var map__59771 = p__59770;
var map__59771__$1 = (((((!((map__59771 == null))))?(((((map__59771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59771):map__59771);
var runtime = map__59771__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59771__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59784,key,p__59785){
var map__59786 = p__59784;
var map__59786__$1 = (((((!((map__59786 == null))))?(((((map__59786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59786):map__59786);
var state = map__59786__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59786__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59787 = p__59785;
var map__59787__$1 = (((((!((map__59787 == null))))?(((((map__59787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59787):map__59787);
var spec = map__59787__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59787__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59797,key,spec){
var map__59798 = p__59797;
var map__59798__$1 = (((((!((map__59798 == null))))?(((((map__59798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59798):map__59798);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59798__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(p__59805){
var map__59806 = p__59805;
var map__59806__$1 = (((((!((map__59806 == null))))?(((((map__59806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59806):map__59806);
var runtime = map__59806__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59806__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59800_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59800_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59801_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59801_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59802_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59802_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59803_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59803_SHARP_);
}),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996),(function (p1__59804_SHARP_){
return shadow.remote.runtime.shared.tool_disconnect(runtime,p1__59804_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__60025,key){
var map__60026 = p__60025;
var map__60026__$1 = (((((!((map__60026 == null))))?(((((map__60026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60026):map__60026);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60026__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__60029,p__60030){
var map__60032 = p__60029;
var map__60032__$1 = (((((!((map__60032 == null))))?(((((map__60032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60032):map__60032);
var runtime = map__60032__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60032__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__60033 = p__60030;
var map__60033__$1 = (((((!((map__60033 == null))))?(((((map__60033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60033):map__60033);
var msg = map__60033__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60033__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.not(op_handler)){
return shadow.remote.runtime.api.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
} else {
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__60037 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__60039 = null;
var count__60040 = (0);
var i__60041 = (0);
while(true){
if((i__60041 < count__60040)){
var map__60067 = chunk__60039.cljs$core$IIndexed$_nth$arity$2(null,i__60041);
var map__60067__$1 = (((((!((map__60067 == null))))?(((((map__60067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60067):map__60067);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60067__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60154 = seq__60037;
var G__60155 = chunk__60039;
var G__60156 = count__60040;
var G__60157 = (i__60041 + (1));
seq__60037 = G__60154;
chunk__60039 = G__60155;
count__60040 = G__60156;
i__60041 = G__60157;
continue;
} else {
var G__60158 = seq__60037;
var G__60159 = chunk__60039;
var G__60160 = count__60040;
var G__60161 = (i__60041 + (1));
seq__60037 = G__60158;
chunk__60039 = G__60159;
count__60040 = G__60160;
i__60041 = G__60161;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60037);
if(temp__5735__auto__){
var seq__60037__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60037__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60037__$1);
var G__60162 = cljs.core.chunk_rest(seq__60037__$1);
var G__60163 = c__4609__auto__;
var G__60164 = cljs.core.count(c__4609__auto__);
var G__60165 = (0);
seq__60037 = G__60162;
chunk__60039 = G__60163;
count__60040 = G__60164;
i__60041 = G__60165;
continue;
} else {
var map__60082 = cljs.core.first(seq__60037__$1);
var map__60082__$1 = (((((!((map__60082 == null))))?(((((map__60082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60082):map__60082);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60082__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60166 = cljs.core.next(seq__60037__$1);
var G__60167 = null;
var G__60168 = (0);
var G__60169 = (0);
seq__60037 = G__60166;
chunk__60039 = G__60167;
count__60040 = G__60168;
i__60041 = G__60169;
continue;
} else {
var G__60170 = cljs.core.next(seq__60037__$1);
var G__60171 = null;
var G__60172 = (0);
var G__60173 = (0);
seq__60037 = G__60170;
chunk__60039 = G__60171;
count__60040 = G__60172;
i__60041 = G__60173;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
