goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.patterns');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('datascript.core');
goog.require('day8.re_frame.async_flow_fx');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('re_posh.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__68539__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__68540__auto__;
}catch (e77379){var e = e77379;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-athena","toggle-athena",102452770),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"athena","athena",-1523991628),cljs.core.not(new cljs.core.Keyword(null,"athena","athena",-1523991628).cljs$core$IFn$_invoke$arity$1(db)));
}));
var G__77382_77668 = new cljs.core.Keyword(null,"http","http",382524695);
var G__77383_77669 = (function (p__77385){
var map__77386 = p__77385;
var map__77386__$1 = (((((!((map__77386 == null))))?(((((map__77386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77386):map__77386);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77386__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77386__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77386__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77386__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77386__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
var c__45937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45938__auto__ = (function (){var switch__45837__auto__ = (function (state_77440){
var state_val_77441 = (state_77440[(1)]);
if((state_val_77441 === (7))){
var inst_77401 = (state_77440[(7)]);
var inst_77401__$1 = (state_77440[(2)]);
var inst_77403 = (inst_77401__$1 == null);
var inst_77404 = cljs.core.not(inst_77403);
var state_77440__$1 = (function (){var statearr_77444 = state_77440;
(statearr_77444[(7)] = inst_77401__$1);

return statearr_77444;
})();
if(inst_77404){
var statearr_77445_77674 = state_77440__$1;
(statearr_77445_77674[(1)] = (8));

} else {
var statearr_77447_77675 = state_77440__$1;
(statearr_77447_77675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (1))){
var state_77440__$1 = state_77440;
var G__77448_77676 = method;
var G__77448_77677__$1 = (((G__77448_77676 instanceof cljs.core.Keyword))?G__77448_77676.fqn:null);
switch (G__77448_77677__$1) {
case "post":
var statearr_77450_77679 = state_77440__$1;
(statearr_77450_77679[(1)] = (3));


break;
case "get":
var statearr_77452_77680 = state_77440__$1;
(statearr_77452_77680[(1)] = (4));


break;
case "put":
var statearr_77454_77681 = state_77440__$1;
(statearr_77454_77681[(1)] = (5));


break;
case "delete":
var statearr_77456_77682 = state_77440__$1;
(statearr_77456_77682[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77448_77677__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (4))){
var state_77440__$1 = state_77440;
var statearr_77458_77685 = state_77440__$1;
(statearr_77458_77685[(2)] = cljs_http.client.get);

(statearr_77458_77685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (15))){
var inst_77401 = (state_77440[(7)]);
var state_77440__$1 = state_77440;
var statearr_77459_77690 = state_77440__$1;
(statearr_77459_77690[(2)] = inst_77401);

(statearr_77459_77690[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (13))){
var inst_77416 = (state_77440[(2)]);
var state_77440__$1 = state_77440;
var statearr_77460_77693 = state_77440__$1;
(statearr_77460_77693[(2)] = inst_77416);

(statearr_77460_77693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (6))){
var state_77440__$1 = state_77440;
var statearr_77461_77696 = state_77440__$1;
(statearr_77461_77696[(2)] = cljs_http.client.delete$);

(statearr_77461_77696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (17))){
var inst_77429 = (state_77440[(8)]);
var inst_77431 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_77429);
var inst_77432 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_77431) : re_frame.core.dispatch.call(null,inst_77431));
var state_77440__$1 = state_77440;
var statearr_77465_77704 = state_77440__$1;
(statearr_77465_77704[(2)] = inst_77432);

(statearr_77465_77704[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (3))){
var state_77440__$1 = state_77440;
var statearr_77478_77706 = state_77440__$1;
(statearr_77478_77706[(2)] = cljs_http.client.post);

(statearr_77478_77706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (12))){
var state_77440__$1 = state_77440;
var statearr_77482_77709 = state_77440__$1;
(statearr_77482_77709[(2)] = false);

(statearr_77482_77709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (2))){
var inst_77398 = (state_77440[(2)]);
var inst_77399 = (inst_77398.cljs$core$IFn$_invoke$arity$2 ? inst_77398.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_77398.call(null,url,opts));
var state_77440__$1 = state_77440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77440__$1,(7),inst_77399);
} else {
if((state_val_77441 === (19))){
var inst_77437 = (state_77440[(2)]);
var state_77440__$1 = state_77440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77440__$1,inst_77437);
} else {
if((state_val_77441 === (11))){
var state_77440__$1 = state_77440;
var statearr_77486_77710 = state_77440__$1;
(statearr_77486_77710[(2)] = true);

(statearr_77486_77710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (9))){
var state_77440__$1 = state_77440;
var statearr_77489_77711 = state_77440__$1;
(statearr_77489_77711[(2)] = false);

(statearr_77489_77711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (5))){
var state_77440__$1 = state_77440;
var statearr_77492_77715 = state_77440__$1;
(statearr_77492_77715[(2)] = cljs_http.client.put);

(statearr_77492_77715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (14))){
var inst_77401 = (state_77440[(7)]);
var inst_77421 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_77401);
var state_77440__$1 = state_77440;
var statearr_77500_77721 = state_77440__$1;
(statearr_77500_77721[(2)] = inst_77421);

(statearr_77500_77721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (16))){
var inst_77424 = (state_77440[(9)]);
var inst_77424__$1 = (state_77440[(2)]);
var inst_77425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77424__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_77429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_77424__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_77440__$1 = (function (){var statearr_77501 = state_77440;
(statearr_77501[(9)] = inst_77424__$1);

(statearr_77501[(8)] = inst_77429);

return statearr_77501;
})();
if(cljs.core.truth_(inst_77425)){
var statearr_77502_77722 = state_77440__$1;
(statearr_77502_77722[(1)] = (17));

} else {
var statearr_77506_77723 = state_77440__$1;
(statearr_77506_77723[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (10))){
var inst_77419 = (state_77440[(2)]);
var state_77440__$1 = state_77440;
if(cljs.core.truth_(inst_77419)){
var statearr_77507_77724 = state_77440__$1;
(statearr_77507_77724[(1)] = (14));

} else {
var statearr_77508_77725 = state_77440__$1;
(statearr_77508_77725[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (18))){
var inst_77424 = (state_77440[(9)]);
var inst_77434 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_77424);
var inst_77435 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_77434) : re_frame.core.dispatch.call(null,inst_77434));
var state_77440__$1 = state_77440;
var statearr_77509_77726 = state_77440__$1;
(statearr_77509_77726[(2)] = inst_77435);

(statearr_77509_77726[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77441 === (8))){
var inst_77401 = (state_77440[(7)]);
var inst_77408 = inst_77401.cljs$lang$protocol_mask$partition0$;
var inst_77409 = (inst_77408 & (64));
var inst_77410 = inst_77401.cljs$core$ISeq$;
var inst_77411 = (cljs.core.PROTOCOL_SENTINEL === inst_77410);
var inst_77412 = ((inst_77409) || (inst_77411));
var state_77440__$1 = state_77440;
if(cljs.core.truth_(inst_77412)){
var statearr_77516_77727 = state_77440__$1;
(statearr_77516_77727[(1)] = (11));

} else {
var statearr_77517_77732 = state_77440__$1;
(statearr_77517_77732[(1)] = (12));

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
var athens$events$state_machine__45838__auto__ = null;
var athens$events$state_machine__45838__auto____0 = (function (){
var statearr_77518 = [null,null,null,null,null,null,null,null,null,null];
(statearr_77518[(0)] = athens$events$state_machine__45838__auto__);

(statearr_77518[(1)] = (1));

return statearr_77518;
});
var athens$events$state_machine__45838__auto____1 = (function (state_77440){
while(true){
var ret_value__45839__auto__ = (function (){try{while(true){
var result__45840__auto__ = switch__45837__auto__(state_77440);
if(cljs.core.keyword_identical_QMARK_(result__45840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45840__auto__;
}
break;
}
}catch (e77521){if((e77521 instanceof Object)){
var ex__45841__auto__ = e77521;
var statearr_77523_77738 = state_77440;
(statearr_77523_77738[(5)] = ex__45841__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_77440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77739 = state_77440;
state_77440 = G__77739;
continue;
} else {
return ret_value__45839__auto__;
}
break;
}
});
athens$events$state_machine__45838__auto__ = function(state_77440){
switch(arguments.length){
case 0:
return athens$events$state_machine__45838__auto____0.call(this);
case 1:
return athens$events$state_machine__45838__auto____1.call(this,state_77440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$events$state_machine__45838__auto__.cljs$core$IFn$_invoke$arity$0 = athens$events$state_machine__45838__auto____0;
athens$events$state_machine__45838__auto__.cljs$core$IFn$_invoke$arity$1 = athens$events$state_machine__45838__auto____1;
return athens$events$state_machine__45838__auto__;
})()
})();
var state__45939__auto__ = (function (){var statearr_77524 = (f__45938__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45938__auto__.cljs$core$IFn$_invoke$arity$0() : f__45938__auto__.call(null));
(statearr_77524[(6)] = c__45937__auto__);

return statearr_77524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45939__auto__);
}));

return c__45937__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__77382_77668,G__77383_77669) : re_frame.core.reg_fx.call(null,G__77382_77668,G__77383_77669));
var G__77525_77740 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
var G__77526_77741 = (function (){var timers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function (p__77527){
var map__77528 = p__77527;
var map__77528__$1 = (((((!((map__77528 == null))))?(((((map__77528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77528):map__77528);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77528__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77528__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77528__$1,new cljs.core.Keyword(null,"event","event",301435442));
var wait = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77528__$1,new cljs.core.Keyword(null,"wait","wait",-260664777));
var G__77530 = action;
var G__77530__$1 = (((G__77530 instanceof cljs.core.Keyword))?G__77530.fqn:null);
switch (G__77530__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77530__$1)].join('')));

}
});
})();
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__77525_77740,G__77526_77741) : re_frame.core.reg_fx.call(null,G__77525_77740,G__77526_77741));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
var G__77537_77743 = new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577);
var G__77538_77744 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__77539){
var vec__77540 = p__77539;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77540,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77540,(1),null);
var _PLUS_debux_dbg_opts_PLUS__77745 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))));

var opts__68539__auto___77746 = _PLUS_debux_dbg_opts_PLUS__77745;
var result__68540__auto___77747 = datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS__77745;
var result__68540__auto___77747 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto___77747,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto___77747;
})(),(function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS__77745;
var result__68540__auto___77747 = (function (){var G__77549 = (function (){var opts__68539__auto____$2 = _PLUS_debux_dbg_opts_PLUS__77745;
var result__68540__auto___77747 = athens.db.schema;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto___77747,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__68540__auto___77747;
})();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__77549) : datascript.core.empty_db.call(null,G__77549));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto___77747,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto___77747;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto___77747,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e77548){var e_77748 = e77548;
throw e_77748;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)));

var opts__68539__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = athens.db.str_to_db_tx((function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = json_str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__68540__auto__;
}catch (e77559){var e = e77559;
throw e;
}}):(function (_,p__77560){
var vec__77561 = p__77560;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77561,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77561,(1),null);
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));

return athens.db.str_to_db_tx(json_str);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__77537_77743,G__77538_77744) : re_posh.core.reg_event_ds.call(null,G__77537_77743,G__77538_77744));
var G__77564_77749 = new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710);
var G__77565_77750 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__77570){
var vec__77571 = p__77570;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77571,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77571,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77571,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null));

