import {useAppSelector} from "@/redux/hooks.tsx";

export function useAuth() {

    const {email,
        token,
        id,displayName}=useAppSelector(state => state.user);

    return {
        isAuth:!!email,
        email,
        token,
        id,
        displayName,
    };

}