# HUD de Valorant para o Spectra (estilo VCT CN)

Overlay de transmissão 1920×1080 para OBS, em português, alimentado pelo [Spectra](https://valospectra.com). Funciona com o Spectra Client oficial: você digita o código da partida no Client e usa o mesmo código no link da HUD.

## O que vem

| Tela | Arquivo | O que faz |
| --- | --- | --- |
| HUD in-game | `vctcn.html` | Placar, cartões dos jogadores, tabela de compra, histórico de rodadas, quadro de round win (ace, clutch, flawless, econômico), pausa tática/técnica, destaque de 1x1, contorno dourado no jogador observado, comunicação ao vivo (listen-in) e a **seleção de agentes**, que entra e sai sozinha |
| Veto de mapas | `mapban.html` | Ligado à ferramenta de veto do Spectra; MD1, MD3, MD5 e personalizado |
| Resumo pós-mapa | `breakdown.html` | `?tipo=times` (MVP e jogadores) ou `?tipo=mapa` (first kills, ACS médio, pós-plant, rodadas econômicas, clutches, trocas e rodada a rodada); fundo transparente |
| Página inicial | `index.html` | Monta os links a partir dos códigos |

## Como usar

1. Publique a pasta inteira (Netlify, GitHub Pages ou qualquer hospedagem estática) ou abra os arquivos direto no PC.
2. No OBS, adicione **fontes de navegador de 1920 × 1080** com os links:

```
vctcn.html?groupCode=CODIGO
mapban.html?sessionId=SESSAO
breakdown.html?tipo=times&groupCode=CODIGO
breakdown.html?tipo=mapa&groupCode=CODIGO
```

3. `CODIGO` é o código da partida no Spectra Client (troque a cada partida e conecte antes da seleção de agentes). `SESSAO` é o código da sessão de veto.

Opções no link:

- `&demo`: prévia com dados inventados. `vctcn.html?demo&agentes` mostra a seleção de agentes.
- `&debug`: mostra no canto o que o Spectra está mandando (fase, jogadores, placar).
- `&ouvir=l` ou `&ouvir=r`: força a comunicação ao vivo de um time.
- `&saida=N`: no veto, segundos até sair depois de terminar (`0` = não sai).

As outras opções ficam em `config.js`: servidor (Brasil usa NA), moldura da câmera e comunicação ao vivo.

## Personalizar

- **Cores:** variáveis `--def-*` (defesa) e `--att-*` (ataque) no topo de `vctcn.html`; `mapban.html` e `breakdown.html` usam as mesmas.
- **Logo:** `Resources/Logos/looking.png`.
- **Patrocinadores:** vêm do Spectra Client. Para usar arquivos locais, coloque `Sponsor1.png`, `Sponsor2.png`… em `Resources/Sponsors`.
- **Arte do round win:** `Resources/RoundWin/` (`normal`, `ace`, `clutch`, `flawless`, `economico`), 914 × 338.
- **Fontes:** a HUD foi feita com Foundry Gridnik e Tungsten, que são pagas e **não vêm aqui**. Se você tiver a licença, coloque em `Resources/` com os nomes `FoundryGridnik-Regular.otf`, `FoundryGridnik-Bold.otf`, `FoundryGridnik-ExtraBold.otf` e `Tungsten-Bold.ttf`. Sem elas, a HUD usa uma fonte reserva do sistema.

## Créditos e licenças

- Código desta HUD: licença MIT (`LICENSE`).
- Ícones de função dos agentes em `Resources/Funcoes/` vêm do [Spectra-Frontend-VAL26](https://github.com/nobiiVAL/Spectra-Frontend-VAL26) (nobii / Purple Shark UG), sob a Elastic License 2.0. O texto completo está em `licencas/ELv2-Spectra-Frontend-VAL26.md`. A lógica de rodadas especiais, 1x1, veto e resumo segue o mesmo front como referência.
- Imagens de agentes, armas e mapas pertencem à Riot Games. Este projeto não é endossado pela Riot Games e não reflete as opiniões da Riot Games ou de qualquer pessoa oficialmente envolvida na produção ou gestão de propriedades da Riot Games. Riot Games e todas as propriedades associadas são marcas registradas da Riot Games, Inc.
- Spectra é um projeto de terceiros; o uso dos servidores dele segue as regras do Spectra.