var opts__68539__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(function (){var opts__68539__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = eid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__68540__auto__;
})(),new cljs.core.Keyword("block","open","block/open",-1875254829),(function (){var opts__68539__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = cljs.core.not((function (){var opts__68539__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = open_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__68540__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__68540__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__68540__auto__;
}catch (e77582){var e = e77582;
throw e;
}}):(function (_,p__77583){
var vec__77584 = p__77583;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77584,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77584,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77584,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.not(open_state)], null)], null);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__77564_77749,G__77565_77750) : re_posh.core.reg_event_ds.call(null,G__77564_77749,G__77565_77750));
athens.events.node_with_title = (function athens$events$node_with_title(ds,title){
var G__77591 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__77592 = ds;
var G__77593 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77591,G__77592,G__77593) : datascript.core.q.call(null,G__77591,G__77592,G__77593));
});
athens.events.referencing_blocks = (function athens$events$referencing_blocks(ds,title){
var G__77594 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?s","?s",456183954,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null)], null);
var G__77595 = ds;
var G__77596 = athens.patterns.linked(title);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77594,G__77595,G__77596) : datascript.core.q.call(null,G__77594,G__77595,G__77596));
});
athens.events.rename_refs_tx = (function athens$events$rename_refs_tx(old_title,new_title,p__77597){
var vec__77598 = p__77597;
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77598,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77598,(1),null);
var new_s = clojure.string.replace(s,athens.patterns.linked(old_title),["$1$3$4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_title),"$2$5"].join(''));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","string","block/string",-2066596447),new_s], null);
});
athens.events.rename_tx = (function athens$events$rename_tx(ds,old_title,new_title){
var eid = athens.events.node_with_title(ds,old_title);
var blocks = athens.events.referencing_blocks(ds,old_title);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("node","title","node/title",628940777),new_title], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(athens.events.rename_refs_tx,old_title,new_title),blocks));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("node","renamed","node/renamed",-1655200587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77601 = new cljs.core.Keyword(null,"ds","ds",-257415859);
return (re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__77601) : re_posh.core.inject_cofx.call(null,G__77601));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__77602,p__77603){
var map__77604 = p__77602;
var map__77604__$1 = (((((!((map__77604 == null))))?(((((map__77604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77604):map__77604);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77604__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77604__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__77605 = p__77603;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77605,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77605,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77605,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null))));

var opts__68539__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = (((function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var opts__68539__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = old_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__68540__auto__;
})(),(function (){var opts__68539__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__68540__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})())?(function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = (cljs.core.truth_((function (){var opts__68539__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = athens.events.node_with_title((function (){var opts__68539__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = ds;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__68540__auto__;
})(),(function (){var opts__68539__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new_title;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__68540__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__68540__auto__;
})())?(function (){var opts__68539__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),old_title,new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new_title], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__68540__auto__;
})():(function (){var opts__68539__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.rename_tx(ds,old_title,new_title)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__68540__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})():null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"node-with-title","node-with-title",575524725,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"old-title","old-title",1555053315,null),new cljs.core.Symbol(null,"new-title","new-title",-446844017,null))], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__68540__auto__;
}catch (e77609){var e = e77609;
throw e;
}}):(function (p__77610,p__77611){
var map__77612 = p__77610;
var map__77612__$1 = (((((!((map__77612 == null))))?(((((map__77612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77612):map__77612);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77612__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77612__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__77613 = p__77611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77613,(0),null);
var old_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77613,(1),null);
var new_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77613,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_title,new_title)){
if(cljs.core.truth_(athens.events.node_with_title(ds,new_title))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"old-title","old-title",-85478212),old_title,new cljs.core.Keyword(null,"new-title","new-title",-2087375544),new_title], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084),new cljs.core.Keyword(null,"wait","wait",-260664777),(7000),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),athens.events.rename_tx(ds,old_title,new_title)], null);
}
} else {
return null;
}
})));
athens.events.count_children = (function athens$events$count_children(ds,title){
var G__77617 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"?children","?children",2075030425,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?children","?children",2075030425,null)], null)], null);
var G__77618 = ds;
var G__77619 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77617,G__77618,G__77619) : datascript.core.q.call(null,G__77617,G__77618,G__77619));
});
athens.events.get_children_eids = (function athens$events$get_children_eids(ds,title){
var G__77620 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?children","?children",2075030425,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"?children","?children",2075030425,null)], null)], null);
var G__77621 = ds;
var G__77622 = title;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__77620,G__77621,G__77622) : datascript.core.q.call(null,G__77620,G__77621,G__77622));
});
athens.events.move_blocks_tx = (function athens$events$move_blocks_tx(ds,from_title,to_title){
var block_count = athens.events.count_children(ds,to_title);
var block_eids = athens.events.get_children_eids(ds,from_title);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (eid){
var order = new cljs.core.Keyword("block","order","block/order",-1429282437).cljs$core$IFn$_invoke$arity$1((function (){var G__77623 = ds;
var G__77624 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","order","block/order",-1429282437)], null);
var G__77625 = eid;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__77623,G__77624,G__77625) : datascript.core.pull.call(null,G__77623,G__77624,G__77625));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),to_title], null),new cljs.core.Keyword("block","children","block/children",-1040716209),eid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","order","block/order",-1429282437),(order + block_count)], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block_eids], 0));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("node","merged","node/merged",1662072257),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77626 = new cljs.core.Keyword(null,"ds","ds",-257415859);
return (re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__77626) : re_posh.core.inject_cofx.call(null,G__77626));
})()], null),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__77627,p__77628){
var map__77629 = p__77627;
var map__77629__$1 = (((((!((map__77629 == null))))?(((((map__77629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77629):map__77629);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77629__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77629__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__77630 = p__77628;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77630,(0),null);
var primary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77630,(1),null);
var secondary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77630,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"move-blocks-tx","move-blocks-tx",857400980,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null)),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)))], null));

var opts__68539__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),secondary_title], null)], null)], null),athens.events.move_blocks_tx(ds,secondary_title,primary_title),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.events.rename_tx(ds,primary_title,secondary_title)], 0))], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"move-blocks-tx","move-blocks-tx",857400980,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null)),cljs.core.list(new cljs.core.Symbol(null,"rename-tx","rename-tx",-858876592,null),new cljs.core.Symbol(null,"ds","ds",1383115668,null),new cljs.core.Symbol(null,"primary-title","primary-title",-248865621,null),new cljs.core.Symbol(null,"secondary-title","secondary-title",-1642064796,null)))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__68540__auto__;
}catch (e77634){var e = e77634;
throw e;
}}):(function (p__77635,p__77636){
var map__77637 = p__77635;
var map__77637__$1 = (((((!((map__77637 == null))))?(((((map__77637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77637):map__77637);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77637__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77637__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__77638 = p__77636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77638,(0),null);
var primary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77638,(1),null);
var secondary_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77638,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("node","title","node/title",628940777),secondary_title], null)], null)], null),athens.events.move_blocks_tx(ds,secondary_title,primary_title),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([athens.events.rename_tx(ds,primary_title,secondary_title)], 0))], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("node","merge-canceled","node/merge-canceled",1048055540),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__77642,_){
var map__77643 = p__77642;
var map__77643__$1 = (((((!((map__77643 == null))))?(((((map__77643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77643):map__77643);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77643__$1,new cljs.core.Keyword(null,"db","db",993250759));
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null));

var opts__68539__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__68540__auto__;
}catch (e77645){var e = e77645;
throw e;
}}):(function (p__77646,_){
var map__77647 = p__77646;
var map__77647__$1 = (((((!((map__77647 == null))))?(((((map__77647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77647):map__77647);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77647__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__68539__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = cljs.core.assoc_in((function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})(),(function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})(),(function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__68540__auto__;
}catch (e77650){var e = e77650;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__68539__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = cljs.core.assoc_in((function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})(),(function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})(),(function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__68540__auto__;
}catch (e77651){var e = e77651;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__68539__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = cljs.core.assoc_in((function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})(),(function (){var opts__68539__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__68540__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__68540__auto__;
}catch (e77662){var e = e77662;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
athens.events.boot_flow = (function athens$events$boot_flow(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null));

var opts__68539__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__68540__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__68540__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__68540__auto__;
}catch (e77667){var e = e77667;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
})));

//# sourceMappingURL=athens.events.js.map
