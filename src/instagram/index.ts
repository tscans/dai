export interface IInstagramMediaSave{
    datePosted:number;
    content:string;
    mediaId:string;
    posterId:string;
    displayUrl:string;
    thumbnail:string;
    likeCount:string;
}

export interface IInstagramRoot {
    total: number
    medias: IInstagramMedia[]
  }
  
  export interface IInstagramMedia {
    media_id: string
    shortcode: string
    text: string
    comment_count: IInstagramCommentCount
    like_count: IInstagramLikeCount
    display_url: string
    owner_id: string
    date: number
    thumbnail: string
    thumbnail_resource: IInstagramThumbnailResource[]
  }
  
  export interface IInstagramCommentCount {
    count: number
  }
  
  export interface IInstagramLikeCount {
    count: number
  }
  
  export interface IInstagramThumbnailResource {
    src: string
    config_width: number
    config_height: number
  }
  