import {createSlice, Slice} from "@reduxjs/toolkit";

interface IUserSlice {
    email: string | null
    displayName:string|null
    token: string | null
    id: string | number | null
}


const initialState: IUserSlice = {
    email: null,
    displayName:null,
    token: null,
    id: null,
}

const userSlice: Slice<IUserSlice> = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email=action.payload.email
            state.token=action.payload.token
            state.id=action.payload.id
            state.displayName=action.payload.displayName
        },
        removeUser(state) {
            state.email=initialState.email
            state.email=initialState.token
            state.id=initialState.id
        },
    }
})

export const {setUser,removeUser}=userSlice.actions
export default userSlice.reducer