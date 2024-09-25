import { createSlice } from "@reduxjs/toolkit";
import birdImages from "../birdImages";
const STATUS=Object.freeze({
    idle:"IDLE",
    loading:"LOADING",
    failed:"FAILED",
    success:"SUCCESS"
})

const appSlice = createSlice({
    name: "app",
    initialState: JSON.parse(localStorage.getItem("birds")) || {
        data: [],
        theme: "light",
        status:STATUS.idle
    },
    reducers: {
        addBirds(state, action) {
            state.data=action.payload
            let temp=state.data.map(object=>{
                return {...object,imageUrl:birdImages[object.name]}
            })
            state.data=temp;
            localStorage.setItem("birds",JSON.stringify(state))
        },
        changeTheme(state, action) {
            state.theme = action.payload;
            localStorage.setItem("birds",JSON.stringify(state))
        },
        changeStatus(state,action)
        {
            state.status=action.payload
        }

    }

})

export const { addBirds,changeTheme,changeStatus } = appSlice.actions;

export default appSlice.reducer;


export function callBirds(){
    return async function getBirds(dispatch,state)
    {
        dispatch(changeStatus(STATUS.loading))
        try{
            let resp=await fetch("https://freetestapi.com/api/v1/birds?limit=11")
            let result = await resp.json();
            // console.log(result)
            dispatch(addBirds(result))
            dispatch(changeStatus(STATUS.success))
        }
        catch(e)
        {
            console.log(e)
            dispatch(changeStatus(STATUS.failed))
        }
    }
}