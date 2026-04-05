import { IUserModel } from "@/models/IUserModel";
import Link from "next/link";
import { FC } from "react";

type UserPropsType = {
    user: IUserModel;
}
export const UserComponent:FC<UserPropsType> = ({user:{id, name}}) => {
    return (
        <div>
            <Link href={`/users/${id}`}>№ {id} - {name}</Link>
        </div>
    );
};