import { Metadata } from "next";
import { FC } from "react";

type UserPageProps ={
    params: {id: string},
}

export const generateMetadata = async ({params}: UserPageProps): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: "User page title" + id,
    };
};

const UserIdPage:FC<UserPageProps> = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            {id}
        </div>
    );
};

export default UserIdPage;