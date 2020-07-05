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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__71876,match){
var map__71877 = p__71876;
var map__71877__$1 = (((((!((map__71877 == null))))?(((((map__71877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71877):map__71877);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71877__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71877__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71877__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__71879(s__71880){
return (new cljs.core.LazySeq(null,(function (){
var s__71880__$1 = s__71880;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__71880__$1);
if(temp__5735__auto__){
var s__71880__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71880__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__71880__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__71882 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__71881 = (0);
while(true){
if((i__71881 < size__4581__auto__)){
var vec__71889 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__71881);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71889,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71889,(1),null);
cljs.core.chunk_append(b__71882,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__71913 = (i__71881 + (1));
i__71881 = G__71913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71882),reitit$frontend$controllers$get_identity_$_iter__71879(cljs.core.chunk_rest(s__71880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71882),null);
}
} else {
var vec__71892 = cljs.core.first(s__71880__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71892,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71892,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__71879(cljs.core.rest(s__71880__$2)));
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
var G__71895 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__71895) : f.call(null,G__71895));
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
var seq__71897_71927 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__71898_71928 = null;
var count__71899_71929 = (0);
var i__71900_71930 = (0);
while(true){
if((i__71900_71930 < count__71899_71929)){
var controller_71931 = chunk__71898_71928.cljs$core$IIndexed$_nth$arity$2(null,i__71900_71930);
reitit.frontend.controllers.apply_controller(controller_71931,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__71932 = seq__71897_71927;
var G__71933 = chunk__71898_71928;
var G__71934 = count__71899_71929;
var G__71935 = (i__71900_71930 + (1));
seq__71897_71927 = G__71932;
chunk__71898_71928 = G__71933;
count__71899_71929 = G__71934;
i__71900_71930 = G__71935;
continue;
} else {
var temp__5735__auto___71936 = cljs.core.seq(seq__71897_71927);
if(temp__5735__auto___71936){
var seq__71897_71937__$1 = temp__5735__auto___71936;
if(cljs.core.chunked_seq_QMARK_(seq__71897_71937__$1)){
var c__4609__auto___71938 = cljs.core.chunk_first(seq__71897_71937__$1);
var G__71939 = cljs.core.chunk_rest(seq__71897_71937__$1);
var G__71940 = c__4609__auto___71938;
var G__71941 = cljs.core.count(c__4609__auto___71938);
var G__71942 = (0);
seq__71897_71927 = G__71939;
chunk__71898_71928 = G__71940;
count__71899_71929 = G__71941;
i__71900_71930 = G__71942;
continue;
} else {
var controller_71943 = cljs.core.first(seq__71897_71937__$1);
reitit.frontend.controllers.apply_controller(controller_71943,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__71944 = cljs.core.next(seq__71897_71937__$1);
var G__71945 = null;
var G__71946 = (0);
var G__71947 = (0);
seq__71897_71927 = G__71944;
chunk__71898_71928 = G__71945;
count__71899_71929 = G__71946;
i__71900_71930 = G__71947;
continue;
}
} else {
}
}
break;
}

var seq__71906_71948 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__71907_71949 = null;
var count__71908_71950 = (0);
var i__71909_71951 = (0);
while(true){
if((i__71909_71951 < count__71908_71950)){
var controller_71953 = chunk__71907_71949.cljs$core$IIndexed$_nth$arity$2(null,i__71909_71951);
reitit.frontend.controllers.apply_controller(controller_71953,new cljs.core.Keyword(null,"start","start",-355208981));


var G__71954 = seq__71906_71948;
var G__71955 = chunk__71907_71949;
var G__71956 = count__71908_71950;
var G__71957 = (i__71909_71951 + (1));
seq__71906_71948 = G__71954;
chunk__71907_71949 = G__71955;
count__71908_71950 = G__71956;
i__71909_71951 = G__71957;
continue;
} else {
var temp__5735__auto___71958 = cljs.core.seq(seq__71906_71948);
if(temp__5735__auto___71958){
var seq__71906_71959__$1 = temp__5735__auto___71958;
if(cljs.core.chunked_seq_QMARK_(seq__71906_71959__$1)){
var c__4609__auto___71960 = cljs.core.chunk_first(seq__71906_71959__$1);
var G__71961 = cljs.core.chunk_rest(seq__71906_71959__$1);
var G__71962 = c__4609__auto___71960;
var G__71963 = cljs.core.count(c__4609__auto___71960);
var G__71964 = (0);
seq__71906_71948 = G__71961;
chunk__71907_71949 = G__71962;
count__71908_71950 = G__71963;
i__71909_71951 = G__71964;
continue;
} else {
var controller_71965 = cljs.core.first(seq__71906_71959__$1);
reitit.frontend.controllers.apply_controller(controller_71965,new cljs.core.Keyword(null,"start","start",-355208981));


var G__71966 = cljs.core.next(seq__71906_71959__$1);
var G__71967 = null;
var G__71968 = (0);
var G__71969 = (0);
seq__71906_71948 = G__71966;
chunk__71907_71949 = G__71967;
count__71908_71950 = G__71968;
i__71909_71951 = G__71969;
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
