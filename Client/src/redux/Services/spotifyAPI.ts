import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ExploreInterface } from '../interfaces/Explore.interface';
import { SearchInterface } from '../interfaces/Search.interface';
const apiKey=process.env.REACT_APP_API_KEY;
const hostAdr=process.env.REACT_APP_HOST_ADDRESS;
export const SpotifyApi=createApi({
    reducerPath:'spotifyApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://spotify23.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key',`${apiKey}`);
            headers.set('X-RapidAPI-host',`${hostAdr}`);
            return headers;
        },
        }),
        endpoints:(builder)=>({
            Search: builder.query<SearchInterface, { artist: string; type: string; limit: number }>({
                query: ({ artist, type, limit }) => `/search/?q=${artist}&type=${type}&offset=0&${limit}=10&numberOfTopResults=5`,
                }),
            Explore: builder.query<ExploreInterface, any>({
                query: () => '/browse_all/'
                }),
                //single Album
            // GetAlbums:builder.query({
            //     query:(albumID:string|number)=>`/albums/?ids=${albumID}`
            // }),
            // AlbumTracks:builder.query({
            //     query:(albumID:string|number,limit:number)=>`/album_tracks/?id=${albumID}&limit=${limit}`
            // }),
            // AlbumMetaData:builder.query({
            //     query:(albumID:string|number)=>`/album_metadata/?id=${albumID}`
            // }),
            // GetArtists:builder.query({
            //     query:(artistID:string|number)=>`/artists/?ids=${artistID}`
            // }),
            
            // ArtistOverv:builder.query({
            //     query:(artistID:string|number)=>`/artist_overview/?id=${artistID}`
            // }),
            // ArtistDiscographyOverv:builder.query({
            //     query:(artistID:string|number)=>`/artist_discography_overview/?id=${artistID}`
            // }),
            // ArtistAlbums:builder.query({
            //     query:(artistID:string|number)=>`/artist_albums/?id=${artistID}`
            // }),
            // ArtistSingles:builder.query({
            //     query:(artistID:string|number,limit:number)=>`/artist_singles/?id=${artistID}offset=0&limit=${limit}`
            // }),
            // ArtistAppearsOn:builder.query({
            //     query:(artistID)=>`/artist_appears_on/?id=${artistID}`
            // }),
            // ArtistDiscoveredOn:builder.query({
            //     query:(artistID:string|number)=>`/artist_discovered_on/?id=${artistID}`
            // }),
            // ArtistFeaturing:builder.query({
            //     query:(artistID:string|number)=>`/artist_featuring/?id=${artistID}`
            // }),
            // ArtistRelated:builder.query({
            //     query:(artistID:string|number)=>`/artist_related/?id=${artistID}`
            // }),

            }),
})

export const {
    // useSearchQuery,
    useExploreQuery,
    // useGetAlbumsQuery,
    // useAlbumTracksQuery,
    // useAlbumMetaDataQuery,
    // useGetArtistsQuery,
    // useArtistOvervQuery,
    // useArtistDiscographyOvervQuery,
    // useArtistAlbumsQuery,
    // useArtistSinglesQuery,
    // useArtistAppearsOnQuery,
    // useArtistDiscoveredOnQuery,
    // useArtistFeaturingQuery,
    // useArtistRelatedQuery,
    } = SpotifyApi;
export const spotifyApiReducer = SpotifyApi.reducer;