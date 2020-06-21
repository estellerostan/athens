goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__67529_67533 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__67530_67534 = (function (datoms){
var G__67531 = cljs.core.deref(re_posh.db.store);
var G__67532 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__67531,G__67532) : posh.reagent.transact_BANG_.call(null,G__67531,G__67532));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__67529_67533,G__67530_67534) : re_frame.core.reg_fx.call(null,G__67529_67533,G__67530_67534));

//# sourceMappingURL=re_posh.effects.js.map
