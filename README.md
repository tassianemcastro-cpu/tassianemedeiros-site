# Portfolio — Tassiane Medeiros

Site estático em HTML, CSS e JavaScript puro (sem frameworks, sem build, sem custo de hospedagem). Pronto para publicar no GitHub Pages com o domínio `tassianemedeiros.com`.

## Estrutura

```
.
├── index.html          → Home (pronta)
├── about.html           → About me (placeholder, a construir)
├── projects.html        → Personal projects (placeholder, a construir)
├── contact.html         → Send a message (placeholder, a construir)
├── 404.html              → página de erro personalizada
├── CNAME                 → domínio personalizado para o GitHub Pages
├── .nojekyll              → impede o GitHub de processar o site com Jekyll
├── css/style.css
├── js/main.js
└── assets/
    ├── logo.svg
    ├── hero.jpg
    ├── favicon-32.png / apple-touch-icon.png / icon-512.png
    └── projects/letrus.jpg, mamboo.jpg, terraform.jpg
```

## Como publicar no GitHub Pages (grátis)

### 1. Criar o repositório
1. Entre em [github.com](https://github.com) e crie um repositório novo (pode chamar-se `tassianemedeiros-site` ou similar). Pode ser público ou privado — o GitHub Pages funciona com ambos numa conta normal.
2. Não adicione README/gitignore automáticos (para não gerar conflitos).

### 2. Enviar os ficheiros
Na pasta deste projeto, no terminal:

```bash
git init
git add .
git commit -m "Primeira versão do site"
git branch -M main
git remote add origin https://github.com/SEU-UTILIZADOR/NOME-DO-REPO.git
git push -u origin main
```

(Se preferir, também pode arrastar os ficheiros diretamente na interface do GitHub, em "Add file → Upload files".)

### 3. Ativar o GitHub Pages
1. No repositório, vá a **Settings → Pages**.
2. Em "Build and deployment", escolha **Source: Deploy from a branch**.
3. Em "Branch", escolha **main** e a pasta **/ (root)**. Guarde.
4. O GitHub vai gerar um link tipo `https://seu-utilizador.github.io/nome-do-repo/` — confirme que o site abre aí primeiro.

### 4. Ligar o domínio tassianemedeiros.com
1. Ainda em **Settings → Pages**, em "Custom domain", escreva `tassianemedeiros.com` e guarde (o ficheiro `CNAME` já incluído neste projeto faz o mesmo, mas confirmar aqui garante que o GitHub valida o domínio).
2. No painel do seu registador de domínio (onde comprou o domínio), configure estes registos DNS:

   **Registos A** (para o domínio raiz `tassianemedeiros.com`), apontando para os 4 IPs do GitHub Pages:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **Registo CNAME** (para `www.tassianemedeiros.com`), apontando para:
   ```
   seu-utilizador.github.io
   ```

3. A propagação do DNS pode demorar entre alguns minutos e 24h.
4. Quando o domínio estiver validado, volte a **Settings → Pages** e ative a opção **Enforce HTTPS** (certificado SSL gratuito do GitHub).

## Próximos passos
- Construir as páginas **About me**, **Personal projects** e **Send a message** (atualmente são placeholders "coming soon").
- Substituir as imagens em `/assets` por versões em maior resolução, se tiver os ficheiros originais do Squarespace.
- Personalizar o texto do rodapé / redes sociais, se desejar.

## Notas técnicas
- A secção "Companies that already trusted my work" usa uma animação ligada ao scroll (não é um loop automático): o texto desliza da direita para a esquerda à medida que a secção passa pelo ecrã — efeito implementado em `js/main.js`.
- Todos os elementos principais têm um efeito de *fade-in* suave ao entrarem no ecrã durante o scroll.
- O site respeita a preferência `prefers-reduced-motion` do sistema operativo, desativando animações para quem as desativou no sistema.
- Totalmente responsivo (desktop, tablet e mobile, com menu hamburguer).
