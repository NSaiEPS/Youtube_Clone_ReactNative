
import { createSlice } from "@reduxjs/toolkit";


export const ReduxSlice=createSlice({
    name:'slice',
    initialState:{
        selectCategory:'New',
        name:'',
        usersData:{},
        themeWhite:false,
        sideBarOpen:false
       
        


    },

    reducers:{
        themeAction:(state,action)=>{
            state.themeWhite=action.payload
        },
        selectCategoryAction:(state,action)=>{
            state.selectCategory=action.payload
        },
        usersDataAction:(state,action)=>{
            state.usersData=action.payload
        },
        sideBarOpenAction:(state,action)=>{
            state.sideBarOpen=action.payload
        },
      
      
      
    

    }
})


export const {themeAction,selectCategoryAction,usersDataAction,sideBarOpenAction}=ReduxSlice.actions;

export const SelectThemeAction=(state)=>state.reduxstore.themeWhite
export const SelectCategoryAction=(state)=>state.reduxstore.selectCategory
export const SelectUserData=(state)=>state.reduxstore.usersData
export const SelectSideBarOpen=(state)=>state.reduxstore.sideBarOpen





export default ReduxSlice.reducer