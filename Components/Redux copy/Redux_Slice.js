
import { createSlice } from "@reduxjs/toolkit";


export const ReduxSlice=createSlice({
    name:'slice',
    initialState:{
        selectCategory:'New',
        name:'',
        usersData:{},
        themeWhite:false,
        sideBarOpen:false,
        modelOpen:false
       
        


    },

    reducers:{
        themeAction:(state,{payload})=>{
            state.themeWhite=payload
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
        modelOpenAction:(state,{payload})=>{
            state.modelOpen=payload
        },
      
      
      
      
    

    }
})


export const {themeAction,selectCategoryAction,usersDataAction,sideBarOpenAction,modelOpenAction}=ReduxSlice.actions;

export const SelectThemeAction=(state)=>state.reduxstore.themeWhite
export const SelectCategoryAction=(state)=>state.reduxstore.selectCategory
export const SelectUserData=(state)=>state.reduxstore.usersData
export const SelectSideBarOpen=(state)=>state.reduxstore.sideBarOpen
export const SelectModelOpen=(state)=>state.reduxstore.modelOpen





export default ReduxSlice.reducer