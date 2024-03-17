import { createSlice } from '@reduxjs/toolkit';

export const initialUserForm = {
    username: '',
    password: '',

}

export const noteSlice = createSlice({
    name: 'users',
    initialState: {
        notas: []
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [
                ...state.users,
                {
                    ...action.payload,
                }
            ];
            state.userSelected = initialUserForm;
            state.visibleForm = false;
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        updateUser: (state, action) => {
            state.users = state.users.map(u => {
                if (u.id === action.payload.id) {
                    return {
                        ...action.payload,
                    };
                }
                return u;
            });
            state.userSelected = initialUserForm;
            state.visibleForm = false;
        },
        loadingUsers: (state, { payload }) => {
            state.users = payload
        },
        onUserSelectedForm: (state, { payload }) => {
            state.userSelected = payload;
            state.visibleForm = true;
        },
        onOpenForm: (state) => {
            state.visibleForm = true;
        },
        onCloseForm: (state) => {
            state.visibleForm = false;
            state.userSelected = initialUserForm;

        },
        loadingError: (state, {payload}) => {
            state.errors = payload;
        }
    }
});
export const { increment } = noteSlice.actions;