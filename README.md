# KK-Bracket

Käy katsomassa ajossa: [https://kk-bracket.netlify.app](https://kk-bracket.netlify.app)

Nopia custom-UI NHL:n Playoff Bracket -skabaan [Koodiklinikan](https://koodiklinikka.fi)\* liigalle.

Tehty, koska NHL:n oma bracket-webbisivu näyttää pienen laatikon keskellä näyttöä eikä oo helppoa hakea aina sarjojen päätyttyä tilanteita.

## Saako tän omalle liigalle myös?

No tokihan! Kopsaa koodi ja navigoi `app.js`. Vaihda `LEAGUE_ID`:ksi oman liigasi NHL Bracket Challenge ID ja `LEAGUE_DISPLAY_NAME`:ksi oman liigasi nimi. Ole hyvä!

Arvostan jos säilytät footerissa linkitykset tähän repositoryyn ja Juhiksen sivuille. Pakko ei kuitenkaan lisenssin puitteissa ole.

## Mitä jos tää lakkaa toimimasta?

On mahdollista, että NHL sulkee nuo rajapinnat, jolloin nämä bracket-työkalut hajoaa samalla. Jos näin käy, toivottavasti NHL kehittää hyvät työkalut tilalle.

## Dev-juttui

Vanilla-JS:ää, HTML:ää ja CSS:ää ilman mitään krumeluureja.

Käyttää NHL Bracket Challengen API-rajapintoja, jotka näytti olevan auki.

## Contribuoi

Saa tehä pullareita jotka lisää/korjaa/parantelee. Erityisesti jos teet siitä nätimmän kuin se on nyt.

## Lokaalia testausta

Jos tahtoo testailla lokaalisti eri tiloja ja tilanteita, `tests/`-kansiosta löytyy mock-fikstuurit:

- `mock-api.json` — 1. kierros kesken (kolme sarjaa auki)
- `mock-api-completed.json` — koko turnaus pelattu (BOS voittaa Cupin)

Käynnistä json-server halutulla fikstuurilla ja avaa `index.html?mock` selaimessa — `?mock`-parametri vaihtaa `app.js`:n URLit automaattisesti osoittamaan `http://localhost:3000`:een.

```
npx json-server tests/mock-api.json
```

Muista käynnistää `json-server` uusiksi kun vaihdat fikstuuria (se ei hot-reloadaa).

## Muut huomiot

Kiitos lehtulle APIen kaivamisesta ja koodikontribuutiosta!

Kiitos Antille CSS:stä joka mahdollistaa mobiilikäytön!

Kiitos Alexille XSS-injektion torjumisesta!

Kiitos Nikolle dark modesta ja koodi- sekä tyyliparannuksista!

\* Koodiklinikka on vallan mukava suomalainen ohjelmistokehittäjien ja siitä kiinnostuneiden yhteisö. Meitä on reilu 8000 Slackissa ja #penkkiurheilu-kanavalla seurataan lätkää suurella intohimolla.

### Koodiklinikan arkistot

- [2025](https://kk-bracket.netlify.app/archive/2025/2025.html)
- [2024](https://kk-bracket.netlify.app/archive/2024/2024.html)
- [2023](https://kk-bracket.netlify.app/archive/2023/2023.html)
