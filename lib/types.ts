export type options = {
    name?:String;
    id?:String;
};

export type getUserOutput = {
    id: Number;
    nickname: String;
    avatar: String;
    image: {
        [x in "x160" | "x148" | "x80" | "x64" | "x48" | "x32" | "x16"]: String;
    };
    last_online_at: String;
    url: String;
    name: String;
    sex: String;
    years: Number;
    last_online: String;
    website: String;
    location: String;
    banned: Boolean;
    stats: {
        statuses: {
            anime: [
                {
                    id: Number;
                    grouped_id: String;
                    name: String;
                    size: Number;
                    type: String;
                }
            ];
            manga: [
                {
                    id: Number;
                    grouped_id: String;
                    name: String;
                    size: Number;
                    type: String;
                }
            ];
        };
        full_statuses: {
            anime: [
                {
                    id: Number;
                    grouped_id: String;
                    name: String;
                    size: Number;
                    type: String;
                }
            ];
            manga: [
                {
                    id: Number;
                    grouped_id: String;
                    name: String;
                    size: Number;
                    type: String;
                }
            ];
        };
        scores: {
            anime: [
                {
                    name: String;
                    value: Number
                }
            ];
            manga: [
                {
                    name: String;
                    value: Number
                }
            ];
        };
        types: {
            anime: [
                {
                    name: String;
                    value: Number
                }
            ];
            manga: [
                {
                    name: String;
                    value: Number
                }
            ];
        };
        ratings: {
            anime: [
                {
                    name: String;
                    value: Number
                }
            ];
        };
        has_anime?: Boolean;
        has_manga?: Boolean;
        genres: any[];
        studios: any[];
        publishers: any[];
        activity: [
            {
                name: Number[];
                value: Number
            }
        ];
    };
    history: [
        {
            id: Number;
            created_at: String;
            description: String;
            target: {
                id: Number;
                name: String;
                russian: String;
                image: {
                    [x in "original" | "preview" | "x96" | "x48" ]: String;
                };
                url: String;
                kind: String;
                score: String;
                status: String;
                episodes: Number;
                episodes_aired: Number;
                aired_on: String;
                released_on: String;
            }
        }
    ]
};

export type getAnimeOutput = {
    id: Number;
    name: String;
    russian: String;
    image: {
        original: String;
        preview: String;
        x96: String;
        x48: String
    };
    url: String;
    kind: String;
    score: String;
    status: String;
    episodes: Number;
    episodes_aired: Number;
    aired_on: String;
    released_on: String;
    rating: String;
    english: String[];
    japanese: String[];
    synonyms: String[];
    license_name_ru: String;
    duration: Number;
    description: String;
    description_html: String;
    description_source: any | null;
    franchise: String;
    favoured: Boolean;
    anons: Boolean;
    ongoing: Boolean;
    thread_id: Number;
    topic_id: Number;
    myanimelist_id: Number;
    rates_scores_stats: [
        {
            name: Number;
            value: Number
        }
    ];
    rates_statuses_stats: [
        {
            name: String;
            value: Number
        }
    ];
    updated_at: String;
    next_episode_at: String;
    fansubbers: String[];
    fandubbers: String[];
    licensors: String[];
    genres: [
        {
            id: Number;
            name: String;
            russian: String;
            kind: String
        }
    ];
    studios: [
        {
            id: Number;
            name: String;
            filtered_name: String;
            real: Boolean;
            image: String
        }
    ];
    videos: [
        {
            id: Number;
            url: String;
            image_url: String;
            player_url: String;
            name: String;
            kind: String;
            hosting: String
        }
    ];
    screenshots: [
        {
            original: String;
            preview: String
        }
    ];
    user_rate: any | null;
};

export type getMangaOutput = {
    id: Number;
    name: String;
    russian: String;
    image: {
        original: String;
        preview: String;
        x96: String;
        x48: String
    };
    url: String;
    kind: String;
    score: String;
    status: String;
    volumes: Number;
    chapters: Number;
    aired_on: String;
    released_on: String;
    english: String[];
    japanese: String[];
    synonyms: String[];
    license_name_ru: String;
    description: String;
    description_html: String;
    description_source: any | null;
    franchise: String;
    favoured: Boolean;
    anons: Boolean;
    ongoing: Boolean;
    thread_id: Number;
    topic_id: Number;
    myanimelist_id: Number;
    rates_scores_stats: [
        {
            name: Number;
            value: Number
        }
    ];
    rates_statuses_stats: [
        {
            name: String;
            value: Number
        }
    ];
    licensors: String[];
    genres: [
        {
            id: Number;
            name: String;
            russian: String;
            kind: String
        }
    ];
    publishers: [
        {
            id: Number;
            name: String
        }
    ];
    user_rate: any | null;
};

export type getRanobeOutput = {
    id: Number;
    name: String;
    russian: String;
    image: {
        original: String;
        preview: String;
        x96: String;
        x48: String
    };
    url: String;
    kind: String;
    score: String;
    status: String;
    volumes: Number;
    chapters: Number;
    aired_on: String;
    released_on: String;
    english: String[];
    japanese: String[];
    synonyms: String[];
    license_name_ru: String;
    description: String;
    description_html: String;
    description_source: String;
    franchise: String;
    favoured: Boolean;
    anons: Boolean;
    ongoing: Boolean;
    thread_id: Number;
    topic_id: Number;
    myanimelist_id: Number;
    rates_scores_stats: [
        {
            name: Number;
            value: Number
        }
    ];
    rates_statuses_stats: [
        {
            name: String;
            value: Number
        }
    ];
    licensors: String[];
    genres: [
        {
            id: Number;
            name: String;
            russian: String;
            kind: String
        }
    ];
    publishers: [
        {
            id: Number;
            name: String
        }
    ];
    user_rate: any | null
};