goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__46416 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46416) : stop_at_QMARK_.call(null,G__46416));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__46417 = stop_at_QMARK_;
var G__46418 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__46417,G__46418) : posh.lib.q_analyze.take_until.call(null,G__46417,G__46418));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__46420 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46420) : rest_at_QMARK_.call(null,G__46420));
}
})())){
return ls;
} else {
var G__46775 = rest_at_QMARK_;
var G__46776 = cljs.core.rest(ls);
rest_at_QMARK_ = G__46775;
ls = G__46776;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__46421 = split_at_QMARK_;
var G__46422 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__46421,G__46422) : posh.lib.q_analyze.split_list_at.call(null,G__46421,G__46422));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__46423 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__46423) : posh.lib.q_analyze.get_all_vars.call(null,G__46423));
})(),(function (){var G__46424 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__46424) : posh.lib.q_analyze.get_all_vars.call(null,G__46424));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__46425 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__46425) : posh.lib.q_analyze.get_all_vars.call(null,G__46425));
})(),cljs.core.first(query));
} else {
var G__46426 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__46426) : posh.lib.q_analyze.get_all_vars.call(null,G__46426));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4174__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4174__auto__;
}
})())){
var G__46427 = cljs.core.rest(eav);
var G__46428 = (n - (1));
var G__46429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__46430 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__46427,G__46428,G__46429,G__46430) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__46427,G__46428,G__46429,G__46430));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__46431 = cljs.core.rest(eav);
var G__46432 = (n - (1));
var G__46433 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__46434 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__46431,G__46432,G__46433,G__46434) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__46431,G__46432,G__46433,G__46434));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__46435 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__46435) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__46435));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__46436 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__46436) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__46436));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__46437 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46437) : posh.lib.q_analyze.get_eavs.call(null,G__46437));
})(),(function (){var G__46438 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46438) : posh.lib.q_analyze.get_eavs.call(null,G__46438));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__46439 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46439) : posh.lib.q_analyze.get_eavs.call(null,G__46439));
})(),(function (){var G__46440 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46440) : posh.lib.q_analyze.get_eavs.call(null,G__46440));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__46441 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46441) : posh.lib.q_analyze.get_eavs.call(null,G__46441));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_46442 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_46442)) && ((cljs.core.count(ocr_46442) === 2)))){
try{var ocr_46442_0__46445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46442,(0));
if(((cljs.core.vector_QMARK_(ocr_46442_0__46445)) && ((cljs.core.count(ocr_46442_0__46445) === 5)))){
try{var ocr_46442_0__46445_0__46447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46442_0__46445,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46442_0__46445_0__46447,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46442_0__46445,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46442_0__46445,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46442_0__46445,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46442,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__46459 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46459) : posh.lib.q_analyze.get_eavs.call(null,G__46459));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e46458){if((e46458 instanceof Error)){
var e__45437__auto__ = e46458;
if((e__45437__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto__;
}
} else {
throw e46458;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46457){if((e46457 instanceof Error)){
var e__45437__auto__ = e46457;
if((e__45437__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto__;
}
} else {
throw e46457;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46453){if((e46453 instanceof Error)){
var e__45437__auto__ = e46453;
if((e__45437__auto__ === cljs.core.match.backtrack)){
var G__46456 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46456) : posh.lib.q_analyze.get_eavs.call(null,G__46456));
} else {
throw e__45437__auto__;
}
} else {
throw e46453;

}
}} else {
var G__46460 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__46460) : posh.lib.q_analyze.get_eavs.call(null,G__46460));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__46461){
var vec__46462 = p__46461;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46462,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46462,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46465_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__46465_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__46465_SHARP_);
} else {
return p1__46465_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__46466 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__46466) : posh.lib.q_analyze.count_qvars.call(null,G__46466));
})(),(function (){var G__46467 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__46467) : posh.lib.q_analyze.count_qvars.call(null,G__46467));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__46468 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__46468) : posh.lib.q_analyze.count_qvars.call(null,G__46468));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__46469(s__46470){
return (new cljs.core.LazySeq(null,(function (){
var s__46470__$1 = s__46470;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46470__$1);
if(temp__5735__auto__){
var s__46470__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46470__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__46470__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__46472 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__46471 = (0);
while(true){
if((i__46471 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__46471);
cljs.core.chunk_append(b__46472,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__46801 = (i__46471 + (1));
i__46471 = G__46801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46472),posh$lib$q_analyze$fill_qvar_set_$_iter__46469(cljs.core.chunk_rest(s__46470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46472),null);
}
} else {
var r = cljs.core.first(s__46470__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__46469(cljs.core.rest(s__46470__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__46473 = cljs.core.first(seq1);
var G__46474 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46473,G__46474) : f.call(null,G__46473,G__46474));
})(),(function (){var G__46475 = f;
var G__46476 = cljs.core.rest(seq1);
var G__46477 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__46475,G__46476,G__46477) : posh.lib.q_analyze.seq_merge_with.call(null,G__46475,G__46476,G__46477));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__46480){
var vec__46481 = p__46480;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46481,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46481,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46481,(2),null);
var eav = vec__46481;
var vec__46484 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46484,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46484,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46484,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__46487(s__46488){
return (new cljs.core.LazySeq(null,(function (){
var s__46488__$1 = s__46488;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46488__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__46488__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__46487_$_iter__46489(s__46490){
return (new cljs.core.LazySeq(null,((function (s__46488__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav){
return (function (){
var s__46490__$1 = s__46490;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46490__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__46490__$1,s__46488__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__46487_$_iter__46489_$_iter__46491(s__46492){
return (new cljs.core.LazySeq(null,((function (s__46490__$1,s__46488__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav){
return (function (){
var s__46492__$1 = s__46492;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__46492__$1);
if(temp__5735__auto____$2){
var s__46492__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__46492__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__46492__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__46494 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__46493 = (0);
while(true){
if((i__46493 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__46493);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__46493,s__46492__$1,s__46490__$1,s__46488__$1,vv,c__4580__auto__,size__4581__auto__,b__46494,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav){
return (function (p1__46478_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__46478_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__46493,s__46492__$1,s__46490__$1,s__46488__$1,vv,c__4580__auto__,size__4581__auto__,b__46494,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__46493,s__46492__$1,s__46490__$1,s__46488__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__46494,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav){
return (function (p__46495){
var vec__46496 = p__46495;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46496,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46496,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__46493,s__46492__$1,s__46490__$1,s__46488__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__46494,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__46493,s__46492__$1,s__46490__$1,s__46488__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__46494,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav){
return (function (p1__46479_SHARP_){
if(cljs.core.truth_(p1__46479_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__46493,s__46492__$1,s__46490__$1,s__46488__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__46494,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__46494,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__46811 = (i__46493 + (1));
i__46493 = G__46811;
continue;
} else {
var G__46812 = (i__46493 + (1));
i__46493 = G__46812;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46494),posh$lib$q_analyze$pattern_from_eav__old_$_iter__46487_$_iter__46489_$_iter__46491(cljs.core.chunk_rest(s__46492__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46494),null);
}
} else {
var vv = cljs.core.first(s__46492__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__46492__$1,s__46490__$1,s__46488__$1,vv,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav){
return (function (p1__46478_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__46478_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__46492__$1,s__46490__$1,s__46488__$1,vv,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__46492__$1,s__46490__$1,s__46488__$1,wildcard_count,vv,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav){
return (function (p__46499){
var vec__46500 = p__46499;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46500,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46500,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__46492__$1,s__46490__$1,s__46488__$1,wildcard_count,vv,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__46492__$1,s__46490__$1,s__46488__$1,wildcard_count,exposed_qvars,vv,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav){
return (function (p1__46479_SHARP_){
if(cljs.core.truth_(p1__46479_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__46492__$1,s__46490__$1,s__46488__$1,wildcard_count,exposed_qvars,vv,s__46492__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__46487_$_iter__46489_$_iter__46491(cljs.core.rest(s__46492__$2)));
} else {
var G__46813 = cljs.core.rest(s__46492__$2);
s__46492__$1 = G__46813;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__46490__$1,s__46488__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav))
,null,null));
});})(s__46490__$1,s__46488__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__46487_$_iter__46489(cljs.core.rest(s__46490__$1)));
} else {
var G__46814 = cljs.core.rest(s__46490__$1);
s__46490__$1 = G__46814;
continue;
}
} else {
return null;
}
break;
}
});})(s__46488__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav))
,null,null));
});})(s__46488__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__46484,qe,qa,qv,vec__46481,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__46487(cljs.core.rest(s__46488__$1)));
} else {
var G__46815 = cljs.core.rest(s__46488__$1);
s__46488__$1 = G__46815;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_46503 = cljs.core.vec(eav);
var ocr_46504 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_46503)) && ((cljs.core.count(ocr_46503) === 3)))){
try{var ocr_46503_0__46532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_0__46532,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46503_1__46533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_1__46533,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46503_2__46534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_2__46534,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46608){if((e46608 instanceof Error)){
var e__45437__auto__ = e46608;
if((e__45437__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_46504)) && ((cljs.core.count(ocr_46504) === 3)))){
try{var ocr_46504_2__46537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46537 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46610){if((e46610 instanceof Error)){
var e__45437__auto____$1 = e46610;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46537 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46611){if((e46611 instanceof Error)){
var e__45437__auto____$2 = e46611;
if((e__45437__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$2;
}
} else {
throw e46611;

}
}} else {
throw e__45437__auto____$1;
}
} else {
throw e46610;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46609){if((e46609 instanceof Error)){
var e__45437__auto____$1 = e46609;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46609;

}
}} else {
throw e__45437__auto__;
}
} else {
throw e46608;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46603){if((e46603 instanceof Error)){
var e__45437__auto__ = e46603;
if((e__45437__auto__ === cljs.core.match.backtrack)){
try{var ocr_46503_2__46534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_2__46534,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_46504)) && ((cljs.core.count(ocr_46504) === 3)))){
try{var ocr_46504_1__46539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46539 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46606){if((e46606 instanceof Error)){
var e__45437__auto____$1 = e46606;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_46504_1__46539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46539 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46607){if((e46607 instanceof Error)){
var e__45437__auto____$2 = e46607;
if((e__45437__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$2;
}
} else {
throw e46607;

}
}} else {
throw e__45437__auto____$1;
}
} else {
throw e46606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46605){if((e46605 instanceof Error)){
var e__45437__auto____$1 = e46605;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46605;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46604){if((e46604 instanceof Error)){
var e__45437__auto____$1 = e46604;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46604;

}
}} else {
throw e__45437__auto__;
}
} else {
throw e46603;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46545){if((e46545 instanceof Error)){
var e__45437__auto__ = e46545;
if((e__45437__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_46504)) && ((cljs.core.count(ocr_46504) === 3)))){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === false)){
try{var ocr_46503_1__46533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_1__46533,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46503_2__46534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_2__46534,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46602){if((e46602 instanceof Error)){
var e__45437__auto____$1 = e46602;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46602;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46601){if((e46601 instanceof Error)){
var e__45437__auto____$1 = e46601;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46601;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46547){if((e46547 instanceof Error)){
var e__45437__auto____$1 = e46547;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === true)){
try{var ocr_46503_2__46534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_2__46534,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46503_1__46533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_1__46533,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46598){if((e46598 instanceof Error)){
var e__45437__auto____$2 = e46598;
if((e__45437__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46599){if((e46599 instanceof Error)){
var e__45437__auto____$3 = e46599;
if((e__45437__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46600){if((e46600 instanceof Error)){
var e__45437__auto____$4 = e46600;
if((e__45437__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$4;
}
} else {
throw e46600;

}
}} else {
throw e__45437__auto____$3;
}
} else {
throw e46599;

}
}} else {
throw e__45437__auto____$2;
}
} else {
throw e46598;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46597){if((e46597 instanceof Error)){
var e__45437__auto____$2 = e46597;
if((e__45437__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$2;
}
} else {
throw e46597;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46548){if((e46548 instanceof Error)){
var e__45437__auto____$2 = e46548;
if((e__45437__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === false)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === true)){
try{var ocr_46503_2__46534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_2__46534,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46596){if((e46596 instanceof Error)){
var e__45437__auto____$3 = e46596;
if((e__45437__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$3;
}
} else {
throw e46596;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46593){if((e46593 instanceof Error)){
var e__45437__auto____$3 = e46593;
if((e__45437__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === false)){
try{var ocr_46503_2__46534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_2__46534,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46595){if((e46595 instanceof Error)){
var e__45437__auto____$4 = e46595;
if((e__45437__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$4;
}
} else {
throw e46595;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46594){if((e46594 instanceof Error)){
var e__45437__auto____$4 = e46594;
if((e__45437__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$4;
}
} else {
throw e46594;

}
}} else {
throw e__45437__auto____$3;
}
} else {
throw e46593;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46549){if((e46549 instanceof Error)){
var e__45437__auto____$3 = e46549;
if((e__45437__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === true)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === true)){
try{var ocr_46503_1__46533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_1__46533,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46592){if((e46592 instanceof Error)){
var e__45437__auto____$4 = e46592;
if((e__45437__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$4;
}
} else {
throw e46592;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46591){if((e46591 instanceof Error)){
var e__45437__auto____$4 = e46591;
if((e__45437__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$4;
}
} else {
throw e46591;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46550){if((e46550 instanceof Error)){
var e__45437__auto____$4 = e46550;
if((e__45437__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === false)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === true)){
try{var ocr_46503_1__46533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_1__46533,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46590){if((e46590 instanceof Error)){
var e__45437__auto____$5 = e46590;
if((e__45437__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$5;
}
} else {
throw e46590;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46589){if((e46589 instanceof Error)){
var e__45437__auto____$5 = e46589;
if((e__45437__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$5;
}
} else {
throw e46589;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46551){if((e46551 instanceof Error)){
var e__45437__auto____$5 = e46551;
if((e__45437__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === true)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === false)){
try{var ocr_46503_1__46533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_1__46533,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46588){if((e46588 instanceof Error)){
var e__45437__auto____$6 = e46588;
if((e__45437__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$6;
}
} else {
throw e46588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46587){if((e46587 instanceof Error)){
var e__45437__auto____$6 = e46587;
if((e__45437__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$6;
}
} else {
throw e46587;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46552){if((e46552 instanceof Error)){
var e__45437__auto____$6 = e46552;
if((e__45437__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === false)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === false)){
try{var ocr_46503_1__46533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_1__46533,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46586){if((e46586 instanceof Error)){
var e__45437__auto____$7 = e46586;
if((e__45437__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$7;
}
} else {
throw e46586;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46585){if((e46585 instanceof Error)){
var e__45437__auto____$7 = e46585;
if((e__45437__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$7;
}
} else {
throw e46585;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46553){if((e46553 instanceof Error)){
var e__45437__auto____$7 = e46553;
if((e__45437__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === true)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === true)){
try{var ocr_46503_0__46532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_0__46532,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46584){if((e46584 instanceof Error)){
var e__45437__auto____$8 = e46584;
if((e__45437__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$8;
}
} else {
throw e46584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46583){if((e46583 instanceof Error)){
var e__45437__auto____$8 = e46583;
if((e__45437__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$8;
}
} else {
throw e46583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46554){if((e46554 instanceof Error)){
var e__45437__auto____$8 = e46554;
if((e__45437__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === false)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === true)){
try{var ocr_46503_0__46532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_0__46532,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46582){if((e46582 instanceof Error)){
var e__45437__auto____$9 = e46582;
if((e__45437__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$9;
}
} else {
throw e46582;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46581){if((e46581 instanceof Error)){
var e__45437__auto____$9 = e46581;
if((e__45437__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$9;
}
} else {
throw e46581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46555){if((e46555 instanceof Error)){
var e__45437__auto____$9 = e46555;
if((e__45437__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === true)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === false)){
try{var ocr_46503_0__46532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_0__46532,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46580){if((e46580 instanceof Error)){
var e__45437__auto____$10 = e46580;
if((e__45437__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$10;
}
} else {
throw e46580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46579){if((e46579 instanceof Error)){
var e__45437__auto____$10 = e46579;
if((e__45437__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$10;
}
} else {
throw e46579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46556){if((e46556 instanceof Error)){
var e__45437__auto____$10 = e46556;
if((e__45437__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === false)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === false)){
try{var ocr_46503_0__46532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46503_0__46532,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46578){if((e46578 instanceof Error)){
var e__45437__auto____$11 = e46578;
if((e__45437__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$11;
}
} else {
throw e46578;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46577){if((e46577 instanceof Error)){
var e__45437__auto____$11 = e46577;
if((e__45437__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$11;
}
} else {
throw e46577;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46557){if((e46557 instanceof Error)){
var e__45437__auto____$11 = e46557;
if((e__45437__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === true)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === true)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46576){if((e46576 instanceof Error)){
var e__45437__auto____$12 = e46576;
if((e__45437__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$12;
}
} else {
throw e46576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46571){if((e46571 instanceof Error)){
var e__45437__auto____$12 = e46571;
if((e__45437__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === false)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46575){if((e46575 instanceof Error)){
var e__45437__auto____$13 = e46575;
if((e__45437__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$13;
}
} else {
throw e46575;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46572){if((e46572 instanceof Error)){
var e__45437__auto____$13 = e46572;
if((e__45437__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === true)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46574){if((e46574 instanceof Error)){
var e__45437__auto____$14 = e46574;
if((e__45437__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$14;
}
} else {
throw e46574;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46573){if((e46573 instanceof Error)){
var e__45437__auto____$14 = e46573;
if((e__45437__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$14;
}
} else {
throw e46573;

}
}} else {
throw e__45437__auto____$13;
}
} else {
throw e46572;

}
}} else {
throw e__45437__auto____$12;
}
} else {
throw e46571;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46558){if((e46558 instanceof Error)){
var e__45437__auto____$12 = e46558;
if((e__45437__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === false)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === true)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46570){if((e46570 instanceof Error)){
var e__45437__auto____$13 = e46570;
if((e__45437__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$13;
}
} else {
throw e46570;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46569){if((e46569 instanceof Error)){
var e__45437__auto____$13 = e46569;
if((e__45437__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$13;
}
} else {
throw e46569;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46559){if((e46559 instanceof Error)){
var e__45437__auto____$13 = e46559;
if((e__45437__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === true)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === false)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46568){if((e46568 instanceof Error)){
var e__45437__auto____$14 = e46568;
if((e__45437__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$14;
}
} else {
throw e46568;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46567){if((e46567 instanceof Error)){
var e__45437__auto____$14 = e46567;
if((e__45437__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$14;
}
} else {
throw e46567;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46560){if((e46560 instanceof Error)){
var e__45437__auto____$14 = e46560;
if((e__45437__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_46504_2__46543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(2));
if((ocr_46504_2__46543 === false)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === true)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46566){if((e46566 instanceof Error)){
var e__45437__auto____$15 = e46566;
if((e__45437__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$15;
}
} else {
throw e46566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46562){if((e46562 instanceof Error)){
var e__45437__auto____$15 = e46562;
if((e__45437__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_46504_0__46541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(0));
if((ocr_46504_0__46541 === false)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46564){if((e46564 instanceof Error)){
var e__45437__auto____$16 = e46564;
if((e__45437__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_46504_1__46542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46504,(1));
if((ocr_46504_1__46542 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46503,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46565){if((e46565 instanceof Error)){
var e__45437__auto____$17 = e46565;
if((e__45437__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$17;
}
} else {
throw e46565;

}
}} else {
throw e__45437__auto____$16;
}
} else {
throw e46564;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46563){if((e46563 instanceof Error)){
var e__45437__auto____$16 = e46563;
if((e__45437__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$16;
}
} else {
throw e46563;

}
}} else {
throw e__45437__auto____$15;
}
} else {
throw e46562;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46561){if((e46561 instanceof Error)){
var e__45437__auto____$15 = e46561;
if((e__45437__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$15;
}
} else {
throw e46561;

}
}} else {
throw e__45437__auto____$14;
}
} else {
throw e46560;

}
}} else {
throw e__45437__auto____$13;
}
} else {
throw e46559;

}
}} else {
throw e__45437__auto____$12;
}
} else {
throw e46558;

}
}} else {
throw e__45437__auto____$11;
}
} else {
throw e46557;

}
}} else {
throw e__45437__auto____$10;
}
} else {
throw e46556;

}
}} else {
throw e__45437__auto____$9;
}
} else {
throw e46555;

}
}} else {
throw e__45437__auto____$8;
}
} else {
throw e46554;

}
}} else {
throw e__45437__auto____$7;
}
} else {
throw e46553;

}
}} else {
throw e__45437__auto____$6;
}
} else {
throw e46552;

}
}} else {
throw e__45437__auto____$5;
}
} else {
throw e46551;

}
}} else {
throw e__45437__auto____$4;
}
} else {
throw e46550;

}
}} else {
throw e__45437__auto____$3;
}
} else {
throw e46549;

}
}} else {
throw e__45437__auto____$2;
}
} else {
throw e46548;

}
}} else {
throw e__45437__auto____$1;
}
} else {
throw e46547;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46546){if((e46546 instanceof Error)){
var e__45437__auto____$1 = e46546;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46546;

}
}} else {
throw e__45437__auto__;
}
} else {
throw e46545;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46544){if((e46544 instanceof Error)){
var e__45437__auto__ = e46544;
if((e__45437__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__45437__auto__;
}
} else {
throw e46544;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_46612 = cljs.core.vec(eav);
var ocr_46613 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_46612)) && ((cljs.core.count(ocr_46612) === 3)))){
try{var ocr_46612_0__46638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_0__46638,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46612_1__46639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_1__46639,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46612_2__46640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_2__46640,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e46702){if((e46702 instanceof Error)){
var e__45437__auto__ = e46702;
if((e__45437__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_46613)) && ((cljs.core.count(ocr_46613) === 3)))){
try{var ocr_46613_2__46643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(2));
if((ocr_46613_2__46643 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46704){if((e46704 instanceof Error)){
var e__45437__auto____$1 = e46704;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_46613_2__46643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(2));
if((ocr_46613_2__46643 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46705){if((e46705 instanceof Error)){
var e__45437__auto____$2 = e46705;
if((e__45437__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$2;
}
} else {
throw e46705;

}
}} else {
throw e__45437__auto____$1;
}
} else {
throw e46704;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46703){if((e46703 instanceof Error)){
var e__45437__auto____$1 = e46703;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46703;

}
}} else {
throw e__45437__auto__;
}
} else {
throw e46702;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46697){if((e46697 instanceof Error)){
var e__45437__auto__ = e46697;
if((e__45437__auto__ === cljs.core.match.backtrack)){
try{var ocr_46612_2__46640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_2__46640,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_46613)) && ((cljs.core.count(ocr_46613) === 3)))){
try{var ocr_46613_1__46645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46645 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46700){if((e46700 instanceof Error)){
var e__45437__auto____$1 = e46700;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_46613_1__46645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46645 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46701){if((e46701 instanceof Error)){
var e__45437__auto____$2 = e46701;
if((e__45437__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$2;
}
} else {
throw e46701;

}
}} else {
throw e__45437__auto____$1;
}
} else {
throw e46700;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46699){if((e46699 instanceof Error)){
var e__45437__auto____$1 = e46699;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46699;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46698){if((e46698 instanceof Error)){
var e__45437__auto____$1 = e46698;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46698;

}
}} else {
throw e__45437__auto__;
}
} else {
throw e46697;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46651){if((e46651 instanceof Error)){
var e__45437__auto__ = e46651;
if((e__45437__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_46613)) && ((cljs.core.count(ocr_46613) === 3)))){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === false)){
try{var ocr_46612_1__46639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_1__46639,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46612_2__46640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_2__46640,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46696){if((e46696 instanceof Error)){
var e__45437__auto____$1 = e46696;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46696;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46695){if((e46695 instanceof Error)){
var e__45437__auto____$1 = e46695;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46695;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46653){if((e46653 instanceof Error)){
var e__45437__auto____$1 = e46653;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === true)){
try{var ocr_46612_2__46640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_2__46640,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_46612_1__46639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_1__46639,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46692){if((e46692 instanceof Error)){
var e__45437__auto____$2 = e46692;
if((e__45437__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46693){if((e46693 instanceof Error)){
var e__45437__auto____$3 = e46693;
if((e__45437__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46694){if((e46694 instanceof Error)){
var e__45437__auto____$4 = e46694;
if((e__45437__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$4;
}
} else {
throw e46694;

}
}} else {
throw e__45437__auto____$3;
}
} else {
throw e46693;

}
}} else {
throw e__45437__auto____$2;
}
} else {
throw e46692;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46691){if((e46691 instanceof Error)){
var e__45437__auto____$2 = e46691;
if((e__45437__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$2;
}
} else {
throw e46691;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46654){if((e46654 instanceof Error)){
var e__45437__auto____$2 = e46654;
if((e__45437__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === false)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === true)){
try{var ocr_46612_2__46640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_2__46640,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46690){if((e46690 instanceof Error)){
var e__45437__auto____$3 = e46690;
if((e__45437__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$3;
}
} else {
throw e46690;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46689){if((e46689 instanceof Error)){
var e__45437__auto____$3 = e46689;
if((e__45437__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$3;
}
} else {
throw e46689;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46655){if((e46655 instanceof Error)){
var e__45437__auto____$3 = e46655;
if((e__45437__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_46613_2__46649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(2));
if((ocr_46613_2__46649 === true)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === true)){
try{var ocr_46612_1__46639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_1__46639,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46688){if((e46688 instanceof Error)){
var e__45437__auto____$4 = e46688;
if((e__45437__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$4;
}
} else {
throw e46688;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46687){if((e46687 instanceof Error)){
var e__45437__auto____$4 = e46687;
if((e__45437__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$4;
}
} else {
throw e46687;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46656){if((e46656 instanceof Error)){
var e__45437__auto____$4 = e46656;
if((e__45437__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_46613_2__46649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(2));
if((ocr_46613_2__46649 === false)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === true)){
try{var ocr_46612_1__46639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_1__46639,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46686){if((e46686 instanceof Error)){
var e__45437__auto____$5 = e46686;
if((e__45437__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$5;
}
} else {
throw e46686;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46685){if((e46685 instanceof Error)){
var e__45437__auto____$5 = e46685;
if((e__45437__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$5;
}
} else {
throw e46685;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46657){if((e46657 instanceof Error)){
var e__45437__auto____$5 = e46657;
if((e__45437__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_46613_2__46649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(2));
if((ocr_46613_2__46649 === true)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === false)){
try{var ocr_46612_1__46639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_1__46639,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46684){if((e46684 instanceof Error)){
var e__45437__auto____$6 = e46684;
if((e__45437__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$6;
}
} else {
throw e46684;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46681){if((e46681 instanceof Error)){
var e__45437__auto____$6 = e46681;
if((e__45437__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === true)){
try{var ocr_46612_0__46638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_0__46638,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46683){if((e46683 instanceof Error)){
var e__45437__auto____$7 = e46683;
if((e__45437__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$7;
}
} else {
throw e46683;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46682){if((e46682 instanceof Error)){
var e__45437__auto____$7 = e46682;
if((e__45437__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$7;
}
} else {
throw e46682;

}
}} else {
throw e__45437__auto____$6;
}
} else {
throw e46681;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46658){if((e46658 instanceof Error)){
var e__45437__auto____$6 = e46658;
if((e__45437__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_46613_2__46649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(2));
if((ocr_46613_2__46649 === false)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === true)){
try{var ocr_46612_0__46638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_0__46638,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46680){if((e46680 instanceof Error)){
var e__45437__auto____$7 = e46680;
if((e__45437__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$7;
}
} else {
throw e46680;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46679){if((e46679 instanceof Error)){
var e__45437__auto____$7 = e46679;
if((e__45437__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$7;
}
} else {
throw e46679;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46659){if((e46659 instanceof Error)){
var e__45437__auto____$7 = e46659;
if((e__45437__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_46613_2__46649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(2));
if((ocr_46613_2__46649 === true)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === false)){
try{var ocr_46612_0__46638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_46612_0__46638,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46678){if((e46678 instanceof Error)){
var e__45437__auto____$8 = e46678;
if((e__45437__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$8;
}
} else {
throw e46678;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46672){if((e46672 instanceof Error)){
var e__45437__auto____$8 = e46672;
if((e__45437__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === true)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46676){if((e46676 instanceof Error)){
var e__45437__auto____$9 = e46676;
if((e__45437__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46677){if((e46677 instanceof Error)){
var e__45437__auto____$10 = e46677;
if((e__45437__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$10;
}
} else {
throw e46677;

}
}} else {
throw e__45437__auto____$9;
}
} else {
throw e46676;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46673){if((e46673 instanceof Error)){
var e__45437__auto____$9 = e46673;
if((e__45437__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === false)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46675){if((e46675 instanceof Error)){
var e__45437__auto____$10 = e46675;
if((e__45437__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$10;
}
} else {
throw e46675;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46674){if((e46674 instanceof Error)){
var e__45437__auto____$10 = e46674;
if((e__45437__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$10;
}
} else {
throw e46674;

}
}} else {
throw e__45437__auto____$9;
}
} else {
throw e46673;

}
}} else {
throw e__45437__auto____$8;
}
} else {
throw e46672;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46660){if((e46660 instanceof Error)){
var e__45437__auto____$8 = e46660;
if((e__45437__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_46613_2__46649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(2));
if((ocr_46613_2__46649 === false)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === true)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46671){if((e46671 instanceof Error)){
var e__45437__auto____$9 = e46671;
if((e__45437__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$9;
}
} else {
throw e46671;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46670){if((e46670 instanceof Error)){
var e__45437__auto____$9 = e46670;
if((e__45437__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$9;
}
} else {
throw e46670;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46661){if((e46661 instanceof Error)){
var e__45437__auto____$9 = e46661;
if((e__45437__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_46613_2__46649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(2));
if((ocr_46613_2__46649 === true)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === false)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46669){if((e46669 instanceof Error)){
var e__45437__auto____$10 = e46669;
if((e__45437__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$10;
}
} else {
throw e46669;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46668){if((e46668 instanceof Error)){
var e__45437__auto____$10 = e46668;
if((e__45437__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$10;
}
} else {
throw e46668;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46662){if((e46662 instanceof Error)){
var e__45437__auto____$10 = e46662;
if((e__45437__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_46613_2__46649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(2));
if((ocr_46613_2__46649 === false)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === true)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46667){if((e46667 instanceof Error)){
var e__45437__auto____$11 = e46667;
if((e__45437__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$11;
}
} else {
throw e46667;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46664){if((e46664 instanceof Error)){
var e__45437__auto____$11 = e46664;
if((e__45437__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_46613_0__46647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(0));
if((ocr_46613_0__46647 === false)){
try{var ocr_46613_1__46648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46613,(1));
if((ocr_46613_1__46648 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_46612,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e46666){if((e46666 instanceof Error)){
var e__45437__auto____$12 = e46666;
if((e__45437__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$12;
}
} else {
throw e46666;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46665){if((e46665 instanceof Error)){
var e__45437__auto____$12 = e46665;
if((e__45437__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$12;
}
} else {
throw e46665;

}
}} else {
throw e__45437__auto____$11;
}
} else {
throw e46664;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46663){if((e46663 instanceof Error)){
var e__45437__auto____$11 = e46663;
if((e__45437__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$11;
}
} else {
throw e46663;

}
}} else {
throw e__45437__auto____$10;
}
} else {
throw e46662;

}
}} else {
throw e__45437__auto____$9;
}
} else {
throw e46661;

}
}} else {
throw e__45437__auto____$8;
}
} else {
throw e46660;

}
}} else {
throw e__45437__auto____$7;
}
} else {
throw e46659;

}
}} else {
throw e__45437__auto____$6;
}
} else {
throw e46658;

}
}} else {
throw e__45437__auto____$5;
}
} else {
throw e46657;

}
}} else {
throw e__45437__auto____$4;
}
} else {
throw e46656;

}
}} else {
throw e__45437__auto____$3;
}
} else {
throw e46655;

}
}} else {
throw e__45437__auto____$2;
}
} else {
throw e46654;

}
}} else {
throw e__45437__auto____$1;
}
} else {
throw e46653;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46652){if((e46652 instanceof Error)){
var e__45437__auto____$1 = e46652;
if((e__45437__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__45437__auto____$1;
}
} else {
throw e46652;

}
}} else {
throw e__45437__auto__;
}
} else {
throw e46651;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e46650){if((e46650 instanceof Error)){
var e__45437__auto__ = e46650;
if((e__45437__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__45437__auto__;
}
} else {
throw e46650;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46707){
var vec__46708 = p__46707;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46708,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46708,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46706_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__46706_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46712){
var vec__46713 = p__46712;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46713,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46711_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__46711_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__46716 = cljs.core.rest(ins);
var G__46717 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__46716,G__46717) : posh.lib.q_analyze.just_qvars.call(null,G__46716,G__46717));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46718_SHARP_){
return cljs.core.zipmap(qvars,p1__46718_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__46719 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46719,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46719,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46719,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46719,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__46936 = var$;
var G__46937 = dbvarmap;
var G__46938 = cljs.core.rest(dbeavs);
var$ = G__46936;
dbvarmap = G__46937;
dbeavs = G__46938;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__46722 = cljs.core.rest(vars);
var G__46723 = dbvarmap;
var G__46724 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__46722,G__46723,G__46724) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__46722,G__46723,G__46724));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__46942 = (n + (1));
var G__46943 = cljs.core.rest(xs__$1);
n = G__46942;
xs__$1 = G__46943;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4174__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4174__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46725_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__46725_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__46725_SHARP_) : type.call(null,p1__46725_SHARP_));
} else {
return p1__46725_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__46726 = cljs.core.rest(ins);
var G__46727 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__46726,G__46727) : posh.lib.q_analyze.make_dbarg_map.call(null,G__46726,G__46727));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46728){
var vec__46729 = p__46728;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46729,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46729,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__46733_SHARP_,p2__46732_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__46732_SHARP_)){
return p1__46733_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__46737 = cljs.core._EQ_;
var expr__46738 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__46737.cljs$core$IFn$_invoke$arity$2 ? pred__46737.cljs$core$IFn$_invoke$arity$2((1),expr__46738) : pred__46737.call(null,(1),expr__46738)))){
return true;
} else {
if(cljs.core.truth_((pred__46737.cljs$core$IFn$_invoke$arity$2 ? pred__46737.cljs$core$IFn$_invoke$arity$2((3),expr__46738) : pred__46737.call(null,(3),expr__46738)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__46947 = cljs.core.first(remaining);
var G__46948 = cljs.core.rest(remaining);
clause = G__46947;
remaining = G__46948;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__46951 = cljs.core.first(remaining);
var G__46952 = cljs.core.rest(remaining);
clause = G__46951;
remaining = G__46952;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__46740(s__46741){
return (new cljs.core.LazySeq(null,(function (){
var s__46741__$1 = s__46741;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46741__$1);
if(temp__5735__auto__){
var s__46741__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46741__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__46741__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__46743 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__46742 = (0);
while(true){
if((i__46742 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__46742);
cljs.core.chunk_append(b__46743,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__46953 = (i__46742 + (1));
i__46742 = G__46953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46743),posh$lib$q_analyze$resolve_any_idents_$_iter__46740(cljs.core.chunk_rest(s__46741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46743),null);
}
} else {
var var_value = cljs.core.first(s__46741__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__46740(cljs.core.rest(s__46741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46748){
var vec__46749 = p__46748;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46749,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46749,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46752){
var vec__46753 = p__46752;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46753,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46756){
var vec__46757 = p__46756;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46757,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46757,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46760){
var vec__46761 = p__46760;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46761,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46761,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__46765 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__46766 = cljs.core.vec(r);
var fexpr__46764 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__46764.cljs$core$IFn$_invoke$arity$2 ? fexpr__46764.cljs$core$IFn$_invoke$arity$2(G__46765,G__46766) : fexpr__46764.call(null,G__46765,G__46766));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46767){
var vec__46768 = p__46767;
var seq__46769 = cljs.core.seq(vec__46768);
var first__46770 = cljs.core.first(seq__46769);
var seq__46769__$1 = cljs.core.next(seq__46769);
var db = first__46770;
var eav = seq__46769__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46771){
var vec__46772 = p__46771;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46772,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__46746_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__46746_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__46746_SHARP_) : linked_qvars.call(null,p1__46746_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__46746_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__46747_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__46747_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__46747_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
