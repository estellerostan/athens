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
athens.devcards.db.load_real_db_BANG_ = (function athens$devcards$db$load_real_db_BANG_(){
var c__41547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41548__auto__ = (function (){var switch__41524__auto__ = (function (state_56844){
var state_val_56845 = (state_56844[(1)]);
if((state_val_56845 === (7))){
var state_56844__$1 = state_56844;
var statearr_56846_56868 = state_56844__$1;
(statearr_56846_56868[(2)] = false);

(statearr_56846_56868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (1))){
var inst_56807 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_56808 = [false];
var inst_56809 = cljs.core.PersistentHashMap.fromArrays(inst_56807,inst_56808);
var inst_56810 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56809], 0));
var state_56844__$1 = state_56844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56844__$1,(2),inst_56810);
} else {
if((state_val_56845 === (4))){
var state_56844__$1 = state_56844;
var statearr_56847_56869 = state_56844__$1;
(statearr_56847_56869[(2)] = false);

(statearr_56847_56869[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (13))){
var inst_56840 = alert("Failed to retrieve data from GitHub");
var state_56844__$1 = state_56844;
var statearr_56848_56870 = state_56844__$1;
(statearr_56848_56870[(2)] = inst_56840);

(statearr_56848_56870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (6))){
var state_56844__$1 = state_56844;
var statearr_56849_56871 = state_56844__$1;
(statearr_56849_56871[(2)] = true);

(statearr_56849_56871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (3))){
var inst_56812 = (state_56844[(7)]);
var inst_56817 = inst_56812.cljs$lang$protocol_mask$partition0$;
var inst_56818 = (inst_56817 & (64));
var inst_56819 = inst_56812.cljs$core$ISeq$;
var inst_56820 = (cljs.core.PROTOCOL_SENTINEL === inst_56819);
var inst_56821 = ((inst_56818) || (inst_56820));
var state_56844__$1 = state_56844;
if(cljs.core.truth_(inst_56821)){
var statearr_56850_56872 = state_56844__$1;
(statearr_56850_56872[(1)] = (6));

} else {
var statearr_56851_56873 = state_56844__$1;
(statearr_56851_56873[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (12))){
var inst_56835 = (state_56844[(8)]);
var inst_56837 = athens.db.str_to_db_tx(inst_56835);
var inst_56838 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,inst_56837) : posh.reagent.transact_BANG_.call(null,athens.db.dsdb,inst_56837));
var state_56844__$1 = state_56844;
var statearr_56852_56874 = state_56844__$1;
(statearr_56852_56874[(2)] = inst_56838);

(statearr_56852_56874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (2))){
var inst_56812 = (state_56844[(7)]);
var inst_56812__$1 = (state_56844[(2)]);
var inst_56814 = (inst_56812__$1 == null);
var inst_56815 = cljs.core.not(inst_56814);
var state_56844__$1 = (function (){var statearr_56853 = state_56844;
(statearr_56853[(7)] = inst_56812__$1);

return statearr_56853;
})();
if(inst_56815){
var statearr_56854_56875 = state_56844__$1;
(statearr_56854_56875[(1)] = (3));

} else {
var statearr_56855_56876 = state_56844__$1;
(statearr_56855_56876[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (11))){
var inst_56833 = (state_56844[(2)]);
var inst_56834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56833,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_56835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56833,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_56844__$1 = (function (){var statearr_56856 = state_56844;
(statearr_56856[(8)] = inst_56835);

return statearr_56856;
})();
if(cljs.core.truth_(inst_56834)){
var statearr_56857_56877 = state_56844__$1;
(statearr_56857_56877[(1)] = (12));

} else {
var statearr_56858_56878 = state_56844__$1;
(statearr_56858_56878[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (9))){
var inst_56812 = (state_56844[(7)]);
var inst_56830 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56812);
var state_56844__$1 = state_56844;
var statearr_56859_56879 = state_56844__$1;
(statearr_56859_56879[(2)] = inst_56830);

(statearr_56859_56879[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (5))){
var inst_56828 = (state_56844[(2)]);
var state_56844__$1 = state_56844;
if(cljs.core.truth_(inst_56828)){
var statearr_56860_56880 = state_56844__$1;
(statearr_56860_56880[(1)] = (9));

} else {
var statearr_56861_56881 = state_56844__$1;
(statearr_56861_56881[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (14))){
var inst_56842 = (state_56844[(2)]);
var state_56844__$1 = state_56844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56844__$1,inst_56842);
} else {
if((state_val_56845 === (10))){
var inst_56812 = (state_56844[(7)]);
var state_56844__$1 = state_56844;
var statearr_56862_56882 = state_56844__$1;
(statearr_56862_56882[(2)] = inst_56812);

(statearr_56862_56882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56845 === (8))){
var inst_56825 = (state_56844[(2)]);
var state_56844__$1 = state_56844;
var statearr_56863_56883 = state_56844__$1;
(statearr_56863_56883[(2)] = inst_56825);

(statearr_56863_56883[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto____0 = (function (){
var statearr_56864 = [null,null,null,null,null,null,null,null,null];
(statearr_56864[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto__);

(statearr_56864[(1)] = (1));

return statearr_56864;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto____1 = (function (state_56844){
while(true){
var ret_value__41526__auto__ = (function (){try{while(true){
var result__41527__auto__ = switch__41524__auto__(state_56844);
if(cljs.core.keyword_identical_QMARK_(result__41527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41527__auto__;
}
break;
}
}catch (e56865){if((e56865 instanceof Object)){
var ex__41528__auto__ = e56865;
var statearr_56866_56884 = state_56844;
(statearr_56866_56884[(5)] = ex__41528__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41526__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56885 = state_56844;
state_56844 = G__56885;
continue;
} else {
return ret_value__41526__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto__ = function(state_56844){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto____1.call(this,state_56844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__41525__auto__;
})()
})();
var state__41549__auto__ = (function (){var statearr_56867 = (f__41548__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41548__auto__.cljs$core$IFn$_invoke$arity$0() : f__41548__auto__.call(null));
(statearr_56867[(6)] = c__41547__auto__);

return statearr_56867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41549__auto__);
}));

return c__41547__auto__;
});
athens.devcards.db.load_real_db_button = (function athens$devcards$db$load_real_db_button(){
var pressed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var handler = (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pressed_QMARK_,cljs.core.not);

return athens.devcards.db.load_real_db_BANG_();
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(pressed_QMARK_),new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),handler,new cljs.core.Keyword(null,"label","label",1718410804),"Load Real Data"], null)], null);
});
});
athens.devcards.db.reset_db_button = (function athens$devcards$db$reset_db_button(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.buttons.button_primary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click-fn","on-click-fn",739785852),(function (){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));
}),new cljs.core.Keyword(null,"label","label",1718410804),"Reset DB"], null)], null);
});
});

//# sourceMappingURL=athens.devcards.db.js.map
