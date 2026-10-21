# HUD Valorant · NaVTSTYLE para o Spectra

Overlay de transmissão de Valorant no estilo VCT CN, em português, para usar com o [Spectra](https://valospectra.com). Ele funciona como o front do Spectra: um observador roda o **Spectra Client**, o **Spectra Server** monta o estado da partida, e esta HUD recebe tudo a cada 100 ms e desenha na tela.

- [Spectra Client](https://github.com/ValoSpectra/Spectra-Client): roda no PC do observador e envia os dados do jogo.
- [Spectra Server](https://github.com/ValoSpectra/Spectra-Server): recebe os dados e reconstrói a partida. Você pode usar o servidor oficial (`https://na.valospectra.com:5200` para o Brasil).
- **Esta HUD**: o front que aparece na transmissão.

## Telas

Cada tela é uma fonte de navegador de **1920 × 1080** no OBS.

| Tela | Endereço | Parâmetro |
| --- | --- | --- |
| Overlay in-game | `/overlay/` | `?groupCode=CODIGO` |
| Seleção de agentes | `/agent-select/` | `?groupCode=CODIGO` |
| Veto de mapas | `/mapban/` | `?sessionId=SESSAO` |
| Resumo dos jogadores (pós-mapa) | `/team-breakdown/` | `?groupCode=CODIGO` |
| Resumo do mapa (pós-mapa) | `/map-breakdown/` | `?groupCode=CODIGO` |
| Overlay + seleção de agentes juntos | `/autoswitch/` | `?groupCode=CODIGO` |

- `CODIGO` é o código da partida que você digita no Spectra Client. `SESSAO` é o código da sessão da ferramenta de veto do Spectra.
- **Overlay in-game:** placar, cartões dos jogadores, compra, histórico de rodadas, round win (ace, clutch, flawless, econômico), pausa tática e técnica, destaque de 1x1, jogador observado em dourado e comunicação ao vivo (listen-in).
- **Seleção de agentes:** aparece sozinha durante a seleção e some quando o jogo começa. Conecte o Spectra Client antes da seleção.
- **Resumos pós-mapa:** usam as estatísticas do Spectra, que chegam depois que o mapa termina. O fundo é transparente, para você colocar a sua imagem atrás no OBS.

Opções que valem em qualquer link: `&demo` (prévia com dados inventados), `&debug` (mostra o que o Spectra está mandando), `&ouvir=l` ou `&ouvir=r` (força a comunicação ao vivo de um time), `&jogadores=Nick#TAG,Nick2#TAG2…` (jogadores da comunicação ao vivo quando o Spectra não manda a lista; use `%23` no lugar do `#` no link) e `&saida=N` (no veto, segundos até sair depois de terminar; `0` = não sai).

## Usar sem instalar

O site pronto fica em **https://navtsptbr.github.io/HUD-VALORANT-NAVTSTYLE-SPECTRA/**. Basta colar no OBS, por exemplo:

```
https://navtsptbr.github.io/HUD-VALORANT-NAVTSTYLE-SPECTRA/overlay/?groupCode=CODIGO
```

A página inicial monta todos os links a partir do código.

## Hospedar a sua própria (Docker Compose)

Crie uma pasta com uma pasta `config` dentro:

```
mkdir -p hud-valorant/config
cd hud-valorant
```

Crie o arquivo `docker-compose.yml`:

```
---
services:
  hud-valorant:
    image: ghcr.io/navtsptbr/hud-valorant-navtstyle-spectra:latest
    ports:
      - "3000:80"
    volumes:
      - ./config:/usr/share/nginx/html/config
```

Troque `3000` se quiser outra porta. Dentro de `config`, crie o `config.json` (o exemplo completo, com todas as cores, está em [`config/config.json`](config/config.json)):

```
{
  "servidor": "https://na.valospectra.com:5200",
  "mapbanServidor": "https://mapban-socket.valospectra.com",
  "statsServidor": "https://stats.valospectra.com",
  "extrasServidor": "https://eu-extras.valospectra.com",
  "logo": "Resources/Logos/looking.png",
  "patrocinadores": [],
  "trocaPatrocinio": 6,
  "camera": false,
  "listenIn": true,
  "cores": { "def-hi": "#6238d6", "att-hi": "#e05924" }
}
```

Depois rode `docker compose up -d`. A HUD fica em `http://localhost:3000`, com as telas em `/overlay/`, `/agent-select/` etc.

Também dá para hospedar como site estático (GitHub Pages, Netlify) ou abrir os arquivos direto no PC. Abrindo pelo PC, o navegador não lê o `config.json`; nesse caso edite o `config.js`.

## Configuração (`config/config.json`)

| Chave | O que faz |
| --- | --- |
| `servidor` | Spectra Server (porta do overlay). Brasil: `https://na.valospectra.com:5200` |
| `mapbanServidor`, `statsServidor`, `extrasServidor` | Servidores do veto e das estatísticas do Spectra |
| `logo` | Logo do topo (seleção de agentes, veto e resumos) |
| `patrocinadores`, `trocaPatrocinio` | Artes do bloco do canto, se o Spectra Client não mandar patrocinadores, e segundos entre elas |
| `fase` | Texto do canto superior direito (vazio usa o nome do torneio do Spectra) |
| `camera` | Moldura da câmera do jogador observado |
| `listenIn` | Comunicação ao vivo (liga e desliga pelo Spectra Client) |
| `destaque1x1`, `quadroVitoria`, `corPorLado` | Destaque de 1x1, quadro de round win e cor por lado (defesa / ataque) |
| `cores` | Qualquer cor da HUD: `def-*` é a defesa, `att-*` o ataque e `brand-*` a marca |

## Fontes

A HUD usa **Foundry Gridnik** (Regular, Bold e ExtraBold) e **Tungsten** (Bold), que já vêm em `Resources/`. As licenças das fontes ficam em `licencas/`.

## Créditos e licenças

- Código desta HUD: MIT (`LICENSE`).
- Fontes Foundry Gridnik e Tungsten: licenciadas pelo autor do projeto; os termos ficam em `licencas/` e o MIT não se aplica a elas.
- Ícones de função em `Resources/Funcoes/`: [Spectra-Frontend-VAL26](https://github.com/nobiiVAL/Spectra-Frontend-VAL26) (nobii / Purple Shark UG), Elastic License 2.0, texto em `licencas/`.
- Spectra é um projeto de terceiros, e o uso dos servidores dele segue as regras do Spectra.

# AVISO

Este projeto não é endossado pela Riot Games e não reflete as opiniões da Riot Games ou de qualquer pessoa oficialmente envolvida na produção ou gestão de propriedades da Riot Games. Riot Games e todas as propriedades associadas são marcas registradas da Riot Games, Inc.
