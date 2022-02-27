export enum EClientType{
    buyer = "buyer",
    seller = "seller",
    buyerAndSeller = "buyerAndSeller"
}

export enum EClientTemperature{
    hot = "hot",
    warm = "warm",
    cold = "cold"
}

export interface IClientNotes{
    clientId:string;
    lastLoginAt:Date;
    updatedAt:Date;
    updatedById:string;
    notes?:string;
    clientType:EClientType;
    clientTemperature: EClientTemperature;
    assignedAgentUserId?:string[] | null;
    assignedAgencyId?:string | null;
}