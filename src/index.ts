import Mocks from './mocks/index';
import { ISRListing } from './srets';

export * from './filters';
export * from './media';
export * from './analytics';
export * from './srets';
export * from './here';
export * from './notifications';
export * from './showings';
export * from './messaging';
export * from './user';
export * from './clientNotes';
export * from './agentDetails';
export * from './pocketListings';
export * from './savedListings';
export * from './map';
export * from './hotHomes';
export * from './countyGlide';

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
    createdAt: string;
    email:string;
    profilePictureThumbnail:string | null;
    //userSavedListIds:string[];
    userType:EUserType;
    phoneNumber?:string | null;
    //assignedAgentUserId?:string[] | null;
    assignedAgencyId?:string | null;
    description:string;
    //clientAgentConnectionStatus:EClientAgentConnectionStatus;
    tagline?:string;
    userPrimaryZipCode?:string;
}

export interface IAgentSuggestedListing{
    id:string;
    createdAt:string;
    initialMessage:string;
    mlsListingId:string;
    agentId:string;
    clientId:string;
}

export interface IAgentSuggestedListingViaMls extends IAgentSuggestedListing{
    mlsListingData:ISRListing;
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
