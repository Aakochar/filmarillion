## Filmarillion

This is a test app with mocked data to show bubble chart with info about top IMDB movies.

[Website](https://aakochar.github.io/filmarillion/)

Mocked dataset was taken from [data.world](https://data.world/studentoflife/imdb-top-250-lists-and-5000-or-so-data-records)

Inspired by [vue-d3-network](https://github.com/emiliorizzo/vue-d3-network)

### Description

Each bubble represent a decade.
More films in a decade leads to a bigger bubble closer to center of screen.
If user clicks on bubble, chart shows second level - bubbles with movie names (size and position does not matter).

### Stack

- Vue.js
- D3-Force

#### Possible improvements

- Make it work with [Studio Ghibli Public API](https://ghibliapi.herokuapp.com/)
- Add possibility to switch to canvas renderer (as in vue-d3-network)
- Add resizeability
- Add drag-n-drop behavior
