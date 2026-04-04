import { IUserModel } from "@/models/IUserModel";
import { FC } from "react";

type UserPropsType = {
    user: IUserModel;
}
export const UserComponent:FC<UserPropsType> = ({user:{id, username}}) => {
    return (
        <div>№id:{id} - {username}</div>
    );
};