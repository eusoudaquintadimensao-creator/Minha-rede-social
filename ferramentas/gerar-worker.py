"""Gera dist/worker.js (Worker 'homem-cinza' com o site embutido) e dist/deploy-mcp.js (código para o conector Cloudflare).
Texto vai como string; binários (fontes, selo, svg) em base64. jpg/mp3/mp4 grandes redirecionam para o host original.
Uso: python3 ferramentas/gerar-worker.py   (depois: wrangler deploy dist/worker.js --name homem-cinza, ou o conector)"""
import os,json,base64
R=os.path.join(os.path.dirname(os.path.abspath(__file__)),"..");P=os.path.join(R,"public");D=os.path.join(R,"dist");os.makedirs(D,exist_ok=True)
T={"html":"text/html; charset=utf-8","css":"text/css; charset=utf-8","js":"application/javascript; charset=utf-8","json":"application/json; charset=utf-8","webmanifest":"application/manifest+json","svg":"image/svg+xml","jpg":"image/jpeg","png":"image/png","mp3":"audio/mpeg","woff2":"font/woff2"}
TXT=("html","css","js","json","webmanifest","svg")
F={}
for d,_,fs in os.walk(P):
  for f in fs:
    p="/"+os.path.relpath(os.path.join(d,f),P).replace(os.sep,"/");ext=p.rsplit(".",1)[-1]
    if ext in("mp3","mp4") or (ext=="jpg" and "selo-1111" not in p): continue
    b=open(os.path.join(d,f),"rb").read()
    F[p]=[T[ext],0,b.decode("utf-8")] if ext in TXT else [T[ext],1,base64.b64encode(b).decode()]
F["/"]=F["/index.html"]
w="""const F=__F__;
const ORIG="https://mist-apex-beam-pilot.grok.me";
function bin(s){const x=atob(s),u=new Uint8Array(x.length);for(let i=0;i<x.length;i++)u[i]=x.charCodeAt(i);return u}
export default{async fetch(req){const u=new URL(req.url);const p=u.pathname;
 if(u.hostname==="www.homemcinza.com")return Response.redirect("https://homemcinza.com"+p+u.search,301);
 if(req.method!=="GET"&&req.method!=="HEAD")return new Response("método",{status:405});
 let f=F[p]||F[p.replace(/\\/$/,"")+"/index.html"];
 if(!f&&p.startsWith("/media/")){const n=p.split("/").pop();return Response.redirect(ORIG+(/\\.mp3$/.test(n)?"/audio/":"/")+n,302)}
 if(!f&&!/\\.[a-z0-9]+$/i.test(p))f=F["/index.html"];
 if(!f)return new Response("não encontrado",{status:404,headers:{"content-type":"text/plain; charset=utf-8"}});
 const h={"content-type":f[0],"x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin","permissions-policy":"geolocation=(self), camera=(self), microphone=()","cache-control":/\\.(woff2|jpg|svg|png|mp3)$/.test(p)?"public, max-age=604800":"public, max-age=120"};
 const corpo=f[1]?bin(f[2]):new TextEncoder().encode(f[2]);
 if(f[1]){h["accept-ranges"]="bytes";const rg=req.headers.get("range"),m=rg&&/bytes=(\\d*)-(\\d*)/.exec(rg);
  if(m){const tot=corpo.length;let a=m[1]===""?tot-(+m[2]):+m[1],z=m[1]===""||m[2]===""?tot-1:Math.min(+m[2],tot-1);
   if(isNaN(a)||a<0||a>=tot)return new Response(null,{status:416,headers:{"content-range":"bytes */"+tot}});
   h["content-range"]="bytes "+a+"-"+z+"/"+tot;h["content-length"]=String(z-a+1);return new Response(req.method==="HEAD"?null:corpo.slice(a,z+1),{status:206,headers:h})}
  h["content-length"]=String(corpo.length)}
 return new Response(req.method==="HEAD"?null:corpo,{headers:h})}}"""
w=w.replace("__F__",json.dumps(F,ensure_ascii=False))
open(os.path.join(D,"worker.js"),"w",encoding="utf-8").write(w)
js="""async () => { const id='209714ce3a62dabbf0c529c84541c686',nome='homem-cinza';
 const form=new FormData();
 form.append('metadata',new Blob([JSON.stringify({main_module:'index.js',compatibility_date:'2026-11-01',observability:{enabled:false},logpush:false})],{type:'application/json'}));
 form.append('index.js',new Blob([__W__],{type:'application/javascript+module'}),'index.js');
 const up=await cloudflare.request({method:'PUT',path:`/accounts/${id}/workers/scripts/${nome}`,body:form});
 return {script:up.result&&up.result.id,etag:up.result&&up.result.etag};}"""
open(os.path.join(D,"deploy-mcp.js"),"w",encoding="utf-8").write(js.replace("__W__",json.dumps(w,ensure_ascii=False)))
import gzip;print("worker",len(w.encode())//1024,"KB; gzip",len(gzip.compress(w.encode()))//1024,"KB")
