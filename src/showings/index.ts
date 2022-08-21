import { ISRListing } from "..";

export interface IAgentShowingStage{
    id:string;
    createdAt:Date;
    lastEditedAt:Date;
    agentId:string;
    clientId:string;
    showingTitle:string;
}

export interface IAgentShowingItems{
    id:string;
    stageId:string;
    createdAt:Date;
    lastEditedAt:Date;
    agentId:string;
    clientId:string;
    mlsListingId:string;
    showingDateTime:Date | null;
}

export interface IAgentShowingStagingItemsViaMls extends IAgentShowingItems{
    mlsListingData:ISRListing;
}

export interface IAgentShowingStageWithItems extends IAgentShowingStage{
    items:IAgentShowingItems[];
}

export interface IShowingItemsViaMls extends IAgentShowingItems{
    mlsListingData:ISRListing;
}
export interface IAgentShowingStageWithItemsViaMls extends IAgentShowingStage{
    items:IAgentShowingStagingItemsViaMls[];
}

export interface IShowing{
    id:string;
    createdAt:Date;
    lastEditedAt:Date;
    agentId:string;
    clientId:string;
    showingHasConcluded:boolean;
    showingTitle:string;
}

export interface IShowingWithItemsViaMls extends IShowing{
    items: IShowingItemsViaMls[];
}

export interface IShowingNote {
    id:string;
    createdAt:Date;
    showingId:string;
    description:string;
    imageUrl?:string;
    imageUrlKey?:string;
}