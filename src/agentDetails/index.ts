export interface IAgentsDetails{
    id:string;
    createdAt:Date;
    firstName:string;
    lastName:string;
    phone:string;
    agentArea:string;
    agentInfo:string;
    imageUrl:string;
    locationIds?:string[];
    profileId?:string;
}