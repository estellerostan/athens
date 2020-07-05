goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__57476__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__57476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57477__i = 0, G__57477__a = new Array(arguments.length -  0);
while (G__57477__i < G__57477__a.length) {G__57477__a[G__57477__i] = arguments[G__57477__i + 0]; ++G__57477__i;}
  args = new cljs.core.IndexedSeq(G__57477__a,0,null);
} 
return G__57476__delegate.call(this,args);};
G__57476.cljs$lang$maxFixedArity = 0;
G__57476.cljs$lang$applyTo = (function (arglist__57478){
var args = cljs.core.seq(arglist__57478);
return G__57476__delegate(args);
});
G__57476.cljs$core$IFn$_invoke$arity$variadic = G__57476__delegate;
return G__57476;
})()
);

(o.error = (function() { 
var G__57479__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__57479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57480__i = 0, G__57480__a = new Array(arguments.length -  0);
while (G__57480__i < G__57480__a.length) {G__57480__a[G__57480__i] = arguments[G__57480__i + 0]; ++G__57480__i;}
  args = new cljs.core.IndexedSeq(G__57480__a,0,null);
} 
return G__57479__delegate.call(this,args);};
G__57479.cljs$lang$maxFixedArity = 0;
G__57479.cljs$lang$applyTo = (function (arglist__57481){
var args = cljs.core.seq(arglist__57481);
return G__57479__delegate(args);
});
G__57479.cljs$core$IFn$_invoke$arity$variadic = G__57479__delegate;
return G__57479;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
