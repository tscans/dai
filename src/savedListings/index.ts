import { ISRListing } from "../srets";

export enum EUserSavedListingRating{
    like = "Like",
    love = "Love"
}

export interface IUserSavedListing{
    id:string;
    createdAt:string;
    mlsListingId:string;
    rankingIndex:number;
    savedVersion: string;
    lastUpdatedSrets:string;
    userRating: EUserSavedListingRating;
    createdBy:string;
    initialMessage?:string;
}

export interface IAgentsBuyersListings extends IUserSavedListing{
    mlsListingData:ISRListing;
}
