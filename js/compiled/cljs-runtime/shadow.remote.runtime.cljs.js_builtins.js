goog.provide('shadow.remote.runtime.cljs.js_builtins');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.core.protocols');
goog.object.set(clojure.core.protocols.Datafiable,"object",true);

var G__60210_60222 = clojure.core.protocols.datafy;
var G__60211_60223 = "object";
var G__60212_60224 = (function (o){
if((!((o.__proto__ === Object.prototype)))){
return o;
} else {
return cljs.core.with_meta(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,key){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,key,goog.object.get(o,key));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),goog.object.getKeys(o))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),(function (coll,k,v){
return goog.object.get(o,k);
})], null));
}
});
goog.object.set(G__60210_60222,G__60211_60223,G__60212_60224);

goog.object.set(clojure.core.protocols.Datafiable,"array",true);

var G__60217_60225 = clojure.core.protocols.datafy;
var G__60218_60226 = "array";
var G__60219_60227 = (function (o){
return cljs.core.vec(o);
});
goog.object.set(G__60217_60225,G__60218_60226,G__60219_60227);

//# sourceMappingURL=shadow.remote.runtime.cljs.js_builtins.js.map
