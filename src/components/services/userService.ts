import {IUser} from "../interfaces/userInterfaces";
import {axiosService, IRes} from "./axsiosService";
import {urls} from "../constants/urls";

const userService = {

    getAll: (): IRes<IUser[]> => axiosService.get(urls.users.base),
    getById: (id: number): IRes<IUser> => axiosService.get(urls.users.byId(id))

}

export {
    userService
}