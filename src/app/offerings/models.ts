export interface IOffering {
    "id": number,
    "name": string,
    "location": string,
    "img": string,
    "availableToInvest": string,
    "purchase": string,
    "minInvest": string,
    "investType": string,
    "mortage": string,
    "holdingPeriod": string,
    "expentedReturn": string
}

export interface IUser {
    "id": number,
    "name": string,
    "email": string,
    "password": string,
    "notific": string[],
    "messages": string[],
    "partners": string[],
    "offerings": IOffering[] 
}