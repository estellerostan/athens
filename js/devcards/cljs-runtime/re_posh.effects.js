goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__60085_60089 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__60086_60090 = (function (datoms){
var G__60087 = cljs.core.deref(re_posh.db.store);
var G__60088 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__60087,G__60088) : posh.reagent.transact_BANG_.call(null,G__60087,G__60088));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__60085_60089,G__60086_60090) : re_frame.core.reg_fx.call(null,G__60085_60089,G__60086_60090));

//# sourceMappingURL=re_posh.effects.js.map
