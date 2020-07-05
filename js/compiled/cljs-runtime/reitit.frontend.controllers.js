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
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__73581,match){
var map__73582 = p__73581;
var map__73582__$1 = (((((!((map__73582 == null))))?(((((map__73582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73582):map__73582);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73582__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73582__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73582__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__73584(s__73585){
return (new cljs.core.LazySeq(null,(function (){
var s__73585__$1 = s__73585;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73585__$1);
if(temp__5735__auto__){
var s__73585__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73585__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__73585__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__73587 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__73586 = (0);
while(true){
if((i__73586 < size__4581__auto__)){
var vec__73588 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__73586);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73588,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73588,(1),null);
cljs.core.chunk_append(b__73587,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__73607 = (i__73586 + (1));
i__73586 = G__73607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73587),reitit$frontend$controllers$get_identity_$_iter__73584(cljs.core.chunk_rest(s__73585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73587),null);
}
} else {
var vec__73591 = cljs.core.first(s__73585__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73591,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73591,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__73584(cljs.core.rest(s__73585__$2)));
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
var G__73594 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__73594) : f.call(null,G__73594));
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
var seq__73597_73613 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__73598_73614 = null;
var count__73599_73615 = (0);
var i__73600_73616 = (0);
while(true){
if((i__73600_73616 < count__73599_73615)){
var controller_73617 = chunk__73598_73614.cljs$core$IIndexed$_nth$arity$2(null,i__73600_73616);
reitit.frontend.controllers.apply_controller(controller_73617,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__73618 = seq__73597_73613;
var G__73619 = chunk__73598_73614;
var G__73620 = count__73599_73615;
var G__73621 = (i__73600_73616 + (1));
seq__73597_73613 = G__73618;
chunk__73598_73614 = G__73619;
count__73599_73615 = G__73620;
i__73600_73616 = G__73621;
continue;
} else {
var temp__5735__auto___73622 = cljs.core.seq(seq__73597_73613);
if(temp__5735__auto___73622){
var seq__73597_73623__$1 = temp__5735__auto___73622;
if(cljs.core.chunked_seq_QMARK_(seq__73597_73623__$1)){
var c__4609__auto___73624 = cljs.core.chunk_first(seq__73597_73623__$1);
var G__73625 = cljs.core.chunk_rest(seq__73597_73623__$1);
var G__73626 = c__4609__auto___73624;
var G__73627 = cljs.core.count(c__4609__auto___73624);
var G__73628 = (0);
seq__73597_73613 = G__73625;
chunk__73598_73614 = G__73626;
count__73599_73615 = G__73627;
i__73600_73616 = G__73628;
continue;
} else {
var controller_73629 = cljs.core.first(seq__73597_73623__$1);
reitit.frontend.controllers.apply_controller(controller_73629,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__73630 = cljs.core.next(seq__73597_73623__$1);
var G__73631 = null;
var G__73632 = (0);
var G__73633 = (0);
seq__73597_73613 = G__73630;
chunk__73598_73614 = G__73631;
count__73599_73615 = G__73632;
i__73600_73616 = G__73633;
continue;
}
} else {
}
}
break;
}

var seq__73602_73634 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__73603_73635 = null;
var count__73604_73636 = (0);
var i__73605_73637 = (0);
while(true){
if((i__73605_73637 < count__73604_73636)){
var controller_73638 = chunk__73603_73635.cljs$core$IIndexed$_nth$arity$2(null,i__73605_73637);
reitit.frontend.controllers.apply_controller(controller_73638,new cljs.core.Keyword(null,"start","start",-355208981));


var G__73639 = seq__73602_73634;
var G__73640 = chunk__73603_73635;
var G__73641 = count__73604_73636;
var G__73642 = (i__73605_73637 + (1));
seq__73602_73634 = G__73639;
chunk__73603_73635 = G__73640;
count__73604_73636 = G__73641;
i__73605_73637 = G__73642;
continue;
} else {
var temp__5735__auto___73643 = cljs.core.seq(seq__73602_73634);
if(temp__5735__auto___73643){
var seq__73602_73644__$1 = temp__5735__auto___73643;
if(cljs.core.chunked_seq_QMARK_(seq__73602_73644__$1)){
var c__4609__auto___73645 = cljs.core.chunk_first(seq__73602_73644__$1);
var G__73646 = cljs.core.chunk_rest(seq__73602_73644__$1);
var G__73647 = c__4609__auto___73645;
var G__73648 = cljs.core.count(c__4609__auto___73645);
var G__73649 = (0);
seq__73602_73634 = G__73646;
chunk__73603_73635 = G__73647;
count__73604_73636 = G__73648;
i__73605_73637 = G__73649;
continue;
} else {
var controller_73650 = cljs.core.first(seq__73602_73644__$1);
reitit.frontend.controllers.apply_controller(controller_73650,new cljs.core.Keyword(null,"start","start",-355208981));


var G__73651 = cljs.core.next(seq__73602_73644__$1);
var G__73652 = null;
var G__73653 = (0);
var G__73654 = (0);
seq__73602_73634 = G__73651;
chunk__73603_73635 = G__73652;
count__73604_73636 = G__73653;
i__73605_73637 = G__73654;
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
