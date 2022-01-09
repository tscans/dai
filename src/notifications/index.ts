export interface ICommonNotification{
    id:string;
    ownerId:string;
    createdAt:string;
    hasBeenRead:boolean;
    notificationType:ENotificationType;
    notificationText:string;
    customNotificationImageUrl:string | null | undefined;
    notificationSentById:string;
}

export enum ENotificationType{
    clientListReorder = "clientListReorder",
    clientRequestingAgentConnection = "clientRequestingAgentConnection",
    agentAcceptsClientConnection = "agentAcceptsClientConnection",
    agentRejectsClientConnection = "agentRejectsClientConnection" 
}
