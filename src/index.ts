import Mocks from './mocks/index';
import {filtersPriceRangeValues,filtersBedRangeValues,filtersBathRangeValues,
    filtersPreferenceBuyingUrgencyValues} from './filters';

export * from './filters';
export * from './youtube';
export * from './instagram';
export * from './srets';
export * from './here';
export * from './notifications';

export const AllMocks = Mocks;

export enum EUserType{
    client = "client",
    agent = "agent",
    super = "super"
}

export enum EClientAgentConnectionStatus {
    noConnection = "noConnection",
    pendingConnection = "pendingConnection",
    isConnected = "isConnected"
}

export enum EAgentsClientTypeRequest{
    myClients = "myClients",
    agencyClients = "agencyClients",
    unassignedClients = "unassignedClients"
}
  
export interface IUserProfile{
    id:string;
    firstName:string; 
    lastName:string;
    createdAt: number;
    email:string;
    profilePictureThumbnail:string | null;
    userSavedListIds:string[];
    userType:EUserType;
    phoneNumber?:string | null;
    assignedAgentUserId?:string | null;
    assignedAgencyId?:string | null;
    description:string;
    clientAgentConnectionStatus:EClientAgentConnectionStatus;
    tagline?:string;
    userPrimaryZipCode?:string;
    preferredPriceRangeStart?:keyof typeof filtersPriceRangeValues;
    preferredPriceRangeEnd?:keyof typeof filtersPriceRangeValues;
    preferredBedroomRangeStart?:keyof typeof filtersBedRangeValues;
    preferredBathroomRangeStart?:keyof typeof filtersBathRangeValues;
    preferredBuyingUrgency?:keyof typeof filtersPreferenceBuyingUrgencyValues
}

export enum EUserSavedListingRating{
    like = "Like",
    love = "Love"
}

export interface IUserSavedListing{
    id:string;
    createdAt:string;
    mlsListingId:string;
    savedVersion: string;
    lastUpdatedSrets:string;
    userRating: EUserSavedListingRating;
    createdBy:string;
}

export interface IAgentSuggestedListing{
    id:string;
    createdAt:string;
    mlsListingId:string;
    agendId:string;
    clientId:string;
}

export interface IAgentSignUpCodes{
    id:string;
    createdAt:string;
    createdByOrganizationPrefix:string;
    firstName:string;
    lastName:string;
    redeemCode:string;
    email:string;
}
