export interface IYoutubeMediaSave {
    id:string;
    createdAt:string;
    publishedAt:string;
    title:string;
    description:string;
    thumbnailUrl:string;
    videoId:string;
}

export interface IYoutubeRoot {
    kind: string
    etag: string
    nextPageToken: string
    items: IYoutubeItem[]
    pageInfo: IYoutubePageInfo
  }
  
  export interface IYoutubeItem {
    kind: string
    etag: string
    id: string
    snippet: IYoutubeSnippet
  }
  
  export interface IYoutubeSnippet {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: IYoutubeThumbnails
    channelTitle: string
    playlistId: string
    position: number
    resourceId: IYoutubeResourceId
    videoOwnerChannelTitle: string
    videoOwnerChannelId: string
  }
  
  export interface IYoutubeThumbnails {
    default: IYoutubeDefault
    medium: IYoutubeMedium
    high: IYoutubeHigh
    standard?: IYoutubeStandard
    maxres?: IYoutubeMaxres
  }
  
  export interface IYoutubeDefault {
    url: string
    width: number
    height: number
  }
  
  export interface IYoutubeMedium {
    url: string
    width: number
    height: number
  }
  
  export interface IYoutubeHigh {
    url: string
    width: number
    height: number
  }
  
  export interface IYoutubeStandard {
    url: string
    width: number
    height: number
  }
  
  export interface IYoutubeMaxres {
    url: string
    width: number
    height: number
  }
  
  export interface IYoutubeResourceId {
    kind: string
    videoId: string
  }
  
  export interface IYoutubePageInfo {
    totalResults: number
    resultsPerPage: number
  }
  