goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__50206,match){
var map__50207 = p__50206;
var map__50207__$1 = (((((!((map__50207 == null))))?(((((map__50207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50207):map__50207);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50207__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__50209(s__50210){
return (new cljs.core.LazySeq(null,(function (){
var s__50210__$1 = s__50210;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50210__$1);
if(temp__5735__auto__){
var s__50210__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50210__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50210__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50212 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50211 = (0);
while(true){
if((i__50211 < size__4581__auto__)){
var vec__50213 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50211);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50213,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50213,(1),null);
cljs.core.chunk_append(b__50212,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__50231 = (i__50211 + (1));
i__50211 = G__50231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50212),reitit$frontend$controllers$get_identity_$_iter__50209(cljs.core.chunk_rest(s__50210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50212),null);
}
} else {
var vec__50216 = cljs.core.first(s__50210__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50216,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50216,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__50209(cljs.core.rest(s__50210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__50219 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50219) : f.call(null,G__50219));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__50220_50232 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__50221_50233 = null;
var count__50222_50234 = (0);
var i__50223_50235 = (0);
while(true){
if((i__50223_50235 < count__50222_50234)){
var controller_50236 = chunk__50221_50233.cljs$core$IIndexed$_nth$arity$2(null,i__50223_50235);
reitit.frontend.controllers.apply_controller(controller_50236,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50237 = seq__50220_50232;
var G__50238 = chunk__50221_50233;
var G__50239 = count__50222_50234;
var G__50240 = (i__50223_50235 + (1));
seq__50220_50232 = G__50237;
chunk__50221_50233 = G__50238;
count__50222_50234 = G__50239;
i__50223_50235 = G__50240;
continue;
} else {
var temp__5735__auto___50241 = cljs.core.seq(seq__50220_50232);
if(temp__5735__auto___50241){
var seq__50220_50242__$1 = temp__5735__auto___50241;
if(cljs.core.chunked_seq_QMARK_(seq__50220_50242__$1)){
var c__4609__auto___50243 = cljs.core.chunk_first(seq__50220_50242__$1);
var G__50244 = cljs.core.chunk_rest(seq__50220_50242__$1);
var G__50245 = c__4609__auto___50243;
var G__50246 = cljs.core.count(c__4609__auto___50243);
var G__50247 = (0);
seq__50220_50232 = G__50244;
chunk__50221_50233 = G__50245;
count__50222_50234 = G__50246;
i__50223_50235 = G__50247;
continue;
} else {
var controller_50248 = cljs.core.first(seq__50220_50242__$1);
reitit.frontend.controllers.apply_controller(controller_50248,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__50249 = cljs.core.next(seq__50220_50242__$1);
var G__50250 = null;
var G__50251 = (0);
var G__50252 = (0);
seq__50220_50232 = G__50249;
chunk__50221_50233 = G__50250;
count__50222_50234 = G__50251;
i__50223_50235 = G__50252;
continue;
}
} else {
}
}
break;
}

var seq__50225_50253 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__50226_50254 = null;
var count__50227_50255 = (0);
var i__50228_50256 = (0);
while(true){
if((i__50228_50256 < count__50227_50255)){
var controller_50257 = chunk__50226_50254.cljs$core$IIndexed$_nth$arity$2(null,i__50228_50256);
reitit.frontend.controllers.apply_controller(controller_50257,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50258 = seq__50225_50253;
var G__50259 = chunk__50226_50254;
var G__50260 = count__50227_50255;
var G__50261 = (i__50228_50256 + (1));
seq__50225_50253 = G__50258;
chunk__50226_50254 = G__50259;
count__50227_50255 = G__50260;
i__50228_50256 = G__50261;
continue;
} else {
var temp__5735__auto___50262 = cljs.core.seq(seq__50225_50253);
if(temp__5735__auto___50262){
var seq__50225_50263__$1 = temp__5735__auto___50262;
if(cljs.core.chunked_seq_QMARK_(seq__50225_50263__$1)){
var c__4609__auto___50264 = cljs.core.chunk_first(seq__50225_50263__$1);
var G__50265 = cljs.core.chunk_rest(seq__50225_50263__$1);
var G__50266 = c__4609__auto___50264;
var G__50267 = cljs.core.count(c__4609__auto___50264);
var G__50268 = (0);
seq__50225_50253 = G__50265;
chunk__50226_50254 = G__50266;
count__50227_50255 = G__50267;
i__50228_50256 = G__50268;
continue;
} else {
var controller_50270 = cljs.core.first(seq__50225_50263__$1);
reitit.frontend.controllers.apply_controller(controller_50270,new cljs.core.Keyword(null,"start","start",-355208981));


var G__50271 = cljs.core.next(seq__50225_50263__$1);
var G__50272 = null;
var G__50273 = (0);
var G__50274 = (0);
seq__50225_50253 = G__50271;
chunk__50226_50254 = G__50272;
count__50227_50255 = G__50273;
i__50228_50256 = G__50274;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
