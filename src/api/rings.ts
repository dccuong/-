import { Tmusics } from "../type/musics";
import { axiosServer } from "./config";
 export const getRings=():Promise<Tmusics[]>=>{
    return axiosServer.get("rings")
 }