(function(){"use strict";
var SOLAR="https://eusoudaquintadimensao-creator.github.io/mestre-solar/",ORIG="https://mist-apex-beam-pilot.grok.me";
var LK="cinza-lang-v1",SALVOS_K="cinza-salvos-v1";
function detecta(){var s=null;try{s=localStorage.getItem(LK)}catch(e){}if(s)return s;var n=(navigator.language||"pt").slice(0,2);return n==="en"||n==="es"?n:"pt"}
var LANG=detecta();
var UI={
 inicio:["Início","Home","Inicio"],consciencia:["Consciência","Consciousness","Conciencia"],sobrevivencia:["Sobrevivência","Survival","Supervivencia"],guias:["Guias","Guides","Guías"],mais:["Mais","More","Más"],
 sub:["Comportamento, sobrevivencialismo, preparação e expansão de consciência.","Behavior, survivalism, preparedness and expansion of consciousness.","Comportamiento, supervivencialismo, preparación y expansión de conciencia."],
 comece:["Comece por aqui","Start here","Empieza aquí"],solar:["O portal do conhecimento, com lições, Águia e a Jornada.","The knowledge portal: lessons, the Eagle and the Journey (in Portuguese).","El portal del conocimiento: lecciones, el Águila y la Jornada (en portugués)."],
 pod:["Aurora e Caio conversam sobre cada lição.","Aurora and Caio talk through each lesson.","Aurora y Caio conversan sobre cada lección."],
 aguia:["A águia primordial · 1111 Hz","The primordial eagle · 1111 Hz","El águila primordial · 1111 Hz"],aguiaSub:["Toque a águia. O grito e os 1111 Hz só começam quando você escolhe.","Tap the eagle. The cry and the 1111 Hz only start when you choose.","Toca el águila. El grito y los 1111 Hz solo empiezan cuando eliges."],
 busca:["Buscar em {n} páginas…","Search {n} pages…","Buscar en {n} páginas…"],secoes:["Seções","Sections","Secciones"],destaques:["Destaques","Highlights","Destacados"],ferr:["Ferramentas","Tools","Herramientas"],
 nada:["Nada encontrado.","Nothing found.","Nada encontrado."],salvar:["Salvar","Save","Guardar"],salvo:["Salvo","Saved","Guardado"],comp:["Compartilhar","Share","Compartir"],ouvir:["Ouvir","Listen","Escuchar"],parar:["Parar","Stop","Parar"],
 ant:["Anterior","Previous","Anterior"],prox:["Próxima","Next","Siguiente"],nesta:["Nesta página","On this page","En esta página"],carregando:["Carregando…","Loading…","Cargando…"],
 erro:["Não consegui abrir esta página agora. Verifique a conexão e tente de novo.","Could not open this page now. Check the connection and try again.","No pude abrir esta página ahora. Revisa la conexión e inténtalo de nuevo."],
 salvos:["Salvos","Saved","Guardados"],salvosSub:["As páginas que você marcou neste aparelho.","Pages you marked on this device.","Las páginas que marcaste en este aparato."],salvosVazio:["Nada salvo ainda. Use “Salvar” no topo de qualquer página.","Nothing saved yet. Use “Save” at the top of any page.","Nada guardado aún. Usa “Guardar” arriba de cualquier página."],
 ajustes:["Ajustes","Settings","Ajustes"],ajSub:["Idioma, dados deste aparelho e cache.","Language, data on this device and cache.","Idioma, datos de este aparato y caché."],idioma:["Idioma","Language","Idioma"],auto:["Detecção automática","Automatic detection","Detección automática"],
 limpar:["Limpar cache (o site baixa de novo)","Clear cache (the site downloads again)","Limpiar caché (el sitio se descarga de nuevo)"],apagar:["Apagar tudo o que salvei aqui","Erase everything I saved here","Borrar todo lo que guardé aquí"],
 confirma:["Apagar planos, notas, marcas e salvos deste aparelho?","Erase plans, notes, marks and saved pages on this device?","¿Borrar planes, notas, marcas y guardados de este aparato?"],feito:["Feito.","Done.","Hecho."],
 vinculante:["Versão vinculante: português.","Binding version: Portuguese.","Versión vinculante: portugués."],traduz:["Tradução automática do site original; o português vale.","Translation from the original site; Portuguese prevails.","Traducción del sitio original; prevalece el portugués."],
 aviso:["Isto não é brincadeira. A energia é alta. Se não estiver preparado, não entre em ressonância. Se o corpo apertar, pare.","This is not a game. The energy is high. If you are not prepared, do not enter resonance. If the body tightens, stop.","Esto no es un juego. La energía es alta. Si no estás preparado, no entres en resonancia. Si el cuerpo se aprieta, para."],
 estou:["Estou preparado · tocar","I am prepared · play","Estoy preparado · tocar"],fechar:["Fechar","Close","Cerrar"],ler:["Ler o aviso e a história","Read the warning and the story","Leer el aviso y la historia"],
 emerg:["Emergência: 190 · 192 · 193 (Brasil)","Emergency: 190 · 192 · 193 (Brazil)","Emergencia: 190 · 192 · 193 (Brasil)"],naoEnc:["Página não encontrada","Page not found","Página no encontrada"],voltar:["Voltar ao início","Back home","Volver al inicio"],
 sobre:["Sobre","About","Sobre"],termos:["Termos","Terms","Términos"],priv:["Privacidade","Privacy","Privacidad"]};
function t(k,v){var a=UI[k];var s=a?a[LANG==="en"?1:LANG==="es"?2:0]:k;if(v)for(var x in v)s=s.replace("{"+x+"}",v[x]);return s}
var TABS=[["","🏠","inicio"],["consciencia","✨","consciencia"],["sobrevivencia","🎒","sobrevivencia"],["guias","📖","guias"],["mais","☰","mais"]];
var ICON={consciencia:"✨",sobrevivencia:"🎒",guias:"📖",mais:"☰"};
var DESC={consciencia:["Arquétipos, frequências, quinta dimensão, mente e atenção.","Archetypes, frequencies, fifth dimension, mind and attention.","Arquetipos, frecuencias, quinta dimensión, mente y atención."],sobrevivencia:["Kits, estoque, primeiros socorros, protocolos e cenários.","Kits, storage, first aid, protocols and scenarios.","Kits, despensa, primeros auxilios, protocolos y escenarios."],guias:["Trilhas de leitura, perguntas, glossário e últimas.","Reading paths, questions, glossary and latest.","Rutas de lectura, preguntas, glosario y novedades."],mais:["Apps, música, loja, tradução, sobre e políticas.","Apps, music, store, translation, about and policies.","Apps, música, tienda, traducción, sobre y políticas."]};
function d3(a){return a[LANG==="en"?1:LANG==="es"?2:0]}
var IDX=null,main=document.getElementById("conteudo"),fechar=[],sair=[],cache={};
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function sem(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
function salvos(){try{return JSON.parse(localStorage.getItem(SALVOS_K))||[]}catch(e){return[]}}
function tit(p){return p["t_"+LANG]||p.t}function des(p){return p["d_"+LANG]||p.d}
function pg(s){return IDX.pages.filter(function(x){return x.s===s})[0]}
function dados(s,l){l=l||LANG;var k=l+"/"+s;if(cache[k])return Promise.resolve(cache[k]);
 var tenta=function(u){return fetch(u).then(function(r){if(!r.ok)throw 0;return r.json()})};
 return(l==="pt"?tenta("data/"+s+".json"):tenta("data/"+l+"/"+s+".json").catch(function(){return tenta("data/"+s+".json")})).then(function(d){cache[k]=d;return d})}
function solarHTML(){return'<div class="solar"><a class="s1" href="'+SOLAR+'" target="_blank" rel="noopener"><span class="em">☀️</span><span><b>Conhecimento Solar</b><small>'+t("solar")+'</small></span></a><a class="s2" href="'+SOLAR+'#podcast" target="_blank" rel="noopener"><span class="em">🎙️</span><span><b>Podcast Sol Nascente</b><small>'+t("pod")+'</small></span></a></div>'}
function card(p){return'<a class="card'+(window.CINZA_TOOLS&&CINZA_TOOLS[p.s]?' tem-tool':'')+'" href="#/p/'+esc(p.s)+'"><b>'+esc(tit(p))+'</b>'+(des(p)?'<small>'+esc(des(p))+'</small>':'')+'</a>'}
function navs(atual){var h="";TABS.forEach(function(x){h+='<a href="#/'+(x[0]?"c/"+x[0]:"")+'"'+(atual===x[0]?' aria-current="page"':'')+'><span>'+x[1]+'</span>'+t(x[2])+'</a>'});
 document.getElementById("nav-abas").innerHTML=h;document.getElementById("nav-lateral").innerHTML=h+'<a href="#/ajustes"'+(atual==="ajustes"?' aria-current="page"':'')+'><span>⚙️</span>'+t("ajustes")+'</a>';
 document.documentElement.lang=LANG==="pt"?"pt-BR":LANG;var lb=document.getElementById("b-lang");lb&&(lb.textContent=LANG.toUpperCase());[].forEach.call(document.querySelectorAll("[data-lg]"),function(b){b.setAttribute("aria-pressed",b.dataset.lg===LANG);b.onclick=function(){LANG=b.dataset.lg;try{localStorage.setItem(LK,LANG)}catch(e){}cache={};rota()}})}
function busca(q,lista){q=sem(q).trim();if(!q)return lista;return lista.filter(function(p){return sem(tit(p)+" "+des(p)+" "+p.t).indexOf(q)>=0})}
function ligaBusca(lista,fixo){var i=document.getElementById("q"),g=document.getElementById("res");if(!i)return;
 i.addEventListener("input",function(){if(!i.value.trim()&&fixo){g.innerHTML=fixo;return}var r=busca(i.value,lista);g.innerHTML=r.length?r.map(card).join(""):'<p class="sub">'+t("nada")+'</p>'})}
function inicio(){navs("");var P=IDX.pages;
 var dest=["guias__arquetipo","circulo","kit-72h","socorros","trilhas__comecar","porta"].map(pg).filter(Boolean),ferr=["aplicativos","modo","ferramentas","calculadora","plano","auditoria"].map(pg).filter(Boolean);
 var secoes=["consciencia","sobrevivencia","guias","mais"].map(function(c){return'<a class="card cat" href="#/c/'+c+'"><span>'+ICON[c]+'</span><span><b>'+t(c)+'</b><small>'+d3(DESC[c])+'</small></span></a>'}).join("");
 main.innerHTML='<h1>Homem Cinza</h1><p class="sub">'+t("sub")+'</p><div class="rot">'+t("comece")+'</div>'+solarHTML()+
 '<div class="hero aguia" id="aguia" role="button" tabindex="0" aria-label="'+esc(t("aguia"))+'"><img src="media/selo-1111.jpg" alt=""><i class="raios"></i><div><b>'+t("aguia")+'</b><p>'+t("aguiaSub")+'</p></div></div>'+
 '<input class="busca" id="q" type="search" placeholder="'+esc(t("busca",{n:P.length}))+'" aria-label="Buscar"><div class="rot">'+t("secoes")+'</div><div class="grade" id="res">'+secoes+'</div>'+
 '<div class="rot">'+t("ferr")+'</div><div class="grade">'+ferr.map(card).join("")+'</div><div class="rot">'+t("destaques")+'</div><div class="grade">'+dest.map(card).join("")+'</div>'+rodape();
 ligaBusca(P,secoes);var ag=document.getElementById("aguia");ag.onclick=aguia;ag.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();aguia()}}}
function aguia(){var a=null;tela('<div class="aguia-modal"><img id="ag-img" src="media/selo-1111.jpg" alt="Arquétipo primordial da águia"><p>'+t("aviso")+'</p><div class="barra"><button class="btn ouro" id="ag-play">'+t("estou")+'</button><a class="btn" href="#/p/inicio" id="ag-ler">'+t("ler")+'</a></div></div>');
 document.getElementById("ag-ler").onclick=function(){fechaTela()};
 document.getElementById("ag-play").onclick=function(){var b=this,img=document.getElementById("ag-img");if(a&&!a.paused){a.pause();img.classList.remove("viva");b.textContent=t("estou");return}
  a=a||new Audio("media/aguia-despertar.mp3");a.currentTime=0;a.play().catch(function(){});img.classList.add("viva");b.textContent="■ "+t("parar");a.onended=function(){img.classList.remove("viva");b.textContent=t("estou")}};
 aoFechar(function(){a&&a.pause()})}
function categoria(c){navs(c);var L=IDX.pages.filter(function(p){return p.c===c});
 var extra=c==="mais"?'<div class="grade" style="margin-bottom:10px"><a class="card cat" href="#/salvos"><span>🔖</span><span><b>'+t("salvos")+'</b><small>'+t("salvosSub")+'</small></span></a><a class="card cat" href="#/ajustes"><span>⚙️</span><span><b>'+t("ajustes")+'</b><small>'+t("ajSub")+'</small></span></a></div>':"";
 main.innerHTML='<h1>'+ICON[c]+' '+t(c)+'</h1><p class="sub">'+d3(DESC[c])+'</p>'+(c==="guias"?solarHTML():"")+extra+
 '<input class="busca" id="q" type="search" placeholder="'+esc(t("busca",{n:L.length}))+'" aria-label="Buscar"><div class="grade" id="res">'+L.map(card).join("")+'</div>'+rodape();ligaBusca(L)}
function listaSalvos(){navs("mais");var S=salvos(),L=IDX.pages.filter(function(p){return S.indexOf(p.s)>=0});
 main.innerHTML='<h1>🔖 '+t("salvos")+'</h1><p class="sub">'+t("salvosSub")+'</p><div class="grade">'+(L.length?L.map(card).join(""):'<p class="sub">'+t("salvosVazio")+'</p>')+'</div>'}
function ajustes(){navs("ajustes");
 main.innerHTML='<h1>⚙️ '+t("ajustes")+'</h1><p class="sub">'+t("ajSub")+'</p><section class="tool"><h2>'+t("idioma")+'</h2><div class="checks">'+[["pt","Português"],["en","English"],["es","Español"]].map(function(l){return'<button class="chk" data-l="'+l[0]+'" aria-pressed="'+(LANG===l[0])+'">'+l[1]+'</button>'}).join("")+'<button class="chk" data-l="auto">'+t("auto")+'</button></div><p class="sub">'+t("vinculante")+'</p></section>'+
 '<section class="tool"><h2>'+t("salvos")+'</h2><a class="btn" href="#/salvos">🔖 '+t("salvos")+' ('+salvos().length+')</a></section><section class="tool"><div class="barra"><button class="btn" id="aj-c">'+t("limpar")+'</button><button class="btn" id="aj-a">'+t("apagar")+'</button></div><p class="sub" id="aj-s"></p></section>';
 [].forEach.call(main.querySelectorAll("[data-l]"),function(b){b.onclick=function(){try{b.dataset.l==="auto"?localStorage.removeItem(LK):localStorage.setItem(LK,b.dataset.l)}catch(e){}LANG=detecta();cache={};ajustes()}});
 document.getElementById("aj-c").onclick=function(){(window.caches?caches.keys().then(function(k){return Promise.all(k.map(function(n){return caches.delete(n)}))}):Promise.resolve()).then(function(){document.getElementById("aj-s").textContent=t("feito")})};
 document.getElementById("aj-a").onclick=function(){if(!confirm(t("confirma")))return;Object.keys(localStorage).filter(function(k){return/^cinza-/.test(k)&&k!==LK}).forEach(function(k){localStorage.removeItem(k)});document.getElementById("aj-s").textContent=t("feito")}}
function bloco(b){switch(b.t){
 case"h1":return"";case"h2":case"h3":case"h4":return'<'+b.t+' id="h'+(++bloco.n)+'">'+esc(b.x)+'</'+b.t+'>';
 case"li":return'<ul><li>'+esc(b.x)+'</li></ul>';case"blockquote":return'<blockquote>'+esc(b.x)+'</blockquote>';
 case"img":return'<img loading="lazy" src="'+esc(b.src)+'" alt="'+esc(b.alt)+'">';
 case"video":return'<video controls playsinline preload="none" src="'+esc(ORIG+"/"+b.src.split("/").pop())+'"></video>';
 case"audio":return'<audio controls preload="none" src="'+esc(b.src)+'"></audio>';
 case"table":return'<table>'+b.rows.map(function(r){return'<tr>'+r.map(function(c){return'<td>'+esc(c)+'</td>'}).join("")+'</tr>'}).join("")+'</table>';
 default:return'<p>'+esc(b.x)+'</p>'}}
function falar(d,btn){var v=window.speechSynthesis;if(!v){btn.hidden=true;return}
 if(v.speaking){v.cancel();btn.textContent="🔊 "+t("ouvir");return}
 d.b.filter(function(b){return b.x}).forEach(function(b){var u=new SpeechSynthesisUtterance(b.x);u.lang={pt:"pt-BR",en:"en-US",es:"es-ES"}[LANG];v.speak(u)});btn.textContent="■ "+t("parar");
 var iv=setInterval(function(){if(!v.speaking){clearInterval(iv);btn.textContent="🔊 "+t("ouvir")}},800)}
function pagina(s){var p=pg(s);if(!p)return nao();navs(p.c);var T=window.CINZA_TOOLS||{},tool=T[s];
 main.innerHTML='<p class="sub">'+t("carregando")+'</p>';
 dados(s).then(function(d){bloco.n=0;
  var corpo=d.b.map(bloco).join("").replace(/<\/ul><ul>/g,""),irm=IDX.pages.filter(function(x){return x.c===p.c}),i=irm.indexOf(p),sv=salvos().indexOf(s)>=0;
  var toc=d.b.filter(function(b){return b.t==="h2"||b.t==="h3"}).map(function(b,k){return'<a href="javascript:void 0" data-h="h'+(k+1)+'">'+esc(b.x)+'</a>'}).join("");
  main.innerHTML='<div class="leitor"><article class="leitura"><div class="barra"><a class="btn" href="#/c/'+p.c+'">← '+t(p.c)+'</a><button class="btn" id="b-salvar">🔖 '+(sv?t("salvo"):t("salvar"))+'</button><button class="btn" id="b-ouvir">🔊 '+t("ouvir")+'</button>'+(navigator.share?'<button class="btn" id="b-comp">↗ '+t("comp")+'</button>':'')+'</div>'+
  '<h1>'+esc(d.t||tit(p))+'</h1>'+(LANG!=="pt"&&d.tr?'<p class="sub">'+t("traduz")+'</p>':'')+(tool?'<div id="tool" class="tool-area"></div>':(p.interativo?'<div class="aviso"><a href="'+ORIG+p.r+'" target="_blank" rel="noopener">↗ '+esc(tit(p))+'</a></div>':''))+corpo+
  '<div class="navpag">'+(irm[i-1]?'<a class="card" href="#/p/'+irm[i-1].s+'"><small>← '+t("ant")+'</small><b>'+esc(tit(irm[i-1]))+'</b></a>':'<span></span>')+(irm[i+1]?'<a class="card" style="text-align:right" href="#/p/'+irm[i+1].s+'"><small>'+t("prox")+' →</small><b>'+esc(tit(irm[i+1]))+'</b></a>':'')+'</div>'+rodape()+'</article>'+
  (toc?'<nav class="toc" aria-label="'+t("nesta")+'"><div class="rot">'+t("nesta")+'</div>'+toc+'</nav>':'')+'</div>';
  if(tool)try{tool(document.getElementById("tool"))}catch(e){console.error(e)}
  [].forEach.call(main.querySelectorAll(".toc a"),function(a){a.onclick=function(){var e=document.getElementById(a.dataset.h);e&&e.scrollIntoView({behavior:"smooth"})}});
  document.getElementById("b-salvar").onclick=function(){var S=salvos(),k=S.indexOf(s);k>=0?S.splice(k,1):S.push(s);localStorage.setItem(SALVOS_K,JSON.stringify(S));this.textContent="🔖 "+(k>=0?t("salvar"):t("salvo"))};
  var bo=document.getElementById("b-ouvir");bo.onclick=function(){falar(d,bo)};
  var bc=document.getElementById("b-comp");bc&&(bc.onclick=function(){navigator.share({title:d.t,url:location.href}).catch(function(){})});
  document.title=(d.t||tit(p))+" · homemcinza.com"}).catch(function(e){console.error(e);main.innerHTML='<p class="aviso">'+t("erro")+'</p>'})}
function nao(){navs("");main.innerHTML='<h1>'+t("naoEnc")+'</h1><p><a class="btn ouro" href="#/">'+t("voltar")+'</a></p>'}
function rodape(){return'<p class="rodape"><a href="#/p/sobre">'+t("sobre")+'</a> · <a href="#/p/termos">'+t("termos")+'</a> · <a href="#/p/privacidade">'+t("priv")+'</a> · <a href="#/p/cookies">Cookies</a> · <a href="mailto:contatohomemcinza@gmail.com">contatohomemcinza@gmail.com</a><br>'+t("emerg")+' · '+t("vinculante")+'</p>'}
/* sobreposição de tela cheia para ferramentas */
function tela(h,o){fechaTela();var d=document.createElement("div");d.className="tela"+(o&&o.claro?" clara":"");d.setAttribute("role","dialog");d.setAttribute("aria-modal","true");
 d.innerHTML='<button class="tela-x" aria-label="'+t("fechar")+'">×</button><div class="tela-c">'+h+'</div>';document.body.appendChild(d);d.querySelector(".tela-x").onclick=fechaTela;d.querySelector(".tela-x").focus()}
function fechaTela(){var d=document.querySelector(".tela");fechar.splice(0).forEach(function(f){try{f()}catch(e){}});d&&d.remove()}
function aoFechar(f){fechar.push(f)}function aoSair(f){sair.push(f)}
document.addEventListener("keydown",function(e){if(e.key==="Escape")fechaTela()});
window.CINZA={esc:esc,lang:function(){return LANG},idx:function(){return IDX},pg:pg,card:card,dados:dados,tela:tela,aoFechar:aoFechar,aoSair:aoSair};
function rota(){fechaTela();sair.splice(0).forEach(function(f){try{f()}catch(e){}});window.speechSynthesis&&speechSynthesis.cancel();
 var h=location.hash.replace(/^#\/?/,""),m;document.title="Homem Cinza · homemcinza.com";
 if(!h)inicio();else if(m=h.match(/^c\/(\w+)$/))DESC[m[1]]?categoria(m[1]):nao();else if(m=h.match(/^p\/([\w-]+)$/))pagina(m[1]);else if(h==="salvos")listaSalvos();else if(h==="ajustes")ajustes();else nao();
 window.scrollTo(0,0);main.focus({preventScroll:true})}
document.getElementById("b-busca").onclick=function(){location.hash="#/";setTimeout(function(){var q=document.getElementById("q");q&&q.focus()},80)};
document.getElementById("b-lang").onclick=function(){var o=["pt","en","es"];LANG=o[(o.indexOf(LANG)+1)%3];try{localStorage.setItem(LK,LANG)}catch(e){}cache={};rota()};
(function(){var p=location.pathname.replace(/\/index\.html$/,"/");if(p==="/ajustes"||p==="/salvos"){history.replaceState(null,"","/#/"+p.slice(1));return}if(p!=="/"&&!location.hash){history.replaceState(null,"","/#/p/"+(p.replace(/^\/|\/$/g,"").replace(/\//g,"__")))}})();
fetch("data/index.json").then(function(r){return r.json()}).then(function(d){IDX=d;window.addEventListener("hashchange",rota);rota()});
if("serviceWorker"in navigator)window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})});
if(window.CINZA_TOOLS&&CINZA_TOOLS._camaLoop){try{if(Object.keys(JSON.parse(localStorage.getItem("cinza-cama")||"{}")).length)CINZA_TOOLS._camaLoop()}catch(e){}}
})();
