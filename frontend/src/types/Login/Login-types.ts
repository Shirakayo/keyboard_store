export interface IShopField{
	email: string;
	password: string;
}

export interface AuthResponse {
	accessToken: string;
	refreshToken: string;
	user: User;
}

interface User {
	email: string;
	role: string;
	id: number;
	isActivated: boolean;
}