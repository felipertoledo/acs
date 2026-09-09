# PUBLICAR E INSTALAR O APLICATIVO — iPhone e Android

**Ficha do ACS v2.5 · Programa Municipal de Crônicos e Rastreamento**

---

# 1. Por que o iPhone precisa de um endereço

No iPhone, tocar num arquivo `.html` abre a pré-visualização do sistema, que **não executa
aplicativos**. O Safari do iPhone não abre arquivo local como o Chrome do Android faz. Não é
configuração: é assim que a Apple desenhou o sistema.

A saída é publicar o aplicativo num endereço da internet e cada pessoa **adicionar à tela de
início**. A partir daí ele abre pelo ícone, funciona sem internet e o GPS passa a funcionar.

> **Isso não muda a proteção de dados.** O que fica publicado é o aplicativo **vazio** — como
> um app numa loja. Ele não tem conexão com servidor nenhum: não envia, não recebe, não sincroniza.
> Os dados nascem e morrem no aparelho, e saem só pelo arquivo exportado. Publicar o aplicativo é
> distribuir a ferramenta, não os dados.

---

# 2. O que está no pacote

| Arquivo | O que é |
|---|---|
| `index.html` | O aplicativo inteiro (a mesma coisa que `ficha-acs-app.html`) |
| `sw.js` | Guarda o aplicativo no aparelho para abrir sem internet. Não toca em dado de paciente |
| `manifest.json` | Diz ao celular como instalar: nome, ícone, cor, orientação |
| `icon-192.png` e `icon-512.png` | Ícone da tela de início |

Os cinco arquivos ficam **na mesma pasta**, com esses nomes exatos.

---

# 3. Onde publicar — três opções, da mais simples à mais institucional

## Opção A — GitHub Pages (grátis, 10 minutos, recomendada para começar)

Você já tem conta no GitHub e um site publicado por lá. O caminho é o mesmo:

1. No GitHub, **New repository** → nome `ficha-acs` → público → Create.
2. **Add file → Upload files** → arraste os cinco arquivos do pacote → Commit.
3. **Settings → Pages** → em *Source* escolha *Deploy from a branch* → branch `main`, pasta `/ (root)`
   → Save.
4. Em um ou dois minutos o endereço aparece na mesma tela:
   `https://SEU-USUARIO.github.io/ficha-acs/`

Para atualizar o aplicativo depois, é só subir o novo `index.html` por cima. Quem já instalou
recebe a versão nova na próxima abertura com internet.

## Opção B — Site da prefeitura

Peça ao responsável pelo site que crie uma pasta (por exemplo `/saude/ficha-acs/`) e coloque os
cinco arquivos nela. O endereço fica com o domínio do município, que é o mais adequado para
documento oficial. Requisito: o site precisa ser `https` (com cadeado) — senão o GPS e o
compartilhamento não funcionam.

## Opção C — Servidor da DRS ou da SES

Se a DRS-XIV quiser oferecer o aplicativo à região inteira, pode hospedar em endereço dela. É o
caminho para o piloto multimunicipal.

> Qualquer das três serve. O que não serve: Google Drive, OneDrive e WhatsApp. Eles mostram o arquivo
> como texto, não como aplicativo.

---

# 4. Como cada ACS instala

## iPhone

1. Abra o endereço no **Safari** (tem que ser o Safari; no Chrome do iPhone o botão de instalar não aparece).
2. Toque em **Compartilhar** — o quadrado com a seta para cima, na barra de baixo.
3. Role a lista e toque em **Adicionar à Tela de Início**.
4. Toque em **Adicionar**. O ícone "Ficha ACS" aparece entre os aplicativos.
5. **Abra uma vez com internet.** Depois disso funciona sem sinal.

## Android

1. Abra o endereço no **Chrome**.
2. Toque nos **três pontinhos** e em **Adicionar à tela inicial** (ou **Instalar aplicativo**, se aparecer).
3. Confirme. O ícone aparece.
4. **Abra uma vez com internet.** Depois disso funciona sem sinal.

## Como saber que deu certo

Ao abrir pelo ícone, a tela de senha mostra **versão 2.5** e a dica de instalação some sozinha.
Se a dica continuar aparecendo, o aplicativo foi aberto pelo navegador, não pelo ícone.

---

# 5. Regras que continuam valendo

- **Os dados ficam só no aparelho.** Se apagar o aplicativo ou limpar o navegador sem exportar, os
  dados somem. Exportar toda semana é a proteção.
- **Cada aparelho tem os seus dados.** Instalar no celular novo não traz as fichas do antigo — a
  cópia de segurança faz isso.
- **Exportar e entregar** continua igual: gerar arquivo → cabo USB (ou o menu de compartilhar, que
  agora funciona) → colar na planilha → UBS confirma → apagar exportadas.
- **iPhone:** o sistema pode apagar dados de sites pouco usados depois de alguns dias sem abrir.
  Aplicativo instalado pela tela de início é preservado, mas a regra de exportar toda semana existe
  por isso também.
- **Não circular o endereço em grupo aberto.** O aplicativo é vazio, mas o endereço é da equipe.

---

# 6. Para a coordenação: o que muda em relação à versão de arquivo

| | Arquivo `.html` por USB | Publicado com endereço |
|---|---|---|
| Android | Funciona, com limitações de GPS e gravação | Funciona por completo |
| iPhone | **Não funciona** | Funciona por completo |
| GPS | Bloqueado pelo Chrome em arquivo local | Funciona |
| Compartilhar arquivo | Depende do aparelho | Funciona |
| Atualização | Reenviar o arquivo a cada pessoa | Automática na próxima abertura com internet |
| Dados de paciente | No aparelho | No aparelho — nada muda |
| Infraestrutura | Nenhuma | Uma pasta num site `https` |

A versão em arquivo continua disponível para quem preferir, e é a mesma coisa.

---

*Elaboração técnica: Felipe Ribeiro Toledo — Médico — CRM-SP 216.986 · setembro de 2026*
