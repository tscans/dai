export interface IDynamicMessage{
    id:string;
    createdAt:string;
    ownerId:string;
    clientMessagingId:string;
    isDeleted:boolean;
    messageText:string;
    mlsListingContextId:string | null;
    mlsImageUrl:string | null;
}

export enum EMessageReplyTypes{
    savedListing = "savedListing",
    message = "message",
    recommendation = "recommendation",
    showing = "showing"
}
