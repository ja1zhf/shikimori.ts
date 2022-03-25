import * as axs from 'axios';
import * as cheerio from 'cheerio';
const axios = axs.default;
const url = 'https://shikimori.one/api/';
import {
  Options,
  getUserOutput,
  getAnimeOutput,
  getMangaOutput,
  getRanobeOutput,
  getCharacterOutput,
  getCalendarOutput,
} from './types';

export const Shikimori = {
  getUser: async (options: Options) => {
    const user = (await axios.get(`${url}users/${options.name}`)).data;
    const userHistory = (await axios.get(`${url}users/${options.name}/history`)).data;
    const friends = (await axios.get(`${url}users/${options.name}/friends`)).data;
    const clubs = (await axios.get(`${url}users/${options.name}/clubs`)).data;
    const favourites = (await axios.get(`${url}users/${options.name}/favourites`)).data;
    const userObj: getUserOutput = {
      id: user.id,
      nickname: user.nickname,
      avatar: user.avatar,
      image: user.image,
      last_online_at: user.last_online_at,
      url: user.url,
      name: user.name,
      sex: user.sex,
      years: user.full_years,
      last_online: user.last_online,
      website: user.website,
      location: user.location,
      banned: user.banned,
      stats: user.stats,
      history: userHistory,
      friends: friends,
      clubs: clubs,
      favourites: favourites,
    };
    return userObj;
  },

  getAnime: async (options: Options): Promise<getAnimeOutput | undefined> => {
    if (options.name && !options.id) {
      const animeList = (
        await axios.get(encodeURI(`https://shikimori.one/animes/autocomplete/v2?search=${options.name}`))
      ).data;
      const $ = cheerio.load(animeList);
      const animes: string[] = [];
      $('.b-db_entry-variant-list_item .info .name a').each((i, element) => {
        animes.push(element.attribs.href);
      });
      if (animes.length === 0) return undefined;
      const anime = animes[0].replace(/[^0-9]/g, '');
      try {
        return (await axios.get(`${url}animes/${anime}`)).data;
      } catch (err) {
        return undefined;
      }
    } else if ((!options.name && options.id) || (options.name && options.id)) {
      try {
        return (await axios.get(`${url}animes/${options.id}`)).data;
      } catch (err) {
        return undefined;
      }
    } else {
      return undefined;
    }
  },

  getManga: async (options: Options): Promise<getMangaOutput | undefined> => {
    if (options.name && !options.id) {
      const mangaList = (
        await axios.get(encodeURI(`https://shikimori.one/mangas/autocomplete/v2?search=${options.name}`))
      ).data;
      const $ = cheerio.load(mangaList);
      const mangas: string[] = [];
      $('.b-db_entry-variant-list_item .info .name a').each((i, element) => {
        mangas.push(element.attribs.href);
      });
      if (mangas.length === 0) return undefined;
      const manga = mangas[0].replace(/[^0-9]/g, '');
      try {
        return (await axios.get(`${url}mangas/${manga}`)).data;
      } catch (err) {
        return undefined;
      }
    } else if ((!options.name && options.id) || (options.name && options.id)) {
      try {
        return (await axios.get(`${url}mangas/${options.id}`)).data;
      } catch (err) {
        return undefined;
      }
    } else {
      return undefined;
    }
  },

  getRanobe: async (options: Options): Promise<getRanobeOutput | undefined> => {
    if (options.name && !options.id) {
      const ranobeList = (
        await axios.get(encodeURI(`https://shikimori.one/ranobe/autocomplete/v2?search=${options.name}`))
      ).data;
      const $ = cheerio.load(ranobeList);
      const ranobe: string[] = [];
      $('.b-db_entry-variant-list_item .info .name a').each((i, element) => {
        ranobe.push(element.attribs.href);
      });
      if (ranobe.length === 0) return undefined;
      const ranob = ranobe[0].replace(/[^0-9]/g, '');
      try {
        return (await axios.get(`${url}ranobe/${ranob}`)).data;
      } catch (err) {
        return undefined;
      }
    } else if ((!options.name && options.id) || (options.name && options.id)) {
      try {
        return (await axios.get(`${url}ranobe/${options.id}`)).data;
      } catch (err) {
        return undefined;
      }
    } else {
      return undefined;
    }
  },

  getCharacter: async (options: Options): Promise<getCharacterOutput | undefined> => {
    if (options.name && !options.id) {
      const charactersList = (
        await axios.get(encodeURI(`https://shikimori.one/characters/autocomplete/v2?search=${options.name}`))
      ).data;
      const $ = cheerio.load(charactersList);
      const characters: string[] = [];
      $('.b-db_entry-variant-list_item .info .name a').each((i, element) => {
        characters.push(element.attribs.href);
      });
      if (characters.length === 0) return undefined;
      const character = characters[0].replace(/[^0-9]/g, '');
      try {
        return (await axios.get(`${url}characters/${character}`)).data;
      } catch (err) {
        return undefined;
      }
    } else if ((!options.name && options.id) || (options.name && options.id)) {
      try {
        return (await axios.get(`${url}characters/${options.id}`)).data;
      } catch (err) {
        return undefined;
      }
    } else {
      return undefined;
    }
  },

  getCalendar: async (): Promise<getCalendarOutput> => {
    const calendar = (await axios.get(`${url}calendar`)).data;
    return calendar;
  },
};