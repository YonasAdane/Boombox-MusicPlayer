export interface SearchInterface {
    albums:     Albums;
    artists:    RootObjectArtists;
    episodes:   Episodes;
    genres:     Albums;
    playlists:  Playlists;
    podcasts:   Podcasts;
    topResults: TopResults;
    tracks:     Tracks;
    users:      Users;
}

export interface Albums {
    items:      AlbumsItem[];
    totalCount: number;
}

export interface AlbumsItem {
    data: PurpleData;
}

export interface PurpleData {
    artists:  DataArtists;
    coverArt: CoverArt;
    date:     DateClass;
    name:     string;
    uri:      string;
}

export interface DataArtists {
    items: PurpleItem[];
}

export interface PurpleItem {
    profile: Profile;
    uri:     string;
}

export interface Profile {
    name: string;
}

export interface CoverArt {
    sources: Source[];
}

export interface Source {
    height: number | null;
    url:    string;
    width:  number | null;
}

export interface DateClass {
    year: number;
}

export interface RootObjectArtists {
    items:      FluffyItem[];
    totalCount: number;
}

export interface FluffyItem {
    data: FluffyData;
}

export interface FluffyData {
    profile: Profile;
    uri:     string;
    visuals: Visuals;
}

export interface Visuals {
    avatarImage: CoverArt;
}

export interface Episodes {
    items:      EpisodesItem[];
    totalCount: number;
}

export interface EpisodesItem {
    data: TentacledData;
}

export interface TentacledData {
    contentRating: ContentRating;
    coverArt:      CoverArt;
    description:   string;
    duration:      Duration;
    name:          string;
    podcast:       Podcast;
    releaseDate:   ReleaseDate;
    uri:           string;
}

export interface ContentRating {
    label: Label;
}

export enum Label {
    Explicit = "EXPLICIT",
    None = "NONE",
}

export interface Duration {
    totalMilliseconds: number;
}

export interface Podcast {
    coverArt: CoverArt;
}

export interface ReleaseDate {
    isoString: Date;
}

export interface Playlists {
    items:      FeaturedElement[];
    totalCount: number;
}

export interface FeaturedElement {
    data: FeaturedData;
}

export interface FeaturedData {
    description: string;
    images:      Images;
    name:        string;
    owner:       Profile;
    uri:         string;
}

export interface Images {
    items: CoverArt[];
}

export interface Podcasts {
    items:      PodcastsItem[];
    totalCount: number;
}

export interface PodcastsItem {
    data: StickyData;
}

export interface StickyData {
    coverArt:  CoverArt;
    mediaType: MediaType;
    name:      string;
    publisher: Profile;
    type:      Type;
    uri:       string;
}

export enum MediaType {
    Audio = "AUDIO",
    Mixed = "MIXED",
}

export enum Type {
    Podcast = "PODCAST",
}

export interface TopResults {
    featured: FeaturedElement[];
    items:    TentacledItem[];
}

export interface TentacledItem {
    data: IndigoData;
}

export interface IndigoData {
    albumOfTrack?:  AlbumOfTrack;
    artists?:       DataArtists;
    contentRating?: ContentRating;
    description?:   string;
    duration?:      Duration;
    id?:            string;
    images?:        Images;
    name?:          string;
    owner?:         Profile;
    playability?:   Playability;
    profile?:       Profile;
    uri:            string;
    visuals?:       Visuals;
}

export interface AlbumOfTrack {
    coverArt:    CoverArt;
    id:          string;
    name:        string;
    sharingInfo: SharingInfo;
    uri:         string;
}

export interface SharingInfo {
    shareUrl: string;
}

export interface Playability {
    playable: boolean;
}

export interface Tracks {
    items:      TracksItem[];
    totalCount: number;
}

export interface TracksItem {
    data: IndecentData;
}

export interface IndecentData {
    albumOfTrack:  AlbumOfTrack;
    artists:       DataArtists;
    contentRating: ContentRating;
    duration:      Duration;
    id:            string;
    name:          string;
    playability:   Playability;
    uri:           string;
}

export interface Users {
    items:      UsersItem[];
    totalCount: number;
}

export interface UsersItem {
    data: HilariousData;
}

export interface HilariousData {
    displayName: string;
    id:          string;
    image:       Image;
    uri:         string;
    username:    string;
}

export interface Image {
    largeImageUrl: null | string;
    smallImageUrl: null | string;
}
