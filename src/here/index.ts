export interface IHereSearchSuggestion {
    title: string;
    id: string;
    resultType: string;
    address: IHereAddress;
    position: IHereAccessEntityOrPosition;
    access?: (IHereAccessEntityOrPosition)[] | null;
    distance: number;
    categories?: (IHereCategoriesEntity)[] | null;
}
export interface IHereAddress {
    label: string;
    countryCode: string;
    countryName: string;
    stateCode: string;
    state: string;
    district:string;
    county: string;
    city: string;
    postalCode: string;
}
export interface IHereAccessEntityOrPosition {
    lat: number;
    lng: number;
}
export interface IHereCategoriesEntity {
    id: string;
    name: string;
    primary: boolean;
}
