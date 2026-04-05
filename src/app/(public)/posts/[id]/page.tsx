import allEndpoint from "@/services/api.services";
import { Metadata } from "next";
import { FC } from "react";

type PostPropsType = {
    params: {id:string},
}

export const generateMetadata = async ({params}: PostPropsType): Promise<Metadata> => {
    const {id} = await params;
    const post = await allEndpoint.posts.getById(id);
    return {
        title: `${id} - ${post.title}`,
    };
};

const PostIdPage:FC<PostPropsType> = async ({params}) => {
    const {id} = await params;
    const post = await allEndpoint.posts.getById(id);
    return(
        <div>
            <h6>User ID: {post.userId}</h6>
            <p>Title: {post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostIdPage;