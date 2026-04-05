import allEndpoint from "@/services/api.services";
import { Metadata } from "next";
import { FC } from "react";

type UserPropsType ={
    params: {id: string},
}

export const generateMetadata = async ({params}: UserPropsType): Promise<Metadata> => {
    const {id} = await params;
    const user = await allEndpoint.users.getById(id);;
    return {
        title: `${user.name}`,
    };
};

const UserIdPage:FC<UserPropsType> = async ({params}) => {
    const {id} = await params;
    const user = await allEndpoint.users.getById(id);
    return (
        <div>
            <h3>User: {user.name}</h3>
            <p>Name: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserIdPage;