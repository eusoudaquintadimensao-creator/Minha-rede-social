# Homem Cinza — versão Cloudflare

Site estático (PWA) de homemcinza.com, refeito com layout novo: abas embaixo no celular, barra lateral e grade no computador.
A primeira aba dá acesso ao **Conhecimento Solar** e ao **Podcast Sol Nascente**.

- `pages.json`: conteúdo extraído do site original (texto de 148 páginas).
- `build.py`: gera `public/data/*.json` e as seções.
- `public/`: o site (index.html, app.js, style.css, sw.js).
- Deploy: `npx wrangler deploy` (Workers static assets, nome `homem-cinza`).

## Deploy atual
Worker `homem-cinza` (sem assets binding: os arquivos de texto, fontes e o selo vão embutidos no script; jpg/mp3/mp4 redirecionam para o host original mist-apex-beam-pilot.grok.me).
Prévia: https://homem-cinza.conhecimento-solar.workers.dev
