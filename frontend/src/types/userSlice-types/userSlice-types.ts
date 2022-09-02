export interface authAsyncProps {
    email: string;
    password: string;
    saveStatus?: boolean;
}

type userType = {
    id: number;
    email: string;
}

export interface IStateProps {
    user: userType[],
    role: string;
    isAuthenticated: boolean;
    status: Status
}

export interface getResponse {
    token: string;
}

export interface axiosGetResponse {
    token: string;
    user: userType[]
}

export const enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface loginAction {
    id: number;
    email: string;
    role: string;
}
