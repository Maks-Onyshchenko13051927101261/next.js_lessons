import { IUserModel } from "@/models/IUserModel";
import { FC } from "react";

type UserPropsType = {
    user: IUserModel;
}
export const UserComponent:FC<UserPropsType> = ({user:{id, name}}) => {
    return (
        <div>№ {id} - {name}</div>
    );
};