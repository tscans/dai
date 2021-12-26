import Mocks from './mocks/index';

export * from './filters';
export * from './youtube';
export * from './instagram';
export * from './srets';
export * from './here';

export const AllMocks = Mocks;

export enum EUserType{
    client = "client",
    agent = "agent",
    super = "super"
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

export interface IAgentSignUpCodes{
    id:string;
    createdAt:string;
    createdByOrganizationPrefix:string;
    firstName:string;
    lastName:string;
    redeemCode:string;
    email:string;
}
