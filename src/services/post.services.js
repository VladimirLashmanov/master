import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postServices ={
    getPostByUserId:(userId) =>axiosService.get(`${urls.posts}?user.id=${userId}`)
}

export {postServices}