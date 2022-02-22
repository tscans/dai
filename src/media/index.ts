export interface IInstagramMediaSave{
    datePostedSeconds:number;
    content:string;
    id:string;
    userNamePoster:string;
    fullNamePoster:string;
    profilePicPoster:string;
    displayUrls:string[];
}

export interface IInstagramRoot {
    taken_at: number
    pk: string
    id: string
    device_timestamp: string
    media_type: number
    code: string
    client_cache_key: string
    filter_type: number
    carousel_media_count: number
    carousel_media: IInstagramCarouselMedum[]
    can_see_insights_as_brand: boolean
    is_unified_video: boolean
    location: IInstagramLocation
    lat: number
    lng: number
    user: IInstagramUser2
    image_versions2: IInstagramImageVersions2
    can_viewer_reshare: boolean
    caption_is_edited: boolean
    like_and_view_counts_disabled: boolean
    commerciality_status: string
    fundraiser_tag: IInstagramFundraiserTag
    is_paid_partnership: boolean
    is_visual_reply_commenter_notice_enabled: boolean
    comment_likes_enabled: boolean
    comment_threading_enabled: boolean
    has_more_comments: boolean
    next_max_id: string
    max_num_visible_preview_comments: number
    preview_comments: IInstagramPreviewComment[]
    can_view_more_preview_comments: boolean
    comment_count: number
    hide_view_all_comment_entrypoint: boolean
    like_count: number
    has_liked: boolean
    top_likers: any[]
    photo_of_you: boolean
    usertags: IInstagramUsertags2
    is_organic_product_tagging_eligible: boolean
    caption: IInstagramCaption
    can_viewer_save: boolean
    organic_tracking_token: string
    sharing_friction_info: IInstagramSharingFrictionInfo2
    comment_inform_treatment: IInstagramCommentInformTreatment2
    product_type: string
    is_in_profile_grid: boolean
    profile_grid_control_enabled: boolean
    deleted_reason: number
    integrity_review_decision: string
    music_metadata: any
  }
  
  export interface IInstagramCarouselMedum {
    id: string
    media_type: number
    image_versions2: IInstagramImageVersions2
    original_width: number
    original_height: number
    pk: string
    carousel_parent_id: string
    can_see_insights_as_brand: boolean
    usertags?: IInstagramUsertags
    commerciality_status: string
    sharing_friction_info: IInstagramSharingFrictionInfo
    comment_inform_treatment: IInstagramCommentInformTreatment
  }
  
  export interface IInstagramImageVersions2 {
    candidates: IInstagramCandidate[]
  }
  
  export interface IInstagramCandidate {
    width: number
    height: number
    url: string
    scans_profile: string
    estimated_scans_sizes: number[]
  }
  
  export interface IInstagramUsertags {
    in: IInstagramIn[]
  }
  
  export interface IInstagramIn {
    user: IInstagramUser
    position: [number, string]
    start_time_in_video_in_sec: any
    duration_in_video_in_sec: any
  }
  
  export interface IInstagramUser {
    pk: number
    username: string
    full_name: string
    is_private: boolean
    profile_pic_url: string
    profile_pic_id: string
    is_verified: boolean
    follow_friction_type: number
  }
  
  export interface IInstagramSharingFrictionInfo {
    should_have_sharing_friction: boolean
    bloks_app_url: any
  }
  
  export interface IInstagramCommentInformTreatment {
    should_have_inform_treatment: boolean
    text: string
  }
  
  export interface IInstagramLocation {
    pk: number
    short_name: string
    facebook_places_id: number
    external_source: string
    name: string
    address: string
    city: string
    has_viewer_saved: boolean
    lng: number
    lat: number
    is_eligible_for_guides: boolean
  }
  
  export interface IInstagramUser2 {
    pk: number
    username: string
    full_name: string
    is_private: boolean
    profile_pic_url: string
    profile_pic_id: string
    friendship_status: IInstagramFriendshipStatus
    has_anonymous_profile_picture: boolean
    is_unpublished: boolean
    is_favorite: boolean
    has_highlight_reels: boolean
    account_badges: any[]
  }
  
  export interface IInstagramFriendshipStatus {
    following: boolean
    outgoing_request: boolean
    is_bestie: boolean
    is_restricted: boolean
    is_feed_favorite: boolean
  }
  
  export interface IInstagramFundraiserTag {
    has_standalone_fundraiser: boolean
  }
  
  export interface IInstagramPreviewComment {
    pk: string
    user_id: number
    text: string
    type: number
    created_at: number
    created_at_utc: number
    content_type: string
    status: string
    bit_flags: number
    did_report_as_spam: boolean
    share_enabled: boolean
    user: IInstagramUser3
    is_covered: boolean
    media_id: string
    private_reply_status: number
  }
  
  export interface IInstagramUser3 {
    pk: number
    username: string
    full_name: string
    is_private: boolean
    profile_pic_url: string
    profile_pic_id: string
    is_verified: boolean
    follow_friction_type: number
  }
  
  export interface IInstagramUsertags2 {
    in: IInstagramIn2[]
  }
  
  export interface IInstagramIn2 {
    user: IInstagramUser4
    position: [number, string]
    start_time_in_video_in_sec: any
    duration_in_video_in_sec: any
  }
  
  export interface IInstagramUser4 {
    pk: number
    username: string
    full_name: string
    is_private: boolean
    profile_pic_url: string
    profile_pic_id: string
    is_verified: boolean
    follow_friction_type: number
  }
  
  export interface IInstagramCaption {
    pk: string
    user_id: number
    text: string
    type: number
    created_at: number
    created_at_utc: number
    content_type: string
    status: string
    bit_flags: number
    did_report_as_spam: boolean
    share_enabled: boolean
    user: IInstagramUser5
    is_covered: boolean
    media_id: string
    private_reply_status: number
  }
  
  export interface IInstagramUser5 {
    pk: number
    username: string
    full_name: string
    is_private: boolean
    profile_pic_url: string
    profile_pic_id: string
    friendship_status: IInstagramFriendshipStatus2
    has_anonymous_profile_picture: boolean
    is_unpublished: boolean
    is_favorite: boolean
    has_highlight_reels: boolean
    account_badges: any[]
  }
  
  export interface IInstagramFriendshipStatus2 {
    following: boolean
    outgoing_request: boolean
    is_bestie: boolean
    is_restricted: boolean
    is_feed_favorite: boolean
  }
  
  export interface IInstagramSharingFrictionInfo2 {
    should_have_sharing_friction: boolean
    bloks_app_url: any
  }
  
export interface IInstagramCommentInformTreatment2 {
should_have_inform_treatment: boolean
text: string
}

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

export interface INewsApiResponseArticles{
    "_id":string;
    "_score":number;
    "author":string | null;
    "clean_url":string;
    "country":string;
    "language":string;
    "link":string;
    "published_date":string;
    "rank":string;
    "rights":string;
    "summary":string;
    "title":string;
    "topic":string;
}
  
export interface INewsApiResponseUserInput{
    "from":string;
    "lang":string;
    "page":number;
    "q":string;
    "ranked_only":string;
    "search_in":string;
    "size":number;
    "sort_by":string;
}

export interface INewsApiResponse{
    "articles":INewsApiResponseArticles[];
    "page":number;
    "page_size":number;
    "status":string;
    "total_hits":number;
    "total_pages":number;
    "user_input":INewsApiResponseUserInput
}

export interface IMediaNews{
    id:string;
    author:string;
    originUrl:string;
    articleUrl:string;
    publishedDate:string;
    title:string;
    summary:string;
    recordedDateTime:string;
}