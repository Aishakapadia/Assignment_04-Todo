import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const addSignupUser = createAsyncThunk(
    'user/add',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            
        };
        console.log('here',data)
        const res = await fetch('http://localhost:3005/signup', requestOptions)
        return res.json();
    }
)

export const addLoginUser = createAsyncThunk(
    'user/login',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( data)
        };

        const res = await fetch('http://localhost:3005/login', requestOptions)
            // useDispatch(push('/dashboard'));
            return res.json();
    }
)

export const addEmployeeData = createAsyncThunk(
    'user/data',
    async (data, thunkApi) => {
        console.log('Inside Employee Reducer',data)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        const res = await fetch('http://localhost:3005/addEmployee', requestOptions)
            // useDispatch(push('/dashboard'));
            console.log('response data here',res)
            return res.json();
    }
)

const initialState = {
    userData: [],
    loginData: [],
    EmployeeData: [],
    redirectToDashboard: false
}


export const addUser = createSlice({

    name: 'user',
    initialState,
    reducers: {
        // SignupReducer: (state, action) => {
        //     state.userData.push(action.payload)
        // },
        // LoginReducer: (state, action) => {

        //     const signupUsername = state.userData.find(value => value.username == action.payload.username)
        //     const signuppassword = state.userData.find(value => value.password == action.payload.password)
        //     if (signupUsername && signuppassword) {

        //         state.loginData.push(action.payload);
        //         state.redirectToDashboard = true;
        //         // console.log("before redirect");
        //         // checkLoginDetails();
        //         // console.log("abc");
        //     }
        //     else {
        //         alert('Please Signup first')
        //         state.redirectToDashboard = false;
        //     }

        // },
        // AddEmployeeReducer: (state, action) => {
        //     state.EmployeeData.push(action.payload)
        // },
    },
    extraReducers: {
        [addSignupUser.rejected]: (state) => {
            console.log('Signup Rejected');
        },
        [addSignupUser.fulfilled]: (state, action) => {
            console.log(JSON.stringify(action.payload));
            console.log('Signup done...');
            state.userData = action.payload.data;
        },
        [addSignupUser.pending]: state => {
            console.log('Signup Pending...');
        },
        [addLoginUser.fulfilled]: (state, action) => {
            state.loginData = action.payload.data;
            console.log('login done...');
            state.redirectToDashboard = true;
        }
    }

})

// Action creators are generated for each case reducer function
export const { SignupReducer, LoginReducer, AddEmployeeReducer } = addUser.actions

export default addUser.reducer 