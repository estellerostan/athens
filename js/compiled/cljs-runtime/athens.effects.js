goog.provide('athens.effects');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('datascript.core');
goog.require('datascript.transit');
goog.require('day8.re_frame.async_flow_fx');
goog.require('posh.reagent');
goog.require('re_frame.core');
var G__50059_50224 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__50060_50225 = (function (datoms){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(datoms);

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["OUTPUTS"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1((posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,datoms) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,datoms))));

return cljs.core.println();
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__50059_50224,G__50060_50225) : re_frame.core.reg_fx.call(null,G__50059_50224,G__50060_50225));
var G__50061_50227 = new cljs.core.Keyword(null,"reset-conn","reset-conn",235244638);
var G__50062_50228 = (function (new_db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new_db);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__50061_50227,G__50062_50228) : re_frame.core.reg_fx.call(null,G__50061_50227,G__50062_50228));
var G__50063_50229 = new cljs.core.Keyword(null,"set-local-storage-db","set-local-storage-db",-393341211);
var G__50064_50230 = (function (db){
return localStorage.setItem("datascript/DB",datascript.transit.write_transit_str(db));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__50063_50229,G__50064_50230) : re_frame.core.reg_fx.call(null,G__50063_50229,G__50064_50230));
var G__50065_50231 = new cljs.core.Keyword(null,"http","http",382524695);
var G__50066_50232 = (function (p__50067){
var map__50068 = p__50067;
var map__50068__$1 = (((((!((map__50068 == null))))?(((((map__50068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50068):map__50068);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50068__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50068__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50068__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50068__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50068__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__41547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41548__auto__ = (function (){var switch__41524__auto__ = (function (state_50144){
var state_val_50145 = (state_50144[(1)]);
if((state_val_50145 === (7))){
var inst_50093 = (state_50144[(7)]);
var inst_50093__$1 = (state_50144[(2)]);
var inst_50097 = (inst_50093__$1 == null);
var inst_50098 = cljs.core.not(inst_50097);
var state_50144__$1 = (function (){var statearr_50159 = state_50144;
(statearr_50159[(7)] = inst_50093__$1);

return statearr_50159;
})();
if(inst_50098){
var statearr_50160_50242 = state_50144__$1;
(statearr_50160_50242[(1)] = (8));

} else {
var statearr_50161_50243 = state_50144__$1;
(statearr_50161_50243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (1))){
var state_50144__$1 = state_50144;
var G__50162_50244 = method;
var G__50162_50245__$1 = (((G__50162_50244 instanceof cljs.core.Keyword))?G__50162_50244.fqn:null);
switch (G__50162_50245__$1) {
case "post":
var statearr_50163_50247 = state_50144__$1;
(statearr_50163_50247[(1)] = (3));


break;
case "get":
var statearr_50164_50249 = state_50144__$1;
(statearr_50164_50249[(1)] = (4));


break;
case "put":
var statearr_50165_50250 = state_50144__$1;
(statearr_50165_50250[(1)] = (5));


break;
case "delete":
var statearr_50166_50251 = state_50144__$1;
(statearr_50166_50251[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50162_50245__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (4))){
var state_50144__$1 = state_50144;
var statearr_50167_50252 = state_50144__$1;
(statearr_50167_50252[(2)] = cljs_http.client.get);

(statearr_50167_50252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (15))){
var inst_50093 = (state_50144[(7)]);
var state_50144__$1 = state_50144;
var statearr_50168_50254 = state_50144__$1;
(statearr_50168_50254[(2)] = inst_50093);

(statearr_50168_50254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (13))){
var inst_50121 = (state_50144[(2)]);
var state_50144__$1 = state_50144;
var statearr_50169_50255 = state_50144__$1;
(statearr_50169_50255[(2)] = inst_50121);

(statearr_50169_50255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (6))){
var state_50144__$1 = state_50144;
var statearr_50170_50256 = state_50144__$1;
(statearr_50170_50256[(2)] = cljs_http.client.delete$);

(statearr_50170_50256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (17))){
var inst_50131 = (state_50144[(8)]);
var inst_50133 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_50131);
var inst_50134 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_50133) : re_frame.core.dispatch.call(null,inst_50133));
var state_50144__$1 = state_50144;
var statearr_50179_50257 = state_50144__$1;
(statearr_50179_50257[(2)] = inst_50134);

(statearr_50179_50257[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (3))){
var state_50144__$1 = state_50144;
var statearr_50180_50258 = state_50144__$1;
(statearr_50180_50258[(2)] = cljs_http.client.post);

(statearr_50180_50258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (12))){
var state_50144__$1 = state_50144;
var statearr_50186_50259 = state_50144__$1;
(statearr_50186_50259[(2)] = false);

(statearr_50186_50259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (2))){
var inst_50088 = (state_50144[(2)]);
var inst_50089 = (inst_50088.cljs$core$IFn$_invoke$arity$2 ? inst_50088.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_50088.call(null,url,opts));
var state_50144__$1 = state_50144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50144__$1,(7),inst_50089);
} else {
if((state_val_50145 === (19))){
var inst_50139 = (state_50144[(2)]);
var state_50144__$1 = state_50144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50144__$1,inst_50139);
} else {
if((state_val_50145 === (11))){
var state_50144__$1 = state_50144;
var statearr_50187_50260 = state_50144__$1;
(statearr_50187_50260[(2)] = true);

(statearr_50187_50260[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (9))){
var state_50144__$1 = state_50144;
var statearr_50188_50261 = state_50144__$1;
(statearr_50188_50261[(2)] = false);

(statearr_50188_50261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (5))){
var state_50144__$1 = state_50144;
var statearr_50189_50262 = state_50144__$1;
(statearr_50189_50262[(2)] = cljs_http.client.put);

(statearr_50189_50262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (14))){
var inst_50093 = (state_50144[(7)]);
var inst_50126 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50093);
var state_50144__$1 = state_50144;
var statearr_50190_50263 = state_50144__$1;
(statearr_50190_50263[(2)] = inst_50126);

(statearr_50190_50263[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (16))){
var inst_50129 = (state_50144[(9)]);
var inst_50129__$1 = (state_50144[(2)]);
var inst_50130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50129__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_50131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50129__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_50144__$1 = (function (){var statearr_50196 = state_50144;
(statearr_50196[(9)] = inst_50129__$1);

(statearr_50196[(8)] = inst_50131);

return statearr_50196;
})();
if(cljs.core.truth_(inst_50130)){
var statearr_50197_50265 = state_50144__$1;
(statearr_50197_50265[(1)] = (17));

} else {
var statearr_50199_50266 = state_50144__$1;
(statearr_50199_50266[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (10))){
var inst_50124 = (state_50144[(2)]);
var state_50144__$1 = state_50144;
if(cljs.core.truth_(inst_50124)){
var statearr_50203_50267 = state_50144__$1;
(statearr_50203_50267[(1)] = (14));

} else {
var statearr_50204_50268 = state_50144__$1;
(statearr_50204_50268[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (18))){
var inst_50129 = (state_50144[(9)]);
var inst_50136 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_50129);
var inst_50137 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_50136) : re_frame.core.dispatch.call(null,inst_50136));
var state_50144__$1 = state_50144;
var statearr_50205_50269 = state_50144__$1;
(statearr_50205_50269[(2)] = inst_50137);

(statearr_50205_50269[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (8))){
var inst_50093 = (state_50144[(7)]);
var inst_50113 = inst_50093.cljs$lang$protocol_mask$partition0$;
var inst_50114 = (inst_50113 & (64));
var inst_50115 = inst_50093.cljs$core$ISeq$;
var inst_50116 = (cljs.core.PROTOCOL_SENTINEL === inst_50115);
var inst_50117 = ((inst_50114) || (inst_50116));
var state_50144__$1 = state_50144;
if(cljs.core.truth_(inst_50117)){
var statearr_50206_50270 = state_50144__$1;
(statearr_50206_50270[(1)] = (11));

} else {
var statearr_50207_50271 = state_50144__$1;
(statearr_50207_50271[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$effects$state_machine__41525__auto__ = null;
var athens$effects$state_machine__41525__auto____0 = (function (){
var statearr_50208 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50208[(0)] = athens$effects$state_machine__41525__auto__);

(statearr_50208[(1)] = (1));

return statearr_50208;
});
var athens$effects$state_machine__41525__auto____1 = (function (state_50144){
while(true){
var ret_value__41526__auto__ = (function (){try{while(true){
var result__41527__auto__ = switch__41524__auto__(state_50144);
if(cljs.core.keyword_identical_QMARK_(result__41527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41527__auto__;
}
break;
}
}catch (e50209){if((e50209 instanceof Object)){
var ex__41528__auto__ = e50209;
var statearr_50210_50272 = state_50144;
(statearr_50210_50272[(5)] = ex__41528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50209;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50273 = state_50144;
state_50144 = G__50273;
continue;
} else {
return ret_value__41526__auto__;
}
break;
}
});
athens$effects$state_machine__41525__auto__ = function(state_50144){
switch(arguments.length){
case 0:
return athens$effects$state_machine__41525__auto____0.call(this);
case 1:
return athens$effects$state_machine__41525__auto____1.call(this,state_50144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$effects$state_machine__41525__auto__.cljs$core$IFn$_invoke$arity$0 = athens$effects$state_machine__41525__auto____0;
athens$effects$state_machine__41525__auto__.cljs$core$IFn$_invoke$arity$1 = athens$effects$state_machine__41525__auto____1;
return athens$effects$state_machine__41525__auto__;
})()
})();
var state__41549__auto__ = (function (){var statearr_50212 = (f__41548__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41548__auto__.cljs$core$IFn$_invoke$arity$0() : f__41548__auto__.call(null));
(statearr_50212[(6)] = c__41547__auto__);

return statearr_50212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41549__auto__);
}));

return c__41547__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__50065_50231,G__50066_50232) : re_frame.core.reg_fx.call(null,G__50065_50231,G__50066_50232));
var G__50218_50274 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__50219_50275 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__50220){
var map__50221 = p__50220;
var map__50221__$1 = (((((!((map__50221 == null))))?(((((map__50221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50221):map__50221);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__50223 = action;
var G__50223__$1 = (((G__50223 instanceof cljs.core.Keyword))?G__50223.fqn:null);
switch (G__50223__$1) {
case "start":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(timers,cljs.core.assoc,id,setTimeout((function (){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
}),wait));

break;
case "clear":
clearTimeout(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timers),id));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(timers,cljs.core.dissoc,id);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50223__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__50218_50274,G__50219_50275) : re_frame.core.reg_fx.call(null,G__50218_50274,G__50219_50275));

//# sourceMappingURL=athens.effects.js.map
