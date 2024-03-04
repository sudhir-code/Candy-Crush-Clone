// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "./Index";




// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

import { AppDispatch, RootState } from "./Index";
import { TypedUseSelectorHook, UseSelector, useDispatch, useSelector } from "react-redux";


export const useAppDispatch:()=>AppDispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
