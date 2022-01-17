# shikimori.ts

> shikimori.ts - JavaScript & TypeScript wrapper for shikimori.one

[![npm version](https://badge.fury.io/js/shikimori.ts.svg)](https://www.npmjs.com/package/shikimori.ts)

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

## Quick start

### Install

#### npm

```shell
npm i shikimori.ts
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
//     image: { ... }
//     ...
// }
Shikimori.getRanobe({ name: 'Seishun Buta Yarou Series' }).then(ranobe => console.log(ranobe));
// => {
//     id: 70399,
//     name: "Seishun Buta Yarou Series",
//     russian: "Этот глупый свин",
//     image: { ... }
//     ...
// }
```
* * *

&copy; Ja1z666