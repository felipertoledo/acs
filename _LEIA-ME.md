# CDV v0.31.0 — "Vermelho clínico" + correção do tempo de tranca

**Suíte 331/331 verde (18 arquivos).**

## Por que desta vez vai parecer novo
Na v0.30 eu mantive a mesma família de cor (verde) — e no modo escuro, que é o que você usa, o tema antigo **já era** verde-negro com menta. Resultado: "não mudou nada". Assumo. Agora mudou **tudo que dá pra mudar**:

- **Outra família de cor.** Vermelho carmim como marca (`#8B1E2D`) na barra lateral, hero e lombada; vermelho de ação (`#C0212F`, 6,0:1 com branco) em botões e links; **branco hospitalar e cinzas frios** como base. **Nenhum verde sobrou** — purguei 42 valores chumbados no CSS que a v0.30 tinha deixado.
- **Outra tipografia inteira.** **IBM Plex Sans** em toda a interface e títulos, **IBM Plex Mono** nos números clínicos. Sai a serifa, sai a Manrope.
- **Outras formas.** Botões **retangulares** de canto discreto (não pílula), cards **planos**, raios menores, item ativo da navegação em **pílula branca** sobre a barra vermelha, linha vermelha de identidade sob a barra superior.
- **Alergia = pulseira de hospital.** Faixa vermelha **sólida com texto branco** — como a pulseira que o paciente usa na enfermaria.
- **Ícone do app, favicon e selo da marca refeitos**: anel + cruz em vermelho. O ícone no teu celular muda.
- **Modo escuro** em grafite neutro (sem tinta verde), barra em vinho, vermelho-rosa como ação.
- Detalhe de segurança de uso: como o primário é vermelho, o botão **destrutivo virou contornado** (não preenchido), pra "Excluir" nunca se parecer com "Salvar".

## Correção: tempo de tranca (canto inferior esquerdo)
Provei a lógica do relógio de inatividade em teste automatizado (7 casos: nunca, 15 min, troca sem acumular, volta a nunca, disparo tranca, cofre trancado não arma, valores inválidos). A lógica estava certa; o problema estava na **ligação com a tela**: o `@change` podia ler o valor *anterior* do seletor e salvar a escolha antiga. Agora:
- a gravação **lê direto do `<select>`** (independe da ordem interna do Alpine);
- a aplicação no desbloqueio ficou num **bloco próprio** (não pode ser pulada por erro no perfil);
- em Configurações aparece **"Em vigor agora: …"** lido do próprio relógio;
- e o botão **"Bloquear cofre"** no canto inferior esquerdo ganhou um **selo vivo** (`nunca` / `15 min` / `1 h`) que muda na hora que você salva.

## Arquivos (16) — sobem juntos, qualquer ordem (nenhum novo no precache)
```
assets/css/tokens.css                 — paleta/tipografia (o coração)
assets/css/app.css                    — componentes + overrides
assets/img/favicon.svg                — novo
assets/img/icon-512.png               — novo
assets/img/icon-192.png               — novo
assets/img/apple-touch-icon.png       — novo
assets/img/icon-maskable-512.png      — novo
components/config.js                  — correção do idle + "em vigor"
components/setup-wizard.js            — cores inline
index.html                            — selo (anel+cruz), theme-color, selo do lock, boot do idle
manifest.webmanifest                  — cores do PWA
service-worker.js                     — v0.31.0
version.json                          — v0.31.0
tests/test_auth_idle.js               — novo
tests/test_resumo_clinico.js          — (faltava no repo)
```
Depois, no Android: **fecha o app por completo e reabre**. Pra o ícone novo aparecer na tela inicial, às vezes é preciso remover o atalho e "Adicionar à tela inicial" de novo.

## Teste
- [ ] Ao abrir: barra lateral **vermelha**, tipografia diferente (Plex), botões retangulares. Se ainda parecer igual, é cache — fecha e reabre.
- [ ] Configurações › Trancar o cofre: escolher **15 min** → toast + "Em vigor agora: 15 min" + selo no canto inferior esquerdo muda pra **15 min**. Recarregar a página, destrancar: selo continua 15 min. Voltar pra **Nunca** → selo `nunca`.
- [ ] Ficha com alergia: faixa **vermelha sólida com texto branco**.
- [ ] Modo escuro: grafite neutro, sem verde em lugar nenhum.
- [ ] Um botão "Excluir" qualquer: contornado em vermelho, não preenchido.
- [ ] Celular: ícone novo (anel + cruz) e barra de status vermelha.

## Nota
"Clínica Ribeiro Toledo": não tenho esse protótipo. Mantive o nome **Consultório do Vovô**; se quiser renomear a marca, é troca de texto em 3 lugares — me diz.
