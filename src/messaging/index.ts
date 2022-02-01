export interface IDynamicMessage{
    id:string;
    createdAt:string;
    ownerId:string;
    clientMessagingId:string;
    isDeleted:boolean;
    messageText:string;
    replyContextId:string | null;
    replyContextType:EMessageReplyTypes | null;
    initialMessageContextId:string | null;
    initialMessageContextType:string | null;
}

export enum EMessageReplyTypes{
    savedListing = "savedListing",
    message = "message",
    recommendation = "recommendation",
    showing = "showing"
}