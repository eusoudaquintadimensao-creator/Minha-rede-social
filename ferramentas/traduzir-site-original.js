const {chromium}=require('playwright-core');const fs=require('fs');
const lang=process.argv[2];const idx=JSON.parse(fs.readFileSync('/workspace/homemcinza-cf/public/data/index.json'));
const dir='/workspace/homemcinza-cf/i18n/'+lang;fs.mkdirSync(dir,{recursive:true});
(async()=>{const b=await chromium.launch({executablePath:'/usr/bin/google-chrome'});const c=await b.newContext({locale:{en:'en-US',es:'es-ES',pt:'pt-BR'}[lang]});const pg=await c.newPage();
for(const p of idx.pages){const f=dir+'/'+p.s+'.json';if(fs.existsSync(f))continue;
 try{await pg.goto('https://homemcinza.com'+p.r,{waitUntil:'networkidle',timeout:40000});}catch(e){}
 await pg.waitForTimeout(1200);
 const d=await pg.evaluate(()=>{const m=document.querySelector('main')||document.body;const out=[];
  m.querySelectorAll('h1,h2,h3,h4,p,li,blockquote').forEach(e=>{if(e.closest('header,footer,nav,button'))return;if(e.tagName!=='LI'&&e.parentElement.closest('li,blockquote'))return;const x=e.innerText.trim().replace(/\s+/g,' ');if(x&&(!out.length||out[out.length-1].x!==x))out.push({t:e.tagName.toLowerCase(),x})});
  const h=m.querySelector('h1');return{t:h?h.innerText.trim():document.title,d:(document.querySelector('meta[name=description]')||{}).content||'',b:out}});
 fs.writeFileSync(f,JSON.stringify(d));}
await b.close();})();
