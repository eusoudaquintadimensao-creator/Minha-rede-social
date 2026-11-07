"""Gera public/data/*.json a partir de pages.json (conteúdo extraído de homemcinza.com)."""
import json,re,os
p=json.load(open("pages.json",encoding="utf-8"))
C=[("consciencia",r"^/(circulo|hz639|portal111|musica|mira|hermetic\w*|maestria|chegada|quantica|dimensao|pratica|crencas|estoicismo|metacognicao|intencao|neuro[\w-]*|plasticidade|tecnicas|moduladores|sono|erga|alem|pilula|porta|caminho|tom|grau)$|^/guias/(quinta-dimensao|cocriacao-quinta|visualizacao|ima-medo|lei-atracao|arquetipo|sombra-arquetipo|ego|inteligencia|sigma-cinza|alfa-cinza|psicologia-alfa|familia-alfa|sinais-abuso|filosofia-cinza|oito-caracteristicas|etica-anonimato|segundo-sim)$"),
 ("sobrevivencia",r"^/(kits|kit-[\w-]+|estocagem[\w/-]*|despensa-mes|conta(-mes)?|calculo|calculadora|socorros|aula-socorros|emergencia|cenarios[\w/-]*|caos|protocolo-cinza|protocolos-caos|apagao|abrigo|fogo|pesca|filtragem|semana|campo|ferramentas|ensaio-criancas|evasao|antever|plano|cama|vigilia|idosos|mesa|parentes|moradia|reset[\w-]*|trinta|umbrella|auditoria)$|^/guias/"),
 ("guias",r"^/(trilhas[\w/-]*|homem-cinza|faq|glossario|ultimas|guias)$"),
 ("mais",r".")]
NOMES={"consciencia":"Consciência","sobrevivencia":"Sobrevivência","guias":"Guias","mais":"Mais"}
def limpa(t):
  t=re.sub(r"\s*·\s*homemcinza\.com.*$","",t);t=re.sub(r"\s+—\s+(homem cinza|trilha de homem cinza|protocolo de sobrevivência|estocagem de alimentos|CINZA|HOMEM CINZA)\b.*$","",t)
  return t.strip() or "Homem Cinza"
os.makedirs("public/data",exist_ok=True)
idx=[]
for r,v in sorted(p.items()):
  if r in("/painel","/salvos","/ajustes","/lupa"): continue
  cat=next(c for c,rx in C if re.search(rx,r))
  b=[x for x in v["b"] if x.get("x") not in("Áudio","Abrir","Ouvir","Listen","Escuchar","PT","EN","ES","Início")]
  for x in b:
    if "src" in x: x["src"]="media/"+x["src"].split("?")[0].split("/")[-1]
  t=limpa(v["title"]) if r!="/" else "A águia primordial · 1111 Hz"
  slug=r.strip("/").replace("/","__") or "inicio"
  txt=sum(len(x.get("x","")) for x in b)
  idx.append({"r":r,"s":slug,"t":t,"d":v["desc"][:160],"c":cat,"n":txt,"interativo":txt<400})
  json.dump({"t":t,"b":b},open(f"public/data/{slug}.json","w",encoding="utf-8"),ensure_ascii=False)
json.dump({"cats":NOMES,"pages":idx},open("public/data/index.json","w",encoding="utf-8"),ensure_ascii=False)
from collections import Counter;print(len(idx),Counter(i["c"] for i in idx),sum(i["interativo"] for i in idx))

# ---- idiomas (PT/EN/ES) a partir do site original renderizado (ferramentas/lang.js) ----
LIXO={"AUDIO","ÁUDIO","AUDIO ","PT","EN","ES","Ouvir","Listen","Escuchar","HOME","INÍCIO","INICIO"}
def limpa_b(b): return [x for x in b if x.get("x") and x["x"].strip() not in LIXO and not x["x"].startswith(("Homem Cinza · homemcinza.com","JEREMIAS"))]
idxd=json.load(open("public/data/index.json",encoding="utf-8"))
TOOLS=set(re.findall(r'T(?:\.|\[")([\w-]+)"?\]?=function',open("public/tools.js",encoding="utf-8").read()))|{"risco-apps"}
for p in idxd["pages"]:
  s=p["s"];base=json.load(open(f"public/data/{s}.json",encoding="utf-8"))
  midia=[x for x in base["b"] if "src" in x]
  fp=f"i18n/pt/{s}.json"
  if os.path.exists(fp) and s not in TOOLS:
    c=json.load(open(fp,encoding="utf-8"));cb=limpa_b(c["b"])
    if sum(len(x["x"]) for x in cb)>1.3*max(1,p["n"]):
      base["b"]=midia+cb;p["n"]=sum(len(x["x"]) for x in cb)
      json.dump(base,open(f"public/data/{s}.json","w",encoding="utf-8"),ensure_ascii=False)
  p["interativo"]=p["n"]<400 and s not in TOOLS
  for l in("en","es"):
    f=f"i18n/{l}/{s}.json"
    if not os.path.exists(f): continue
    c=json.load(open(f,encoding="utf-8"));cb=limpa_b(c["b"])
    if not cb: continue
    os.makedirs(f"public/data/{l}",exist_ok=True)
    t=limpa(c["t"]) if s!="inicio" else {"en":"The primordial eagle · 1111 Hz","es":"El águila primordial · 1111 Hz"}[l]
    json.dump({"t":t,"tr":1,"b":midia+cb},open(f"public/data/{l}/{s}.json","w",encoding="utf-8"),ensure_ascii=False)
    p["t_"+l]=t;p["d_"+l]=c.get("d","")[:160]
json.dump(idxd,open("public/data/index.json","w",encoding="utf-8"),ensure_ascii=False)
print("tools:",sorted(TOOLS));print("interativos restantes:",[p["s"] for p in idxd["pages"] if p["interativo"]])

# glossário: vem do módulo do site original (assets/glossary-*.js baixado em /tmp/g.js por ferramentas/README)
