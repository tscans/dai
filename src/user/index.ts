export interface IUserHomePreferences{
    ownerId:string;
    updatedAt:string;
    priceRangeStart:string;
    priceRangeEnd:string;
    locationIds:string[];
    bedroomRangeStart:string;
    bathroomRangeStart:string;
    houseSqftStart:number;
    houseSqftEnd:number;
    additionalDescription:string;
}

export interface IUserAssignedAgents{
    id:string;
    clientId:string;
    createdAt:Date;
    agentId:string;
    agencyId:string;
}
