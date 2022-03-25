export type Options = {
  name?: string;
  id?: string;
};

export type getUserOutput = {
  id: number;
  nickname: string;
  avatar: string;
  image: {
    [x in 'x160' | 'x148' | 'x80' | 'x64' | 'x48' | 'x32' | 'x16']: string;
  };
  last_online_at: string;
  url: string;
  name: string;
  sex: string;
  years: number;
  last_online: string;
  website: string;
  location: string;
  banned: boolean;
  stats: {
    statuses: {
      anime: [
        {
          id: number;
          grouped_id: string;
          name: string;
          size: number;
          type: string;
        },
      ];
      manga: [
        {
          id: number;
          grouped_id: string;
          name: string;
          size: number;
          type: string;
        },
      ];
    };
    full_statuses: {
      anime: [
        {
          id: number;
          grouped_id: string;
          name: string;
          size: number;
          type: string;
        },
      ];
      manga: [
        {
          id: number;
          grouped_id: string;
          name: string;
          size: number;
          type: string;
        },
      ];
    };
    scores: {
      anime: [
        {
          name: string;
          value: number;
        },
      ];
      manga: [
        {
          name: string;
          value: number;
        },
      ];
    };
    types: {
      anime: [
        {
          name: string;
          value: number;
        },
      ];
      manga: [
        {
          name: string;
          value: number;
        },
      ];
    };
    ratings: {
      anime: [
        {
          name: string;
          value: number;
        },
      ];
    };
    has_anime?: boolean;
    has_manga?: boolean;
    genres: any[];
    studios: any[];
    publishers: any[];
    activity: [
      {
        name: number[];
        value: number;
      },
    ];
  };
  history: [
    {
      id: number;
      created_at: string;
      description: string;
      target: {
        id: number;
        name: string;
        russian: string;
        image: {
          [x in 'original' | 'preview' | 'x96' | 'x48']: string;
        };
        url: string;
        kind: string;
        score: string;
        status: string;
        episodes: number;
        episodes_aired: number;
        aired_on: string;
        released_on: string;
      };
    },
  ];
  friends: [
    {
      id: number;
      nickname: string;
      avatar: string;
      image: {
        [x in 'x160' | 'x148' | 'x80' | 'x64' | 'x48' | 'x32' | 'x16']: string;
      };
      last_online_at: string;
      url: string;
    }
  ];
  clubs: [
    {
      id: number;
      name: string;
      logo: {
        [x in 'original' | 'main' | 'x96' | 'x73' |'x48']: string;
      };
      is_censored: boolean;
      join_policy: string;
      comment_policy: string;
    }
  ];
  favourites: {
    animes: [
      {
        id: number;
        name: string;
        russian: string;
        image: string;
        url: string;
      }
    ];
    mangas: [
      {
        id: number;
        name: string;
        russian: string;
        image: string;
        url: string;
      }
    ];
    characters: [
      {
        id: number;
        name: string;
        russian: string;
        image: string;
        url: string;
      }
    ];
    people: [
      {
        id: number;
        name: string;
        russian: string;
        image: string;
        url: string;
      }
    ];
    mangakas: [
      {
        id: number;
        name: string;
        russian: string;
        image: string;
        url: string;
      }
    ];
    seyu: [
      {
        id: number;
        name: string;
        russian: string;
        image: string;
        url: string;
      }
    ];
    producers: [
      {
        id: number;
        name: string;
        russian: string;
        image: string;
        url: string;
      }
    ];
  }
};

export type getAnimeOutput = {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  kind: string;
  score: string;
  status: string;
  episodes: number;
  episodes_aired: number;
  aired_on: string;
  released_on: string;
  rating: string;
  english: string[];
  japanese: string[];
  synonyms: string[];
  license_name_ru: string;
  duration: number;
  description: string;
  description_html: string;
  description_source: any | null;
  franchise: string;
  favoured: boolean;
  anons: boolean;
  ongoing: boolean;
  thread_id: number;
  topic_id: number;
  myanimelist_id: number;
  rates_scores_stats: [
    {
      name: number;
      value: number;
    },
  ];
  rates_statuses_stats: [
    {
      name: string;
      value: number;
    },
  ];
  updated_at: string;
  next_episode_at: string;
  fansubbers: string[];
  fandubbers: string[];
  licensors: string[];
  genres: [
    {
      id: number;
      name: string;
      russian: string;
      kind: string;
    },
  ];
  studios: [
    {
      id: number;
      name: string;
      filtered_name: string;
      real: boolean;
      image: string;
    },
  ];
  videos: [
    {
      id: number;
      url: string;
      image_url: string;
      player_url: string;
      name: string;
      kind: string;
      hosting: string;
    },
  ];
  screenshots: [
    {
      original: string;
      preview: string;
    },
  ];
  user_rate: any | null;
};

