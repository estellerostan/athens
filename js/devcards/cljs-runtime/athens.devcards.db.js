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
var c__45937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45938__auto__ = (function (){var switch__45837__auto__ = (function (state_66655){
var state_val_66656 = (state_66655[(1)]);
if((state_val_66656 === (7))){
var state_66655__$1 = state_66655;
var statearr_66657_66742 = state_66655__$1;
(statearr_66657_66742[(2)] = false);

(statearr_66657_66742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (1))){
var inst_66618 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_66619 = [false];
var inst_66620 = cljs.core.PersistentHashMap.fromArrays(inst_66618,inst_66619);
var inst_66621 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(athens.db.athens_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66620], 0));
var state_66655__$1 = state_66655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66655__$1,(2),inst_66621);
} else {
if((state_val_66656 === (4))){
var state_66655__$1 = state_66655;
var statearr_66658_66743 = state_66655__$1;
(statearr_66658_66743[(2)] = false);

(statearr_66658_66743[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (13))){
var inst_66651 = alert("Failed to retrieve data from GitHub");
var state_66655__$1 = state_66655;
var statearr_66659_66744 = state_66655__$1;
(statearr_66659_66744[(2)] = inst_66651);

(statearr_66659_66744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (6))){
var state_66655__$1 = state_66655;
var statearr_66660_66745 = state_66655__$1;
(statearr_66660_66745[(2)] = true);

(statearr_66660_66745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (3))){
var inst_66623 = (state_66655[(7)]);
var inst_66628 = inst_66623.cljs$lang$protocol_mask$partition0$;
var inst_66629 = (inst_66628 & (64));
var inst_66630 = inst_66623.cljs$core$ISeq$;
var inst_66631 = (cljs.core.PROTOCOL_SENTINEL === inst_66630);
var inst_66632 = ((inst_66629) || (inst_66631));
var state_66655__$1 = state_66655;
if(cljs.core.truth_(inst_66632)){
var statearr_66661_66749 = state_66655__$1;
(statearr_66661_66749[(1)] = (6));

} else {
var statearr_66662_66750 = state_66655__$1;
(statearr_66662_66750[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (12))){
var inst_66646 = (state_66655[(8)]);
var inst_66648 = athens.db.str_to_db_tx(inst_66646);
var inst_66649 = (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,inst_66648) : posh.reagent.transact_BANG_.call(null,conn,inst_66648));
var state_66655__$1 = state_66655;
var statearr_66663_66751 = state_66655__$1;
(statearr_66663_66751[(2)] = inst_66649);

(statearr_66663_66751[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (2))){
var inst_66623 = (state_66655[(7)]);
var inst_66623__$1 = (state_66655[(2)]);
var inst_66625 = (inst_66623__$1 == null);
var inst_66626 = cljs.core.not(inst_66625);
var state_66655__$1 = (function (){var statearr_66664 = state_66655;
(statearr_66664[(7)] = inst_66623__$1);

return statearr_66664;
})();
if(inst_66626){
var statearr_66665_66757 = state_66655__$1;
(statearr_66665_66757[(1)] = (3));

} else {
var statearr_66687_66758 = state_66655__$1;
(statearr_66687_66758[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (11))){
var inst_66644 = (state_66655[(2)]);
var inst_66645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66644,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_66646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66644,new cljs.core.Keyword(null,"body","body",-2049205669));
var state_66655__$1 = (function (){var statearr_66688 = state_66655;
(statearr_66688[(8)] = inst_66646);

return statearr_66688;
})();
if(cljs.core.truth_(inst_66645)){
var statearr_66689_66759 = state_66655__$1;
(statearr_66689_66759[(1)] = (12));

} else {
var statearr_66690_66760 = state_66655__$1;
(statearr_66690_66760[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (9))){
var inst_66623 = (state_66655[(7)]);
var inst_66641 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_66623);
var state_66655__$1 = state_66655;
var statearr_66692_66761 = state_66655__$1;
(statearr_66692_66761[(2)] = inst_66641);

(statearr_66692_66761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (5))){
var inst_66639 = (state_66655[(2)]);
var state_66655__$1 = state_66655;
if(cljs.core.truth_(inst_66639)){
var statearr_66695_66762 = state_66655__$1;
(statearr_66695_66762[(1)] = (9));

} else {
var statearr_66696_66763 = state_66655__$1;
(statearr_66696_66763[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (14))){
var inst_66653 = (state_66655[(2)]);
var state_66655__$1 = state_66655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66655__$1,inst_66653);
} else {
if((state_val_66656 === (10))){
var inst_66623 = (state_66655[(7)]);
var state_66655__$1 = state_66655;
var statearr_66697_66764 = state_66655__$1;
(statearr_66697_66764[(2)] = inst_66623);

(statearr_66697_66764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66656 === (8))){
var inst_66636 = (state_66655[(2)]);
var state_66655__$1 = state_66655;
var statearr_66698_66765 = state_66655__$1;
(statearr_66698_66765[(2)] = inst_66636);

(statearr_66698_66765[(1)] = (5));


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
var athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto__ = null;
var athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto____0 = (function (){
var statearr_66699 = [null,null,null,null,null,null,null,null,null];
(statearr_66699[(0)] = athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto__);

(statearr_66699[(1)] = (1));

return statearr_66699;
});
var athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto____1 = (function (state_66655){
while(true){
var ret_value__45839__auto__ = (function (){try{while(true){
var result__45840__auto__ = switch__45837__auto__(state_66655);
if(cljs.core.keyword_identical_QMARK_(result__45840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45840__auto__;
}
break;
}
}catch (e66700){if((e66700 instanceof Object)){
var ex__45841__auto__ = e66700;
var statearr_66701_66768 = state_66655;
(statearr_66701_66768[(5)] = ex__45841__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66700;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45839__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66770 = state_66655;
state_66655 = G__66770;
continue;
} else {
return ret_value__45839__auto__;
}
break;
}
});
athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto__ = function(state_66655){
switch(arguments.length){
case 0:
return athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto____0.call(this);
case 1:
return athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto____1.call(this,state_66655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto__.cljs$core$IFn$_invoke$arity$0 = athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto____0;
athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto__.cljs$core$IFn$_invoke$arity$1 = athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto____1;
return athens$devcards$db$load_real_db_BANG__$_state_machine__45838__auto__;
})()
})();
var state__45939__auto__ = (function (){var statearr_66702 = (f__45938__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45938__auto__.cljs$core$IFn$_invoke$arity$0() : f__45938__auto__.call(null));
(statearr_66702[(6)] = c__45937__auto__);

return statearr_66702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45939__auto__);
}));

return c__45937__auto__;
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
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Downloads the ego db. Takes a few seconds.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.db !== 'undefined') && (typeof athens.devcards.db.t_athens$devcards$db66714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.db.t_athens$devcards$db66714 = (function (meta66715){
this.meta66715 = meta66715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.db.t_athens$devcards$db66714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66716,meta66715__$1){
var self__ = this;
var _66716__$1 = this;
return (new athens.devcards.db.t_athens$devcards$db66714(meta66715__$1));
}));

(athens.devcards.db.t_athens$devcards$db66714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66716){
var self__ = this;
var _66716__$1 = this;
return self__.meta66715;
}));

(athens.devcards.db.t_athens$devcards$db66714.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.db.t_athens$devcards$db66714.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__64459__auto__,devcard_opts__64460__auto__){
var self__ = this;
var this__64459__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__64460__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__64478__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button,athens.db.dsdb], null);
if(cljs.core.fn_QMARK_(v__64478__auto__)){
return (function (data_atom__64479__auto__,owner__64480__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__64478__auto__,data_atom__64479__auto__,owner__64480__auto__], null));
});
} else {
return reagent.core.as_element(v__64478__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__64460__auto__))], 0))], 0));
}));

