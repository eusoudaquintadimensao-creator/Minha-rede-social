(function(){"use strict";
var SOLAR="https://eusoudaquintadimensao-creator.github.io/mestre-solar/",ORIG="https://mist-apex-beam-pilot.grok.me";
var TABS=[["","🏠","Início"],["consciencia","✨","Consciência"],["sobrevivencia","🎒","Sobrevivência"],["guias","📖","Guias"],["mais","☰","Mais"]];
var ICON={consciencia:"✨",sobrevivencia:"🎒",guias:"📖",mais:"☰"};
var DESC={consciencia:"Arquétipos, frequências, quinta dimensão, mente e atenção.",sobrevivencia:"Kits, estoque, primeiros socorros, protocolos e cenários.",guias:"Trilhas de leitura, perguntas, glossário e últimas.",mais:"Apps, música, loja, tradução, sobre e políticas."};
var IDX=null,SALVOS_K="cinza-salvos-v1",main=document.getElementById("conteudo");
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function sem(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
function salvos(){try{return JSON.parse(localStorage.getItem(SALVOS_K))||[]}catch(e){return[]}}
function solarHTML(){return '<div class="solar"><a class="s1" href="'+SOLAR+'" target="_blank" rel="noopener"><span class="em">☀️</span><span><b>Conhecimento Solar</b><small>O portal do conhecimento, com lições, Águia e a Jornada.</small></span></a>'+
 '<a class="s2" href="'+SOLAR+'#podcast" target="_blank" rel="noopener"><span class="em">🎙️</span><span><b>Podcast Sol Nascente</b><small>Aurora e Caio conversam sobre cada lição.</small></span></a></div>'}
function card(p){return '<a class="card" href="#/p/'+esc(p.s)+'"><b>'+esc(p.t)+'</b>'+(p.d?'<small>'+esc(p.d)+'</small>':'')+'</a>'}
function navs(atual){var h="";TABS.forEach(function(t){h+='<a href="#/'+(t[0]?"c/"+t[0]:"")+'"'+(atual===t[0]?' aria-current="page"':'')+'><span>'+t[1]+'</span>'+t[2]+'</a>'});
 document.getElementById("nav-abas").innerHTML=h;document.getElementById("nav-lateral").innerHTML=h}
function busca(q,lista){q=sem(q).trim();if(!q)return lista;return lista.filter(function(p){return sem(p.t+" "+p.d).indexOf(q)>=0})}
function ligaBusca(lista){var i=document.getElementById("q"),g=document.getElementById("res");if(!i)return;
 i.addEventListener("input",function(){var r=busca(i.value,lista);g.innerHTML=r.length?r.map(card).join(""):'<p class="sub">Nada encontrado.</p>'})}
function inicio(){navs("");var P=IDX.pages,by=function(s){return P.filter(function(p){return p.s===s})[0]};
 var dest=["inicio","guias__arquetipo","circulo","kit-72h","socorros","trilhas__comecar"].map(by).filter(Boolean);
 main.innerHTML='<h1>Homem Cinza</h1><p class="sub">Comportamento, sobrevivencialismo, preparação e expansão de consciência.</p>'+
 '<div class="rot">Comece por aqui</div>'+solarHTML()+
 '<a class="hero" href="#/p/inicio" style="display:block;color:inherit;text-decoration:none"><img src="media/selo-1111.jpg" alt="Arquétipo primordial da águia, 1111 Hz"><div><b>A águia primordial · 1111 Hz</b><p>Leia o aviso antes. O som só começa quando você escolhe.</p></div></a>'+
 '<input class="busca" id="q" type="search" placeholder="Buscar em '+P.length+' páginas…" aria-label="Buscar"><div class="rot">Seções</div><div class="grade" id="res">'+
 ["consciencia","sobrevivencia","guias","mais"].map(function(c){return '<a class="card cat" href="#/c/'+c+'"><span>'+ICON[c]+'</span><span><b>'+IDX.cats[c]+'</b><small>'+DESC[c]+'</small></span></a>'}).join("")+'</div>'+
 '<div class="rot">Destaques</div><div class="grade">'+dest.map(card).join("")+'</div>'+rodape();
 ligaBusca(P)}
function categoria(c){navs(c);var L=IDX.pages.filter(function(p){return p.c===c});
 var extra=c==="mais"?'<div class="grade" style="margin-bottom:10px"><a class="card cat" href="#/salvos"><span>🔖</span><span><b>Salvos</b><small>As páginas que você marcou neste aparelho.</small></span></a></div>':"";
 main.innerHTML='<h1>'+ICON[c]+' '+esc(IDX.cats[c])+'</h1><p class="sub">'+DESC[c]+'</p>'+(c==="guias"?solarHTML():"")+extra+
 '<input class="busca" id="q" type="search" placeholder="Buscar em '+esc(IDX.cats[c])+'…" aria-label="Buscar"><div class="grade" id="res">'+L.map(card).join("")+'</div>'+rodape();ligaBusca(L)}
function listaSalvos(){navs("mais");var S=salvos(),L=IDX.pages.filter(function(p){return S.indexOf(p.s)>=0});
 main.innerHTML='<h1>🔖 Salvos</h1><p class="sub">Ficam só neste aparelho.</p><div class="grade">'+(L.length?L.map(card).join(""):'<p class="sub">Nada salvo ainda. Use “Salvar” no topo de qualquer página.</p>')+'</div>'}
function bloco(b){switch(b.t){
 case"h1":return"";case"h2":case"h3":case"h4":return'<'+b.t+' id="h'+(++bloco.n)+'">'+esc(b.x)+'</'+b.t+'>';
 case"li":return'<ul><li>'+esc(b.x)+'</li></ul>';case"blockquote":return'<blockquote>'+esc(b.x)+'</blockquote>';
 case"img":return'<img loading="lazy" src="'+esc(b.src)+'" alt="'+esc(b.alt)+'">';
 case"video":return'<video controls playsinline preload="none" src="'+esc(b.src)+'"></video>';
 case"audio":return'<audio controls preload="none" src="'+esc(b.src)+'"></audio>';
 case"table":return'<table>'+b.rows.map(function(r){return'<tr>'+r.map(function(c){return'<td>'+esc(c)+'</td>'}).join("")+'</tr>'}).join("")+'</table>';
 default:return'<p>'+esc(b.x)+'</p>'}}
function pagina(s){var p=IDX.pages.filter(function(x){return x.s===s})[0];if(!p)return nao();navs(p.c);
 main.innerHTML='<p class="sub">Carregando…</p>';
 fetch("data/"+s+".json").then(function(r){return r.json()}).then(function(d){bloco.n=0;
  var corpo=d.b.map(bloco).join("").replace(/<\/ul><ul>/g,""),irm=IDX.pages.filter(function(x){return x.c===p.c}),i=irm.indexOf(p),S=salvos(),sv=S.indexOf(s)>=0;
  var toc=d.b.filter(function(b){return b.t==="h2"||b.t==="h3"}).map(function(b,k){return'<a href="javascript:void 0" data-h="h'+(k+1)+'">'+esc(b.x)+'</a>'}).join("");
  main.innerHTML='<div class="leitor"><article class="leitura"><div class="barra"><a class="btn" href="#/c/'+p.c+'">← '+esc(IDX.cats[p.c])+'</a><button class="btn" id="b-salvar">'+(sv?"🔖 Salvo":"🔖 Salvar")+'</button>'+(navigator.share?'<button class="btn" id="b-comp">↗ Compartilhar</button>':'')+'</div>'+
  '<h1>'+esc(d.t)+'</h1>'+(p.interativo?'<div class="aviso">Esta página tem uma ferramenta interativa (calculadora, player ou formulário). Enquanto ela é refeita aqui, use a versão original: <a href="'+ORIG+p.r+'" target="_blank" rel="noopener">abrir a ferramenta</a>.</div>':'')+corpo+
  '<div class="navpag">'+(irm[i-1]?'<a class="card" href="#/p/'+irm[i-1].s+'"><small>← Anterior</small><b>'+esc(irm[i-1].t)+'</b></a>':'<span></span>')+(irm[i+1]?'<a class="card" style="text-align:right" href="#/p/'+irm[i+1].s+'"><small>Próxima →</small><b>'+esc(irm[i+1].t)+'</b></a>':'')+'</div>'+rodape()+'</article>'+
  (toc?'<nav class="toc" aria-label="Nesta página"><div class="rot">Nesta página</div>'+toc+'</nav>':'')+'</div>';
  main.querySelectorAll(".toc a").forEach(function(a){a.onclick=function(){var e=document.getElementById(a.dataset.h);e&&e.scrollIntoView({behavior:"smooth"})}});
  document.getElementById("b-salvar").onclick=function(){var S=salvos(),k=S.indexOf(s);k>=0?S.splice(k,1):S.push(s);localStorage.setItem(SALVOS_K,JSON.stringify(S));this.textContent=k>=0?"🔖 Salvar":"🔖 Salvo"};
  var bc=document.getElementById("b-comp");bc&&(bc.onclick=function(){navigator.share({title:d.t,url:location.href}).catch(function(){})});
  document.title=d.t+" · homemcinza.com"}).catch(function(){main.innerHTML='<p class="aviso">Não consegui abrir esta página agora. Verifique a conexão e tente de novo.</p>'})}
function nao(){navs("");main.innerHTML='<h1>Página não encontrada</h1><p><a class="btn ouro" href="#/">Voltar ao início</a></p>'}
function rodape(){return'<p class="rodape"><a href="#/p/sobre">Sobre</a> · <a href="#/p/termos">Termos</a> · <a href="#/p/privacidade">Privacidade</a> · <a href="#/p/cookies">Cookies</a> · <a href="mailto:contatohomemcinza@gmail.com">contatohomemcinza@gmail.com</a></p>'}
function rota(){var h=location.hash.replace(/^#\/?/,""),m;document.title="Homem Cinza · homemcinza.com";
 if(!h)inicio();else if(m=h.match(/^c\/(\w+)$/))IDX.cats[m[1]]?categoria(m[1]):nao();else if(m=h.match(/^p\/([\w-]+)$/))pagina(m[1]);else if(h==="salvos")listaSalvos();else nao();
 if(!/^p\//.test(h)||true)window.scrollTo(0,0)}
document.getElementById("b-busca").onclick=function(){location.hash="#/";setTimeout(function(){var q=document.getElementById("q");q&&q.focus()},50)};
// rotas antigas (/kit-72h) → hash
(function(){var p=location.pathname.replace(/\/index\.html$/,"/");if(p!=="/"&&!location.hash){history.replaceState(null,"","/#/p/"+(p.replace(/^\/|\/$/g,"").replace(/\//g,"__")))}})();
fetch("data/index.json").then(function(r){return r.json()}).then(function(d){IDX=d;window.addEventListener("hashchange",rota);rota()});
if("serviceWorker"in navigator)window.addEventListener("load",function(){navigator.serviceWorker.register("sw.js").catch(function(){})});
})();
