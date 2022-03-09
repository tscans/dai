export interface ICommonNotification{
    id:string;
    ownerId:string;
    createdAt:string;
    hasBeenRead:boolean;
    notificationType:ENotificationType;
    notificationText:string;
    popOpenNotificationText:string | null | undefined;
    customNotificationImageUrl:string | null | undefined;
    notificationSentById:string;
    notificationActivityHasBeenUsed:boolean;
}

export enum ENotificationType{
    newMessageSent = "newMessageSent",
    clientListReorder = "clientListReorder",
    clientRequestingAgentConnection = "clientRequestingAgentConnection",
    agentAcceptsClientConnection = "agentAcceptsClientConnection",
    agentRejectsClientConnection = "agentRejectsClientConnection",
    clientRemovesAgent = "clientRemovesAgent",
    agentRequestingClientConnection = "agentRequestingClientConnection",
    agentRecommendsHouse = "agentRecommendsHouse",
    clientSavesHouse = "clientSavesHouse",
    agentLaunchesShowing = "agentLaunchesShowing"
}

export interface IUserNotificationPreferences{
    id:string;
    userPushNotificationToken?:string;
    createdAt:string;
    lastUpdateAt:string;
}
