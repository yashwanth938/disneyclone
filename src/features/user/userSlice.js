import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export default userSlice.reducer;

// The provided code is an example of how to use the `createSlice` function from the `@reduxjs/toolkit` library to define a Redux slice for managing user information. Redux is a predictable state container for JavaScript applications.

// Here's a breakdown of the code:

// 1. Importing Dependencies:

//    ```javascript
//    import { createSlice } from "@reduxjs/toolkit";
//    ```

//    This line imports the `createSlice` function from the `@reduxjs/toolkit` library. `createSlice` is a utility function provided by Redux Toolkit for creating Redux slices.

// 1. Initial State:

//    ```javascript
//    const initialState = {
//      name: "",
//      email: "",
//      photo: "",
//    };
//    ```

//    This code defines the initial state of the user slice. The `initialState` object has three properties: `name`, `email`, and `photo`, all initially set to empty strings.

// 1. Creating a Slice:

//    ```javascript
//    const userSlice = createSlice({
//      name: "user",
//      initialState,
//      reducers: {
//        setUserLoginDetails: (state, action) => {
//          state.name = action.payload.name;
//          state.email = action.payload.email;
//          state.photo = action.payload.photo;
//        },
//        setSignOutState: (state) => {
//          state.name = null;
//          state.email = null;
//          state.photo = null;
//        },
//      },
//    });
//    ```

//    The `createSlice` function is called to create a new Redux slice for managing user information. It takes an object as an argument with the following properties:

//    - `name`: A string that specifies the name of the slice. In this case, it is set to `"user"`.
//    - `initialState`: The initial state object defined earlier.
//    - `reducers`: An object that defines the action types and corresponding reducer functions for updating the state.

//    In this code, two reducer functions are defined:

//    - `setUserLoginDetails`: This function is called when the user login details are set. It receives the current state and an action object as parameters. The action object contains the `payload` property, which should have `name`, `email`, and `photo` properties. The reducer function updates the state with the values from the action payload.
//    - `setSignOutState`: This function is called when the user signs out. It receives the current state as a parameter and sets the `name`, `email`, and `photo` properties to `null`.

// 1. Exporting Actions and Selectors:

//    ```javascript
//    export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
//    export const selectUserName = (state) => state.user.name;
//    export const selectUserEmail = (state) => state.user.email;
//    export const selectUserPhoto = (state) => state.user.photo;
//    export default userSlice.reducer;
//    ```

//    The code exports the action creators generated by the `createSlice` function, which can be used to dispatch the corresponding actions. In this case, the exported action creators are `setUserLoginDetails` and `setSignOutState`.

//    The code also exports three selector functions:

//    - `selectUserName`: It takes the Redux state as an argument and returns the `name` property from the `user` slice of the state.
//    - `selectUserEmail`: It returns the `email` property from the `user` slice.
//    - `selectUserPhoto`: It returns the `photo` property from the `user` slice.

//    Finally, the code exports the reducer function generated by `createSlice` as the default export.

// Overall, this code sets up a Redux slice for managing user information with actions to set login details and sign out state, as well as selectors to retrieve specific user properties from the state.
