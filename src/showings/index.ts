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
    showingDateTime:Date | null;
}

export interface IAgentShowingStagingItemsViaMls extends IAgentShowingStagingItems{
    mlsListingData:ISRListing;
}

export interface IAgentShowingStageWithItems extends IAgentShowingStage{
    items:IAgentShowingStagingItems[];
}

export interface IAgentShowingStageWithItemsViaMls extends IAgentShowingStage{
    items:IAgentShowingStagingItemsViaMls[];
}
