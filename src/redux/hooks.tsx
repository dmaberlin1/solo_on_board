import {AppDispatch, RootState} from "@/redux/store/store.tsx";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;