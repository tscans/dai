import { ISRListing } from "..";

export interface IAgentShowingStage{
    id:string;
    createdAt:string;
    lastEditedAt:string;
    agentId:string;
    clientId:string;
    showingConfirmed:boolean;
    showingConfirmedVisited:boolean;
    showingTitle:string;
}

export interface IAgentShowingStagingItems{
    id:string;
    stageId:string;
    createdAt:string;
    lastEditedAt:string;
    agentId:string;
    clientId:string;
    mlsListingId:string;
    showingDate:string;
    showingTime:string;
    showingTimeZone:string;
}

export interface IAgentShowingStagingItemsViaMls extends IAgentShowingStagingItems{
    mlsListingData:ISRListing;
}