(athens.devcards.db.t_athens$devcards$db66714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta66715","meta66715",786189284,null)], null);
}));

(athens.devcards.db.t_athens$devcards$db66714.cljs$lang$type = true);

(athens.devcards.db.t_athens$devcards$db66714.cljs$lang$ctorStr = "athens.devcards.db/t_athens$devcards$db66714");

(athens.devcards.db.t_athens$devcards$db66714.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.db/t_athens$devcards$db66714");
}));

/**
 * Positional factory function for athens.devcards.db/t_athens$devcards$db66714.
 */
athens.devcards.db.__GT_t_athens$devcards$db66714 = (function athens$devcards$db$__GT_t_athens$devcards$db66714(meta66715){
return (new athens.devcards.db.t_athens$devcards$db66714(meta66715));
});

}

return (new athens.devcards.db.t_athens$devcards$db66714(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.db","athens.devcards.db",-1049714962),new cljs.core.Keyword(null,"athens-dsdb","athens-dsdb",-417293929)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"athens-dsdb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"The main Athens dsdb:",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),athens.db.dsdb,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
athens.devcards.db.new_conn = (function athens$devcards$db$new_conn(){
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
});
athens.devcards.db.posh_conn_BANG_ = (function athens$devcards$db$posh_conn_BANG_(conn){
return (posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1 ? posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$1(conn) : posh.reagent.posh_BANG_.call(null,conn));
});

//# sourceMappingURL=athens.devcards.db.js.map
