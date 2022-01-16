import * as axs from "axios";
import * as cheerio from 'cheerio';
const axios = axs.default;
const url = "https://shikimori.one/api/";
import {options, getUserOutput, getAnimeOutput, getMangaOutput, getRanobeOutput} from './types'

export const Shikimori = {
    getUser:async (options:options) => {
        let user = (await axios.get(`${url}users/${options.name}`)).data;
        let userHistory = (await axios.get(`${url}users/${options.name}/history`)).data;
        let userObj:getUserOutput = {
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
            history: userHistory
        }
        return userObj;
    },
    
    getAnime:async (options:options):Promise<getAnimeOutput | undefined> =>{
        if(options.name && !options.id){
            let animeList = (await axios.get(encodeURI(`https://shikimori.one/animes/autocomplete/v2?search=${options.name}`))).data;
            let $ = cheerio.load(animeList);
            let animes:String[] = [];
            $('.b-db_entry-variant-list_item .info .name a').each((i, element) => {animes.push(element.attribs.href)});
            if(animes.length == 0) return undefined;
            let anime = animes[0].replace(/[^0-9]/g, '');
            try{
                return (await axios.get(`${url}animes/${anime}`)).data;
            }catch(err){
                return undefined;
            }
        }else if(!options.name && options.id || options.name && options.id){
            try{
                return (await axios.get(`${url}animes/${options.id}`)).data;
            }catch(err){
                return undefined;
            }
        }else{
            return undefined;
        }
    },

    getManga:async (options:options):Promise<getMangaOutput | undefined> =>{
        if(options.name && !options.id){
            let mangaList = (await axios.get(encodeURI(`https://shikimori.one/mangas/autocomplete/v2?search=${options.name}`))).data;
            let $ = cheerio.load(mangaList);
            let mangas:String[] = [];
            $('.b-db_entry-variant-list_item .info .name a').each((i, element) => {mangas.push(element.attribs.href)});
            if(mangas.length == 0) return undefined;
            let manga = mangas[0].replace(/[^0-9]/g, '');
            try{
                return (await axios.get(`${url}mangas/${manga}`)).data;
            }catch(err){
                return undefined;
            }
        }else if(!options.name && options.id || options.name && options.id){
            try{
                return (await axios.get(`${url}mangas/${options.id}`)).data;
            }catch(err){
                return undefined;
            }
        }else{
            return undefined;
        }
    },

    getRanobe:async (options:options):Promise<getRanobeOutput | undefined> =>{
        if(options.name && !options.id){
            let ranobeList = (await axios.get(encodeURI(`https://shikimori.one/ranobe/autocomplete/v2?search=${options.name}`))).data;
            let $ = cheerio.load(ranobeList);
            let ranobe:String[] = [];
            $('.b-db_entry-variant-list_item .info .name a').each((i, element) => {ranobe.push(element.attribs.href)});
            if(ranobe.length == 0) return undefined;
            let ranob = ranobe[0].replace(/[^0-9]/g, '');
            try{
                return (await axios.get(`${url}ranobe/${ranob}`)).data;
            }catch(err){
                return undefined;
            }
        }else if(!options.name && options.id || options.name && options.id){
            try{
                return (await axios.get(`${url}ranobe/${options.id}`)).data;
            }catch(err){
                return undefined;
            }
        }else{
            return undefined;
        }
    }
}