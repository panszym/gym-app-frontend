import { useContext } from "react";
import { AuthContext } from "../authContext/AuthContext"

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('There is no context');
    }


    return context;
}