export type getMangaOutput = {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  kind: string;
  score: string;
  status: string;
  volumes: number;
  chapters: number;
  aired_on: string;
  released_on: string;
  english: string[];
  japanese: string[];
  synonyms: string[];
  license_name_ru: string;
  description: string;
  description_html: string;
  description_source: any | null;
  franchise: string;
  favoured: boolean;
  anons: boolean;
  ongoing: boolean;
  thread_id: number;
  topic_id: number;
  myanimelist_id: number;
  rates_scores_stats: [
    {
      name: number;
      value: number;
    },
  ];
  rates_statuses_stats: [
    {
      name: string;
      value: number;
    },
  ];
  licensors: string[];
  genres: [
    {
      id: number;
      name: string;
      russian: string;
      kind: string;
    },
  ];
  publishers: [
    {
      id: number;
      name: string;
    },
  ];
  user_rate: any | null;
};

export type getRanobeOutput = {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  kind: string;
  score: string;
  status: string;
  volumes: number;
  chapters: number;
  aired_on: string;
  released_on: string;
  english: string[];
  japanese: string[];
  synonyms: string[];
  license_name_ru: string;
  description: string;
  description_html: string;
  description_source: string;
  franchise: string;
  favoured: boolean;
  anons: boolean;
  ongoing: boolean;
  thread_id: number;
  topic_id: number;
  myanimelist_id: number;
  rates_scores_stats: [
    {
      name: number;
      value: number;
    },
  ];
  rates_statuses_stats: [
    {
      name: string;
      value: number;
    },
  ];
  licensors: string[];
  genres: [
    {
      id: number;
      name: string;
      russian: string;
      kind: string;
    },
  ];
  publishers: [
    {
      id: number;
      name: string;
    },
  ];
  user_rate: any | null;
};

export type getCharacterOutput = {
  id: number;
  name: string;
  russian: string;
  image: {
    original: string;
    preview: string;
    x96: string;
    x48: string;
  };
  url: string;
  altname: string;
  japanese: string;
  description: string;
  description_html: string;
  description_source: string;
  favoured: boolean;
  thread_id: number;
  topic_id: number;
  updated_at: string;
  seyu: [
    {
      id: number;
      name: string;
      russian: string;
      image: {
        original: string;
        preview: string;
        x96: string;
        x48: string;
      };
      url: string;
    },
  ];
  animes: [
    {
      id: number;
      name: string;
      russian: string;
      image: {
        original: string;
        preview: string;
        x96: string;
        x48: string;
      };
      url: string;
      kind: string;
      score: string;
      status: string;
      episodes: number;
      episodes_aired: number;
      aired_on: string;
      released_on: string;
      roles: string[];
      role: string;
    },
  ];
  mangas: [
    {
      id: number;
      name: string;
      russian: string;
      image: {
        original: string;
        preview: string;
        x96: string;
        x48: string;
      };
      url: string;
      kind: string;
      score: string;
      status: string;
      volumes: number;
      chapters: number;
      aired_on: string;
      released_on: string;
      roles: string[];
      role: string;
    },
  ];
};

export type getCalendarOutput = [
  {
    next_episode: number;
    next_episode_at: string;
    duration: number;
    anime: {
      id: number;
      name: string;
      russian: string;
      image: {
        original: string;
        preview: string;
        x96: string;
        x48: string;
      };
      url: string;
      kind: string;
      score: string;
      status: string;
      episodes: number;
      episodes_aired: number;
      aired_on: string;
      released_on: string;
    };
  },
];
