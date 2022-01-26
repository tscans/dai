import { ISRListing } from "..";

export interface IAgentShowingStagingItems{
    id:string;
    createdAt:string;
    lastEditedAt:string;
    agentId:string;
    clientId:string;
    mlsListingId:string;
    showingDate:string;
    showingTime:string;
    showingTimeZone:string;
    confirmedVisited:boolean;
}

export interface IAgentShowingStagingItemsViaMls extends IAgentShowingStagingItems{
    mlsListingData:ISRListing;
}
