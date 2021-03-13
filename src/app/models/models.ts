export interface LinkUrls{
    name: string;
    icon: string;
    url: string;
    currency:string;
}

export interface Unions{
    name: string;
    amount_raised: number;
    amount_remaing: number;
    participants: number;
    image: string;
    description: string;
}

export interface Sidebar{
    name: string;
    icon: string;
    url: string;
}

export interface FirebaseUser{
    idToken: string;
    email:  string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

