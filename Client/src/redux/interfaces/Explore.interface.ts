export interface ExploreInterface {
    data:       RootObjectData;
    extensions: any[];
   }
   
   export interface RootObjectData {
    browseStart: BrowseStart;
   }
   
   export interface BrowseStart {
    __typename: BrowseStartTypename;
    sections:   Sections;
    uri:        string;
   }
   
   export enum BrowseStartTypename {
    BrowseClientFeature = "BrowseClientFeature",
    BrowseSectionContainer = "BrowseSectionContainer",
   }
   
   export interface Sections {
    items: SectionsItem[];
   }
   
   export interface SectionsItem {
    data:         ItemData;
    sectionItems: SectionItems;
    uri:          string;
   }
   
   export interface ItemData {
    __typename: string;
    title:      Title;
   }
   
   export interface Title {
    transformedLabel: string;
   }
   
   export interface SectionItems {
    items: SectionItemsItem[];
   }
   
   export interface SectionItemsItem {
    content: Content;
    uri:     string;
   }
   
   export interface Content {
    __typename: ContentTypename;
    data:       ContentData;
   }
   
   export enum ContentTypename {
    BrowseSectionContainerWrapper = "BrowseSectionContainerWrapper",
    BrowseXlinkResponseWrapper = "BrowseXlinkResponseWrapper",
   }
   
   export interface ContentData {
    __typename:       BrowseStartTypename;
    artwork?:         Artwork;
    backgroundColor?: BackgroundColor;
    data?:            DataData;
    featureUri?:      string;
    iconOverlay?:     Artwork;
    title?:           Title;
   }
   
   export interface Artwork {
    sources: Source[];
   }
   
   export interface Source {
    height: number;
    url:    string;
    width:  number;
   }
   
   export interface BackgroundColor {
    hex: string;
   }
   
   export interface DataData {
    cardRepresentation: CardRepresentation;
   }
   
   export interface CardRepresentation {
    artwork:         Artwork;
    backgroundColor: BackgroundColor;
    title:           Title;
   }
   