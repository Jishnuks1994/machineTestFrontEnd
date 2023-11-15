import BASE_URL from "./baseUrl"
import { commonStructure } from "./commonStructure"

//get employee
export const getDataApi =async()=>{
    return await commonStructure('GET',`${BASE_URL}//get-all-data`,{})
}