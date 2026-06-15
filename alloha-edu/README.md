# Alloha Edu — Portal de Educação

Portal completo com cursos, Revista Global (YouTube), CRPIR e agenda de eventos.

## Estrutura de arquivos

```
alloha-edu/
├── index.html       ← Estrutura da página
├── style.css        ← Estilos e design
├── app.js           ← Lógica e dados
└── assets/
    └── favicon.svg  ← Ícone do site
```

## Como publicar no GitHub Pages (gratuito)

### Passo 1 — Crie um repositório no GitHub
1. Acesse [github.com](https://github.com) e faça login (ou crie uma conta gratuita)
2. Clique em **New repository**
3. Nome sugerido: `alloha-edu`
4. Marque **Public**
5. Clique em **Create repository**

### Passo 2 — Faça upload dos arquivos
Na página do repositório recém-criado:
1. Clique em **Add file → Upload files**
2. Arraste os arquivos `index.html`, `style.css`, `app.js` e a pasta `assets/`
3. Clique em **Commit changes**

### Passo 3 — Ative o GitHub Pages
1. Vá em **Settings** (no repositório)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione `Deploy from a branch`
4. Em **Branch**, selecione `main` e pasta `/ (root)`
5. Clique em **Save**

### Passo 4 — Acesse o site
Após 1-2 minutos, o site estará disponível em:
```
https://SEU_USUARIO.github.io/alloha-edu/
```

---

## Domínio personalizado (opcional)

Se quiser usar um domínio próprio (ex: `alloha.edu.br`):
1. Em **Settings → Pages → Custom domain**, insira seu domínio
2. Configure o DNS do seu domínio com um registro `CNAME` apontando para `SEU_USUARIO.github.io`

---

## Como adicionar novos cursos

Abra `app.js` e localize o array `COURSES`. Adicione um novo objeto:

```js
{ id: 13, title: 'Nome do curso', cat: 'direitos', emoji: '📖',
  bg: '#E1F5EE', cc: '#0F6E56', level: 'Básico', dur: '4h', prog: 0 },
```

Categorias disponíveis: `direitos`, `tecnologia`, `cultura`, `renda`, `saude`

## Como adicionar eventos

Abra `app.js` e localize o array `EVENTS`. Adicione:

```js
{ day: 15, month: 7, year: 2026, title: 'Nome do evento',
  time: '19h00', local: 'Local ou Link',
  type: 'Online', typeBg: '#E1F5EE', typeColor: '#0F6E56', cat: 'direitos' },
```

> Meses: 0 = Janeiro, 1 = Fevereiro, ... 11 = Dezembro

---

## Integração com YouTube

O portal carrega automaticamente os vídeos mais recentes do canal `@RevistaGlobal_BR` via RSS.
Caso o carregamento falhe (CORS), vídeos de exemplo são exibidos.

Para trocar o canal, abra `app.js` e altere:
```js
const YT_CHANNEL = 'UC_Zuou7cmvoqIj_n0g3hWFw';
```
Substitua pelo ID do canal desejado.

---

Desenvolvido para o **Instituto Umoja / Alloha Edu** — 2026
