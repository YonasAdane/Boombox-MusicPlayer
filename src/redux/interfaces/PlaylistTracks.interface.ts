export interface PlaylistTracks {
    items:    PlaylistTracksItem[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
   }
export interface PlaylistTracksItem {
added_at: string;
added_by: {
    external_urls: {
    spotify: string;
    };
    id: string;
    type: string;
    uri: string;
};
is_local: boolean;
primary_color: string | null;
track: {
    preview_url: string;
    is_playable: boolean;
    explicit: boolean;
    type: string;
    episode: boolean;
    track: boolean;
    album: {
    is_playable: boolean;
    type: string;
    album_type: string;
    id: string;
    images: {
        height: number;
        url: string;
        width: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    uri: string;
    artists: {
        external_urls: {
        spotify: string;
        };
        id: string;
        name: string;
        type: string;
        uri: string;
    }[];
    external_urls: {
        spotify: string;
    };
    total_tracks: number;
    };
    artists: {
    external_urls: {
        spotify: string;
    };
    id: string;
    name: string;
    type: string;
    uri: string;
    }[];
    disc_number: number;
    track_number: number;
    duration_ms: number;
    external_ids: {
    isrc: string;
    };
    external_urls: {
    spotify: string;
    };
    id: string;
    name: string;
    popularity: number;
    uri: string;
    is_local: boolean;
};
video_thumbnail: {
    url: string | null;
};
}
