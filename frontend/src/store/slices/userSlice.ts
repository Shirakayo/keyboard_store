import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {login, logout, registration} from "../../http/api/userApi";
import {
	authAsyncProps,
	axiosGetResponse,
	IStateProps,
	Status,
} from "../../types/userSlice-types/userSlice-types";
import {RootState} from "../store";
import axios from "axios";

const initialState: IStateProps = {
	user: [],
	role: "USER",
	isAuthenticated: false,
	authStatus: Status.DEFAULT,
	checkAuthStatus: Status.DEFAULT
}

export const registerUser = createAsyncThunk<{}, authAsyncProps>('user/registerUser',
	async ({email, password}) => {
		const {data} = await registration(email, password);
		const token = data.token;
		localStorage.setItem('token', token)
	})

export const fetchLoginUser = createAsyncThunk<{}, authAsyncProps>('user/loginUser',
	async ({email, password, saveStatus}) => {
		const {data} = await login(email, password);
		const token = data.token;
		if (saveStatus) {
			localStorage.setItem('token', token)
		} else if (data.user.role === 'ADMIN') {
			localStorage.setItem('token', token)
		}
		return data.user
	})

export const logoutUser = createAsyncThunk('user/logoutUser',
	async () => {
		const {data} = await logout();
		localStorage.removeItem('token')
		return data
	})

export const authenticatedUser = createAsyncThunk('user/auth',
	async () => {
		const token = localStorage.getItem('token')
		const {data} = await axios.get<axiosGetResponse>('http://localhost:5000/api/user/auth', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		localStorage.setItem('token', data.token)
		return data.user
	}
)

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		defaultStatus(state) {
			state.authStatus = Status.DEFAULT
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLoginUser.fulfilled, (state, action: { payload: any }) => {
				debugger
				state.authStatus = Status.SUCCESS
				state.user = action.payload
				state.role = action.payload.role
				state.isAuthenticated = true;
			})
			.addCase(fetchLoginUser.pending, (state) => {
				state.authStatus = Status.LOADING
			})
			.addCase(fetchLoginUser.rejected, (state) => {
				state.isAuthenticated = false;
				state.authStatus = Status.ERROR
			})
			.addCase(logoutUser.fulfilled, (state) => {
				state.isAuthenticated = false;
				state.authStatus = Status.DEFAULT
				state.role = '';
				state.user = []
			})
			.addCase(authenticatedUser.fulfilled, (state, action: { payload: any }) => {
				state.isAuthenticated = true;
				state.user = action.payload
				state.role = action.payload.role
				state.checkAuthStatus = Status.SUCCESS
			})
			.addCase(authenticatedUser.rejected, (state) => {
				state.isAuthenticated = false;
				state.user = []
				state.checkAuthStatus = Status.ERROR
			})
	}
})

export const userSelector = (state: RootState) => state.user;

export const { defaultStatus } = userSlice.actions
export default userSlice.reducer;