export interface ICommonNotification{
    id:string;
    ownerId:string;
    createdAt:string;
    hasBeenRead:boolean;
    notificationType:ENotificationType;
    notificationText:string;
    customNotificationImageUrl:string | null | undefined;
    notificationSentBy:string;
}

export enum ENotificationType{
    clientListReorder = "clientListReorder",
    clientRequestingAgent = "clientRequestingAgent"
}
