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
    notificationContextId?:string;
    notificationSecondaryContextId?:string;
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
    agentLaunchesShowing = "agentLaunchesShowing",
    agentLaunchesSelling = "agentLaunchesSelling",
    agentCompletesTask = "agentCompletesTask",
    clientCompletesTask = "clientCompletesTask",
}

export interface IUserNotificationPreferences{
    id:string;
    userPushNotificationToken?:string;
    createdAt:string;
    lastUpdateAt:string;
}
