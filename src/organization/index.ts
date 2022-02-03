export interface IOrganizationProfile{
    id:string;
    createdAt:string;
    ownerId:string;
    organizationName:string;
    organizationDescription:string;
    organizationLogoUrl:string | null;
}