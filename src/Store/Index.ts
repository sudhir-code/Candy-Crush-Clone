// import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
// import { moveBelowReducer } from "./Reducer/moveBelow";
// import { dragEndReducer } from "./Reducer/dragEnd";



// const initialState:{
//     board:string[],
//     boardSize : number,
//     squareBeingReplaced: Element | undefined,`
// squareBeingDragged : Element | undefined
// } = ({
//     board:[],
//     boardSize:8,
//     squareBeingReplaced: undefined,
// squareBeingDragged : undefined
// })

// const RootSlice = createSlice({
//     name:"candyCrush",
//     initialState,
//     reducers:{
//         updateBoard:(state,action:PayloadAction<string[]>)=>{
//     state.board = action.payload;
//         },
//         dragStart:(state , action:PayloadAction<any>)=>{
// state.squareBeingDragged = action.payload;
//         },
//         dragDrop:(state , action:PayloadAction<any>)=>{
//             state.squareBeingReplaced = action.payload;
//         },
//         dragEnd: dragEndReducer,
//         moveBelow:moveBelowReducer,
//     }
// })


// export const store = configureStore({
//     reducer:{candyCrush:RootSlice.reducer},
//     middleware : (getDefaultMiddleware) => 
//     getDefaultMiddleware({
//         serializableCheck:false
//     })
// })
// export const {updateBoard, moveBelow,dragDrop,dragStart,dragEnd} = RootSlice.actions
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { PayloadAction, ReducerType, createSlice } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { moveBelowReducer } from "./Reducer/moveBelow"
import { dragEndReducer } from "./Reducer/dragEnd"

const initialState :{
    board:string[],
    boardSize:number,
    squareBeingDragged:Element|undefined,
    squareBeingReplaced:Element | undefined

} = {
    board:[],
    boardSize:8,
    squareBeingDragged:undefined,
    squareBeingReplaced:undefined
}

const RootSlice = createSlice({
    name : "candyCrushe",
    initialState,
    reducers:{
        updateBoard:(state, action:PayloadAction<string[]>)=>{
   state.board = action.payload;
        },
        dragStart:(state , action : PayloadAction<any>)=>{
            state.squareBeingDragged = action.payload;
        },
        dragDrop:(state , action : PayloadAction<any>)=>{
            state.squareBeingReplaced = action.payload;
        },
        dragEnd:dragEndReducer,
        moveBelow:moveBelowReducer

    }

})




export const store = configureStore({reducer:{candyCrushe:RootSlice.reducer},

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck:false
        })
})

export const {updateBoard,moveBelow,dragDrop,dragStart,dragEnd} = RootSlice.actions

export type RootState =ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
