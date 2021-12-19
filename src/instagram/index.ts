export interface IInstagramMediaSave{
    
}

export interface IInstagramRoot {
  node: IInstagramNode
}

export interface IInstagramNode {
  comments_disabled: boolean
  __typename: string
  id: string
  edge_media_to_caption: IInstagramEdgeMediaToCaption
  shortcode: string
  edge_media_to_comment: IInstagramEdgeMediaToComment
  taken_at_timestamp: number
  dimensions: IInstagramDimensions
  display_url: string
  edge_liked_by: IInstagramEdgeLikedBy
  edge_media_preview_like: IInstagramEdgeMediaPreviewLike
  owner: IInstagramOwner
  thumbnail_src: string
  thumbnail_resources: IInstagramThumbnailResource[]
  is_video: boolean
  accessibility_caption: string
}

export interface IInstagramEdgeMediaToCaption {
  edges: IInstagramEdge[]
}

export interface IInstagramEdge {
  node: IInstagramNode2
}

export interface IInstagramNode2 {
  text: string
}

export interface IInstagramEdgeMediaToComment {
  count: number
}

export interface IInstagramDimensions {
  height: number
  width: number
}

export interface IInstagramEdgeLikedBy {
  count: number
}

export interface IInstagramEdgeMediaPreviewLike {
  count: number
}

export interface IInstagramOwner {
  id: string
}

export interface IInstagramThumbnailResource {
  src: string
  config_width: number
  config_height: number
}
