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
