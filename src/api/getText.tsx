import axios from "axios";
import {BACON_BASED_URL} from "@/constants/constants.tsx";

async function getText(sentences:string) {
    const response=await axios.get<string>(BACON_BASED_URL,{
        params:{
            type:'all-meat',
            sentences,
            format:'text'
        }
    });

    return response
}

export default getText;