import * as axs from "axios";
import * as cheerio from 'cheerio';
const axios = axs.default;
const url = "https://shikimori.one/api/";

type options = {
    name?:string;
    id?:string;
};

const shikimori = {
    getUser:async (options:options) => {
        let user = (await axios.get(`${url}users/${options.name}`)).data;
        let userHistory = (await axios.get(`${url}users/${options.name}/history`)).data;
        let userObj = {
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
    
    getAnime:async (options:options) =>{
        let animeList = (await axios.get(`https://shikimori.one/animes/autocomplete/v2?search=${options.name}`)).data;
        let $ = cheerio.load(animeList);
        let animes:string[] = [];
        $('.b-db_entry-variant-list_item .info .name a').each((i, element) => {animes.push(element.attribs.href)});
        if(animes.length == 0) return null;
        // for(let anime in animes){
        //     console.log(anime)
        // }
        console.log(animes);
    },

    getManga:async (options:options) =>{

    },

    getRanobe:async (options:options) =>{

    }
}

shikimori.getAnime({ name: "horimiya" }).then(response => console.log(response))