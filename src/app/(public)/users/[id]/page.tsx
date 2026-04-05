import allEndpoint from "@/services/api.services";
import { Metadata } from "next";
import { FC } from "react";

type UserPageProps ={
    params: {id: string},
}

export const generateMetadata = async ({params}: UserPageProps): Promise<Metadata> => {
    const {id} = await params;
    const user = await allEndpoint.users.getById(id);;
    return {
        title: `${user.name}`,
    };
};

const UserIdPage:FC<UserPageProps> = async ({params}) => {
    const {id} = await params;
    const user = await allEndpoint.users.getById(id);
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserIdPage;