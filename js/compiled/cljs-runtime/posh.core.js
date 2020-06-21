goog.provide('posh.core');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.update');
goog.require('posh.lib.db');
goog.require('posh.lib.graph');
posh.core.empty_tree = (function posh$core$empty_tree(p__66318,retrieve){
var map__66319 = p__66318;
var map__66319__$1 = (((((!((map__66319 == null))))?(((((map__66319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66319):map__66319);
var dcfg = map__66319__$1;
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66319__$1,new cljs.core.Keyword(null,"q","q",689001697));
var pull = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66319__$1,new cljs.core.Keyword(null,"pull","pull",-860544805));
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66319__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var entid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66319__$1,new cljs.core.Keyword(null,"entid","entid",1720688982));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66319__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbs","dbs",1889628467),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dcfg","dcfg",-880371016),new cljs.core.Keyword(null,"conns","conns",-1475268193)],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var G__66322 = arguments.length;
switch (G__66322) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,conn,schema,null);
}));

(posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__66323,db_id,conn,schema,base_filters){
var map__66324 = p__66323;
var map__66324__$1 = (((((!((map__66324 == null))))?(((((map__66324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66324):map__66324);
var posh_tree = map__66324__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66324__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66324__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66324__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66324__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66324__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66324__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"conns","conns",-1475268193),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conns,db_id,conn),new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schemas,db_id,schema),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key,new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3(dcfg,conn,base_filters)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
}));

(posh.core.add_db.cljs$lang$maxFixedArity = 5);

posh.core.set_db = (function posh$core$set_db(var_args){
var G__66327 = arguments.length;
switch (G__66327) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,db,null);
}));

(posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__66328,db_id,db,filter_pred){
var map__66329 = p__66328;
var map__66329__$1 = (((((!((map__66329 == null))))?(((((map__66329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66329):map__66329);
var posh_tree = map__66329__$1;
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66329__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66329__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66329__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,db),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
}));

(posh.core.set_db.cljs$lang$maxFixedArity = 4);

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__66331,poshdb,tx_patterns){
var map__66332 = p__66331;
var map__66332__$1 = (((((!((map__66332 == null))))?(((((map__66332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66332):map__66332);
var posh_tree = map__66332__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66332__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66332__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tx","filter-tx",-1870604812),poshdb,tx_patterns], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),tx_patterns], null))], null)], 0))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__66334,poshdb,pull_pattern,eid){
var map__66335 = p__66334;
var map__66335__$1 = (((((!((map__66335 == null))))?(((((map__66335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66335):map__66335);
var posh_tree = map__66335__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pull","filter-pull",-32246001),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.update_filter_pull(posh_tree,storage_key))], null)], 0))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__4795__auto__ = [];
var len__4789__auto___66394 = arguments.length;
var i__4790__auto___66395 = (0);
while(true){
if((i__4790__auto___66395 < len__4789__auto___66394)){
args__4795__auto__.push((arguments[i__4790__auto___66395]));

var G__66396 = (i__4790__auto___66395 + (1));
i__4790__auto___66395 = G__66396;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__66340,query,args){
var map__66341 = p__66340;
var map__66341__$1 = (((((!((map__66341 == null))))?(((((map__66341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66341):map__66341);
var posh_tree = map__66341__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66341__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66341__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66341__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66341__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66341__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66341__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-q","filter-q",538431954),query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var map__66343 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__66343__$1 = (((((!((map__66343 == null))))?(((((map__66343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66343):map__66343);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66343__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66343__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.filter_q_transform_analysis(analysis))], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
}));

(posh.core.add_filter_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.core.add_filter_q.cljs$lang$applyTo = (function (seq66337){
var G__66338 = cljs.core.first(seq66337);
var seq66337__$1 = cljs.core.next(seq66337);
var G__66339 = cljs.core.first(seq66337__$1);
var seq66337__$2 = cljs.core.next(seq66337__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66338,G__66339,seq66337__$2);
}));

posh.core.add_pull = (function posh$core$add_pull(p__66345,poshdb,pull_pattern,eid){
var map__66346 = p__66345;
var map__66346__$1 = (((((!((map__66346 == null))))?(((((map__66346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66346):map__66346);
var posh_tree = map__66346__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66346__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66346__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66346__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66346__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66346__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66346__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_pull_many = (function posh$core$add_pull_many(p__66348,poshdb,pull_pattern,eids){
var map__66349 = p__66348;
var map__66349__$1 = (((((!((map__66349 == null))))?(((((map__66349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66349):map__66349);
var posh_tree = map__66349__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66349__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66349__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66349__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66349__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66349__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66349__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-many","pull-many",217148130),poshdb,pull_pattern,eids], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull_many(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__4795__auto__ = [];
var len__4789__auto___66404 = arguments.length;
var i__4790__auto___66405 = (0);
while(true){
if((i__4790__auto___66405 < len__4789__auto___66404)){
args__4795__auto__.push((arguments[i__4790__auto___66405]));

var G__66406 = (i__4790__auto___66405 + (1));
i__4790__auto___66405 = G__66406;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__66354,query,args){
var map__66355 = p__66354;
var map__66355__$1 = (((((!((map__66355 == null))))?(((((map__66355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66355):map__66355);
var posh_tree = map__66355__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__4185__auto__ = cached;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var map__66357 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__66357__$1 = (((((!((map__66357 == null))))?(((((map__66357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66357):map__66357);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66357__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66357__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
}
})(),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
}));

(posh.core.add_q.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(posh.core.add_q.cljs$lang$applyTo = (function (seq66351){
var G__66352 = cljs.core.first(seq66351);
var seq66351__$1 = cljs.core.next(seq66351);
var G__66353 = cljs.core.first(seq66351__$1);
var seq66351__$2 = cljs.core.next(seq66351__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66352,G__66353,seq66351__$2);
}));

posh.core.remove_item = (function posh$core$remove_item(p__66359,storage_key){
var map__66360 = p__66359;
var map__66360__$1 = (((((!((map__66360 == null))))?(((((map__66360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66360):map__66360);
var posh_tree = map__66360__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66360__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66360__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_tree,new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.remove_item(graph,storage_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache,storage_key)], 0));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__66362,db_id,tx,new_cache,storage_key){
var map__66363 = p__66362;
var map__66363__$1 = (((((!((map__66363 == null))))?(((((map__66363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66363):map__66363);
var posh_tree = map__66363__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66363__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66363__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?(function (){var fexpr__66366 = new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(current_analysis);
return (fexpr__66366.cljs$core$IFn$_invoke$arity$2 ? fexpr__66366.cljs$core$IFn$_invoke$arity$2(posh_tree,storage_key) : fexpr__66366.call(null,posh_tree,storage_key));
})():null);
var analysis = (function (){var or__4185__auto__ = reloaded;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return current_analysis;
}
})();
var map__66365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,storage_key);
var map__66365__$1 = (((((!((map__66365 == null))))?(((((map__66365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66365):map__66365);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66365__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var children_cache = (function (){var temp__5735__auto__ = (((!(cljs.core.empty_QMARK_(outputs))))?(function (){var and__4174__auto__ = new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__4174__auto__)){
return posh.lib.datom_matcher.matching_datoms(new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__4174__auto__;
}
})():false);
if(cljs.core.truth_(temp__5735__auto__)){
var pass_tx = temp__5735__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,(posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5 ? posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,pass_tx,acc,k) : posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k))], 0));
}),new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY], 0));
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__66368,poshdb,tx){
var map__66369 = p__66368;
var map__66369__$1 = (((((!((map__66369 == null))))?(((((map__66369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66369):map__66369);
var posh_tree = map__66369__$1;
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66369__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66369__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns,posh.lib.db.poshdb__GT_db_id(poshdb));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(txs,conn,posh.core.merge_txs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__66371,conns_results){
var map__66372 = p__66371;
var map__66372__$1 = (((((!((map__66372 == null))))?(((((map__66372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66372):map__66372);
var posh_tree = map__66372__$1;
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66372__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66372__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66372__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66372__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66372__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var new_dbs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__4582__auto__ = (function posh$core$after_transact_$_iter__66374(s__66375){
return (new cljs.core.LazySeq(null,(function (){
var s__66375__$1 = s__66375;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66375__$1);
if(temp__5735__auto__){
var s__66375__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66375__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__66375__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__66377 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__66376 = (0);
while(true){
if((i__66376 < size__4581__auto__)){
var vec__66378 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__66376);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66378,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66378,(1),null);
cljs.core.chunk_append(b__66377,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])));

var G__66425 = (i__66376 + (1));
i__66376 = G__66425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66377),posh$core$after_transact_$_iter__66374(cljs.core.chunk_rest(s__66375__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66377),null);
}
} else {
var vec__66381 = cljs.core.first(s__66375__$2);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66381,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66381,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])),posh$core$after_transact_$_iter__66374(cljs.core.rest(s__66375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(conns);
})());
var new_posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"dbs","dbs",1889628467),new_dbs);
var changed_cache = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changed,p__66384){
var vec__66385 = p__66384;
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66385,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66385,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([changed,posh.core.cache_changes(new_posh_tree,db_id,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null))], 0));
}),cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cache,really_changed], 0)),new cljs.core.Keyword(null,"changed","changed",570724917),really_changed], null)], 0));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__66388){
var map__66389 = p__66388;
var map__66389__$1 = (((((!((map__66389 == null))))?(((((map__66389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66389):map__66389);
var posh_tree = map__66389__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66389__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66389__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns_results = cljs.core.reduce_kv((function (m,conn,tx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,conn,(function (){var fexpr__66391 = new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66391.cljs$core$IFn$_invoke$arity$2 ? fexpr__66391.cljs$core$IFn$_invoke$arity$2(conn,tx) : fexpr__66391.call(null,conn,tx));
})());
}),cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.PersistentArrayMap.EMPTY),conns_results);
});

//# sourceMappingURL=posh.core.js.map
