import { useContext } from "react";
import { RouterContext } from "./RouterContext";

export const useRouter = () => {
    const context = useContext(RouterContext);
    // console.log(context);
    
    if (context === null) {
        throw new Error("cannot use context outside provider");
    }

    return context;
};