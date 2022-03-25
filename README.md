# shikimori.ts

> shikimori.ts - JavaScript & TypeScript wrapper for shikimori.one

[![npm version](https://badge.fury.io/js/shikimori.ts.svg)](https://www.npmjs.com/package/shikimori.ts)

## Last update

- Added lists of friends, clubs and favorites to the `getUser()` function

## Features

- Full TypeScript support
- Support all platforms
- Easy to use

## Table of Contents

- [Quick start](#quick-start)
  - [Install](#install)
  - [Initialization](#initialization)
- [Methods](#methods)
  - [getUser](#getUser)
  - [getAnime](#getAnime)
  - [getManga](#getManga)
  - [getRanobe](#getRanobe)
  - [getCharacter](#getCharacter)
  - [getCalendar](#getCalendar)

## Quick start

### Install

#### npm

```shell
npm i shikimori.ts
```

#### yarn

```shell
yarn add shikimori.ts
```

### Initialization

#### JavaScript

```js
const { Shikimori } = require('shikimori.ts');
```

#### TypeScript

```ts
import { Shikimori } from 'shikimori.ts';
```

## Methods

### getUser

Returns the user object.


#### Options
- `id`
  - Type: `String`
  - Description: Shikimori user ID.
- `name`
  - Type: `String`
  - Description: Shikimori username.

#### Returns
- `Promise<Object>`

#### Example
```TS
Shikimori.getUser({ id: '823641' }).then(user => console.log(user));
// => {
//     id: 823641,
//     nickname: "simplname",
//     avatar: "https://...",
//     ...
// }
Shikimori.getUser({ name: 'simplname' }).then(user => console.log(user));
// => {
//     id: 823641,
//     nickname: "simplname",
//     avatar: "https://...",
//     ...
// }
```
* * *
### getAnime

Returns the anime object.


#### Options
- `id`
  - Type: `String`
  - Description: Shikimori anime ID.
- `name`
  - Type: `String`
  - Description: Shikimori anime name(you can also use Russian names).

#### Returns
- `Promise<Object>`

#### Example
```TS
Shikimori.getAnime({ id: '20' }).then(anime => console.log(anime));
// => {
//     id: 20,
//     name: "Naruto",
//     russian: "Наруто",
//     image: { ... },
//     ...
// }
Shikimori.getAnime({ name: 'Naruto' }).then(anime => console.log(anime));
// => {
//     id: 20,
//     name: "Naruto",
//     russian: "Наруто",
//     image: { ... },
//     ...
// }
```
* * *
### getManga

Returns the manga object.


#### Options
- `id`
  - Type: `String`
  - Description: Shikimori manga ID.
- `name`
  - Type: `String`
  - Description: Shikimori manga name(you can also use Russian names).

#### Returns
- `Promise<Object>`

#### Example
```TS
Shikimori.getManga({ id: '33327' }).then(manga => console.log(manga));
// => {
//     id: 33327,
//     name: "Tokyo Ghoul",
//     russian: "Токийский гуль",
//     image: { ... },
//     ...
// }
Shikimori.getManga({ name: 'Tokyo Ghoul' }).then(manga => console.log(manga));
// => {
//     id: 33327,
//     name: "Tokyo Ghoul",
//     russian: "Токийский гуль",
//     image: { ... },
//     ...
// }
```
* * *
### getRanobe

Returns the ranobe object.


#### Options
- `id`
  - Type: `String`
  - Description: Shikimori ranobe ID.
- `name`
  - Type: `String`
  - Description: Shikimori ranobe name(you can also use Russian names).

#### Returns
- `Promise<Object>`

#### Example
```TS
Shikimori.getRanobe({ id: '70399' }).then(ranobe => console.log(ranobe));
// => {
//     id: 70399,
//     name: "Seishun Buta Yarou Series",
//     russian: "Этот глупый свин",
//     image: { ... },
//     ...
// }
Shikimori.getRanobe({ name: 'Seishun Buta Yarou Series' }).then(ranobe => console.log(ranobe));
// => {
//     id: 70399,
//     name: "Seishun Buta Yarou Series",
//     russian: "Этот глупый свин",
//     image: { ... },
//     ...
// }
```
* * *
### getCharacter

Returns the character object.


#### Options
- `id`
  - Type: `String`
  - Description: Shikimori character ID.
- `name`
  - Type: `String`
  - Description: Shikimori character name(you can also use Russian names).

#### Returns
- `Promise<Object>`

#### Example
```TS
Shikimori.getCharacter({ id: '17' }).then(character => console.log(character));
// => {
//     id: 17,
//     name: "Naruto Uzumaki",
//     russian: "Наруто Узумаки",
//     image: { ... },
//     ...
// }
Shikimori.getCharacter({ name: 'Naruto Uzumaki' }).then(character => console.log(character));
// => {
//     id: 17,
//     name: "Naruto Uzumaki",
//     russian: "Наруто Узумаки",
//     image: { ... },
//     ...
// }
```
* * *
### getCalendar

Returns the animes array.

#### Returns
- `Promise<Array>`

#### Example
```TS
Shikimori.getCalendar().then(calendar => console.log(calendar));
// => [
//   {
//     next_episode: 1,
//     next_episode_at: "2022-01-13T09:00:00.000+03:00",
//     duration: 120,
//     anime: { ... },
//     ...
//   },
//   {
//     next_episode: 1,
//     next_episode_at: "2022-01-14T09:00:00.000+03:00",
//     duration: null,
//     anime: { ... },
//     ...
//   },
//   ...
// ]
```
* * *

&copy; Ja1z666