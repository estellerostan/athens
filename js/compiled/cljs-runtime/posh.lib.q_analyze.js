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
var G__65153 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65153) : stop_at_QMARK_.call(null,G__65153));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__65154 = stop_at_QMARK_;
var G__65155 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__65154,G__65155) : posh.lib.q_analyze.take_until.call(null,G__65154,G__65155));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__65158 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65158) : rest_at_QMARK_.call(null,G__65158));
}
})())){
return ls;
} else {
var G__65954 = rest_at_QMARK_;
var G__65955 = cljs.core.rest(ls);
rest_at_QMARK_ = G__65954;
ls = G__65955;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__65164 = split_at_QMARK_;
var G__65165 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__65164,G__65165) : posh.lib.q_analyze.split_list_at.call(null,G__65164,G__65165));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__65171 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65171) : posh.lib.q_analyze.get_all_vars.call(null,G__65171));
})(),(function (){var G__65172 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65172) : posh.lib.q_analyze.get_all_vars.call(null,G__65172));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__65173 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65173) : posh.lib.q_analyze.get_all_vars.call(null,G__65173));
})(),cljs.core.first(query));
} else {
var G__65174 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65174) : posh.lib.q_analyze.get_all_vars.call(null,G__65174));

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
var G__65177 = cljs.core.rest(eav);
var G__65178 = (n - (1));
var G__65179 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__65180 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__65177,G__65178,G__65179,G__65180) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__65177,G__65178,G__65179,G__65180));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__65181 = cljs.core.rest(eav);
var G__65182 = (n - (1));
var G__65183 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__65184 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__65181,G__65182,G__65183,G__65184) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__65181,G__65182,G__65183,G__65184));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__65192 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__65192) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__65192));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__65193 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__65193) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__65193));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__65195 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65195) : posh.lib.q_analyze.get_eavs.call(null,G__65195));
})(),(function (){var G__65196 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65196) : posh.lib.q_analyze.get_eavs.call(null,G__65196));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__65197 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65197) : posh.lib.q_analyze.get_eavs.call(null,G__65197));
})(),(function (){var G__65198 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65198) : posh.lib.q_analyze.get_eavs.call(null,G__65198));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__65199 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65199) : posh.lib.q_analyze.get_eavs.call(null,G__65199));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_65206 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_65206)) && ((cljs.core.count(ocr_65206) === 2)))){
try{var ocr_65206_0__65210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65206,(0));
if(((cljs.core.vector_QMARK_(ocr_65206_0__65210)) && ((cljs.core.count(ocr_65206_0__65210) === 5)))){
try{var ocr_65206_0__65210_0__65214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65206_0__65210,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65206_0__65210_0__65214,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65206_0__65210,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65206_0__65210,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65206_0__65210,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65206,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__65240 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65240) : posh.lib.q_analyze.get_eavs.call(null,G__65240));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e65239){if((e65239 instanceof Error)){
var e__63951__auto__ = e65239;
if((e__63951__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto__;
}
} else {
throw e65239;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65233){if((e65233 instanceof Error)){
var e__63951__auto__ = e65233;
if((e__63951__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto__;
}
} else {
throw e65233;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65224){if((e65224 instanceof Error)){
var e__63951__auto__ = e65224;
if((e__63951__auto__ === cljs.core.match.backtrack)){
var G__65228 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65228) : posh.lib.q_analyze.get_eavs.call(null,G__65228));
} else {
throw e__63951__auto__;
}
} else {
throw e65224;

}
}} else {
var G__65241 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65241) : posh.lib.q_analyze.get_eavs.call(null,G__65241));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__65242){
var vec__65243 = p__65242;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65243,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65243,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65246_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__65246_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__65246_SHARP_);
} else {
return p1__65246_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__65247 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65247) : posh.lib.q_analyze.count_qvars.call(null,G__65247));
})(),(function (){var G__65248 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65248) : posh.lib.q_analyze.count_qvars.call(null,G__65248));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__65249 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65249) : posh.lib.q_analyze.count_qvars.call(null,G__65249));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__65253(s__65254){
return (new cljs.core.LazySeq(null,(function (){
var s__65254__$1 = s__65254;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65254__$1);
if(temp__5735__auto__){
var s__65254__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65254__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65254__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65256 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65255 = (0);
while(true){
if((i__65255 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65255);
cljs.core.chunk_append(b__65256,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__66011 = (i__65255 + (1));
i__65255 = G__66011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65256),posh$lib$q_analyze$fill_qvar_set_$_iter__65253(cljs.core.chunk_rest(s__65254__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65256),null);
}
} else {
var r = cljs.core.first(s__65254__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__65253(cljs.core.rest(s__65254__$2)));
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
return cljs.core.cons((function (){var G__65265 = cljs.core.first(seq1);
var G__65266 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__65265,G__65266) : f.call(null,G__65265,G__65266));
})(),(function (){var G__65267 = f;
var G__65268 = cljs.core.rest(seq1);
var G__65269 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__65267,G__65268,G__65269) : posh.lib.q_analyze.seq_merge_with.call(null,G__65267,G__65268,G__65269));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__65283){
var vec__65287 = p__65283;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65287,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65287,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65287,(2),null);
var eav = vec__65287;
var vec__65290 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65290,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65290,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65290,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65293(s__65294){
return (new cljs.core.LazySeq(null,(function (){
var s__65294__$1 = s__65294;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65294__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__65294__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65293_$_iter__65295(s__65296){
return (new cljs.core.LazySeq(null,((function (s__65294__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav){
return (function (){
var s__65296__$1 = s__65296;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65296__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__65296__$1,s__65294__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65293_$_iter__65295_$_iter__65297(s__65298){
return (new cljs.core.LazySeq(null,((function (s__65296__$1,s__65294__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav){
return (function (){
var s__65298__$1 = s__65298;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65298__$1);
if(temp__5735__auto____$2){
var s__65298__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65298__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65298__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65300 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65299 = (0);
while(true){
if((i__65299 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65299);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65299,s__65298__$1,s__65296__$1,s__65294__$1,vv,c__4580__auto__,size__4581__auto__,b__65300,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav){
return (function (p1__65277_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__65277_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__65299,s__65298__$1,s__65296__$1,s__65294__$1,vv,c__4580__auto__,size__4581__auto__,b__65300,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65299,s__65298__$1,s__65296__$1,s__65294__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__65300,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav){
return (function (p__65311){
var vec__65312 = p__65311;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65312,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65312,(1),null);
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
});})(i__65299,s__65298__$1,s__65296__$1,s__65294__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__65300,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65299,s__65298__$1,s__65296__$1,s__65294__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__65300,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav){
return (function (p1__65281_SHARP_){
if(cljs.core.truth_(p1__65281_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__65299,s__65298__$1,s__65296__$1,s__65294__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__65300,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__65300,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__66050 = (i__65299 + (1));
i__65299 = G__66050;
continue;
} else {
var G__66051 = (i__65299 + (1));
i__65299 = G__66051;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65300),posh$lib$q_analyze$pattern_from_eav__old_$_iter__65293_$_iter__65295_$_iter__65297(cljs.core.chunk_rest(s__65298__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65300),null);
}
} else {
var vv = cljs.core.first(s__65298__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65298__$1,s__65296__$1,s__65294__$1,vv,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav){
return (function (p1__65277_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__65277_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__65298__$1,s__65296__$1,s__65294__$1,vv,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65298__$1,s__65296__$1,s__65294__$1,wildcard_count,vv,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav){
return (function (p__65317){
var vec__65318 = p__65317;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65318,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65318,(1),null);
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
});})(s__65298__$1,s__65296__$1,s__65294__$1,wildcard_count,vv,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65298__$1,s__65296__$1,s__65294__$1,wildcard_count,exposed_qvars,vv,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav){
return (function (p1__65281_SHARP_){
if(cljs.core.truth_(p1__65281_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__65298__$1,s__65296__$1,s__65294__$1,wildcard_count,exposed_qvars,vv,s__65298__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__65293_$_iter__65295_$_iter__65297(cljs.core.rest(s__65298__$2)));
} else {
var G__66052 = cljs.core.rest(s__65298__$2);
s__65298__$1 = G__66052;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__65296__$1,s__65294__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav))
,null,null));
});})(s__65296__$1,s__65294__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__65293_$_iter__65295(cljs.core.rest(s__65296__$1)));
} else {
var G__66053 = cljs.core.rest(s__65296__$1);
s__65296__$1 = G__66053;
continue;
}
} else {
return null;
}
break;
}
});})(s__65294__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav))
,null,null));
});})(s__65294__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65290,qe,qa,qv,vec__65287,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__65293(cljs.core.rest(s__65294__$1)));
} else {
var G__66056 = cljs.core.rest(s__65294__$1);
s__65294__$1 = G__66056;
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
var ocr_65326 = cljs.core.vec(eav);
var ocr_65327 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_65326)) && ((cljs.core.count(ocr_65326) === 3)))){
try{var ocr_65326_0__65356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_0__65356,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65326_1__65357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_1__65357,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65326_2__65358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_2__65358,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65491){if((e65491 instanceof Error)){
var e__63951__auto__ = e65491;
if((e__63951__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65327)) && ((cljs.core.count(ocr_65327) === 3)))){
try{var ocr_65327_2__65361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65361 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65493){if((e65493 instanceof Error)){
var e__63951__auto____$1 = e65493;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65361 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65494){if((e65494 instanceof Error)){
var e__63951__auto____$2 = e65494;
if((e__63951__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$2;
}
} else {
throw e65494;

}
}} else {
throw e__63951__auto____$1;
}
} else {
throw e65493;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65492){if((e65492 instanceof Error)){
var e__63951__auto____$1 = e65492;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65492;

}
}} else {
throw e__63951__auto__;
}
} else {
throw e65491;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65476){if((e65476 instanceof Error)){
var e__63951__auto__ = e65476;
if((e__63951__auto__ === cljs.core.match.backtrack)){
try{var ocr_65326_2__65358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_2__65358,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_65327)) && ((cljs.core.count(ocr_65327) === 3)))){
try{var ocr_65327_1__65363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65363 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65480){if((e65480 instanceof Error)){
var e__63951__auto____$1 = e65480;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65327_1__65363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65363 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65481){if((e65481 instanceof Error)){
var e__63951__auto____$2 = e65481;
if((e__63951__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$2;
}
} else {
throw e65481;

}
}} else {
throw e__63951__auto____$1;
}
} else {
throw e65480;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65478){if((e65478 instanceof Error)){
var e__63951__auto____$1 = e65478;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65478;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65477){if((e65477 instanceof Error)){
var e__63951__auto____$1 = e65477;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65477;

}
}} else {
throw e__63951__auto__;
}
} else {
throw e65476;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65383){if((e65383 instanceof Error)){
var e__63951__auto__ = e65383;
if((e__63951__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65327)) && ((cljs.core.count(ocr_65327) === 3)))){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === false)){
try{var ocr_65326_1__65357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_1__65357,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65326_2__65358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_2__65358,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65475){if((e65475 instanceof Error)){
var e__63951__auto____$1 = e65475;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65475;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65474){if((e65474 instanceof Error)){
var e__63951__auto____$1 = e65474;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65474;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65385){if((e65385 instanceof Error)){
var e__63951__auto____$1 = e65385;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === true)){
try{var ocr_65326_2__65358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_2__65358,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65326_1__65357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_1__65357,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65470){if((e65470 instanceof Error)){
var e__63951__auto____$2 = e65470;
if((e__63951__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65471){if((e65471 instanceof Error)){
var e__63951__auto____$3 = e65471;
if((e__63951__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65472){if((e65472 instanceof Error)){
var e__63951__auto____$4 = e65472;
if((e__63951__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$4;
}
} else {
throw e65472;

}
}} else {
throw e__63951__auto____$3;
}
} else {
throw e65471;

}
}} else {
throw e__63951__auto____$2;
}
} else {
throw e65470;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65469){if((e65469 instanceof Error)){
var e__63951__auto____$2 = e65469;
if((e__63951__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$2;
}
} else {
throw e65469;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65386){if((e65386 instanceof Error)){
var e__63951__auto____$2 = e65386;
if((e__63951__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === false)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === true)){
try{var ocr_65326_2__65358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_2__65358,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65466){if((e65466 instanceof Error)){
var e__63951__auto____$3 = e65466;
if((e__63951__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$3;
}
} else {
throw e65466;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65461){if((e65461 instanceof Error)){
var e__63951__auto____$3 = e65461;
if((e__63951__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === false)){
try{var ocr_65326_2__65358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_2__65358,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65463){if((e65463 instanceof Error)){
var e__63951__auto____$4 = e65463;
if((e__63951__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$4;
}
} else {
throw e65463;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65462){if((e65462 instanceof Error)){
var e__63951__auto____$4 = e65462;
if((e__63951__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$4;
}
} else {
throw e65462;

}
}} else {
throw e__63951__auto____$3;
}
} else {
throw e65461;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65387){if((e65387 instanceof Error)){
var e__63951__auto____$3 = e65387;
if((e__63951__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === true)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === true)){
try{var ocr_65326_1__65357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_1__65357,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65460){if((e65460 instanceof Error)){
var e__63951__auto____$4 = e65460;
if((e__63951__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$4;
}
} else {
throw e65460;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65458){if((e65458 instanceof Error)){
var e__63951__auto____$4 = e65458;
if((e__63951__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$4;
}
} else {
throw e65458;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65388){if((e65388 instanceof Error)){
var e__63951__auto____$4 = e65388;
if((e__63951__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === false)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === true)){
try{var ocr_65326_1__65357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_1__65357,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65457){if((e65457 instanceof Error)){
var e__63951__auto____$5 = e65457;
if((e__63951__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$5;
}
} else {
throw e65457;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65456){if((e65456 instanceof Error)){
var e__63951__auto____$5 = e65456;
if((e__63951__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$5;
}
} else {
throw e65456;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65389){if((e65389 instanceof Error)){
var e__63951__auto____$5 = e65389;
if((e__63951__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === true)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === false)){
try{var ocr_65326_1__65357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_1__65357,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65454){if((e65454 instanceof Error)){
var e__63951__auto____$6 = e65454;
if((e__63951__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$6;
}
} else {
throw e65454;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65453){if((e65453 instanceof Error)){
var e__63951__auto____$6 = e65453;
if((e__63951__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$6;
}
} else {
throw e65453;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65390){if((e65390 instanceof Error)){
var e__63951__auto____$6 = e65390;
if((e__63951__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === false)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === false)){
try{var ocr_65326_1__65357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_1__65357,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65449){if((e65449 instanceof Error)){
var e__63951__auto____$7 = e65449;
if((e__63951__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$7;
}
} else {
throw e65449;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65447){if((e65447 instanceof Error)){
var e__63951__auto____$7 = e65447;
if((e__63951__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$7;
}
} else {
throw e65447;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65391){if((e65391 instanceof Error)){
var e__63951__auto____$7 = e65391;
if((e__63951__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === true)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === true)){
try{var ocr_65326_0__65356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_0__65356,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65445){if((e65445 instanceof Error)){
var e__63951__auto____$8 = e65445;
if((e__63951__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$8;
}
} else {
throw e65445;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65444){if((e65444 instanceof Error)){
var e__63951__auto____$8 = e65444;
if((e__63951__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$8;
}
} else {
throw e65444;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65392){if((e65392 instanceof Error)){
var e__63951__auto____$8 = e65392;
if((e__63951__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === false)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === true)){
try{var ocr_65326_0__65356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_0__65356,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65439){if((e65439 instanceof Error)){
var e__63951__auto____$9 = e65439;
if((e__63951__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$9;
}
} else {
throw e65439;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65438){if((e65438 instanceof Error)){
var e__63951__auto____$9 = e65438;
if((e__63951__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$9;
}
} else {
throw e65438;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65393){if((e65393 instanceof Error)){
var e__63951__auto____$9 = e65393;
if((e__63951__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === true)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === false)){
try{var ocr_65326_0__65356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_0__65356,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65435){if((e65435 instanceof Error)){
var e__63951__auto____$10 = e65435;
if((e__63951__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$10;
}
} else {
throw e65435;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65434){if((e65434 instanceof Error)){
var e__63951__auto____$10 = e65434;
if((e__63951__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$10;
}
} else {
throw e65434;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65394){if((e65394 instanceof Error)){
var e__63951__auto____$10 = e65394;
if((e__63951__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === false)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === false)){
try{var ocr_65326_0__65356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65326_0__65356,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65431){if((e65431 instanceof Error)){
var e__63951__auto____$11 = e65431;
if((e__63951__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$11;
}
} else {
throw e65431;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65427){if((e65427 instanceof Error)){
var e__63951__auto____$11 = e65427;
if((e__63951__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$11;
}
} else {
throw e65427;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65400){if((e65400 instanceof Error)){
var e__63951__auto____$11 = e65400;
if((e__63951__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === true)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === true)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65423){if((e65423 instanceof Error)){
var e__63951__auto____$12 = e65423;
if((e__63951__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$12;
}
} else {
throw e65423;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65416){if((e65416 instanceof Error)){
var e__63951__auto____$12 = e65416;
if((e__63951__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === false)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65422){if((e65422 instanceof Error)){
var e__63951__auto____$13 = e65422;
if((e__63951__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$13;
}
} else {
throw e65422;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65417){if((e65417 instanceof Error)){
var e__63951__auto____$13 = e65417;
if((e__63951__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === true)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65421){if((e65421 instanceof Error)){
var e__63951__auto____$14 = e65421;
if((e__63951__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$14;
}
} else {
throw e65421;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65418){if((e65418 instanceof Error)){
var e__63951__auto____$14 = e65418;
if((e__63951__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$14;
}
} else {
throw e65418;

}
}} else {
throw e__63951__auto____$13;
}
} else {
throw e65417;

}
}} else {
throw e__63951__auto____$12;
}
} else {
throw e65416;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65401){if((e65401 instanceof Error)){
var e__63951__auto____$12 = e65401;
if((e__63951__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === false)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === true)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65415){if((e65415 instanceof Error)){
var e__63951__auto____$13 = e65415;
if((e__63951__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$13;
}
} else {
throw e65415;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65414){if((e65414 instanceof Error)){
var e__63951__auto____$13 = e65414;
if((e__63951__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$13;
}
} else {
throw e65414;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65402){if((e65402 instanceof Error)){
var e__63951__auto____$13 = e65402;
if((e__63951__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === true)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === false)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65411){if((e65411 instanceof Error)){
var e__63951__auto____$14 = e65411;
if((e__63951__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$14;
}
} else {
throw e65411;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65410){if((e65410 instanceof Error)){
var e__63951__auto____$14 = e65410;
if((e__63951__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$14;
}
} else {
throw e65410;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65403){if((e65403 instanceof Error)){
var e__63951__auto____$14 = e65403;
if((e__63951__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_65327_2__65372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(2));
if((ocr_65327_2__65372 === false)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === true)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65409){if((e65409 instanceof Error)){
var e__63951__auto____$15 = e65409;
if((e__63951__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$15;
}
} else {
throw e65409;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65405){if((e65405 instanceof Error)){
var e__63951__auto____$15 = e65405;
if((e__63951__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_65327_0__65370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(0));
if((ocr_65327_0__65370 === false)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65407){if((e65407 instanceof Error)){
var e__63951__auto____$16 = e65407;
if((e__63951__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_65327_1__65371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65327,(1));
if((ocr_65327_1__65371 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65326,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65408){if((e65408 instanceof Error)){
var e__63951__auto____$17 = e65408;
if((e__63951__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$17;
}
} else {
throw e65408;

}
}} else {
throw e__63951__auto____$16;
}
} else {
throw e65407;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65406){if((e65406 instanceof Error)){
var e__63951__auto____$16 = e65406;
if((e__63951__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$16;
}
} else {
throw e65406;

}
}} else {
throw e__63951__auto____$15;
}
} else {
throw e65405;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65404){if((e65404 instanceof Error)){
var e__63951__auto____$15 = e65404;
if((e__63951__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$15;
}
} else {
throw e65404;

}
}} else {
throw e__63951__auto____$14;
}
} else {
throw e65403;

}
}} else {
throw e__63951__auto____$13;
}
} else {
throw e65402;

}
}} else {
throw e__63951__auto____$12;
}
} else {
throw e65401;

}
}} else {
throw e__63951__auto____$11;
}
} else {
throw e65400;

}
}} else {
throw e__63951__auto____$10;
}
} else {
throw e65394;

}
}} else {
throw e__63951__auto____$9;
}
} else {
throw e65393;

}
}} else {
throw e__63951__auto____$8;
}
} else {
throw e65392;

}
}} else {
throw e__63951__auto____$7;
}
} else {
throw e65391;

}
}} else {
throw e__63951__auto____$6;
}
} else {
throw e65390;

}
}} else {
throw e__63951__auto____$5;
}
} else {
throw e65389;

}
}} else {
throw e__63951__auto____$4;
}
} else {
throw e65388;

}
}} else {
throw e__63951__auto____$3;
}
} else {
throw e65387;

}
}} else {
throw e__63951__auto____$2;
}
} else {
throw e65386;

}
}} else {
throw e__63951__auto____$1;
}
} else {
throw e65385;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65384){if((e65384 instanceof Error)){
var e__63951__auto____$1 = e65384;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65384;

}
}} else {
throw e__63951__auto__;
}
} else {
throw e65383;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65382){if((e65382 instanceof Error)){
var e__63951__auto__ = e65382;
if((e__63951__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__63951__auto__;
}
} else {
throw e65382;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_65508 = cljs.core.vec(eav);
var ocr_65509 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_65508)) && ((cljs.core.count(ocr_65508) === 3)))){
try{var ocr_65508_0__65538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_0__65538,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65508_1__65539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_1__65539,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65508_2__65540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_2__65540,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e65766){if((e65766 instanceof Error)){
var e__63951__auto__ = e65766;
if((e__63951__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65509)) && ((cljs.core.count(ocr_65509) === 3)))){
try{var ocr_65509_2__65547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(2));
if((ocr_65509_2__65547 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65768){if((e65768 instanceof Error)){
var e__63951__auto____$1 = e65768;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65509_2__65547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(2));
if((ocr_65509_2__65547 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65769){if((e65769 instanceof Error)){
var e__63951__auto____$2 = e65769;
if((e__63951__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$2;
}
} else {
throw e65769;

}
}} else {
throw e__63951__auto____$1;
}
} else {
throw e65768;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65767){if((e65767 instanceof Error)){
var e__63951__auto____$1 = e65767;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65767;

}
}} else {
throw e__63951__auto__;
}
} else {
throw e65766;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65760){if((e65760 instanceof Error)){
var e__63951__auto__ = e65760;
if((e__63951__auto__ === cljs.core.match.backtrack)){
try{var ocr_65508_2__65540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_2__65540,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_65509)) && ((cljs.core.count(ocr_65509) === 3)))){
try{var ocr_65509_1__65555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65555 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65764){if((e65764 instanceof Error)){
var e__63951__auto____$1 = e65764;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65509_1__65555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65555 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65765){if((e65765 instanceof Error)){
var e__63951__auto____$2 = e65765;
if((e__63951__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$2;
}
} else {
throw e65765;

}
}} else {
throw e__63951__auto____$1;
}
} else {
throw e65764;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65763){if((e65763 instanceof Error)){
var e__63951__auto____$1 = e65763;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65763;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65762){if((e65762 instanceof Error)){
var e__63951__auto____$1 = e65762;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65762;

}
}} else {
throw e__63951__auto__;
}
} else {
throw e65760;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65619){if((e65619 instanceof Error)){
var e__63951__auto__ = e65619;
if((e__63951__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65509)) && ((cljs.core.count(ocr_65509) === 3)))){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === false)){
try{var ocr_65508_1__65539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_1__65539,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65508_2__65540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_2__65540,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65759){if((e65759 instanceof Error)){
var e__63951__auto____$1 = e65759;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65759;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65758){if((e65758 instanceof Error)){
var e__63951__auto____$1 = e65758;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65758;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65627){if((e65627 instanceof Error)){
var e__63951__auto____$1 = e65627;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === true)){
try{var ocr_65508_2__65540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_2__65540,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65508_1__65539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_1__65539,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65748){if((e65748 instanceof Error)){
var e__63951__auto____$2 = e65748;
if((e__63951__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65750){if((e65750 instanceof Error)){
var e__63951__auto____$3 = e65750;
if((e__63951__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65751){if((e65751 instanceof Error)){
var e__63951__auto____$4 = e65751;
if((e__63951__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$4;
}
} else {
throw e65751;

}
}} else {
throw e__63951__auto____$3;
}
} else {
throw e65750;

}
}} else {
throw e__63951__auto____$2;
}
} else {
throw e65748;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65746){if((e65746 instanceof Error)){
var e__63951__auto____$2 = e65746;
if((e__63951__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$2;
}
} else {
throw e65746;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65628){if((e65628 instanceof Error)){
var e__63951__auto____$2 = e65628;
if((e__63951__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === false)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === true)){
try{var ocr_65508_2__65540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_2__65540,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65742){if((e65742 instanceof Error)){
var e__63951__auto____$3 = e65742;
if((e__63951__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$3;
}
} else {
throw e65742;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65741){if((e65741 instanceof Error)){
var e__63951__auto____$3 = e65741;
if((e__63951__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$3;
}
} else {
throw e65741;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65629){if((e65629 instanceof Error)){
var e__63951__auto____$3 = e65629;
if((e__63951__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65509_2__65566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(2));
if((ocr_65509_2__65566 === true)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === true)){
try{var ocr_65508_1__65539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_1__65539,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65736){if((e65736 instanceof Error)){
var e__63951__auto____$4 = e65736;
if((e__63951__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$4;
}
} else {
throw e65736;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65735){if((e65735 instanceof Error)){
var e__63951__auto____$4 = e65735;
if((e__63951__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$4;
}
} else {
throw e65735;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65634){if((e65634 instanceof Error)){
var e__63951__auto____$4 = e65634;
if((e__63951__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_65509_2__65566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(2));
if((ocr_65509_2__65566 === false)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === true)){
try{var ocr_65508_1__65539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_1__65539,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65729){if((e65729 instanceof Error)){
var e__63951__auto____$5 = e65729;
if((e__63951__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$5;
}
} else {
throw e65729;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65728){if((e65728 instanceof Error)){
var e__63951__auto____$5 = e65728;
if((e__63951__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$5;
}
} else {
throw e65728;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65635){if((e65635 instanceof Error)){
var e__63951__auto____$5 = e65635;
if((e__63951__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_65509_2__65566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(2));
if((ocr_65509_2__65566 === true)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === false)){
try{var ocr_65508_1__65539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_1__65539,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65722){if((e65722 instanceof Error)){
var e__63951__auto____$6 = e65722;
if((e__63951__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$6;
}
} else {
throw e65722;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65709){if((e65709 instanceof Error)){
var e__63951__auto____$6 = e65709;
if((e__63951__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === true)){
try{var ocr_65508_0__65538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_0__65538,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65716){if((e65716 instanceof Error)){
var e__63951__auto____$7 = e65716;
if((e__63951__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$7;
}
} else {
throw e65716;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65710){if((e65710 instanceof Error)){
var e__63951__auto____$7 = e65710;
if((e__63951__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$7;
}
} else {
throw e65710;

}
}} else {
throw e__63951__auto____$6;
}
} else {
throw e65709;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65636){if((e65636 instanceof Error)){
var e__63951__auto____$6 = e65636;
if((e__63951__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65509_2__65566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(2));
if((ocr_65509_2__65566 === false)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === true)){
try{var ocr_65508_0__65538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_0__65538,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65703){if((e65703 instanceof Error)){
var e__63951__auto____$7 = e65703;
if((e__63951__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$7;
}
} else {
throw e65703;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65696){if((e65696 instanceof Error)){
var e__63951__auto____$7 = e65696;
if((e__63951__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$7;
}
} else {
throw e65696;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65638){if((e65638 instanceof Error)){
var e__63951__auto____$7 = e65638;
if((e__63951__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_65509_2__65566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(2));
if((ocr_65509_2__65566 === true)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === false)){
try{var ocr_65508_0__65538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65508_0__65538,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65690){if((e65690 instanceof Error)){
var e__63951__auto____$8 = e65690;
if((e__63951__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$8;
}
} else {
throw e65690;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65662){if((e65662 instanceof Error)){
var e__63951__auto____$8 = e65662;
if((e__63951__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === true)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65672){if((e65672 instanceof Error)){
var e__63951__auto____$9 = e65672;
if((e__63951__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65673){if((e65673 instanceof Error)){
var e__63951__auto____$10 = e65673;
if((e__63951__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$10;
}
} else {
throw e65673;

}
}} else {
throw e__63951__auto____$9;
}
} else {
throw e65672;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65665){if((e65665 instanceof Error)){
var e__63951__auto____$9 = e65665;
if((e__63951__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === false)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65668){if((e65668 instanceof Error)){
var e__63951__auto____$10 = e65668;
if((e__63951__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$10;
}
} else {
throw e65668;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65667){if((e65667 instanceof Error)){
var e__63951__auto____$10 = e65667;
if((e__63951__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$10;
}
} else {
throw e65667;

}
}} else {
throw e__63951__auto____$9;
}
} else {
throw e65665;

}
}} else {
throw e__63951__auto____$8;
}
} else {
throw e65662;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65639){if((e65639 instanceof Error)){
var e__63951__auto____$8 = e65639;
if((e__63951__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65509_2__65566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(2));
if((ocr_65509_2__65566 === false)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === true)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65659){if((e65659 instanceof Error)){
var e__63951__auto____$9 = e65659;
if((e__63951__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$9;
}
} else {
throw e65659;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65658){if((e65658 instanceof Error)){
var e__63951__auto____$9 = e65658;
if((e__63951__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$9;
}
} else {
throw e65658;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65640){if((e65640 instanceof Error)){
var e__63951__auto____$9 = e65640;
if((e__63951__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65509_2__65566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(2));
if((ocr_65509_2__65566 === true)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === false)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65655){if((e65655 instanceof Error)){
var e__63951__auto____$10 = e65655;
if((e__63951__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$10;
}
} else {
throw e65655;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65654){if((e65654 instanceof Error)){
var e__63951__auto____$10 = e65654;
if((e__63951__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$10;
}
} else {
throw e65654;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65644){if((e65644 instanceof Error)){
var e__63951__auto____$10 = e65644;
if((e__63951__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_65509_2__65566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(2));
if((ocr_65509_2__65566 === false)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === true)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65649){if((e65649 instanceof Error)){
var e__63951__auto____$11 = e65649;
if((e__63951__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$11;
}
} else {
throw e65649;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65646){if((e65646 instanceof Error)){
var e__63951__auto____$11 = e65646;
if((e__63951__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_65509_0__65564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(0));
if((ocr_65509_0__65564 === false)){
try{var ocr_65509_1__65565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65509,(1));
if((ocr_65509_1__65565 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65508,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65648){if((e65648 instanceof Error)){
var e__63951__auto____$12 = e65648;
if((e__63951__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$12;
}
} else {
throw e65648;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65647){if((e65647 instanceof Error)){
var e__63951__auto____$12 = e65647;
if((e__63951__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$12;
}
} else {
throw e65647;

}
}} else {
throw e__63951__auto____$11;
}
} else {
throw e65646;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65645){if((e65645 instanceof Error)){
var e__63951__auto____$11 = e65645;
if((e__63951__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$11;
}
} else {
throw e65645;

}
}} else {
throw e__63951__auto____$10;
}
} else {
throw e65644;

}
}} else {
throw e__63951__auto____$9;
}
} else {
throw e65640;

}
}} else {
throw e__63951__auto____$8;
}
} else {
throw e65639;

}
}} else {
throw e__63951__auto____$7;
}
} else {
throw e65638;

}
}} else {
throw e__63951__auto____$6;
}
} else {
throw e65636;

}
}} else {
throw e__63951__auto____$5;
}
} else {
throw e65635;

}
}} else {
throw e__63951__auto____$4;
}
} else {
throw e65634;

}
}} else {
throw e__63951__auto____$3;
}
} else {
throw e65629;

}
}} else {
throw e__63951__auto____$2;
}
} else {
throw e65628;

}
}} else {
throw e__63951__auto____$1;
}
} else {
throw e65627;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65626){if((e65626 instanceof Error)){
var e__63951__auto____$1 = e65626;
if((e__63951__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63951__auto____$1;
}
} else {
throw e65626;

}
}} else {
throw e__63951__auto__;
}
} else {
throw e65619;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65618){if((e65618 instanceof Error)){
var e__63951__auto__ = e65618;
if((e__63951__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__63951__auto__;
}
} else {
throw e65618;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65773){
var vec__65774 = p__65773;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65774,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65774,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__65772_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__65772_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65792){
var vec__65794 = p__65792;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65794,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__65783_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__65783_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__65810 = cljs.core.rest(ins);
var G__65811 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__65810,G__65811) : posh.lib.q_analyze.just_qvars.call(null,G__65810,G__65811));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65815_SHARP_){
return cljs.core.zipmap(qvars,p1__65815_SHARP_);
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
var vec__65819 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65819,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65819,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65819,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65819,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__66246 = var$;
var G__66247 = dbvarmap;
var G__66248 = cljs.core.rest(dbeavs);
var$ = G__66246;
dbvarmap = G__66247;
dbeavs = G__66248;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__65826 = cljs.core.rest(vars);
var G__65827 = dbvarmap;
var G__65828 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__65826,G__65827,G__65828) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__65826,G__65827,G__65828));
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
var G__66249 = (n + (1));
var G__66250 = cljs.core.rest(xs__$1);
n = G__66249;
xs__$1 = G__66250;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65837_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__65837_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__65837_SHARP_) : type.call(null,p1__65837_SHARP_));
} else {
return p1__65837_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__65841 = cljs.core.rest(ins);
var G__65842 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__65841,G__65842) : posh.lib.q_analyze.make_dbarg_map.call(null,G__65841,G__65842));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65843){
var vec__65845 = p__65843;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65845,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65845,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__65851_SHARP_,p2__65850_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__65850_SHARP_)){
return p1__65851_SHARP_;
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
var pred__65857 = cljs.core._EQ_;
var expr__65858 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__65857.cljs$core$IFn$_invoke$arity$2 ? pred__65857.cljs$core$IFn$_invoke$arity$2((1),expr__65858) : pred__65857.call(null,(1),expr__65858)))){
return true;
} else {
if(cljs.core.truth_((pred__65857.cljs$core$IFn$_invoke$arity$2 ? pred__65857.cljs$core$IFn$_invoke$arity$2((3),expr__65858) : pred__65857.call(null,(3),expr__65858)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__66251 = cljs.core.first(remaining);
var G__66252 = cljs.core.rest(remaining);
clause = G__66251;
remaining = G__66252;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__66253 = cljs.core.first(remaining);
var G__66254 = cljs.core.rest(remaining);
clause = G__66253;
remaining = G__66254;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__65861(s__65862){
return (new cljs.core.LazySeq(null,(function (){
var s__65862__$1 = s__65862;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65862__$1);
if(temp__5735__auto__){
var s__65862__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65862__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65862__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65864 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65863 = (0);
while(true){
if((i__65863 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65863);
cljs.core.chunk_append(b__65864,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__66256 = (i__65863 + (1));
i__65863 = G__66256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65864),posh$lib$q_analyze$resolve_any_idents_$_iter__65861(cljs.core.chunk_rest(s__65862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65864),null);
}
} else {
var var_value = cljs.core.first(s__65862__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__65861(cljs.core.rest(s__65862__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65877){
var vec__65878 = p__65877;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65878,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65878,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65882){
var vec__65883 = p__65882;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65883,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65883,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65896){
var vec__65899 = p__65896;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65899,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65899,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65902){
var vec__65912 = p__65902;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65912,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65912,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__65916 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__65917 = cljs.core.vec(r);
var fexpr__65915 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__65915.cljs$core$IFn$_invoke$arity$2 ? fexpr__65915.cljs$core$IFn$_invoke$arity$2(G__65916,G__65917) : fexpr__65915.call(null,G__65916,G__65917));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65918){
var vec__65919 = p__65918;
var seq__65920 = cljs.core.seq(vec__65919);
var first__65921 = cljs.core.first(seq__65920);
var seq__65920__$1 = cljs.core.next(seq__65920);
var db = first__65921;
var eav = seq__65920__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65931){
var vec__65932 = p__65931;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65932,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__65875_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__65875_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__65875_SHARP_) : linked_qvars.call(null,p1__65875_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__65875_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__65876_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__65876_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__65876_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
