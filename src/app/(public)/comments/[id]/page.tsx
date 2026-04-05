import allEndpoint from "@/services/api.services";
import { Metadata } from "next";
import { FC } from "react";

type CommentPropsType = {
    params: {id:string},
};

export const generateMetadata = async ({params}: CommentPropsType): Promise<Metadata> => {
    const {id} = await params;
    const comment = await allEndpoint.comments.getById(id);
    return {
        title: `${id} - ${comment.name}`,
    };
};
const CommentIdPage:FC<CommentPropsType> = async ({params}) => {
    const {id} = await params;
    const comment = await allEndpoint.comments.getById(id);
    return (
        <div>
            <h6>title: {comment.id} - {comment.email}</h6>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentIdPage;