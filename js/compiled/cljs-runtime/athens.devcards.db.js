goog.provide('athens.devcards.db');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.buttons');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('datascript.core');
goog.require('devcards.core');
goog.require('posh.reagent');
goog.require('reagent.core');
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(conn){
var c__55886__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55887__auto__ = (function (){var switch__55807__auto__ = (function (state_79911){
var state_val_79912 = (state_79911[(1)]);
if((state_val_79912 === (7))){
var state_79911__$1 = state_79911;
var statearr_79913_79938 = state_79911__$1;
(statearr_79913_79938[(2)] = false);

(statearr_79913_79938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (1))){
var inst_79874 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_79875 = [false];
var inst_79876 = cljs.core.PersistentHashMap.fromArrays(inst_79874,inst_79875);
var inst_79877 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_79876], 0));
var state_79911__$1 = state_79911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79911__$1,(2),inst_79877);
} else {
if((state_val_79912 === (4))){
var state_79911__$1 = state_79911;
var statearr_79914_79939 = state_79911__$1;
(statearr_79914_79939[(2)] = false);

(statearr_79914_79939[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (13))){
var inst_79907 = alert("Failed to retrieve data from GitHub");
var state_79911__$1 = state_79911;
var statearr_79915_79940 = state_79911__$1;
(statearr_79915_79940[(2)] = inst_79907);

(statearr_79915_79940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (6))){
var state_79911__$1 = state_79911;
var statearr_79916_79941 = state_79911__$1;
(statearr_79916_79941[(2)] = true);

(statearr_79916_79941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (3))){
var inst_79879 = (state_79911[(7)]);
var inst_79884 = inst_79879.cljs$lang$protocol_mask$partition0$;
var inst_79885 = (inst_79884 & (64));
var inst_79886 = inst_79879.cljs$core$ISeq$;
var inst_79887 = (cljs.core.PROTOCOL_SENTINEL === inst_79886);
var inst_79888 = ((inst_79885) || (inst_79887));
var state_79911__$1 = state_79911;
if(cljs.core.truth_(inst_79888)){
var statearr_79917_79945 = state_79911__$1;
(statearr_79917_79945[(1)] = (6));

} else {
var statearr_79918_79946 = state_79911__$1;
(statearr_79918_79946[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (12))){
var inst_79902 = (state_79911[(8)]);
var inst_79904 = athens.db.str_to_db_tx(inst_79902);
var inst_79905 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_79904) : posh.reagent.transact_BANG_.call(null,conn,inst_79904));
var state_79911__$1 = state_79911;
var statearr_79919_79947 = state_79911__$1;
(statearr_79919_79947[(2)] = inst_79905);

(statearr_79919_79947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (2))){
var inst_79879 = (state_79911[(7)]);
var inst_79879__$1 = (state_79911[(2)]);
var inst_79881 = (inst_79879__$1 == null);
var inst_79882 = cljs.core.not(inst_79881);
var state_79911__$1 = (function (){var statearr_79920 = state_79911;
(statearr_79920[(7)] = inst_79879__$1);

return statearr_79920;
})();
if(inst_79882){
var statearr_79921_79951 = state_79911__$1;
(statearr_79921_79951[(1)] = (3));

} else {
var statearr_79922_79952 = state_79911__$1;
(statearr_79922_79952[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (11))){
var inst_79900 = (state_79911[(2)]);
var inst_79901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79900,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_79902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79900,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_79911__$1 = (function (){var statearr_79923 = state_79911;
(statearr_79923[(8)] = inst_79902);

return statearr_79923;
})();
if(cljs.core.truth_(inst_79901)){
var statearr_79924_79953 = state_79911__$1;
(statearr_79924_79953[(1)] = (12));

} else {
var statearr_79925_79954 = state_79911__$1;
(statearr_79925_79954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (9))){
var inst_79879 = (state_79911[(7)]);
var inst_79897 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_79879);
var state_79911__$1 = state_79911;
var statearr_79926_79956 = state_79911__$1;
(statearr_79926_79956[(2)] = inst_79897);

(statearr_79926_79956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (5))){
var inst_79895 = (state_79911[(2)]);
var state_79911__$1 = state_79911;
if(cljs.core.truth_(inst_79895)){
var statearr_79927_79957 = state_79911__$1;
(statearr_79927_79957[(1)] = (9));

} else {
var statearr_79928_79958 = state_79911__$1;
(statearr_79928_79958[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (14))){
var inst_79909 = (state_79911[(2)]);
var state_79911__$1 = state_79911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79911__$1,inst_79909);
} else {
if((state_val_79912 === (10))){
var inst_79879 = (state_79911[(7)]);
var state_79911__$1 = state_79911;
var statearr_79929_79959 = state_79911__$1;
(statearr_79929_79959[(2)] = inst_79879);

(statearr_79929_79959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79912 === (8))){
var inst_79892 = (state_79911[(2)]);
var state_79911__$1 = state_79911;
var statearr_79930_79960 = state_79911__$1;
(statearr_79930_79960[(2)] = inst_79892);

(statearr_79930_79960[(1)] = (5));


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
});
return (function() {
var athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto____0 = (function (){
var statearr_79931 = [null,null,null,null,null,null,null,null,null];
(statearr_79931[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto__);

(statearr_79931[(1)] = (1));

return statearr_79931;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto____1 = (function (state_79911){
while(true){
var ret_value__55809__auto__ = (function (){try{while(true){
var result__55810__auto__ = switch__55807__auto__(state_79911);
if(cljs.core.keyword_identical_QMARK_(result__55810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55810__auto__;
}
break;
}
}catch (e79933){if((e79933 instanceof Object)){
var ex__55811__auto__ = e79933;
var statearr_79934_79961 = state_79911;
(statearr_79934_79961[(5)] = ex__55811__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55809__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79962 = state_79911;
state_79911 = G__79962;
continue;
} else {
return ret_value__55809__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto__ = function(state_79911){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto____1.call(this,state_79911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__55808__auto__;
})()
})();
var state__55888__auto__ = (function (){var statearr_79935 = (f__55887__auto__.cljs$core$IFn$_invoke$arity$0 ? f__55887__auto__.cljs$core$IFn$_invoke$arity$0() : f__55887__auto__.call(null));
(statearr_79935[(6)] = c__55886__auto__);

return statearr_79935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55888__auto__);
}));

return c__55886__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(conn){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_(conn);
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
athens.devcards.db.new_conn = (function athens$devcards$db$new_conn(){
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
});
athens.devcards.db.posh_conn_BANG_ = (function athens$devcards$db$posh_conn_BANG_(conn){
return (posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(conn) : posh.reagent.posh_BANG_.call(null,conn));
});

//# sourceMappingURL=athens.devcards.db.js.map
